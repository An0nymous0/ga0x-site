// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Maxgao',
  tagline: 'record daily work',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://www.ga0x.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'An0nymous0', // Usually your GitHub org/user name.
  projectName: 'ga0x-site', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'throw',

  // 尾斜杠归一化兜底（内联、阻塞式，在 hydration 之前执行）。
  //
  // 背景：本站 trailingSlash: false，规范 URL 不带尾斜杠（sitemap 里全部如此）。
  // 但 GitHub Pages 是纯静态托管，请求 /blog/ 时会先看有没有 build/blog/ 目录——
  // blog/ 目录存在（存年份归档），里面没有 index.html，于是直接返回 404.html。
  //
  // ⚠️ 必须带循环保护：不是所有目录都有对应的 X.html。
  //   - /blog  -> 有 build/blog.html，GH Pages 直接 200  -> 跳转成立
  //   - /docs  -> 没有 build/docs.html，GH Pages 会 301 到 /docs/
  //               -> 脚本再跳回 /docs -> 301 回 /docs/ -> 无限循环
  // 所以用 sessionStorage 记一个"本会话已为该路径尝试过跳转"的标记：
  // 第一次跳，第二次（发现又回到同一带斜杠路径）就放弃，正常渲染 404。
  //
  // 放在 headTags 而不是 404 组件的 useEffect：后者要等 JS bundle 水合才跑。
  headTags: [
    {
      tagName: 'script',
      attributes: {type: 'text/javascript'},
      innerHTML: `(function(){try{
var p=location.pathname;
if(p.length<=1||p.charAt(p.length-1)!=="/")return;
var k="ts-redir:"+p;
try{if(sessionStorage.getItem(k))return;sessionStorage.setItem(k,"1");}catch(e){return;}
location.replace(p.replace(/\\/+$/,"")+location.search+location.hash);
}catch(e){}})();`,
    },
  ],

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/An0nymous0/ga0x-site/tree/main',
          showLastUpdateTime: true
        },
        blog: {
          showReadingTime: true,
          readingTime: ({content, frontMatter, defaultReadingTime}) =>
            defaultReadingTime({content, options: {wordsPerMinute: 300}}),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/An0nymous0/ga0x-site/tree/main',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        gtag: {
          trackingID: 'G-1FSHV9QKBM',
          anonymizeIP: true
        }
      }),
    ],
  ],

  themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        {name: 'keywords', content: 'blog, 科技, 技术, 代码分享'},
        // 站点级默认 description。此前缺失，导致所有未写 frontmatter description 的
        // 页面输出模板默认值 "Description will go into a meta tag in <head />"。
        {
          name: 'description',
          content: '高旭（Maxgao）的技术笔记：Kubernetes、Java、Linux 运维实践与架构决策记录。',
        },
      ],
      // 社交预览图。原值为 img/docusaurus-social-card.jpg，但该文件在仓库中
      // 从未存在过（og:image 长期 404），已替换为自建卡片。
      image: 'img/social-card.jpg',
      navbar: {
        title: 'Maxgao',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '笔记',
          },
          {to: '/blog', label: '文章', position: 'left'},
          {to: 'https://devtools.ga0x.com', label: 'Devtools开发工具', position: 'left'},
          {
            href: 'https://github.com/An0nymous0',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Blog Discussions',
                href: 'https://github.com/An0nymous0/ga0x-site/discussions',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/An0nymous0',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Maxgao. <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer">京ICP备19047090号</a>`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['java', 'powershell'],
      },
      algolia: {
        // Algolia 提供的应用 ID
        appId: 'LOUOXZQ42U',

        //  公开 API 密钥：提交它没有危险
        apiKey: '30fbc18f2e759a30181abc05eebe23b7',

        indexName: 'ga0x',

        // 可选：见下文
        contextualSearch: true,

        // 可选：声明哪些域名需要用 window.location 型的导航而不是 history.push。 适用于 Algolia 配置会爬取多个文档站点，而我们想要用 window.location.href 在它们之间跳转时。
        // externalUrlRegex: 'external\\.com|domain\\.com',

        // 可选：Algolia 搜索参数
        // searchParameters: {},

        // 可选：搜索页面的路径，默认启用（可以用 `false` 禁用）
        searchPagePath: 'search',

        // ……其他 Algolia 参数
      }
    }),

  plugins: [
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 70,
        max: 1030, // max resized image's size.
        min: 640, // min resized image's size. if original is lower, use that size.
        steps: 2, // the max number of images generated between min and max (inclusive)
        disableInDev: false,
      },
    ],
  ],
};

export default config;
