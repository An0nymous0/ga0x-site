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
brew install --cask temurin<version>

# latest version
brew install --cask temurin
```

:::tip
JDK 版本 **8**、**9**、**10**和**11**不再受支持。
:::

[Adoptium](https://adoptium.net/)提供较旧的 Java 版本。从 Adoptium 安装 Java JDK：

```bash
# install from third party repository
brew tap homebrew/cask-versions

brew install --cask temurin<version>

# Java 8
brew install --cask temurin8

# Java 11
brew install --cask temurin11

# Java 17
brew install --cask temurin17
```

### 通过别名切换 Java JDK

在您的或您的主要 Java 版本中设置`JAVA_HOME`路径，并为每个已安装的 Java 版本添加导出。`.zshrc` `.bash_profile`

```bash
export JAVA_HOME=$(/usr/libexec/java_home -v17)

export JAVA_8_HOME=$(/usr/libexec/java_home -v1.8)
export JAVA_11_HOME=$(/usr/libexec/java_home -v11)
export JAVA_17_HOME=$(/usr/libexec/java_home -v17)
```

检查默认 Java 版本和安装路径：

```bash
java -version # 17
```

`.zshrc`为您的或`.bash_profile`为每个已安装的 Java 版本添加一个别名。别名`JAVA_HOME`与选定的`JAVA_VERSION_HOME`.

```bash
alias java8='export JAVA_HOME=$JAVA_8_HOME'
alias java11='export JAVA_HOME=$JAVA_11_HOME'
alias java17='export JAVA_HOME=$JAVA_17_HOME'
```

现在，要在 Java 版本之间切换，请在终端中输入别名`java8`。执行`java -version`以验证您现在使用的是正确的 Java 版本

:::tip
Alias**仅**更改使用的终端实例中的 Java 版本
:::

## 使用软件**SDKMAN!**更改

[**SDKMAN!**](https://sdkman.io/)