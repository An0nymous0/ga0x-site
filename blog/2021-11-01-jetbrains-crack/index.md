---
title: JetBrains全系列软件激活教程
authors: gaoxu
tags: [JetBrains, IDE]
---

## 无限重置试用

> 此方法 Windows MacOS 通用

## 背景

Jetbrains 家的产品有一个很良心的地方，他会允许你试用 30 天（这个数字写死在代码里了）以评估是否你真的需要为它而付费。 但很多时候会出现一种情况：IDE 并不能按照我们实际的试用时间来计算。

我举个例子：如果我们开始了试用，然后媳妇生孩子要你回去陪产！陪产时我们并无空闲对IDE试用评估，它依旧算试用时间。（只是举个例子，或许你并没有女朋友）

发现了吗？你未能真的有 30 天来对它进行全面的试用评估，你甚至无法作出是否付费的决定。此时你会想要延长试用时间，然而 Jetbrains 并未提供相关功能，该怎么办？

事实上有一款插件可以实现这个功能，你或许可以用它来重置一下试用时间。但切记不要无休止的一直试用，这并不是这个插件的初衷!

![1.png](1.png)

## 如何安装

> 提供以下两种方法，二选一即可。

### 插件市场安装

在 Settings/Preferences... -> Plugins 内手动添加第三方插件仓库地址：https://plugins.zhile.io 搜索：IDE Eval Reset 插件进行安装。

![2.png](2.png)
![3.png](3.png)
![4.png](4.png)
![5.png](5.png)
![6.png](6.png)
![7.png](7.png)
![8.png](8.png)

### 手动下载安装

点击[这个链接(v2.3.5)](https://www.lanzouw.com/iL6QXw03iqj)下载插件的 zip 包（macOS可能会自动解压，切记使用的是 zip 包，不是解压后的文件夹！），然后打开 Settings/Preferences... -> Plugins 手动安装插件。
![9.png](9.png)
![10.png](10.png)
![11.png](11.png)
![12.png](12.png)

## 如何使用

一般来说，在 IDE 窗口切出去或切回来时（窗口失去/得到焦点）会触发事件，检测是否长时间（25天）没有重置，给通知让你选择。（初次安装因为无法获取上次重置时间，会直接给予提示）。

您也可以手动唤出插件的主界面：

a. 如果 IDE 没有打开项目，在 Welcome 界面点击 IDE 的菜单：Get Help -> Eval Reset

b. 如果 IDE 打开了项目，点击 IDE 的菜单：Help -> Eval Reset

唤出的插件主界面中包含了一些显示信息，有 2 个按钮和 1 个勾选项：

- 按钮：Reload 用来刷新界面上的显示信息。
- 按钮：Reset 点击会询问是否重置试用信息并重启 IDE。选择 Yes 则执行重置操作并重启 IDE 生效，选择 No 则什么也不做。（此为手动重置方式）
- 勾选项：Auto reset before per restart 如果勾选了，则自勾选后每次重启/退出 IDE 时会自动重置试用信息，你无需做额外的事情。（此为自动重置方式，推荐此方法！）

![13.png](13.png)
![14.png](14.png)
![15.png](15.png)

## 如何更新

1. 插件更新机制（推荐）：

IDE 会自行检测其自身和所安装插件的更新并给予提示。如果本插件有更新，你会收到提示看到更新日志，自行选择是否更新。

点击 IDE 的 Check for Updates... 菜单手动检测 IDE 和所安装插件的更新。如果本插件有更新，你会收到提示看到更新日志，自行选择是否更新。

插件更新可能会需要重启IDE。

2. 手动更新：

从本页面下载最新的插件 zip 包安装更新。插件更新需要重启IDE。

## 一些说明

市场付费插件的试用信息也会一并重置。

MyBatisCodeHelperPro 插件有两个版本如下，功能完全相同，安装时须看清楚！

- [MyBatisCodeHelperPro](https://plugins.jetbrains.com/plugin/14522-mybatiscodehelperpro-marketplace-edition-) (Marketplace Edition)，可重置！
- [MyBatisCodeHelperPro](https://plugins.jetbrains.com/plugin/9837-mybatiscodehelperpro)，不可重置！

对于某些付费插件（如: Iedis 2, MinBatis）来说，你可能需要去取掉 javaagent 配置（如果有）后重启IDE：

- 如果IDE没有打开项目，在 Welcome 界面点击菜单：Configure -> Edit Custom VM Options... -> 移除 -javaagent: 开头的行。
- 如果IDE打开了项目，点击菜单：Help -> Edit Custom VM Options... -> 移除 -javaagent: 开头的行。

重置需要重启IDE生效！

重置后并不弹出 Licenses 对话框让你选择输入 License 或试用，这和之前的重置脚本/插件不同（省去这烦人的一步）。

如果长达 25 天不曾有任何重置动作，IDE 会有通知询问你是否进行重置。

如果勾选：Auto reset before per restart ，重置是静默无感知的。

简单来说：勾选了 Auto reset before per restart 则无需再管，一劳永逸。

## 中文汉化包

JetBrains 系列大部分在**官方**的插件中心直接安装使用了。

以 WebStrom 为例，打开它的设置，点击 Plugins，搜索 chinese，安装即可。

![16.png](16.png)

## 支持的产品

- IntelliJ IDEA
- AppCode
- CLion
- DataGrip
- GoLand
- PhpStorm
- PyCharm
- Rider
- RubyMine
- WebStorm