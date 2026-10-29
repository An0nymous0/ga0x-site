# Design

## 背景与约束

升级目标已定：Docusaurus 3.10.2 + React 19 + Node ≥20 + pnpm 10，CI 同步修好，Algolia 换完整 key，页脚改 `Maxgao`。

本机现状（实测）：全局 Node `v26.13.0`、全局 pnpm `12.16.1`、仓内 `package.json` 无 `packageManager`、锁文件 `lockfileVersion: '6.0'`（pnpm 8 格式）。因此「pnpm 10」意味着锁文件从 v6 升到 v9 格式，不可逆。

## 决策表

| 决策点 | 选择 | 理由 | 被否方案 |
|---|---|---|---|
| React 主版本 | 19 | Docusaurus 3.10 的 `peerDependencies` 明确允许 `^18 \|\| ^19`；本站只用了 preset-classic + ideal-image，无自研组件，无第三方 React 库 | 留在 18：可少一轮回归，但用户要求全量升级；且 18 已在 2025-04 停止维护 |
| Node 版本 | `>=20`（engines）+ `.nvmrc` 写 `20` | Docusaurus 3.10 `engines.node` 为 `>=20.0`。`.nvmrc` 写 20 而非 latest，避免 nvm/fnm 用户拿到 Node 26 而 CI 是 20 的错配 | 只写 `>=20` 不写 `.nvmrc`：无 nvm 的用户拿不到提示。写 `26`：CI runner 上不一定有 |
| 包管理器 | pnpm `10.34.9` 锁在 `packageManager` | pnpm 10 是当前稳定线，`packageManager` 字段让 corepack 在任意机器上自动取到该精确版本 | 沿用 pnpm 8：能保住 v6 锁文件、改动最小，但 pnpm 8 已 EOL，且用户明确要求 pnpm 10。升到 pnpm 12（本机全局版本）：`ERR_PNPM_IGNORED_BUILDS` 在 Docusaurus 的 postinstall 上会触发，需要额外 `onlyBuiltDependencies` 白名单，属额外复杂度 |
| 锁文件 | 从 v6 升级到 v9，删除旧 lockfile 后由 pnpm 10 重新生成 | 格式换代无兼容路径。重新生成即可，不需要逐包核对 | 保留 v6：pnpm 10 无法用 `--frozen-lockfile` |
| CI 安装方式 | `pnpm/action-setup@v4`（不钉版本，读 `packageManager`）+ `actions/setup-node@v4` 的 `node-version-file: .nvmrc` + `cache: pnpm` | Node 版本从单点 `.nvmrc` 读取，避免 workflow 里再写一遍导致漂移 | 在 workflow 里写死 `node-version: 20.x`：与 `.nvmrc` 双写必然漂移（仓里现存故障就是这个形状——`node 16.x` + `cache: yarn`） |
| Algolia key | 换成用户提供的完整 key | 现存 key 是截断字面量，403 实测 | 改本地搜索：需引入 `@easyops-cn/docusaurus-search-local`，多一个依赖 + 索引体积，且用户明确要新 key |
| 页脚署名 | `Maxgao` + 年份 + ICP 号，去掉 `My Project, Inc.` 与 `Built with Docusaurus` | 用户明确要求；模板公司名与备案主体不一致会误导 | 保留 Docusaurus 字样：用户明确选择去掉 |
| 坏 URL 修法 | 给两个 URL 包尖括号 `<http://...>` | MDX v3 下尖括号形式被显式识别为 URL 且不参与 JSX 解析；同时能保留自动链接的可点击性 | 用反引号包成行内代码：不可点击。改成 `[text](url)`：URL 自身是链接文本时冗余 |

## 实施顺序（依赖关系决定，不可打乱）

```
① 修内容坏 URL（独立，先做，后面所有构建才可能绿）
   ↓
② 升级依赖 + 工具链固定（packageManager/.nvmrc/engines）
   ↓
③ 重新生成锁文件（必须在 ② 之后，否则锁文件记录的依赖还是旧版本）
   ↓
④ 迁移废弃配置 onBrokenMarkdownLinks → markdown.hooks
   ↓
⑤ 改 Algolia key + 页脚 copyright（纯配置，可与 ④ 同批）
   ↓
⑥ 改两个 workflow（依赖 ②③ 的版本决定）
   ↓
⑦ 全量验证：mdx-checker + build + 产物断言
```

`④` 与 `⑤` 都只改 `docusaurus.config.js`，同一次编辑完成，减少构建次数。

## 关键风险与处置

### R1 锁文件格式不可逆

pnpm 10 生成的 v9 锁文件，pnpm 8 无法读取。若升级后发现 Docusaurus 3.10 在本机有阻塞问题而需回退，必须同时回退 `package.json` 的 `packageManager` 并重新生成锁文件。
**处置**：整批改动放在独立分支 `upgrade/docusaurus-310`，主干不动，验证通过再合并。回退 = 丢弃该分支。

### R2 React 19 的运行时破坏

React 19 移除了 `ReactDOM.render`、`findDOMNode`、string refs 等。Docusaurus 3.10 自身已适配，但 `src/pages/index.js` 是用户手写页面，需要确认无废弃 API。
**处置**：构建成功是必要非充分条件——必须额外检查 `src/` 下是否有上述 API 的直接调用，并用 `docusaurus serve` 起本地服务实访首页确认渲染无异常。

### R3 Algolia key 换了但索引仍是旧的

仓库只能控制前端 key，索引侧爬虫配置在 Algolia 后台。若索引未重建，换 key 后搜索可能仍返回空。
**处置**：验收必须**实打一次查询**（用新 key 向 Algolia API 发一个确定存在的词，如 `kubernetes`），不能只看 key 格式对不对。若索引为空，如实报告为外部未就绪项，不改前端凑数。

### R4 `.npmrc` 的 `hoist`/`public-hoist-pattern` 在 pnpm 10 下的语义

仓内 `.npmrc` 有 `hoist=false` 与 `public-hoist-pattern[]=@docusaurus/theme-common*`。pnpm 10 仍支持这两项，但 `hoist=false` 与 ideal-image 插件对 `sharp` 的可选依赖解析可能组合出问题。
**处置**：不改 `.npmrc`（不属于本次范围），若 pnpm 10 安装后构建报模块解析错误，优先怀疑此项，届时单列处理。

### R5 全站视觉回归无自动化

44 篇内容 + 首页 + 页脚都可能因 MDX v3 严格化而渲染差异。仓里没有视觉回归基线。
**处置**：本次不做像素级回归（成本不成比例），改为结构性验收：构建产物中逐项断言页脚文本、随机抽 3 个路由确认 HTTP 200 且含预期标题。视觉差异留观察，不做承诺。

## 验收判据（Hermes 独立执行，不采信 CC 汇报）

| 编号 | 判据 | 命令/方法 |
|---|---|---|
| V1 | MDX 兼容性零错误 | `npx docusaurus-mdx-checker` |
| V2 | 生产构建成功 | `pnpm build`，检查 `build/` 生成 |
| V3 | 页脚正确 | grep `build/index.html` 的 `footer__copyright`，断言含 `Maxgao`、当前年份、`京ICP备19047090号`、`beian.miit.gov.cn`，断言**不含** `My Project` 与 `Built with Docusaurus` |
| V4 | 备案号全站存在 | 对 `build/` 下所有 html 计数，断言每个都有 1 处备案号 |
| V5 | Algolia key 有效 | `curl -X POST https://LOUOXZQ42U-dsn.algolia.net/1/indexes/<index>/query` 带新 key，断言非 403 |
| V6 | 版本落地 | `grep` `package.json` 断言 docusaurus 系列为 `3.10.2`、react 为 `^19`、`packageManager` 存在、`engines.node` 为 `>=20`；`cat .nvmrc` |
| V7 | 锁文件干净 | 干净状态下 `pnpm install --frozen-lockfile` 后 `git status` 无改动 |
| V8 | 坏 URL 已修 | `grep` 该行断言两个 URL 都被尖括号包裹，且 `locahost` 已改 `localhost` |
| V9 | workflow 一致 | 两个 yml 的 setup-node 都用 `node-version-file` 且 `cache: pnpm`，均无 `yarn` 残留，`checkout@v4`/`setup-node@v4` |
| V10 | CI 真跑通 | push 后 `gh run watch`，PR workflow 与 deploy workflow 均 success |
| V11 | 线上生效 | 合并后 curl `https://www.ga0x.com/` 断言页脚含新文案 |

## 清理与回滚

- worktree 内的 `node_modules`（252M）、`build/`、`.docusaurus/` 均已被 `.gitignore` 覆盖，不进提交。
- 不删除 `new` / `new-ui` 分支，不属于本次范围。
- 若 V2 连续两次失败且根因在 Docusaurus 3.10 本身，回退到主干 `main`（等于放弃整个分支）。
