---
title: 'Gradle - Gradle 打包并上传到私服以及如何配置依赖'
sidebar_label: 'Gradle'
sidebar_position: 1
---

##2 添加gradle plugins

```groovy
plugins {
    id 'java-library' //表示构建的是java库 主要用于声明依赖关系
    id 'maven-publish' //用于推送jar包到私有仓库
}
```

### maven-publish配置

```java
publishing {
    publications {
        maven(MavenPublication) {
						// components.java jar包 components.web war包
            from components.java
    repositories {
        maven {
            url 'https://仓库地址/repository/maven-releases/'
						//allowInsecureProtocol = true //允许非https链接
            credentials {
                username '用户名'
                password '密码'
            }
        }
    }
}
```

### java-library使用

因为java-library插件是要给第三方使用的所以比java插件多了一个api的使用

```java
dependencies {
    api 'org.apache.commons:commons-math3:3.6.1' //向下传递 在项目里引入当前打包的jar包时会将这个包一起引入
    implementation 'com.google.guava:guava:29.0-jre' //只在项目内使用
}
```