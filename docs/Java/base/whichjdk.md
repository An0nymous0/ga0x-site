---
title: '我应该使用哪个版本的 JDK？'
sidebar_label: '我应该使用哪个版本的 JDK？'
sidebar_position: 1
---
:::tip

2024-01-02 更新 JDK 21 以及描述

:::

要构建和运行 Java 应用程序，需要实现 Java 平台标准版（"Java SE"）规范的 Java 编译器、Java 运行时库和虚拟机。

OpenJDK是Java [SE](https://openjdk.java.net/)规范的开源参考实现，但它只是源代码。不同的供应商为许多支持的平台提供了二进制发行版。这些发行版在许可证、商业支持、支持的平台和更新频率方面有所不同。

该网站提供独立但固执己见的建议。

## 长话短说

✅ 建议：使用[Adoptium Eclipse Temurin 21](https://whichjdk.com/#adoptium-eclipse-temurin)并确保您的本地版本与 CI 和生产版本匹配。

## 发布

在当前的[JDK 发布模型](https://openjdk.java.net/projects/jdk/)下，计划每六个月（即 3 月和 9 月）发布一个具有新主版本号的新功能。此外，还有季度错误修复更新。

每两年，9 月份的版本将成为长期支持 (LTS) 版本，至少获得三年的更新。

| JDK版本                                                   | 类型                   | 发布日期          | 强调                                                                 | 推荐                                                                                                                                                                                  |
| ----------------------------------------------------------- | ------------------------ | ------------------- | ---------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [**8**](https://openjdk.java.net/projects/jdk8/)       | **长期运输服务** | **03/2014** | 拉姆达斯                                                             | 先前发布模型下的最后一个 LTS 版本。Oracle 的免费更新[结束](https://www.oracle.com/java/technologies/java-se-support-roadmap.html)，但仍由其他人维护。在接下来的几个月内升级到 11 或 17！ |
| [9](https://openjdk.java.net/projects/jdk9/)                 | 特征                   | 09/2017           | 模块                                                                 | 引入了新的发布模型。停产。立即升级至 17 或 21！                                                                                                                                       |
| [10](https://openjdk.java.net/projects/jdk/10/)              | 特征                   | 03/2018           | 变量                                                                 | 停产。立即升级至 17 或 21！                                                                                                                                                           |
| [**11**](https://openjdk.java.net/projects/jdk/11/)    | **长期运输服务** | **09/2018** | 新的 HTTP 客户端                                                     | 立即升级至21！                                                                                                                                                                        |
| [12](https://openjdk.java.net/projects/jdk/12/)              | 特征                   | 03/2019           |                                                                      | 停产。立即升级至21！                                                                                                                                                                  |
| [13](https://openjdk.java.net/projects/jdk/13/)              | 特征                   | 09/2019           |                                                                      | 停产。立即升级至21！                                                                                                                                                                  |
| [14](https://openjdk.java.net/projects/jdk/14/)              | 特征                   | 03/2020           | 切换表达式                                                           | 停产。立即升级至21！                                                                                                                                                                  |
| [15](https://openjdk.java.net/projects/jdk/15/)              | 特征                   | 09/2020           | 文本块                                                               | 停产。立即升级至21！                                                                                                                                                                  |
| [16](https://openjdk.java.net/projects/jdk/16/)              | 特征                   | 03/2021           | 记录                                                                 | 停产。立即升级至21！                                                                                                                                                                  |
| [**17 号**](https://openjdk.java.net/projects/jdk/17/) | **长期运输服务** | **09/2021** | 密封课程                                                             |  **支持 LTS 版本。** 考虑在接下来的几个月内升级到 21。                                                                                                                          |
| [18](https://openjdk.java.net/projects/jdk/18/)              | 特征                   | 03/2022           | [默认 UTF-8](https://openjdk.java.net/jeps/400)                         | 停产。立即升级至21！                                                                                                                                                                  |
| [19](https://openjdk.java.net/projects/jdk/19/)              | 特征                   | 09/2022           | 仅预览和孵化器功能                                                   | 停产。立即升级至21！                                                                                                                                                                  |
| [20](https://openjdk.java.net/projects/jdk/20/)              | 特征                   | 03/2023           | 仅预览和孵化器功能                                                   | 停产。立即升级至21！                                                                                                                                                                  |
| [**21**](https://openjdk.java.net/projects/jdk/21/)    | **长期运输服务** | 09/2023           | [模式匹配](https://wscp.dev/posts/tech/java-pattern-matching/),虚拟线程 | **当前的 LTS 版本。**                                                                                                                                                           |

您必须决定是否要坚持使用最新的 LTS 版本，或者是否使用最新的功能版本并每六个月升级一次。这两个选项都可以，但如果您不确定，请坚持使用最新的 LTS 版本。

OpenJDK 项目本身在[openjdk.java.net](https://openjdk.java.net/)上进行管理，您可以在其中找到规范、源代码和邮件列表，但没有可以下载的版本。您需要选择一个发行版。

## 发行版

* [OpenJDK builds by Oracle (jdk.java.net)](https://whichjdk.com/#openjdk-builds-by-oracle-jdkjavanet)
* [Oracle Java SE Development Kit (JDK)](https://whichjdk.com/#oracle-java-se-development-kit-jdk)
* [Adoptium Eclipse Temurin](https://whichjdk.com/#adoptium-eclipse-temurin)
* [AdoptOpenJDK](https://whichjdk.com/#adoptopenjdk)
* [Azul Zulu](https://whichjdk.com/#azul-zulu)
* [Azul Zing](https://whichjdk.com/#azul-zing)
* [BellSoft Liberica JDK](https://whichjdk.com/#bellsoft-liberica-jdk)
* [IBM Semeru Runtime](https://whichjdk.com/#ibm-semeru-runtime)
* [Amazon Corretto](https://whichjdk.com/#amazon-corretto)
* [Microsoft Build of OpenJDK](https://whichjdk.com/#microsoft-build-of-openjdk)
* [Alibaba Dragonwell](https://whichjdk.com/#alibaba-dragonwell)
* [SapMachine](https://whichjdk.com/#sapmachine)
* [Red Hat OpenJDK](https://whichjdk.com/#red-hat-openjdk)
* [GraalVM](https://whichjdk.com/#graalvm)

### Oracle 构建的 OpenJDK (jdk.java.net)

[网站](https://jdk.java.net/)| [发布](https://jdk.java.net/)| Docker 镜像（不适用）

Oracle 以压缩存档格式提供适用于 Linux、macOS 和 Windows 的 OpenJDK 版本。

这些版本只会更新 6 个月。在此短时间内，更新和安全补丁将不再可用。这也适用于 LTS 版本！例如，最新的 OpenJDK 11 版本是[11.0.2+9](https://jdk.java.net/archive/)，而当前的 OpenJDK 版本是[11.0.12+7](https://wiki.openjdk.java.net/display/JDKUpdates/JDK11u)。

⛔️ 建议：不要使用 *Oracle 构建的 OpenJDK* ，特别是如果您打算坚持使用 LTS 版本。

### Oracle Java SE 开发工具包 (JDK)

[网站](https://www.oracle.com/java/)| [发布](https://www.oracle.com/java/technologies/downloads/archive/)| Docker 镜像（不适用）

Oracle 提供了 OpenJDK 的商业版本，该版本基于与 OpenJDK 完全相同的源：Oracle Java SE 开发工具包 (JDK)。Oracle 为这些版本提供定期更新和安全补丁。

这些版本的主要问题是 Oracle 的许可政策：

[在版本 10 之前，构建版本是根据Oracle 二进制代码许可协议](https://www.oracle.com/de/downloads/licenses/binary-code-license.html)发布的，这实际上允许构建版本用于商业项目。

[版本 11 到版本 16 版本是根据Oracle Java SE 的 Oracle 技术网络许可协议](https://www.oracle.com/downloads/licenses/javase-license1.html)发布的， **需要付费许可证才能在生产中使用** 。这就是 OpenJDK 出现许多新发行版的原因。

版本 17 是根据[Oracle 免费条款和条件 (NFTC)](https://www.oracle.com/downloads/licenses/no-fee-license.html)发布的，允许使用该版本来运行 *内部业务运营* 。不幸的是，“内部业务运营”一词没有定义，并且是一个非常模糊的短语（例如，是一个面向公众的网站运行内部业务运营吗？）。

此外，基于这种不稳定的许可历史，无法预测未来版本将如何获得许可。

⛔️ 建议：在咨询律师之前不要使用*Oracle Java SE 开发工具包 (JDK) 。*

### Adoptium Eclipse Temurin

[网站](https://adoptium.net/)| [发布](https://adoptium.net/archive.html)| [Docker 镜像](https://hub.docker.com/_/eclipse-temurin/)

Eclipse Adoptium是Eclipse基金会旗下的顶级项目，为开源软件提供资源和专业的治理模型。Adoptium 工作组由对 Java 技术具有战略利益的主要公司和组织组成，包括 Red Hat、IBM、Microsoft、Azul 和 iJUG。以前的 AdoptOpenJDK 项目已转移到 Eclipse Adoptium。

Adoptium OpenJDK 构建称为 *Eclipse Temurin* ，以区分项目和构建。

Eclipse Temurin 构建是高质量、供应商中立的，并且在宽松的许可证下经过了 TCK 测试。

Adoptium 表示，只要积极维护相应的上游源代码，它将继续为 LTS 版本构建二进制文件。

✅ 建议：强烈建议*采用 Eclipse Temurin* OpenJDK 构建。

### AdoptOpenJDK

[网站](https://adoptopenjdk.net/)| [发布](https://adoptopenjdk.net/archive.html?variant=openjdk11&jvmVariant=hotspot)| [码头工人图像](https://hub.docker.com/_/adoptopenjdk)

[网站](https://adoptopenjdk.net/)| [发布](https://adoptopenjdk.net/archive.html?variant=openjdk11&jvmVariant=hotspot)| [Docker 镜像](https://hub.docker.com/_/adoptopenjdk)

AdoptOpenJDK 项目是 Eclipse Adoptium 的前身，为默认的 HotSpot 和 OpenJ9 虚拟机提供了高质量的 OpenJDK 构建。

该网站和旧版本保持在线状态以访问存档版本。

⛔️建议：不要再使用 *AdoptOpenJDK* 。请改用 *Adoptium Eclipse Temurin* 。

### Azul Zulu

[网站](https://www.azul.com/)| [发布](https://www.azul.com/downloads/?package=jdk#download-openjdk)| [Docker 镜像](https://hub.docker.com/r/azul/zulu-openjdk)

Azul Systems, Inc. 专注于专业 Java 技术和 JDK 的商业支持。Azul 拥有很高的行业声誉，并参与各种工作组来发展 Java 平台。

Azul为许多操作系统和架构提供名为*Azul Zulu*的开源 OpenJDK 版本。此外，Azul 还提供满足特殊要求的构建，例如精简的 JRE 和包括 OpenJFX 的构建。

这些构建的缺点是对单个公司的依赖，该公司可能会突然更改其许可证或更新策略。

✅ 建议：*OpenJDK 的 Azul Zulu Builds*是一个不错的选择。

### Azul Zing

[网站](https://www.azul.com/)| [发布](https://www.azul.com/products/prime/stream-download/)| Docker 镜像（不适用）

Azul Zing 是一个商业 JDK，目前作为*Azul Platform Prime*销售。它需要与 Azul Systems 签订商业合同才能用于生产。

Zing 基于 OpenJDK，并添加了获得专利的“C4 Pauseless Garbage Collector”、“Falcon JIT Compiler”（以更高的 CPU 使用率和更长的启动和预热时间为代价优化吞吐量）以及一些功能加快编译器预热时间（通过在文件中分析和存储训练运行的优化来减轻 Falcon JIT 编译器较慢的预热时间）。

Azul Zing 在金融交易应用程序中有一些用例，其中 GC 暂停是一个问题。除此之外，常规 OpenJDK 包含免费的短暂停时间 GC [Shenandoah](https://wiki.openjdk.java.net/display/shenandoah/Main)和[ZGC](https://wiki.openjdk.java.net/display/zgc)，它们可能是替代方案。

⚠️ 建议：当 GC 暂停时间成为问题时，请考虑 *Azul Zing / Azul Platform Prime 。* 未经许可请勿在生产中使用它。

### BellSoft Liberica JDK

[网站](https://bell-sw.com/)| [发布](https://bell-sw.com/pages/downloads/?)| [Docker 镜像](https://hub.docker.com/u/bellsoft)

与 Azul 类似，BellSoft 专注于专业 Java 技术和 JDK 的商业支持。此外，BellSoft 拥有很高的行业声誉，并参与各种工作组来发展 Java 平台。

BellSoft为几乎所有操作系统和架构提供了名为*Liberica JDK*的开源 OpenJDK 版本。

流行的 Spring Boot 框架选择 Liberica JDK 作为其[构建包的](https://github.com/paketo-buildpacks/bellsoft-liberica)运行时。

这些构建的缺点是对单个公司的依赖，该公司可能会突然更改其许可证或更新策略。

✅ 建议：*BellSoft Liberica JDK*构建是一个不错的选择。

### IBM Semeru Runtime

[网站](https://developer.ibm.com/languages/java/semeru-runtimes/)| [发布](https://developer.ibm.com/languages/java/semeru-runtimes/downloads/)| Docker 镜像（不适用）

*IBM 开发了自己的 Java 虚拟机版本，称为 J9，并作为Eclipse OpenJ9*开源。它是默认 HotSpot Java 虚拟机的替代品，但它从未获得太多的欢迎。

IBM 现在提供基于 Eclipse OpenJ9 Java 虚拟机和一些 OpenJDK 类库的名为 *Semeru Runtime的构建。* OpenJ9[内存占用较低，并且可以通过共享类快速启动](https://www.eclipse.org/openj9/performance/)，但与热点虚拟机相比吞吐量较低。

⚠️ 建议：仅当您知道需要 OpenJ9 虚拟机时才使用*IBM Semeru Runtime 。*

### Amazon Corretto

[网站](https://aws.amazon.com/de/corretto/)| [发布](https://aws.amazon.com/de/corretto/)| [Docker 镜像](https://hub.docker.com/_/amazoncorretto)

由于 Oracle 更改了其 OpenJDK 版本的支持和许可政策，主要云提供商决定建立自己的托管 OpenJDK 版本并提供长期更新。显然，这是为了规避风险，尤其是针对甲骨文的诉讼。

2018 年，AWS 发布了 *Corretto* ，这是另一个 OpenJDK 版本。

AWS 包含了来自较新 OpenJDK 版本的错误修复的向后移植，并[声称](https://aws.amazon.com/corretto/faqs/)他们将添加可能尚未集成到 OpenJDK 项目中的补丁。亚马逊已经实施了一个替代[加密货币提供商](https://github.com/corretto/amazon-corretto-crypto-provider)，该提供商已针对其服务进行了优化。它[计划](https://aws.amazon.com/blogs/opensource/introducing-amazon-corretto-crypto-provider-accp/)用作 Corretto 中的默认加密实现。

Amazon 提供了针对主要开发平台的版本以及针对自己的 Amazon Linux 2 的优化版本。

✅ 建议：*Corretto*构建是一个不错的选择，特别是当您直接在 AWS 中的 Amazon Linux 2 上运行 Java 应用程序时。

### Microsoft Build of OpenJDK

[网站](https://www.microsoft.com/openjdk)| [发布](https://docs.microsoft.com/en-us/java/openjdk/download)| [Docker 镜像](https://docs.microsoft.com/en-us/java/openjdk/containers)

2021 年，微软发布了 *OpenJDK 的 Microsoft Build* ，这是另一个 OpenJDK 版本。

Microsoft 可能会包含来自较新 OpenJDK 版本的错误修复的向后移植，并声称他们将添加可能尚未集成到 OpenJDK 项目中的补丁。

Microsoft 为主要开发平台提供了版本。

⚠️建议：仅当直接在 Azure 上运行 Java 应用程序时，才使用 *Microsoft Build of OpenJDK 。* 还有更多既定选项可用。

### Alibaba Dragonwell


[网站](http://dragonwell-jdk.io/)| [发布](http://dragonwell-jdk.io/)| [Docker 镜像](https://github.com/alibaba/dragonwell11/wiki/Use-Dragonwell-11-docker-images)

阿里巴巴提供了一个 OpenJDK 版本，其中包括向后移植和一些 *额外功能* 。

⛔️建议：不要使用 *Alibaba Dragonwell* ，除非政府强制。

### SapMachine

[网站](https://sap.github.io/SapMachine/)|[发布](https://github.com/SAP/SapMachine/releases)|[Docker 镜像](https://hub.docker.com/_/sapmachine)

SapMachine 是另一个 OpenJDK Build，由 SAP 维护。

⚠️ 建议：仅当您在 SAP 服务器上运行 Java 应用程序时才使用 *SapMachine 。* 还有更多既定选项可用。

### Red Hat OpenJDK

[网站](https://developers.redhat.com/products/openjdk/overview)| [发布](https://developers.redhat.com/products/openjdk/download)| [Docker 镜像](https://catalog.redhat.com/software/containers/ubi8/openjdk-11/5dd6a4b45a13461646f677f4)

Red Hat 为 LTS 版本提供 OpenJDK 构建。

⚠️ 建议：仅当直接在 Red Hat Enterprise Linux 上运行 Java 应用程序时才使用 *Red Hat OpenJDK 。* 还有更多既定选项可用。

### ojdkbuild

[网站](https://github.com/ojdkbuild/ojdkbuild)| [发布](https://github.com/ojdkbuild/ojdkbuild/releases)| Docker 镜像（不适用）

该项目已停止。ojdkbuild 项目的目标是提供 OpenJDK 的 Windows x86_64 二进制文件，其行为尽可能接近 Linux OpenJDK 软件包，例如使用系统库而不是 zlib 或 OpenSSL 的打包版本。它使用了 CentOS 中包含的软件包。这些构建的一个用例是在 Windows 计算机上开发 Java 软件并将其部署到生产中的 Linux 服务器。

⛔️ 建议：不要使用 *ojdkbuild* ，因为该项目已停止。

### GraalVM

[网站](https://www.graalvm.org/)| [发布](https://github.com/graalvm/graalvm-ce-builds/releases)| [Docker 镜像](https://github.com/graalvm/container/pkgs/container/graalvm-ce)

GraalVM 是一个完全兼容的 JDK，但与所有其他版本有很大不同。

GraalVM 由 Oracle 开发。它基于 OpenJDK，但包括新的高性能编译器和新的多语言虚拟机（可以执行用不同编程语言编写的代码）。还可以创建高度优化且启动速度极快的特定于平台的本机可执行文件。

🤷 请[分享](https://github.com/whichjdk/whichjdk.com/issues/6)您在生产中使用 GraalVM 的经验，以便我们可以制定经过验证的建议。

## 特别案例

### Apple Silicon

OpenJDK 17 版本中通过JEP 391实现了对*macOS/AArch64*的官方支持。[](https://openjdk.java.net/jeps/391)

macOS *x64*构建可与 Rosetta 2 一起稳定运行，但由于仿真而导致性能显着下降。*在Apple Silicon* Mac上进行开发的人（比如我）应该安装JDK 的本机 macOS  *AArch64* （又名*ARM 64 ）版本。*

大多数发行版仅具有适用于 Java 17+ 的*macOS/AArch64*版本。 [BellSoft Liberica](https://bell-sw.com/announcements/2021/03/12/Liberica-on-Apple-Silicon/)和[Azul Zulu](https://www.azul.com/newsroom/azul-announces-support-of-java-builds-of-openjdk-for-apple-silicon/)还为 Java 8 和 Java 11提供免费的*macOS/AArch64版本。*

## 常见问题

### 为本地开发安装 JDK 的最佳方法是什么？

使用[SDKMAN！](https://sdkman.io/install)

要列出可用的 JDK，请键入

```
sdk list java
```

并安装特定版本：

```
sdk install 17.0.8.1-tem
```

通过检查版本来验证：

```
java --version
```

### 我目前安装的是哪个版本的 Java？

```
which java
`which java` --version
```

在 Linux 上，您也可以尝试

```
sudo update-java-alternatives
```

### JDK 和 JRE 有什么区别？

一些发行版提供 JDK（Java 开发工具包）和 JRE（Java 运行时环境）构建。JDK 包括*编译、打包和运行*Java 应用程序的所有内容，而 JRE 仅包括*运行*Java 应用程序的二进制文件和库。JRE 是 JDK 的精简版本，并且以兆字节计更小。

[如果大小对您很重要，请考虑使用jlink](https://blog.adoptium.net/2021/10/jlink-to-produce-own-runtime/)创建您自己的精简运行时。

对于本地开发，您需要 JDK。在生产中，您只需要一个运行时环境，但使用 JDK 也很常见。

### Java EE 怎么样？

*Java EE（Java 平台企业版）* 更名为 *Jakarta EE* 。它是构建服务器应用程序和前端的规范。就范围而言，Jakarta EE 可以与[Spring Boot](https://spring.io/projects/spring-boot)、[Micronaut](https://micronaut.io/)和[Quarkus](https://quarkus.io/)等更现代的框架进行比较，但 Jakarta EE 感觉更复杂。

⚠️建议：不要基于*Jakarta EE*启动新项目。大多数人使用 *Spring Boot* ，这是一个不错的选择。如果您有很强的 Java EE 背景，请考虑 *Quarkus 。* 如果您喜欢 Groovy 和 Grails，请考虑 *Micronaut* 。

### 英文版原文
https://whichjdk.com/
