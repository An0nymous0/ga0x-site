---
title: 'macOS管理多个Java JDK 版本'
authors: gaoxu
tags: [JAVA]
---

## 通过配置系统文件 alias 切换

### 通过 Homebrew 安装 Java JDK

[使用Homebrew](https://brew.sh/)安装多个 Java JDK 版本。要安装 Homebrew 运行：

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

现在使用以下命令安装 Java JDK **11**或更高版本`brew cask`：

```bash
brew cask install java<version>

# latest version
brew cask install java
```

:::tip
JDK 版本 **8**、**9**、**10**和**11**不再受支持。
:::

[AdoptOpenJDK](https://adoptopenjdk.net/)提供较旧的 Java 版本。从 AdoptOpenJDK 安装 Java JDK：

```bash
# install from third party repository
brew tap adoptopenjdk/openjdk

brew cask install adoptopenjdk<version>

# Java 8
brew cask install adoptopenjdk8

# Java 9
brew cask install adoptopenjdk9

# Java 10
brew cask install adoptopenjdk10

# Java 11
brew cask install adoptopenjdk11
```

### 通过别名切换 Java JDK

在您的或您的主要 Java 版本中设置`JAVA_HOME`路径，并为每个已安装的 Java 版本添加导出。`.zshrc` `.bash_profile`

```bash
export JAVA_HOME=$(/usr/libexec/java_home -v14)

export JAVA_8_HOME=$(/usr/libexec/java_home -v1.8)
export JAVA_11_HOME=$(/usr/libexec/java_home -v11)
export JAVA_14_HOME=$(/usr/libexec/java_home -v14)
```

检查默认 Java 版本和安装路径：

```bash
java -version # 14
```

`.zshrc`为您的或`.bash_profile`为每个已安装的 Java 版本添加一个别名。别名`JAVA_HOME`与选定的`JAVA_VERSION_HOME`.

```bash
alias java8='export JAVA_HOME=$JAVA_8_HOME'
alias java11='export JAVA_HOME=$JAVA_11_HOME'
alias java14='export JAVA_HOME=$JAVA_14_HOME'
```

现在，要在 Java 版本之间切换，请在终端中输入别名`java8`。执行`java -version`以验证您现在使用的是正确的 Java 版本

:::tip
Alias**仅**更改使用的终端实例中的 Java 版本
:::

## 使用软件**SDKMAN!**更改

[**SDKMAN!**](https://sdkman.io/)