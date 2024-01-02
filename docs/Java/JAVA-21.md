---
title: 'JAVA 21 特性'
sidebar_label: 'JAVA 21'
---

:::info
JAVA 21 `LTS` (Long-Term-Support) 版本
:::

## Java 21

Java 17在GC、向量计算、本地调用等方面进行了优化,语法层面也有改进。这些新特性将进一步拓宽Java的应用领域,面向数据密集型任务提供更好的支持。

## 新特性

### 1. 链式方法调用改进
支持在同一行链式调用多个方法,代码更简洁。
```java
var list = new ArrayList<>().add("A").add("B");
```
以前只能分行调用。

### 2.泛型特化
支持部分泛型类型特化,无需全特化。
```java
class Box<T> {
    T item;
    
    void setBox(T t) {
        item = t; 
    }
}

class StringBox extends Box<String> {}
```
以前泛型必须完全特化。

### 3. 模式匹配改进
扩展了instanceof的模式匹配用法。
```java
if(obj instanceof String s) {
    // 可以直接使用s,不再需要强制转换
}
```
以前匹配出的变量需要额外转换。

### 4. 元组改进
现在元组支持泛型参数化。
```java
var point = Tuple.of<Integer, Integer>(2, 3);
```
旧版本不支持泛型元组。

### 5. 增强类型
新增Cloneable接口用于标识可克隆类。
```java 
public class MyClass implements Cloneable {
    // 可以被clone了 
}
```

### 6. 更新的JVM特性
包含G1更新、内存模型优化等。
