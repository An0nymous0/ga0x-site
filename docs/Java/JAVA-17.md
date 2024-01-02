---
title: 'JAVA 17 特性'
sidebar_label: 'JAVA 17'
---

:::info
JAVA 17 `LTS` (Long-Term-Support) 版本
:::

## Java 17

JDK 21主要集中在现有功能的增强和模块标准化,以及持续的安全与稳定性改进。大的语言和虚拟机层面的重大更新,例如虚拟线程、作用域值等新语法,可能需要到JDK 22或以后才能引入。

## 新特性

### 1. 纪元垃圾收集器(Epoch-Based Garbage Collector)
一个主要面向低延迟应用的垃圾收集器。
```java
java -XX:+UseEpsilonGC -Xlog:gc*
```
与旧版相比,大幅减少因GC引起的延迟。

### 2.向量API
新增向量API,作为并行处理的基础。
```java
var v = Vector.of(1, 2, 3, 4, 5);
var v2 = v.add(6);
```

### 3.弃用 Framework 应用模块
在jdk.incubator.foreign、jdk.incubator.concurrent和jdk.incubator.vector三个模块的基础上,新增Foreign Linker API以简化调用本地库。
```java
import jdk.incubator.foreign.*;  

try (Arena arena = Arena.newInstance()) {
    Long num = 1234L;
    MemorySegment seg = MemorySegment.allocateNative(CLinker.C_LONG, arena);
    seg.set(CLinker.C_LONG, 0, num);  
}
```
以往需要使用JNI等调用本地库。

### 4.局部变量语法改进
var的新用法,示例:
```java
record Point(int x, int y) {}   

var point = new Point(1, 2);
```
旧版本var只可用于局部变量初始化。

### 5.其它改进
文件处理API更新、Java Flight Recorder等。
