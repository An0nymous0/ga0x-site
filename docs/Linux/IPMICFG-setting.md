---
title: 'IPMICFG常用命令及安装'
sidebar_label: 'IPMICFG常用命令及安装'
---

# IPMICFG常用命令及安装

## 下载地址
[https://www.supermicro.org.cn/en/solutions/management-software/ipmi-utilities](https://www.supermicro.org.cn/en/solutions/management-software/ipmi-utilities)    
拉倒最下方选择自己对应的系统版本
## 命令（Linux 为例）
### 查看 dhcp 模式
```shell
./IPMICFG-Linux.x86_64 -dhcp
```
DHCP is currently enabled.
### 关闭 dhcp
```shell
./IPMICFG-Linux.x86_64 -dhcp off
```
### 开启 dhcp
```shell
./IPMICFG-Linux.x86_64 -dhcp on
```
### 查看IP和MAC
```shell
./IPMICFG-Linux.x86_64 -m
```
IP=192.168.1.112   
MAC=AC:1F:6B:3D:6D:B2
### 设置IP
```shell
./IPMICFG-Linux.x86_64 -m 192.168.x.x
```
### 查看网关
```shell
./IPMICFG-Linux.x86_64 -g
```
### 设置网关
```shell
./IPMICFG-Linux.x86_64 -g 192.168.1.1
```
### 查看子网掩码
```shell
./IPMICFG-Linux.x86_64 -k
```
### 设置子网掩码
```shell
./IPMICFG-Linux.x86_64 -k 255.255.255.0
```
### 重置密码
```shell
./IPMICFG-Linux.x86_64 -user list
```
```shell
Maximum number of Users          : 10
Count of currently enabled Users : 2
User ID | User Name        | Privilege Level | Enable
------- | ---------        | --------------- | ------
      2 | ADMIN            | Administrator   | Yes
```
### 拿到用户 ID 之后设置新密码
```shell
./IPMICFG-Linux.x86_64 -user setpwd 2 <newpassword>
```
