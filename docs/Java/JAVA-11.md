---
title: 'JAVA 11 特性'
sidebar_label: 'JAVA 11'
---

:::info
JAVA 11 `LTS` (Long-Term-Support) 版本
:::

## Java 11

新特性让Java 11在云计算、微服务、HTTP/2等方面都有所加强,使Java平台做好了迎接未来的准备。

## 新特性

### 1. 引入新的HTTP Client API 

java.net.http包,提供一个更强大、高效的HTTP客户端API,支持异步和流式处理。
```java
// 新API
var request = HttpRequest.newBuilder()
        .uri(URI.create("https://api.example.com"))
        .build();

// 旧API
URL url = new URL("https://api.example.com");
HttpURLConnection connection = (HttpURLConnection) url.openConnection();
```

### 2. 局部变量类型推断

var关键字,可以根据初始化表达式自动推断出局部变量的类型,使代码更简洁。
```java
// 新特性  
var list = new ArrayList<String>();

// 旧代码
ArrayList<String> list = new ArrayList<String>();
```
### 3. ZGC 垃圾收集器

一个可扩展低延迟的垃圾收集器,用于多CPU和大内存配置的应用。
```shell
java -XX:+UnlockExperimentalVMOptions -XX:+UseZGC -Xms4g -Xmx4g
```

### 4. Epsilon GC

一个几乎不做任何事情的GC,主要用于性能测试和基准测试。
```shell
java -XX:+UnlockExperimentalVMOptions -XX:+UseEpsilonGC -Xms4g -Xmx4g
```

### 5. 增强 Process API

简化了管理和控制子进程。
```shell
// 新API
ProcessHandle process = ProcessHandle.current();
ProcessHandle childProcess = process.spawn("printargs.sh"); 

// 旧API 
Runtime.getRuntime().exec("printargs.sh");
```

### 6. Unicode 10支持

支持新的Unicode 10 emoji等字符。

### 7. 移除过时模块

移除了Java EE和CORBA模块,从JDK标准库中删除了过时的模块和功能。

### 8. 增强 libpng 引入

改进APIs并提高性能。

### 9. 支持 ARM64 架构

在G1中实现了AArch64端口,扩展到ARM64架构。

### 10. 各类优化与修复

各种安全、性能、稳定性和可用性改进,600多个bug修复。

