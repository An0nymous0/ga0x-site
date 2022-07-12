---
title: '在 Docusaurus 中添加评论系统'
authors: gaoxu
tags: [Docusaurus, Disqus, giscus, utterances]
---

个人网站迁移到后 Docusaurus 后我发现官网是没有对评论做支持的，所以果断上github issues里查了一下 果然有人问，发现大概是通过swizzling自定义主题增强实现的，所以我查阅了一些API下面我把实现方式发出来 其实并不难。

## 常用的评论系统
1. [giscus](https://giscus.app/) - 通过Github的Discussions功能实现
2. [utterances](https://utteranc.es/) - 通过Github的Issues功能实现
3. [Disqus](https://disqus.com/) - 独立实现、类似搜狐畅言和多说这种

## 先决条件
1. 你的项目运行 Docusaurus，至少有一篇博文或文档
2. 你安装的主题是theme classic，也是默认的。
3. 根据对应的评论插件注册一下拿到配置

本文以 `giscus` 为例借鉴参考，对接其他评论插件也是大同小异

## 配置 giscus
先登录你的github账号安装 giscus 应用 [giscus app](https://github.com/apps/giscus)

进到[giscus](https://giscus.app/)的官网配置好语言、评论要发到的github仓库、页面与映射关系， 选择一个discussion分类、主题等。 拿到配置好的 `<script>` 标签。

类似：
```javascript
<script src="https://giscus.app/client.js"
        data-repo="xxxxx"
        data-repo-id="xxxx"
        data-category="xxxx"
        data-category-id="xxxxx"
        data-mapping="pathname"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="bottom"
        data-theme="light"
        data-lang="zh-CN"
        crossorigin="anonymous"
        async>
</script>
```


在你的 Docusaurus 项目根目录执行
```shell
 yarn swizzle @docusaurus/theme-classic BlogPostPage
```
选择 `Eject (Unsafe)` 回车

选择 `YES: I know what I am doing!` 回车

这时你的项目目录下`src/theme/BlogPostPage`生成了自定义主题的文件

下一步修改文件
:::info

下面`三处标注`是我们要修改添加代码的地方。 注意版本不同配置可能存在差异 根据标注自己找放评论的位置。

:::
```jsx title="src/theme/BlogPostPage/index.js"
// highlight-next-line
import React, { useEffect, useRef }  from 'react';
import clsx from 'clsx';
import {HtmlClassNameProvider, ThemeClassNames} from '@docusaurus/theme-common';
import {BlogPostProvider, useBlogPost} from '@docusaurus/theme-common/internal';
import BlogLayout from '@theme/BlogLayout';
import BlogPostItem from '@theme/BlogPostItem';
import BlogPostPaginator from '@theme/BlogPostPaginator';
import BlogPostPageMetadata from '@theme/BlogPostPage/Metadata';
import TOC from '@theme/TOC';
function BlogPostPageContent({sidebar, children}) {
  const {metadata, toc} = useBlogPost();
  const {nextItem, prevItem, frontMatter} = metadata;
  const {
    hide_table_of_contents: hideTableOfContents,
    toc_min_heading_level: tocMinHeadingLevel,
    toc_max_heading_level: tocMaxHeadingLevel,
  } = frontMatter;

  // highlight-start
  const commentElement = useRef(null);

  useEffect(() => {
    // Update the document title using the browser API
    let s = document.createElement("script");
    s.src = "https://giscus.app/client.js";
    s.setAttribute("data-repo", "[你的仓库]");
    s.setAttribute("data-repo-id", "[你的仓库 ID]=");
    s.setAttribute("data-category", "[你的分类名]");
    s.setAttribute("data-category-id", "[你的分类 ID]");
    s.setAttribute("data-mapping", "pathname");
    s.setAttribute("data-reactions-enabled", "1");
    s.setAttribute("data-emit-metadata", "0");
    s.setAttribute("data-input-position", "bottom");
    s.setAttribute("data-theme", "light");
    s.setAttribute("data-lang", "zh-CN");
    s.setAttribute("crossorigin", "anonymous");
    s.async = true;
    commentElement.current.appendChild(s);
  }, []);
  // highlight-end
  
  return (
    <BlogLayout
      sidebar={sidebar}
      toc={
        !hideTableOfContents && toc.length > 0 ? (
          <TOC
            toc={toc}
            minHeadingLevel={tocMinHeadingLevel}
            maxHeadingLevel={tocMaxHeadingLevel}
          />
        ) : undefined
      }>
      <BlogPostItem>{children}</BlogPostItem>

      {(nextItem || prevItem) && (
        <BlogPostPaginator nextItem={nextItem} prevItem={prevItem} />
      )}

      // highlight-next-line
      <div style={{marginTop:'20px'}} ref={commentElement}></div>
    </BlogLayout>
  );
}
export default function BlogPostPage(props) {
  const BlogPostContent = props.content;
  return (
    <BlogPostProvider content={props.content} isBlogPostPage>
      <HtmlClassNameProvider
        className={clsx(
          ThemeClassNames.wrapper.blogPages,
          ThemeClassNames.page.blogPostPage,
        )}>
        <BlogPostPageMetadata />
        <BlogPostPageContent sidebar={props.sidebar}>
          <BlogPostContent />
        </BlogPostPageContent>
      </HtmlClassNameProvider>
    </BlogPostProvider>
  );
}
```

至此评论添加完成

## 其他
如果需要修改样式或者想使用其他组件直接去官方找文档对应配置就可以。 

如果想用`Disqus`的话可以直接安装npm包引用到对应的界面就可以
```shell
yarn add disqus-react
# or
npm add disqus-react
```

Disqus配置+评论隐藏和展示控制
```markdown
---
slug: your-blog-post-slug
...
draft: true
no_comments: false # for Disqus
---
```

```jsx
import { DiscussionEmbed } from 'disqus-react'

function BlogPostPage(props) {
  ...
  const { slug, title, description, nextItem, prevItem } = metadata
  const { hide_table_of_contents: hideTableOfContents, no_comments } = frontMatter
  ...
  return (
  ...
  // after Edit this Page block
  {!no_comments && (
    <DiscussionEmbed
      shortname='your_website_disqus_shortname'
      config={{
        url: slug,
        identifier: slug,
        title: title,
        language: 'en_US',
      }}
    />
  )}
  // before nextItem
  ...
  )
}
```

## 参考

- [Report your customization use-cases](https://github.com/facebook/docusaurus/discussions/5468)
- [Is it possible to support visitor comments in Docusaurus?](https://stackoverflow.com/questions/57564623/is-it-possible-to-support-visitor-comments-in-docusaurus)
- [Comments in documents or blogs](https://docusaurus.io/ko/feature-requests/p/comments-in-documents-or-blogs)
- [giscus document](https://giscus.app/)