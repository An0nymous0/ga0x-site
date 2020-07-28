---
title: "CentOS 7 下 yum 安装和配置 NFS"
date: "2020-07-28"
draft: false
author: Xu Gao
tags:
  - NFS
  - CentOS
---

## 前言

**NFS 是 Network File System 的缩写，即网络文件系统。功能是让客户端通过网络访问不同主机上磁盘里的数据，主要用在类Unix系统上实现文件共享的一种方法。 本例演示 CentOS 7 下安装和配置 NFS 的基本步骤。**



## 服务端

### 安装

```shell
$ sudo yum install nfs-utils
```

### 配置开机启动和启动服务

设置 NFS 开机启动

```shell
$ sudo systemctl enable rpcbind
$ sudo systemctl enable nfs
```

启动 NFS 服务

```shell
$ sudo systemctl start rpcbind
$ sudo systemctl start nfs
```

### 配置共享目录

```shell
$ sudo mkdir /data
$ sudo chmod 755 /data
```

配置配件

```shell
$ sudo vi /etc/exports
```

添加如下配置

```shell
/data/     192.168.0.0/24(rw,sync,no_root_squash,no_all_squash)
```

1. `/data`: 共享目录位置。
2. `192.168.0.0/24`: 客户端 IP 范围，`*` 代表所有，即没有限制。
3. `rw`: 权限设置，可读可写。
4. `sync`: 同步共享目录。
5. `no_root_squash`: 可以使用 root 授权。
6. `no_all_squash`: 可以使用普通用户授权。

重启 NFS 服务

```shell
$ sudo systemctl restart nfs
```

检查配置的共享目录是否正确

```shell
$ showmount -e localhost
Export list for localhost:
/data 192.168.0.0/24
```

服务端配置完毕，接下来配置客户端。



## 客户端

### 安装 NFS

```shell
$ sudo yum install nfs-utils
```

#### 配置

设置 rpcbind 开机启动

```shell
$ sudo systemctl enable rpcbind
```

启动服务

```shell
sudo systemctl start rpcbind
```

#### 客户端连接NFS

查看服务端的共享目录

```shell
$ showmount -e 192.168.0.110
Export list for 192.168.0.110:
/data 192.168.0.0/24
```

在客户端创建目录

```shell
$ sudo mkdir /data
```

挂载远程目录

```shell
$ sudo mount -t nfs 192.168.0.101:/data /data
```

`mount`命令查看一下挂载情况

```shell
$ mount
...
...
192.168.0.110:/data on /data type nfs4 (rw,relatime,sync,vers=4.1,rsize=131072,wsize=131072,namlen=255,hard,proto=tcp,port=0,timeo=600,retrans=2,sec=sys,clientaddr=192.168.0.100,local_lock=none,addr=192.168.0.101)
```

说明已经挂载成功了



### 客户端自动挂载

```shell
$ sudo vi /etc/fstab
```

在结尾添加类似如下配置

```shell
#
# /etc/fstab
# Created by anaconda on Thu May 25 13:11:52 2017
#
# Accessible filesystems, by reference, are maintained under '/dev/disk'
# See man pages fstab(5), findfs(8), mount(8) and/or blkid(8) for more info
#
/dev/mapper/cl-root     /                       xfs     defaults        0 0
UUID=414ee961-c1cb-4715-b321-241dbe2e9a32 /boot                   xfs     defaults        0 0
/dev/mapper/cl-home     /home                   xfs     defaults        0 0
/dev/mapper/cl-swap     swap                    swap    defaults        0 0
192.168.0.110:/data     /data                   nfs     defaults        0 0

```

重新加载 `systemctl`

```shell
$ sudo systemctl daemon-reload
```