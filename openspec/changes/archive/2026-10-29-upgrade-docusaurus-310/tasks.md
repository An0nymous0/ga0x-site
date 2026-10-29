# Tasks

## 1. 内容兼容性（先行，解除构建阻塞）

- [x] 1.1 修 `docs/kubernetes/prometheus-k8s-monitor.md:48` 的两个裸 URL。**改用显式 Markdown 链接**：`[http://localhost:9090](http://localhost:9090)` 与 `[http://localhost:8080](http://localhost:8080)`，同时把 `locahost` 拼写改为 `localhost`。**不要用尖括号 `<...>`，MDX v3 已移除该 autolink 语法**（2026-10-29 实测：`<http://...>` 与 `\<http://...>` 均 fail build）。不要用「URL 前后加空格」——实测渲染丢失 `://localhost:` 变成 `http9090`。不要用反引号——渲染正确但失去可点击性。验证：`npx docusaurus build` 成功，且 build 产物中该段落含两个 `<a href="http://localhost:9090"` / `<a href="http://localhost:8080"` 的可点击链接。
- [x] 1.2 全量 MDX 兼容性探测。验证：`npx docusaurus-mdx-checker` 输出 `[SUCCESS] All 44 MDX files compiled successfully!`，退出码 0。

## 2. 工具链与依赖

- [x] 2.1 在 `package.json` 增加 `"packageManager": "pnpm@10.34.9"`，把 `engines.node` 改为 `">=20"`。验证：`node -e "const p=require('./package.json'); console.log(p.packageManager, p.engines.node)"` 输出 `pnpm@10.34.9 >=20`。
- [x] 2.2 新建 `.nvmrc`，内容为 `20`（单行，无换行符差异要求）。验证：`cat .nvmrc` 输出 `20`。
- [x] 2.3 升级 `dependencies` 与 `devDependencies`：所有 `@docusaurus/*` 含 `@docusaurus/core`、`preset-classic`、`plugin-google-gtag`、`plugin-ideal-image`、`module-type-aliases`、`types` 一律 `3.10.2`；`react`/`react-dom` 改 `^19.0.0`；`@mdx-js/react` 改 `^3.1.1`；`clsx` 改 `^2.1.1`；`prism-react-renderer` 改 `^2.4.1`。验证：`node -e "const p=require('./package.json');const all={...p.dependencies,...p.devDependencies};console.log(all['@docusaurus/core'],all.react,all['@mdx-js/react'],all.clsx,all['prism-react-renderer'])"` 输出 `3.10.2 ^19.0.0 ^3.1.1 ^2.1.1 ^2.4.1`。
- [x] 2.4 删除旧 `pnpm-lock.yaml` 后用 pnpm 10 重新生成。验证：`head -1 pnpm-lock.yaml` 输出 `lockfileVersion: '9.0'`；`npx -y pnpm@10.34.9 install --frozen-lockfile` 退出码 0 且 `git status --short` 无文件改动。
- [x] 2.5 确认 `src/` 下无 React 19 移除的 API。验证：`grep -rn "findDOMNode\|ReactDOM.render\|componentWillMount\|componentWillReceiveProps" src/ blog/ docs/` 无命中（0 行输出）。
- [x] 2.6 批准 pnpm 10 默认拦截的依赖构建脚本。pnpm 10 起默认不跑依赖的 postinstall，`sharp` 的 native 二进制不会生成，构建报 `Could not load the "sharp" module using the darwin-arm64 runtime`。在 `package.json` 加 `pnpm.onlyBuiltDependencies: ["sharp"]`（或 `pnpm-workspace.yaml` 同名字段，二选一，优先 package.json 以免引入 workspace 文件）。验证：`pnpm build` 不再报 sharp 加载失败。
- [x] 2.7 迁移 swizzle 出的两个 theme 组件到 3.10.2 API（`tasks.md` 初版遗漏，2026-10-29 构建暴露）。`src/theme/BlogPostPage/index.js`：`@theme/Unlisted` → `@theme/ContentVisibility`（渲染 `<ContentVisibility metadata={metadata} />`）、`@docusaurus/theme-common/internal` 的 `BlogPostProvider`/`useBlogPost` → `@docusaurus/plugin-content-blog/client`、补 `@theme/BlogPostPage/StructuredData`。`src/theme/DocItem/index.js` 的 `@docusaurus/plugin-content-docs/client` 同样核对。**必须保留 giscus 评论区逻辑**，这是这两个文件存在的唯一理由。验证：`pnpm build` 成功且 `build/blog/**/*.html` 与 `build/docs/**/*.html` 中 giscus 容器元素存在。
- [x] 2.8 把 `@docusaurus/plugin-content-blog` 与 `@docusaurus/plugin-content-docs` 升为直接 `dependencies`（版本 `3.10.2`）。原因：`.npmrc` 是 `hoist=false`，这两个包只作为 preset-classic 的传递依赖存在于 `.pnpm/`，项目根 `node_modules` 没有软链，`src/theme/` 下 import 会 `MODULE_NOT_FOUND`。**采用直接依赖方案，不改 `.npmrc`**（2026-10-29 用户拍板 A 方案）。验证：`node -e "require.resolve('@docusaurus/plugin-content-blog/client');require.resolve('@docusaurus/plugin-content-docs/client');console.log('ok')"` 输出 `ok`；且 `.npmrc` 内容保持 `public-hoist-pattern[]=@docusaurus/theme-common*` 与 `hoist=false` 不变。

## 3. 站点配置

- [x] 3.1 把顶层 `onBrokenMarkdownLinks: 'warn'` 迁到 `markdown: { hooks: { onBrokenMarkdownLinks: 'warn' } }`，同时保留 `onBrokenLinks: 'throw'` 在原位置不动。验证：`node -e "import('./docusaurus.config.js').then(m=>{const c=m.default;console.log('top:',c.onBrokenMarkdownLinks,'hook:',c.markdown?.hooks?.onBrokenMarkdownLinks)})"` 输出 `top: undefined hook: warn`。
- [x] 3.2 把 `themeConfig.algolia.apiKey` 替换为 `30fbc18f2e759a30181abc05eebe23b7`（已在 2026-10-29 实测有效，返回 HTTP 200 且 `kubernetes` 命中 36 条），`appId` 与 `indexName` 保持不变。验证：`grep -c "30fbc18f2e759a30181abc05eebe23b7" docusaurus.config.js` 输出 `1`，且 `grep -c "5233a" docusaurus.config.js` 输出 `0`。
- [x] 3.3 改写 `themeConfig.footer.copyright`：格式为 `Copyright © ${new Date().getFullYear()} Maxgao. <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer">京ICP备19047090号</a>`，去掉 `My Project, Inc.` 与 `Built with Docusaurus`。验证：`grep -c "My Project\|Built with Docusaurus" docusaurus.config.js` 输出 `0`，且 `grep -c "Maxgao" docusaurus.config.js` 大于等于 2。

## 4. CI

- [x] 4.1 改 `.github/workflows/test-deploy.yml`：`actions/checkout@v4`、`actions/setup-node@v4` 用 `node-version-file: .nvmrc` 与 `cache: pnpm`、`pnpm/action-setup@v4`（不钉版本号），安装步骤改 `pnpm install --frozen-lockfile`，构建步骤改 `pnpm build`，删除全部 `yarn` 痕迹。验证：`grep -c "yarn" .github/workflows/test-deploy.yml` 输出 `0`，`grep -c "pnpm" .github/workflows/test-deploy.yml` 大于 0。
- [x] 4.2 同法改 `.github/workflows/deploy.yml`：`checkout@v4`、`setup-node@v4` + `node-version-file` + `cache: pnpm`、`pnpm/action-setup@v4`、`pnpm install --frozen-lockfile`、`pnpm build`，保留 `peaceiris/actions-gh-pages@v3` 与 `publish_dir: ./build` 不变。验证：`grep -c "yarn\|node-version: 18" .github/workflows/deploy.yml` 输出 `0`，且 `grep -c "publish_dir" .github/workflows/deploy.yml` 输出 `1`。

## 5. 本地构建验证

- [x] 5.1 跑生产构建。验证：`pnpm build` 退出码 0，输出 `[SUCCESS] Generated static files in "build"`。
- [x] 5.2 断言页脚产物。验证：`grep -o 'footer__copyright">[^<]*<a[^>]*>[^<]*</a>' build/index.html` 输出同时含 `Maxgao`、`京ICP备19047090号`、`beian.miit.gov.cn`，且不含 `My Project`。
- [x] 5.3 断言备案号全站覆盖。验证：`grep -rl "京ICP备19047090号" build --include="*.html" | wc -l` 的输出等于 `find build -name "*.html" | wc -l` 的输出。
- [x] 5.4 本地服务实访。验证：`pnpm serve` 起服务后 curl `http://localhost:3000/`、`/blog`、`/docs/intro` 三个路由均返回 200 且响应体含 `京ICP备19047090号`。

## 6. 提交与 CI 验证

- [x] 6.1 在 `upgrade/docusaurus-310` 分支提交全部改动（含 `openspec/` 与 `.claude/` 骨架）。验证：`git status --short` 干净，`git log --oneline -1` 显示本次提交且 `git diff main --stat` 只含预期文件。
- [x] 6.2 push 分支并建 PR。验证：`gh pr view --json number,url` 返回编号与 URL。
- [x] 6.3 等 PR workflow 结束。验证：`gh pr checks` 中 Test deployment 状态为 `pass`。
- [x] 6.4 合并后等 deploy workflow。验证：`gh run watch <id>` 成功，`git fetch origin gh-pages` 后 `git show origin/gh-pages:index.html` 含 `Maxgao` 与备案号。
- [x] 6.5 线上验证。验证：`curl -s "https://www.ga0x.com/?v=$(date +%s)"` 的页脚含 `Maxgao` 与 `京ICP备19047090号`，不含 `My Project`。

## 7. 外部未就绪项如实登记

- [x] 7.1 用新 key 实测 Algolia 查询。验证：`curl -X POST "https://LOUOXZQ42U-dsn.algolia.net/1/indexes/ga0x/query" -H "X-Algolia-API-Key: <新key>" -H "X-Algolia-Application-Id: LOUOXZQ42U" -H "Content-Type: application/json" -d '{"query":"kubernetes","hitsPerPage":1}'` 返回 HTTP 200。若返回 200 但 `hits` 为空，在 PR 描述中如实登记「前端 key 已就绪，索引侧需在 Algolia 后台重建爬虫」，不伪造通过。

## Workflow follow-up

- 校验通过后在 `openspec/changes/archive/` 归档本变更：`openspec archive upgrade-docusaurus-310`。
- 归档会把 4 个 capability 落到 `openspec/specs/`，成为后续变更的基线。
