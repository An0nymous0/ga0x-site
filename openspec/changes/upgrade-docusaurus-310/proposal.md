# Proposal

## Why

站点自 2024-03 起停在 Docusaurus 3.0.1 / React 18 / Node 16 的组合上，两年未升级。三个后果已经实际发生：

1. **CI 是死的**。`test-deploy.yml` 配 `cache: yarn` + `yarn install`，而仓里只有 `pnpm-lock.yaml`，每个 PR 都必然红叉；仓库累计 0 次 run 记录，deploy 在本次变更前从未自动触发过。
2. **构建不可复现**。仓里没有 `packageManager` 固定，也没有 `.nvmrc`；本机全局 pnpm 12 会把 v6 锁文件整体改写成 v9 并新建 `pnpm-workspace.yaml`，装一次就污染工作区。换一台机器结果不同。
3. **站内搜索是坏的**。`docusaurus.config.js` 里的 Algolia `apiKey` 是截断字符串 `'5233a...1f'`（git 历史首次引入时就是这个形态，从未是完整值）。直接请求 Algolia API 返回 `403 Invalid Application-ID or API key`。用户看到搜索框，输入任何词都搜不到东西。

同时页脚仍是模板默认的 `My Project, Inc.`，且 ICP 备案号虽已上线但挂在模板公司名之后，读起来是「My Project, Inc. 的备案号」，不符合备案展示的常规做法。

## What Changes

- **BREAKING** Docusaurus `3.0.1` → `3.10.2`，React `18` → `19`，`engines.node` `>=18` → `>=20`。
- **BREAKING** 引入固定工具链：`packageManager` 锁 pnpm 10，新增 `.nvmrc`，锁文件从 v6 升到 pnpm 10 格式。**BREAKING** 因为锁文件格式换代不可逆——降级回 pnpm 8 需要重新生成锁文件。
- **BREAKING** `onBrokenMarkdownLinks` 是 v3.9 起废弃的顶层配置，迁到 `markdown.hooks.onBrokenMarkdownLinks`（v4 将删除顶层写法）。
- 修 `test-deploy.yml`：与 `deploy.yml` 统一到 pnpm 10 + Node 20，PR 上能真实跑通 build。
- `deploy.yml`：`actions/checkout@v2` → `v4`，`setup-node@v3` → `v4`，去掉过时的 `pnpm/action-setup@v2` 版本钉死。
- 修 `docs/kubernetes/prometheus-k8s-monitor.md:48` 的裸 URL：`http://localhost:9090、http://locahost:8080。grafana` 在现代 Node 的 URL 解析下被判 `Invalid port in url` 直接 fail build（同时 `locahost` 是错别字）。
- 页脚 `copyright` 改为 `Maxgao` + 年份，ICP 号保留在 `Maxgao` 之后、仍链到 `https://beian.miit.gov.cn/`。去掉 `My Project, Inc.` 与 `Built with Docusaurus`，改由独立的合规/署名行承载。
- Algolia 换成新的完整 `apiKey`（用户提供）。

## Capabilities

### New Capabilities

- `site-toolchain`：站点的构建工具链契约——Node/pnpm 版本固定、依赖安装可复现、本地与 CI 环境一致。
- `site-search`：站内搜索的行为契约——搜索框存在时，输入关键词必须返回该关键词对应的文档/博客条目；搜索后端不可用时必须有可见降级，而不是静默空结果。
- `site-branding`：页脚的身份与合规展示——站点名、年份、ICP 备案号及其跳转目标。
- `site-content-integrity`：内容编译契约——`docs/` 与 `blog/` 下全部 Markdown 在现代 Node/MDX 下必须编译通过，正文中的裸 URL 必须按字面渲染而不破坏构建。

### Modified Capabilities

无。`openspec/specs/` 当前为空，本次是建立首批能力规格。

## Impact

- **依赖**：`@docusaurus/*` 全部系列 3.0.1 → 3.10.2，`react`/`react-dom` 18 → 19，`@mdx-js/react` 3.0.0 → 3.1.1，`clsx` 2.0.0 → 2.1.1，`prism-react-renderer` 2.3.0 → 2.4.1。
- **构建产物**：`build/` 输出结构的细微差异由构建验证兜底；`static/CNAME`、`baseUrl: '/'` 不变，部署目标（gh-pages + Cloudflare 前置）不变。
- **CI**：`.github/workflows/deploy.yml` 与 `test-deploy.yml` 均改。
- **内容**：仅 `docs/kubernetes/prometheus-k8s-monitor.md` 一行 URL；不改其他 43 篇。
- **配置**：`docusaurus.config.js` 的 `themeConfig.footer.copyright`、`themeConfig.algolia.apiKey`、`onBrokenMarkdownLinks` 位置。
- **不在范围内**：`docusaurus-notion-mdx-plugin` 相关的 Notion 内容源（历史未提交改动，已回退，本次不引入）；`new` / `new-ui` 两个长期分支；域名与 DNS；Cloudflare 缓存规则。

## 已知遗留风险

- `test-deploy.yml` 里现有的 `node-version: 16.x` 与 `cache: yarn` 是 2022 年模板残留。本次一并修正，但**该 workflow 历史上从未成功跑过**，首次跑通前不能假定它可用。
- Algolia 索引侧的爬虫配置不在本仓，本次只负责前端 key。若索引本身未重建，换了 key 仍可能搜不到内容——验收必须实际打一条查询。
