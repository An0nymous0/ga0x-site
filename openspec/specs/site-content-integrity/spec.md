# site-content-integrity Specification

## Purpose
定义内容编译契约：`docs/` 与 `blog/` 下的全部 Markdown 在现代 Node 与 MDX 下必须编译通过，正文里出现的裸 URL 按字面渲染且不得导致构建失败。

## Requirements

### Requirement: 全部内容文件编译通过

构建过程 MUST 让 `docs/` 与 `blog/` 下所有 Markdown/MDX 文件编译成功，不得因单篇内容导致整站构建失败。

#### Scenario: 全量内容构建
- **WHEN** 执行站点生产构建
- **THEN** 构建结束状态为成功，且不存在因内容文件解析失败而中断的情况

#### Scenario: 内容改动前先做兼容性探测
- **WHEN** 升级内容编译链或调整站点配置
- **THEN** 先用 MDX 兼容性检查覆盖全部内容文件，确认零编译错误后再执行完整构建

### Requirement: 正文中的裸 URL 按字面渲染

正文里出现的 URL 字面量 MUST 在页面上以文本形式完整可见，且 MUST NOT 被编译器解释为需要解析端口/主机的链接目标。

#### Scenario: 相邻 URL 紧邻中文标点
- **WHEN** 正文中出现两个以顿号分隔的 host:port 形式 URL，后接中文句子
- **THEN** 构建成功，页面上两个 URL 均按原样可见

#### Scenario: 域名拼写错误不影响构建
- **WHEN** 正文中某个 URL 的主机名拼写有误
- **THEN** 该 URL 按字面渲染，不导致构建失败
