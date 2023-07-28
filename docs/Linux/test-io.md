---
title: '在 Linux 上测试硬盘IO读写速度'
sidebar_label: '在 Linux 上测试硬盘IO读写速度'
---
# 在 Linux 上测试硬盘IO读写速度

状态 Status: 想法 Idea
发布日期 Publication Date: 2023/07/28
频道 Channel: Ga0x Blog
媒体平台 Media Platform: www.ga0x.com

在 Linux 下测试硬盘读写速度的命令和方法。

1. 通过 dd 命令
2. 通过安装FIO来测试

# dd

请务必注意，当使用 dd 测试写入速度时，确保 `of` 后面的文件路径指向一个不存在的文件，以免造成数据丢失！

```
sync; dd if=/dev/zero of=/tmp/tempfile bs=1M count=1024; sync
1024+0 records in
1024+0 records out
1073741824 bytes (1.1 GB, 1.0 GiB) copied, 2.55331 s, 421 MB/s

```

同样的原理适用于测试外部存储设备。在进行测试之前，您需要确定该设备的挂载点，并使用 dd 命令进行测试：

```
sync; dd if=/dev/zero of=/media/user/MyUSB/tempfile bs=1M count=1024; sync

```

使用 dd 命令测试读取速度时，请注意在 `if` 后面指定一个由先前命令生成的文件路径：

```
dd if=/tmp/tempfile of=/dev/null bs=1M count=1024
1024+0 records in
1024+0 records out
1073741824 bytes (1.1 GB, 1.0 GiB) copied, 0.271083 s, 4.0 GB/s

```

要清除缓存并准确测试真实的读取速度，可以使用以下命令组合：

```
sudo /sbin/sysctl -w vm.drop_caches=3
dd if=/tmp/tempfile of=/dev/null bs=1M count=1024
```

请将 `/tmp/tempfile` 替换为您要测试的外部存储设备的正确路径。上述命令将清除缓存并使用 `dd` 命令从设备中读取 1000MB 的数据，并将读取速度显示出来。这样可以确保您得到的是真实的读取速度，而不是受缓存影响的结果。

# FIO

fio是多线程IO负载生成测试工具，是测试服务器硬盘性能的优秀工具。

## 1. 安装

```bash
wget https://github.com/axboe/fio/archive/refs/tags/fio-3.35.tar.gz
yum install libaio-devel
tar -zxvf fio-3.35.tar.gz
cd fio-fio-3.35
make
make install
```

## 2.用法

### 2.1 随机读

向磁盘写一个2G文件，10线程，随机读1分钟，给出结果

```bash
fio -filename=/tmp/test_randread -direct=1 -iodepth 1 -thread -rw=randread -ioengine=psync -bs=16k -size=2G -numjobs=10 -runtime=60 -group_reporting -name=mytest
```

**参数说明**

```bash
filename=/dev/sdb1              测试文件名称，通常选择需要测试的盘的data目录。
direct=1                        测试过程绕过机器自带的buffer。使测试结果更真实。
rw=randwrite                    测试随机写的I/O
rw=randrw                       测试随机写和读的I/O
bs=16k                          单次io的块文件大小为16k
bsrange=512-2048                同上，提定数据块的大小范围
size=5g                         本次的测试文件大小为5g，以每次4k的io进行测试。
numjobs=30                      本次的测试线程为30.
runtime=1000                    测试时间为1000秒，如果不写则一直将5g文件分4k每次写完为止。
ioengine=psync                  io引擎使用pync方式
rwmixwrite=30                   在混合读写的模式下，写占30%
group_reporting                 关于显示结果的，汇总每个进程的信息。
```

其他参数

```bash
lockmem=1g                       只使用1g内存进行测试。
zero_buffers                     用0初始化系统buffer。
nrfiles=8                        每个进程生成文件的数量。
rw=read/write/readwrite          顺序读/顺序写/顺序混合读写
rw=randread/randwrite/wandrw     随机读/随机写/随机混合读写
```

### 2.2 **顺序读**

```bash
fio -filename=/dev/sdb1 -direct=1 -iodepth 1 -thread -rw=read -ioengine=psync -bs=16k -size=2G -numjobs=10 -runtime=60 -group_reporting -name=mytest
```

### 2.3 **顺序写**

```bash
fio -filename=/dev/sdb1 -direct=1 -iodepth 1 -thread -rw=write -ioengine=psync -bs=16k -size=2G -numjobs=10 -runtime=60 -group_reporting -name=mytest
```

### 2.3 **随机写**

```bash
fio -filename=/dev/sdb1 -direct=1 -iodepth 1 -thread -rw=randwrite -ioengine=psync -bs=16k -size=2G -numjobs=10 -runtime=60 -group_reporting -name=mytest
```

### 2.3 **随机混合读写**

```bash
fio -filename=/dev/sdb1 -direct=1 -iodepth 1 -thread -rw=randrw -rwmixread=70 -ioengine=psync -bs=16k -size=2G -numjobs=10 -runtime=60 -group_reporting -name=mytest -ioscheduler=noop
```

## 3.结果展示

```bash
mytest: (g=0): rw=randread, bs=(R) 16.0KiB-16.0KiB, (W) 16.0KiB-16.0KiB, (T) 16.0KiB-16.0KiB, ioengine=psync, iodepth=1
...
fio-3.35
Starting 10 threads
mytest: Laying out IO file (1 file / 2048MiB)

Jobs: 10 (f=10): [r(10)][100.0%][r=111MiB/s][r=7113 IOPS][eta 00m:00s]
mytest: (groupid=0, jobs=10): err= 0: pid=26354: Fri Jul 28 16:37:29 2023
  read: IOPS=7109, BW=111MiB/s (116MB/s)(6665MiB/60002msec)
    clat (usec): min=415, max=4161, avg=1401.36, stdev=88.73
     lat (usec): min=416, max=4162, avg=1401.88, stdev=88.74
    clat percentiles (usec):
     |  1.00th=[ 1237],  5.00th=[ 1254], 10.00th=[ 1270], 20.00th=[ 1287],
     | 30.00th=[ 1319], 40.00th=[ 1434], 50.00th=[ 1450], 60.00th=[ 1450],
     | 70.00th=[ 1467], 80.00th=[ 1467], 90.00th=[ 1483], 95.00th=[ 1483],
     | 99.00th=[ 1516], 99.50th=[ 1516], 99.90th=[ 1729], 99.95th=[ 2040],
     | 99.99th=[ 2769]
   bw (  KiB/s): min=112416, max=115872, per=100.00%, avg=113805.71, stdev=70.52, samples=1190
   iops        : min= 7026, max= 7242, avg=7112.86, stdev= 4.41, samples=1190
  lat (usec)   : 500=0.01%, 750=0.01%, 1000=0.01%
  lat (msec)   : 2=99.94%, 4=0.05%, 10=0.01%
  cpu          : usr=0.69%, sys=2.75%, ctx=426771, majf=0, minf=322
  IO depths    : 1=100.0%, 2=0.0%, 4=0.0%, 8=0.0%, 16=0.0%, 32=0.0%, >=64=0.0%
     submit    : 0=0.0%, 4=100.0%, 8=0.0%, 16=0.0%, 32=0.0%, 64=0.0%, >=64=0.0%
     complete  : 0=0.0%, 4=100.0%, 8=0.0%, 16=0.0%, 32=0.0%, 64=0.0%, >=64=0.0%
     issued rwts: total=426582,0,0,0 short=0,0,0,0 dropped=0,0,0,0
     latency   : target=0, window=0, percentile=100.00%, depth=1

Run status group 0 (all jobs):
   READ: bw=111MiB/s (116MB/s), 111MiB/s-111MiB/s (116MB/s-116MB/s), io=6665MiB (6989MB), run=60002-60002msec
```

```
bw：带宽
iops：每秒钟的IO数
runt：总运行时间
lat (msec)：延迟(毫秒)
msec： 毫秒
usec： 微秒
```
