---
title: 'JAVA 10 特性'
sidebar_label: 'JAVA 10'
---

:::tip
JAVA 10 `非LTS` (Long-Term-Support) 版本
:::

## Java 10

从Java 10 开始，Java的迭代周期缩短为半年，半年发布一个版本。

## 局部变量类型推断

在Java 6时初始化一个Map需要我们这样来声明：

```java
Map<String, String> map = new HashMap<String,String>();
```

事实上泛型方法的参数可以通过上下文推导出来，所以在Java 7 中简化为：

```java
Map<String, String> map = new HashMap<>();
```

到了Java 10 进一步升华了类型推断，我们看一个例子：

```java
var map = Map.of("hello","world");
String var = map.get("hello");
```

猛一看还以为是Javascript的写法，事实上这就是Java。``编译器从右侧的初始化程序的类型推断出初始化类型``，这将大量减少一些样板代码。``不过请注意，此特性仅适用于初始化局部变量，它不能用于成员变量、方法参数、返回类型等场景中``。

> 另一件要注意的事情是var 并不是Java中的关键字，这确保了Java的向后兼容性。另外使用var没有运行时开销，也不会使 Java 成为动态语言。var标记的变量的类型仍然是在编译时推断出来。

### var 不应该被滥用

然这样“爽起来了”，但是`var`也不应该被滥用。

下面这种写法明细可读性差，导致变量的类型需要你去DEBUG:

```java
var data = someObject.getData();
```

流中也尽量不要使用：

```
// 可读性差
var names= apples.stream()
.map(Apple::getName)
.collect(Collectors.toList());
```

因此，在使用`var`时应该保证必要的可读性。

另外，在多态这个重要的Java特性中，`var`表现的并不是很完美。如果Fruit有Apple和Orange两种实现。

```java
var x = new Apple();
```

如果我们对x重新赋值为new Orange()就会报错，因为编译后x的类型就已经固定下来了。所以`var`和泛型一样都是在编译过程中起了作用。你必须保证var的类型是确定的。

> 那么话又说回来了，var结合泛型的钻石符号`<>`会有什么情况发生呢？

下面的 empList的类型是`ArrayList<Object>`：

```java
var empList = new ArrayList<>();
```

如果我们需要明确集合中放的都是Apple就必须在右边显式声明：

```java
var apples = new ArrayList<Apple>();
```

## 不可变集合

其实在Java 9中不可变集合已经得到了一些加强，在Java 10中进一步加强了不可变集合。为什么不可变集合变得如此重要？

- 不可变性（immutability），这是函数式编程的基石之一，因此加强不可变集合有助于函数式编程在Java中的发展。
- 安全性，由于集合不可变，因此就不存在竞态条件，天然的线程安全性，无论在编码过程中和内存使用中都有一定的优势，这种特性在Scala和Kotlin这两种编程语言中大放异彩。

在Java 10 中又引入了一些新的API。

### 集合副本

复制一个集合为不可变集合：

```java 
List<Apple> copyList = List.copyOf(apples);
```

任何修改此类集合的尝试都会导致java.lang.UnsupportedOperationException异常。

Stream归纳为不可变集合

之前Stream API的归纳操作collect(Collector collector)都只会把流归纳为可变集合，现在它们都有对应的不可变集合了。举个例子：

```java 
List<String> names= apples.stream()
    .map(Apple::getName)
    .collect(Collectors.toUnmodifiableList());
```

## Optional.orElseThrow()

```java 
Optional<String> optional = Optional.ofNullable(nullableVal);
// 可能会 NoSuchElementException
String  nullable = optional.get();
```

Optional如果值为null时去get会抛出NoSuchElementException异常。从语义上get应该肯定能得到什么东西，但是实际上异常了，这种歧义性太大了。所以增加了一个orElseThrow()方法来增强语义性。

## 其它增强特性

Java 10的性能也明显加强了，支持G1并行垃圾收集。另外引入了即时编译技术(JIT)，该技术可以加速java程序的运行速度。 另外Java 10对容器集成也进行了优化，JVM会根据容器的配置进行选择CPU核心数量和内存占用。还有其它一些底层优化特性这里就不多说了，了解为主，当你达到一定的层次会自己去了解的。到此Java 10的一些变化就归纳完了，其实并不是很多，都很好掌握。多多关注，不要走开，下次我们将对Java 11的一些变化和改进进行归纳。
