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

### R3 Algolia key 与索引状态（已实测排除）
2026-10-29 用用户提供的完整 key `30fbc18f2e759a30181abc05eebe23b7` 直连 Algolia API 实测：`HTTP 200`，`kubernetes` 命中 36 条，返回的 URL 指向 `www.ga0x.com` 的真实页面。**索引侧是健康的，本次故障纯为前端 key 被截断。**

**处置**：换 key 即可，无需重建索引。验收仍须实打一次查询确认，防止后续索引侧漂移。

### R4 `.npmrc` 的 hoist 设置（已被 R6 取代为真实根因）

仓内 `.npmrc` 有 `hoist=false` 与 `public-hoist-pattern[]=@docusaurus/theme-common*`。pnpm 10 仍支持这两项。实测构建失败的真实根因不是 hoist，而是 R6——保留此条仅作排查顺序记录，不需要改 `.npmrc`。

### R6 pnpm 10 默认拦截依赖构建脚本（2026-10-29 实测暴露）

pnpm 10 起默认不执行依赖的 `postinstall`（`onlyBuiltDependencies` 白名单机制）。`sharp` 的 native 二进制因此不会生成，构建报 `Could not load the "sharp" module using the darwin-arm64 runtime`，即使包已安装。
**处置**：在 `package.json` 加 `pnpm.onlyBuiltDependencies: ["sharp"]`。优先放 package.json 而非 `pnpm-workspace.yaml`——后者会额外引入一个 workspace 定义文件，改变 pnpm 的项目类型判定。
**为何设计阶段没抓到**：本机全局 pnpm 是 12，而旧仓从未在 pnpm 10 下装过；这是版本换代带来的新默认值，不是既有配置的问题。

### R7 swizzle 组件跨版本迁移（2026-10-29 实测暴露）

`src/theme/BlogPostPage/index.js` 与 `src/theme/DocItem/index.js` 是从旧版 swizzle 出来的（giscus 评论区宿体），引用了 3.10.2 已变更的模块。实测核实：
- `@theme/Unlisted` 已不存在，theme-classic 3.10.2 提供的是 `@theme/ContentVisibility`
- `@docusaurus/theme-common/internal` 在 3.10.2 中 `useBlogPost` 出现次数为 **0**，已迁至 `@docusaurus/plugin-content-blog/lib/client`
- 上游 `BlogPostPage` 新增了 `@theme/BlogPostPage/StructuredData`，旧 swizzle 没有

**处置**：最小迁移（只改 import 与补缺失子组件），不重跑 swizzle。理由是 giscus 逻辑是本仓唯一自定义产物，重跑 swizzle 需手工重新拼接，风险高于收益。
**为何设计阶段没抓到**：设计阶段只扫了 `src/` 是否有 React 19 废弃 API，没扫 `src/theme/` 的 Docusaurus 内部模块引用——这是设计的一个盲区（假定 swizzle 组件跨小版本兼容）。

### R8 MDX v3 已移除尖括号 autolink（推翻 design 初版方案）

design 初版把「尖括号包裹 URL」列为修法，理由是保留可点击性。**2026-10-29 实测证伪**：`<http://localhost:9090>` 与 `\<http://localhost:9090>` 在 3.10.2 下均 fail build（MDX v3 移除了 GFM autolink 的尖括号语法，`<` 一律按 JSX 解析）。
六种写法实测结果：

| 写法 | build | 渲染 | 可点击 |
|---|---|---|---|
| 原样裸 URL | ✗ fail | — | — |
| `<url>` | ✗ fail | — | — |
| `\<url>` | ✗ fail | — | — |
| `url` 前后加空格 | ✓ pass | **损坏**（`http9090`，丢失 `://localhost:`） | ✗ |
| `` `url` `` 反引号 | ✓ pass | 完整 `<code>` | ✗ |
| `[url](url)` 显式链接 | ✓ pass | 完整 `<a href>` | ✓ |

**处置**：选显式 Markdown 链接。唯一同时满足「构建通过 + 渲染完整 + 可点击」的写法。
**注意 `docusaurus-mdx-checker` 对以上 6 种全部报 SUCCESS**——它只做 MDX 语法层探测，抓不到 URL 解析与渲染层问题。验收判据必须是真实 `docusaurus build` + 产物 grep，不能依赖 checker。

### R5 全站视觉回归无自动化

44 篇内容 + 首页 + 页脚都可能因 MDX v3 严格化而渲染差异。仓里没有视觉回归基线。
**处置**：本次不做像素级回归（成本不成比例），改为结构性验收：构建产物中逐项断言页脚文本、随机抽 3 个路由确认 HTTP 200 且含预期标题。视觉差异留观察，不做承诺。

## 验收判据（Hermes 独立执行，不采信 CC 汇报）

| 编号 | 判据 | 命令/方法 |
|---|---|---|
| V1 | MDX 兼容性零错误 | `npx docusaurus-mdx-checker`。**注意：此工具对 URL 层问题会误报 SUCCESS，不能单独作为判据** |
| V2 | 生产构建成功 | `pnpm build`，检查 `build/` 生成。**这才是 URL 类问题的真实判据** |
| V3 | 页脚正确 | grep `build/index.html` 的 `footer__copyright`，断言含 `Maxgao`、当前年份、`京ICP备19047090号`、`beian.miit.gov.cn`，断言**不含** `My Project` 与 `Built with Docusaurus` |
| V4 | 备案号全站存在 | 对 `build/` 下所有 html 计数，断言每个都有 1 处备案号 |
| V5 | Algolia key 有效 | `curl -X POST https://LOUOXZQ42U-dsn.algolia.net/1/indexes/ga0x/query` 带新 key，断言非 403 且 `nbHits > 0` |
| V6 | 版本落地 | `grep` `package.json` 断言 docusaurus 系列为 `3.10.2`、react 为 `^19`、`packageManager` 存在、`engines.node` 为 `>=20`、`pnpm.onlyBuiltDependencies` 含 `sharp`；`cat .nvmrc` |
| V7 | 锁文件干净 | 干净状态下 `pnpm install --frozen-lockfile` 后 `git status` 无改动 |
| V8 | 坏 URL 已修且渲染正确 | `npx docusaurus build` 成功；产物中该段落含两个可点击 `<a href="http://localhost:9090"` 与 `<a href="http://localhost:8080"` |
| V9 | workflow 一致 | 两个 yml 的 setup-node 都用 `node-version-file` 且 `cache: pnpm`，均无 `yarn` 残留，`checkout@v4`/`setup-node@v4` |
| V10 | CI 真跑通 | push 后 `gh run watch`，PR workflow 与 deploy workflow 均 success |
| V11 | 线上生效 | 合并后 curl `https://www.ga0x.com/` 断言页脚含新文案 |
| V12 | swizzle 组件存活 | 产物中 blog 与 docs 页面均存在 giscus 容器元素 |

## 清理与回滚

- worktree 内的 `node_modules`（252M）、`build/`、`.docusaurus/` 均已被 `.gitignore` 覆盖，不进提交。
- 不删除 `new` / `new-ui` 分支，不属于本次范围。
- 若 V2 连续两次失败且根因在 Docusaurus 3.10 本身，回退到主干 `main`（等于放弃整个分支）。
