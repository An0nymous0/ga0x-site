---
title: "记一次将一个2s左右接口响应优化到60ms经历"
date: "2020-09-11"
draft: false
author: Xu Gao
tags:
  - RESTful API
  - API
---


偶然发现有一个批量提交数据的接口很慢，大概2000ms左右，但是里面方法很复杂，包括查mongo、mysql、请求http、组装数据最终落地到mysql，所以无法粗略判断问题到底出现在哪里。<br />
<br />环境是 Spring Boot + K8S + Istio，下面直接进入正题。<br />

1. 进入容器系统
```bash
k exec -it -n prod api-v1-67b94898f5-lxnvz bash
#或
k exec -it api-v1-67b94898f5-lxnvz --container api -- /bin/bash -c "apt install wget && wget https://arthas.gitee.io/arthas-boot.jar && java -jar arthas-boot.jar --repo-mirror aliyun --use-http"
```

2. 输入我们要诊断的线程序号然后回车
2. 因为参数复杂所以我们先抓到请求参数
```bash
watch com.ga0x.controller.DyRobotSyncController primeFactors "{params,returnObj}" -x 2 -b
```
上面命令只能看到String Integer 等类型具体的值，如果我们是对象VO接参并且没有toString()的话我们会发现显示的是com.ga0x.DyRobotSyncController@62d778cb，所以我们需要用target关键字。具体请参考官方文档[观察当前对象中的属性](https://arthas.aliyun.com/doc/watch.html#id9)。

4. 拿到了具体参数我们来用postman请求开始跟踪方法
```bash
[arthas@1]$ trace com.ga0x.DyRobotSyncController saveVideo
Press Q or Ctrl+C to abort.
Affect(class count: 2 , method count: 2) cost in 81 ms, listenerId: 15
`---ts=2020-09-08 19:26:05;thread_name=XNIO-1 task-8;id=4a;is_daemon=false;priority=5;TCCL=org.springframework.boot.devtools.restart.classloader.RestartClassLoader@d7d3cd18
    `---[2738.92252ms] com.ga0x.controller.DyRobotSyncController:saveVideo()
        +---[0.01899ms] com.google.common.base.Stopwatch:createStarted() #37
        +---[2.131805ms] com.alibaba.fastjson.JSONArray:parseArray() #38
        +---[min=134.090829ms,max=144.723743ms,total=2735.952812ms,count=20] com.ga0x.DyVideoMetaService:sync() #40
        +---[0.020454ms] com.google.common.base.Stopwatch:elapsed() #42
        +---[0.266937ms] org.slf4j.Logger:info() #43
        +---[0.01502ms] org.springframework.http.ResponseEntity:ok() #44
        `---[0.017111ms] org.springframework.http.ResponseEntity$BodyBuilder:build() #44
```
发现方法中com.ga0x.DyVideoMetaService:sync方法外层是个for循环<br />count=20 代表for循环20次<br />min=134.090829ms 最快134ms<br />max=144.723743ms 最慢144ms<br />total=2735.952812ms 总共花了2735ms<br />
<br />现在找到了最影响效率的方法，我们继续跟踪找到最长耗时的几个方法对症下药
```bash
[arthas@1]$ trace com.ga0x.svda.service.DyVideoMetaService sync
Press Q or Ctrl+C to abort.
Affect(class count: 2 , method count: 2) cost in 257 ms, listenerId: 2
`---ts=2020-09-09 10:10:56;thread_name=XNIO-1 task-3;id=45;is_daemon=false;priority=5;TCCL=org.springframework.boot.devtools.restart.classloader.RestartClassLoader@ee223dfc
    `---[149.244483ms] com.ga0x.service.DyVideoMetaService:sync()
        +---[0.108521ms] com.ga0x.domain.mongo.DyVideoMeta:getAid() #22
        +---[10.798424ms] com.ga0x.repository.mongo.DyVideoMetaRepository:findByAid() #22
        +---[0.080369ms] com.ga0x.domain.mongo.DyVideoMeta:getId() #24
        +---[0.088349ms] com.ga0x.domain.mongo.DyVideoMeta:setId() #24
        +---[1.310287ms] com.ga0x.repository.mongo.DyVideoMetaRepository:save() #26
        `---[135.826947ms] com.ga0x.service.DyVideoService:syncFromMeta() #27
---ts=2020-09-09 10:10:56;thread_name=XNIO-1 task-3;id=45;is_daemon=false;priority=5;TCCL=org.springframework.boot.devtools.restart.classloader.RestartClassLoader@ee223dfc
    `---[148.859657ms] com.ga0x.service.DyVideoMetaService:sync()
        +---[0.067583ms] com.ga0x.domain.mongo.DyVideoMeta:getAid() #22
        +---[1.130285ms] com.ga0x.repository.mongo.DyVideoMetaRepository:findByAid() #22
        +---[0.069417ms] com.ga0x.domain.mongo.DyVideoMeta:getId() #24
        +---[0.089204ms] com.ga0x.domain.mongo.DyVideoMeta:setId() #24
        +---[1.050545ms] com.ga0x.repository.mongo.DyVideoMetaRepository:save() #26
        `---[145.87066ms] com.ga0x.service.DyVideoService:syncFromMeta() #27
---ts=2020-09-09 10:10:57;thread_name=XNIO-1 task-3;id=45;is_daemon=false;priority=5;TCCL=org.springframework.boot.devtools.restart.classloader.RestartClassLoader@ee223dfc
    `---[136.959651ms] com.ga0x.service.DyVideoMetaService:sync()
        +---[0.059296ms] com.ga0x.domain.mongo.DyVideoMeta:getAid() #22
        +---[1.288459ms] com.ga0x.repository.mongo.DyVideoMetaRepository:findByAid() #22
        +---[0.074989ms] com.ga0x.domain.mongo.DyVideoMeta:getId() #24
        +---[0.081789ms] com.ga0x.domain.mongo.DyVideoMeta:setId() #24
        +---[1.148061ms] com.ga0x.repository.mongo.DyVideoMetaRepository:save() #26
        `---[133.624223ms] com.ga0x.service.DyVideoService:syncFromMeta() #27
```
继续向下跟踪耗时最长的方法syncFromMeta
```bash
[arthas@1]$ trace com.ga0x.service.DyVideoService syncFromMeta
Press Q or Ctrl+C to abort.
Affect(class count: 2 , method count: 2) cost in 1066 ms, listenerId: 3
`---ts=2020-09-09 10:12:14;thread_name=XNIO-1 task-3;id=45;is_daemon=false;priority=5;TCCL=org.springframework.boot.devtools.restart.classloader.RestartClassLoader@ee223dfc
    `---[149.707451ms] com.ga0x.service.DyVideoService:syncFromMeta()
        +---[0.096599ms] com.ga0x.domain.mongo.DyVideoMeta:getAid() #148
        +---[63.93432ms] com.ga0x.repository.jpa.DyVideoRepository:findByAid() #148
        +---[0.085005ms] com.ga0x.domain.mongo.DyVideoMeta:getUid() #155
        +---[2.638612ms] com.ga0x.service.DyAuthorService:findByUid() #155
        +---[0.077897ms] com.ga0x.domain.mongo.DyVideoMeta:getAid() #158
        +---[0.073582ms] com.ga0x.domain.jpa.DyVideo:setAid() #158
        +---[0.069294ms] com.ga0x.domain.jpa.DyAuthor:getId() #159
        +---[0.088153ms] com.ga0x.domain.jpa.DyVideo:setAuthorId() #159
        +---[0.093844ms] com.ga0x.domain.mongo.DyVideoMeta:getDesc() #160
        +---[0.078564ms] com.ga0x.domain.jpa.DyVideo:setTitle() #160
        +---[0.076424ms] com.ga0x.domain.mongo.DyVideoMeta:getVideo() #161
        +---[0.075324ms] com.ga0x.domain.mongo.DyVideoMeta$Video:getCover() #161
        +---[0.070383ms] com.ga0x.domain.mongo.DyVideoMeta$Video$Cover:getUrlList() #161
        +---[0.079969ms] com.ga0x.domain.jpa.DyVideo:setCover() #161
        +---[0.100999ms] com.ga0x.domain.mongo.DyVideoMeta:getCreateTime() #162
        +---[0.079911ms] com.ga0x.domain.jpa.DyVideo:setCreateTime() #162
        +---[0.082968ms] com.ga0x.domain.mongo.DyVideoMeta:getStatistics() #163
        +---[0.08389ms] com.ga0x.domain.mongo.DyVideoMeta$Statistics:getCommentCount() #163
        +---[0.071026ms] com.ga0x.domain.jpa.DyVideo:setCommentCount() #163
        +---[0.07067ms] com.ga0x.domain.mongo.DyVideoMeta:getStatistics() #164
        +---[0.081868ms] com.ga0x.domain.mongo.DyVideoMeta$Statistics:getDiggCount() #164
        +---[0.079522ms] com.ga0x.domain.jpa.DyVideo:setDiggCount() #164
        +---[0.07082ms] com.ga0x.domain.mongo.DyVideoMeta:getStatistics() #165
        +---[0.068601ms] com.ga0x.domain.mongo.DyVideoMeta$Statistics:getDownloadCount() #165
        +---[0.067476ms] com.ga0x.domain.jpa.DyVideo:setDownloadCount() #165
        +---[0.066286ms] com.ga0x.domain.mongo.DyVideoMeta:getStatistics() #166
        +---[0.084976ms] com.ga0x.domain.mongo.DyVideoMeta$Statistics:getPlayCount() #166
        +---[0.078427ms] com.ga0x.domain.jpa.DyVideo:setPlayCount() #166
        +---[0.082222ms] com.ga0x.domain.mongo.DyVideoMeta:getStatistics() #167
        +---[0.072256ms] com.ga0x.domain.mongo.DyVideoMeta$Statistics:getShareCount() #167
        +---[0.069975ms] com.ga0x.domain.jpa.DyVideo:setShareCount() #167
        +---[0.067042ms] com.ga0x.domain.mongo.DyVideoMeta:getStatistics() #168
        +---[0.075795ms] com.ga0x.domain.mongo.DyVideoMeta$Statistics:getForwardCount() #168
        +---[0.082958ms] com.ga0x.domain.jpa.DyVideo:setForwardCount() #168
        +---[0.070761ms] com.ga0x.domain.mongo.DyVideoMeta:getVideo() #169
        +---[0.072187ms] com.ga0x.domain.mongo.DyVideoMeta$Video:getPlayAddr() #169
        +---[0.074855ms] com.ga0x.domain.mongo.DyVideoMeta$Video$PlayAddr:getDuration() #169
        +---[0.082275ms] com.ga0x.domain.jpa.DyVideo:setDuration() #169
        +---[0.080982ms] com.ga0x.domain.mongo.DyVideoMeta:getShareInfo() #170
        +---[0.073018ms] com.ga0x.domain.mongo.DyVideoMeta$ShareInfo:getShareUrl() #170
        +---[0.076181ms] com.ga0x.domain.jpa.DyVideo:setShareUrl() #170
        +---[1.58027ms] com.ga0x.repository.jpa.DyVideoRepository:save() #171
        `---[73.520621ms] com.ga0x.service.DyVideoStatsService:syncFromMeta() #172
```
跟到这里其实已经发现问题是一个for循环20次操作,每次调用com.ga0x.repository.jpa.DyVideoRepository:findByAid() 这个方法大概耗时60ms左右，加上 com.ga0x.service.DyVideoStatsService:syncFromMeta()方法耗时73m， 其实耗时也算正常只不过因为20次for循环影响了我们的接口响应时间，那么我们继续跟踪com.ga0x.service.DyVideoStatsService:syncFromMeta()方法看看里面剩下比较耗时的方法是什么。
```bash
[arthas@1]$ trace com.ga0x.service.DyVideoStatsService syncFromMeta
Press Q or Ctrl+C to abort.
Affect(class count: 1 , method count: 1) cost in 417 ms, listenerId: 5
`---ts=2020-09-09 10:14:28;thread_name=XNIO-1 task-3;id=45;is_daemon=false;priority=5;TCCL=org.springframework.boot.devtools.restart.classloader.RestartClassLoader@ee223dfc
    `---[68.789853ms] com.ga0x.service.DyVideoStatsService:syncFromMeta()
        +---[0.059199ms] com.ga0x.domain.mongo.DyVideoMeta:getAid() #32
        +---[62.415176ms] com.ga0x.service.DyVideoService:findByAid() #32
        +---[0.034704ms] com.ga0x.domain.jpa.DyVideo:getId() #35
        +---[1.326467ms] com.ga0x.repository.jpa.DyVideoStatsRepository:findFirstByVideoIdOrderByDateTimeDesc() #35
        +---[0.029946ms] com.ga0x.domain.jpa.DyVideoStats:<init>() #36
        +---[0.025371ms] com.ga0x.domain.jpa.DyVideo:getId() #37
        +---[0.025529ms] com.ga0x.domain.jpa.DyVideoStats:setVideoId() #37
        +---[0.02247ms] com.ga0x.domain.mongo.DyVideoMeta:getStatistics() #40
        +---[0.022062ms] com.ga0x.domain.mongo.DyVideoMeta$Statistics:getCommentCount() #40
        +---[0.020708ms] com.ga0x.domain.jpa.DyVideoStats:getCommentCount() #40
        +---[0.019248ms] com.ga0x.domain.jpa.DyVideoStats:getCommentCount() #43
        +---[0.018945ms] com.ga0x.domain.jpa.DyVideoStats:setCommentCount() #43
        +---[0.047387ms] com.ga0x.domain.mongo.DyVideoMeta:getStatistics() #46
        +---[0.021567ms] com.ga0x.domain.mongo.DyVideoMeta$Statistics:getDiggCount() #46
        +---[0.019301ms] com.ga0x.domain.jpa.DyVideoStats:getDiggCount() #46
        +---[0.018199ms] com.ga0x.domain.jpa.DyVideoStats:getDiggCount() #49
        +---[0.019155ms] com.ga0x.domain.jpa.DyVideoStats:setDiggCount() #49
        +---[0.018795ms] com.ga0x.domain.mongo.DyVideoMeta:getStatistics() #52
        +---[0.018933ms] com.ga0x.domain.mongo.DyVideoMeta$Statistics:getDownloadCount() #52
        +---[0.023908ms] com.ga0x.domain.jpa.DyVideoStats:getDownloadCount() #52
        +---[0.024494ms] com.ga0x.domain.jpa.DyVideoStats:getDownloadCount() #55
        +---[0.02742ms] com.ga0x.domain.jpa.DyVideoStats:setDownloadCount() #55
        +---[0.051207ms] com.ga0x.domain.mongo.DyVideoMeta:getStatistics() #58
        +---[0.046232ms] com.ga0x.domain.mongo.DyVideoMeta$Statistics:getPlayCount() #58
        +---[0.027908ms] com.ga0x.domain.jpa.DyVideoStats:getPlayCount() #58
        +---[0.026728ms] com.ga0x.domain.jpa.DyVideoStats:getPlayCount() #61
        +---[0.028185ms] com.ga0x.domain.jpa.DyVideoStats:setPlayCount() #61
        +---[0.021202ms] com.ga0x.domain.mongo.DyVideoMeta:getStatistics() #64
        +---[0.020205ms] com.ga0x.domain.mongo.DyVideoMeta$Statistics:getShareCount() #64
        +---[0.019081ms] com.ga0x.domain.jpa.DyVideoStats:getShareCount() #64
        +---[0.017927ms] com.ga0x.domain.jpa.DyVideoStats:getShareCount() #67
        +---[0.056214ms] com.ga0x.domain.jpa.DyVideoStats:setShareCount() #67
        `---[3.187209ms] com.ga0x.repository.jpa.DyVideoStatsRepository:save() #98
```
最终发现是com.ga0x.service.DyVideoService:findByAid()方法，也就是说两次数据库查询耗掉了120ms * 20 ~= 2400ms  也就是我们的接口响应时间。

看下sql 就是一个查询+一个条件查询总表也就8W数据，其实也并不算慢。 因为for循环无法优化掉那么我们试试加索引、多线程来优化。

1. 加索引
```sql
explain select * from dy_video where aid='xxxxxxxxxxxxxxxx'
```
其实不用explain也可以看出来aid没有索引，肯定是扫全表8W数据。explain一般用于分析复杂语句。<br />加上索引我们看看效率 （如何加索引不锁表）
```sql
ALTER TABLE `svda`.`dy_video` 
ADD INDEX `idx_aid`(`aid`) USING BTREE;
```
```bash
[arthas@1]$ trace com.ga0x.service.DyVideoStatsService syncFromMeta
Press Q or Ctrl+C to abort.
Affect(class count: 1 , method count: 1) cost in 289 ms, listenerId: 8
`---ts=2020-09-09 10:48:10;thread_name=XNIO-1 task-13;id=1dc;is_daemon=false;priority=5;TCCL=org.springframework.boot.devtools.restart.classloader.RestartClassLoader@ee223dfc
    `---[6.385944ms] com.ga0x.service.DyVideoStatsService:syncFromMeta()
        +---[0.003175ms] com.ga0x.domain.mongo.DyVideoMeta:getAid() #32
        +---[1.187011ms] com.ga0x.service.DyVideoService:findByAid() #32
```
60毫秒变1毫秒了因为还有其他业务逻辑看了下接口响应时间从2000ms变成了200ms左右。

2. 虽然现在加完索引接口响应速度已经达到可以接受的响应时间，但是接口调用在系统里比较频繁所以我们继续往极致优化，改成多线程 

直接用guava的ListeningExecutorService声明10个线程池<br />最终postman访问大概在60ms左右吧
