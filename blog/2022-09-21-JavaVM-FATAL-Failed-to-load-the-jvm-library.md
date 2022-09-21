---
title: 'JavaVM FATAL: Failed to load the jvm library'
authors: gaoxu
tags: [JVM, JAVA]
---

### 问题

```shell
JavaVM: Failed to load JVM: /Library/Java/JavaVirtualMachines/adoptopenjdk-8.jdk/Contents/Home/bundle/Libraries/libserver.dylib
JavaVM FATAL: Failed to load the jvm library.
```

### 解决方案
```shell
cd /Library/Java/JavaVirtualMachines/jdk1.8.0_271.jdk/Contents/Home/lib
```

```shell
sudo ln -s ../jre/lib/server/libjvm.dylib libserver.dylib
```
