---
title: '订阅转换服务 subconverter 后端搭建，支持 Clash、ss、Quantumult 等等等'
authors: gaoxu
tags: [subconverter, Clash, Shadowrocket]
---

一般搭建在跟代理一个机器上 机器配置也不高所以直接本机搭建 不用 docker 之类的了

## 下载 subconverter 后端程序
以 linux 64 位 cpu 为例

```shell
wget https://github.com/tindy2013/subconverter/releases/download/v0.7.2/subconverter_linux64.tar.gz
tar zxvf subconverter_linux64.tar.gz
```

如果需要其他系统版本这里找 [tindy2013/subconverter](https://github.com/tindy2013/subconverter/releases)

## 注册 subconverter 为 linux 系统服务

### 1. 编辑 subconverter.service
```shell
vi /etc/systemd/system/subconverter.service
```

### 2. subconverter.service 内容
```text title="/etc/systemd/system/subconverter.service"
[Unit]
Description=A API For Subscription Convert
After=network.target

[Service]
Type=simple
// highlight-start
ExecStart=/root/subconverter/subconverter
WorkingDirectory=/root/subconverter
// highlight-end
Restart=always
RestartSec=10

[Install]
WantedBy=multi-user.target
```
注意修改 **ExecStart** 和 **WorkingDirectory ** 路径

### 3. 设置跟随系统启动
```shell
systemctl enable subconverter
systemctl start subconverter
```

### 4. 查看日志
```shell
journalctl -fu subconverter
```

## 在线生成转换地址

前端我们也可以搭建，但是没必要，下面分享一些三方的前端，当然你如果不在意隐私前后端都可以用别人的。

- [789.st](https://sub.789.st/)
- [acl4ssr](https://acl4ssr-sub.github.io/)
- [v1.mk](https://sub.v1.mk/)
- [subcloud.xyz](https://my.subcloud.xyz/)

页面后端地址填写我们的地址就可以 https://你的主机ip:25500/sub?
