# site-toolchain Specification

## Purpose
定义站点构建工具链的版本契约，确保任意机器与 CI 上都用同一套 Node/pnpm 与同一份锁文件产出可复现的构建结果。

## Requirements

### Requirement: 工具链版本固定

仓库 MUST 在版本控制中显式声明所需的 Node 主版本与包管理器版本，任何开发者或 CI 环境读取仓库后无需口头约定即可得到相同版本。

#### Scenario: 新环境读取版本约束
- **WHEN** 开发者克隆仓库并查看根目录的版本声明文件
- **THEN** 其中明确给出 Node 所需的版本范围，以及包管理器名称与精确版本

#### Scenario: 版本不符合时给出可执行提示
- **WHEN** 使用的 Node 版本低于仓库声明的最低版本
- **THEN** 安装或构建过程失败并提示所需版本，而不是静默产出不一致的产物

### Requirement: 依赖安装不改写工作区

安装依赖 MUST 只产生 `node_modules`，不得修改锁文件或新增未声明的配置文件。

#### Scenario: 干净工作区安装
- **WHEN** 在锁文件与工作区都干净的状态下执行依赖安装
- **THEN** 安装结束后 `git status` 除 `node_modules` 外无任何改动

#### Scenario: 锁文件被拒绝改写
- **WHEN** 安装时使用与锁文件格式匹配的包管理器主版本
- **THEN** 锁文件保持字节不变

### Requirement: CI 与本地环境同构

CI 的各 workflow MUST 与本地使用相同的包管理器、Node 主版本与安装方式。

#### Scenario: PR 触发构建检查
- **WHEN** 向主干分支提交 PR
- **THEN** CI 使用与本地一致的包管理器完成依赖安装并跑通构建

#### Scenario: 推送主干触发部署
- **WHEN** 提交合入主干分支
- **THEN** CI 完成构建并将产物发布到站点分支
