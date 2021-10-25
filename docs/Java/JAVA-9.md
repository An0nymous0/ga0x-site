---
title: 'JAVA 9 特性'
sidebar_label: 'JAVA 9'
---

:::info
JAVA 9 `非LTS` (Long-Term-Support) 版本
:::

## 创建不可变集合

创建一个集合为不可变集合：

```java 
List.of()
List.of(e1)
List.of(e1, e2)         // fixed-argument表单最多可重载10个元素
List.of(elements...)   //varargs表单支持任意数量的元素或数组
```

Guava提供的Immutable不可变集合：

```java 
ImmutableList immutableList = ImmutableList.of("wyp", "good");
```