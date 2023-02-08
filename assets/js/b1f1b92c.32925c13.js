"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[683],{9613:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>d});var a=n(9496);function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){s(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,s=function(t,e){if(null==t)return{};var n,a,s={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(s[n]=t[n]);return s}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(s[n]=t[n])}return s}var l=a.createContext({}),u=function(t){var e=a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},c=function(t){var e=u(t.components);return a.createElement(l.Provider,{value:e},t.children)},m="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},g=a.forwardRef((function(t,e){var n=t.components,s=t.mdxType,o=t.originalType,l=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),m=u(n),g=s,d=m["".concat(l,".").concat(g)]||m[g]||p[g]||o;return n?a.createElement(d,r(r({ref:e},c),{},{components:n})):a.createElement(d,r({ref:e},c))}));function d(t,e){var n=arguments,s=e&&e.mdxType;if("string"==typeof t||s){var o=n.length,r=new Array(o);r[0]=g;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=t,i[m]="string"==typeof t?t:s,r[1]=i;for(var u=2;u<o;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},2031:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var a=n(4778),s=(n(9496),n(9613));const o={title:"\u5728 Docusaurus \u4e2d\u6dfb\u52a0\u8bc4\u8bba\u7cfb\u7edf",authors:"gaoxu",tags:["Docusaurus","Disqus","giscus","utterances"]},r=void 0,i={permalink:"/blog/2022/07/12/add-comments-to-docusaurus",editUrl:"https://github.com/An0nymous0/ga0x-site/tree/main/blog/2022-07-12-add-comments-to-docusaurus.md",source:"@site/blog/2022-07-12-add-comments-to-docusaurus.md",title:"\u5728 Docusaurus \u4e2d\u6dfb\u52a0\u8bc4\u8bba\u7cfb\u7edf",description:"\u4e2a\u4eba\u7f51\u7ad9\u8fc1\u79fb\u5230\u540e Docusaurus \u540e\u6211\u53d1\u73b0\u5b98\u7f51\u662f\u6ca1\u6709\u5bf9\u8bc4\u8bba\u505a\u652f\u6301\u7684\uff0c\u6240\u4ee5\u679c\u65ad\u4e0agithub issues\u91cc\u67e5\u4e86\u4e00\u4e0b \u679c\u7136\u6709\u4eba\u95ee\uff0c\u53d1\u73b0\u5927\u6982\u662f\u901a\u8fc7swizzling\u81ea\u5b9a\u4e49\u4e3b\u9898\u589e\u5f3a\u5b9e\u73b0\u7684\uff0c\u6240\u4ee5\u6211\u67e5\u9605\u4e86\u4e00\u4e9bAPI\u4e0b\u9762\u6211\u628a\u5b9e\u73b0\u65b9\u5f0f\u53d1\u51fa\u6765 \u5176\u5b9e\u5e76\u4e0d\u96be\u3002",date:"2022-07-12T00:00:00.000Z",formattedDate:"2022\u5e747\u670812\u65e5",tags:[{label:"Docusaurus",permalink:"/blog/tags/docusaurus"},{label:"Disqus",permalink:"/blog/tags/disqus"},{label:"giscus",permalink:"/blog/tags/giscus"},{label:"utterances",permalink:"/blog/tags/utterances"}],readingTime:2.716666666666667,hasTruncateMarker:!1,authors:[{name:"xu gao",title:"Full stack developer",url:"https://github.com/an0nymous",imageURL:"https://avatars.githubusercontent.com/u/6836030?v=4",key:"gaoxu"}],frontMatter:{title:"\u5728 Docusaurus \u4e2d\u6dfb\u52a0\u8bc4\u8bba\u7cfb\u7edf",authors:"gaoxu",tags:["Docusaurus","Disqus","giscus","utterances"]},prevItem:{title:"\u4eca\u5929\u5f88\u591a CTO \u90fd\u662f\u88ab\u5e72\u6389\u7684\uff0c\u56e0\u4e3a\u4ed6\u6ca1\u6709\u6210\u5c31\u4e1a\u52a1",permalink:"/blog/2022/07/14/cto-manage"},nextItem:{title:"ncdu \u78c1\u76d8\u5206\u6790\u67e5\u770b\u5de5\u5177\u4f7f\u7528",permalink:"/blog/2022/06/28/ncdu-tools"}},l={authorsImageUrls:[void 0]},u=[{value:"\u5e38\u7528\u7684\u8bc4\u8bba\u7cfb\u7edf",id:"\u5e38\u7528\u7684\u8bc4\u8bba\u7cfb\u7edf",level:2},{value:"\u5148\u51b3\u6761\u4ef6",id:"\u5148\u51b3\u6761\u4ef6",level:2},{value:"\u914d\u7f6e giscus",id:"\u914d\u7f6e-giscus",level:2},{value:"\u5176\u4ed6",id:"\u5176\u4ed6",level:2},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}],c={toc:u},m="wrapper";function p(t){let{components:e,...n}=t;return(0,s.kt)(m,(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"\u4e2a\u4eba\u7f51\u7ad9\u8fc1\u79fb\u5230\u540e Docusaurus \u540e\u6211\u53d1\u73b0\u5b98\u7f51\u662f\u6ca1\u6709\u5bf9\u8bc4\u8bba\u505a\u652f\u6301\u7684\uff0c\u6240\u4ee5\u679c\u65ad\u4e0agithub issues\u91cc\u67e5\u4e86\u4e00\u4e0b \u679c\u7136\u6709\u4eba\u95ee\uff0c\u53d1\u73b0\u5927\u6982\u662f\u901a\u8fc7swizzling\u81ea\u5b9a\u4e49\u4e3b\u9898\u589e\u5f3a\u5b9e\u73b0\u7684\uff0c\u6240\u4ee5\u6211\u67e5\u9605\u4e86\u4e00\u4e9bAPI\u4e0b\u9762\u6211\u628a\u5b9e\u73b0\u65b9\u5f0f\u53d1\u51fa\u6765 \u5176\u5b9e\u5e76\u4e0d\u96be\u3002"),(0,s.kt)("h2",{id:"\u5e38\u7528\u7684\u8bc4\u8bba\u7cfb\u7edf"},"\u5e38\u7528\u7684\u8bc4\u8bba\u7cfb\u7edf"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("a",{parentName:"li",href:"https://giscus.app/"},"giscus")," - \u901a\u8fc7Github\u7684Discussions\u529f\u80fd\u5b9e\u73b0"),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("a",{parentName:"li",href:"https://utteranc.es/"},"utterances")," - \u901a\u8fc7Github\u7684Issues\u529f\u80fd\u5b9e\u73b0"),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("a",{parentName:"li",href:"https://disqus.com/"},"Disqus")," - \u72ec\u7acb\u5b9e\u73b0\u3001\u7c7b\u4f3c\u641c\u72d0\u7545\u8a00\u548c\u591a\u8bf4\u8fd9\u79cd")),(0,s.kt)("h2",{id:"\u5148\u51b3\u6761\u4ef6"},"\u5148\u51b3\u6761\u4ef6"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"\u4f60\u7684\u9879\u76ee\u8fd0\u884c Docusaurus\uff0c\u81f3\u5c11\u6709\u4e00\u7bc7\u535a\u6587\u6216\u6587\u6863"),(0,s.kt)("li",{parentName:"ol"},"\u4f60\u5b89\u88c5\u7684\u4e3b\u9898\u662ftheme classic\uff0c\u4e5f\u662f\u9ed8\u8ba4\u7684\u3002"),(0,s.kt)("li",{parentName:"ol"},"\u6839\u636e\u5bf9\u5e94\u7684\u8bc4\u8bba\u63d2\u4ef6\u6ce8\u518c\u4e00\u4e0b\u62ff\u5230\u914d\u7f6e")),(0,s.kt)("p",null,"\u672c\u6587\u4ee5 ",(0,s.kt)("inlineCode",{parentName:"p"},"giscus")," \u4e3a\u4f8b\u501f\u9274\u53c2\u8003\uff0c\u5bf9\u63a5\u5176\u4ed6\u8bc4\u8bba\u63d2\u4ef6\u4e5f\u662f\u5927\u540c\u5c0f\u5f02"),(0,s.kt)("h2",{id:"\u914d\u7f6e-giscus"},"\u914d\u7f6e giscus"),(0,s.kt)("p",null,"\u5148\u767b\u5f55\u4f60\u7684github\u8d26\u53f7\u5b89\u88c5 giscus \u5e94\u7528 ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/apps/giscus"},"giscus app")),(0,s.kt)("p",null,"\u8fdb\u5230",(0,s.kt)("a",{parentName:"p",href:"https://giscus.app/"},"giscus"),"\u7684\u5b98\u7f51\u914d\u7f6e\u597d\u8bed\u8a00\u3001\u8bc4\u8bba\u8981\u53d1\u5230\u7684github\u4ed3\u5e93\u3001\u9875\u9762\u4e0e\u6620\u5c04\u5173\u7cfb\uff0c \u9009\u62e9\u4e00\u4e2adiscussion\u5206\u7c7b\u3001\u4e3b\u9898\u7b49\u3002 \u62ff\u5230\u914d\u7f6e\u597d\u7684 ",(0,s.kt)("inlineCode",{parentName:"p"},"<script>")," \u6807\u7b7e\u3002"),(0,s.kt)("p",null,"\u7c7b\u4f3c\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'<script src="https://giscus.app/client.js"\n        data-repo="xxxxx"\n        data-repo-id="xxxx"\n        data-category="xxxx"\n        data-category-id="xxxxx"\n        data-mapping="pathname"\n        data-reactions-enabled="1"\n        data-emit-metadata="0"\n        data-input-position="bottom"\n        data-theme="light"\n        data-lang="zh-CN"\n        crossorigin="anonymous"\n        async>\n<\/script>\n')),(0,s.kt)("p",null,"\u5728\u4f60\u7684 Docusaurus \u9879\u76ee\u6839\u76ee\u5f55\u6267\u884c"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"}," yarn swizzle @docusaurus/theme-classic BlogPostPage\n")),(0,s.kt)("p",null,"\u9009\u62e9 ",(0,s.kt)("inlineCode",{parentName:"p"},"Eject (Unsafe)")," \u56de\u8f66"),(0,s.kt)("p",null,"\u9009\u62e9 ",(0,s.kt)("inlineCode",{parentName:"p"},"YES: I know what I am doing!")," \u56de\u8f66"),(0,s.kt)("p",null,"\u8fd9\u65f6\u4f60\u7684\u9879\u76ee\u76ee\u5f55\u4e0b",(0,s.kt)("inlineCode",{parentName:"p"},"src/theme/BlogPostPage"),"\u751f\u6210\u4e86\u81ea\u5b9a\u4e49\u4e3b\u9898\u7684\u6587\u4ef6"),(0,s.kt)("p",null,"\u4e0b\u4e00\u6b65\u4fee\u6539\u6587\u4ef6"),(0,s.kt)("admonition",{type:"info"},(0,s.kt)("p",{parentName:"admonition"},"\u4e0b\u9762",(0,s.kt)("inlineCode",{parentName:"p"},"\u4e09\u5904\u6807\u6ce8"),"\u662f\u6211\u4eec\u8981\u4fee\u6539\u6dfb\u52a0\u4ee3\u7801\u7684\u5730\u65b9\u3002 \u6ce8\u610f\u7248\u672c\u4e0d\u540c\u914d\u7f6e\u53ef\u80fd\u5b58\u5728\u5dee\u5f02 \u6839\u636e\u6807\u6ce8\u81ea\u5df1\u627e\u653e\u8bc4\u8bba\u7684\u4f4d\u7f6e\u3002")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/theme/BlogPostPage/index.js"',title:'"src/theme/BlogPostPage/index.js"'},'// highlight-next-line\nimport React, { useEffect, useRef }  from \'react\';\nimport clsx from \'clsx\';\nimport {HtmlClassNameProvider, ThemeClassNames} from \'@docusaurus/theme-common\';\nimport {BlogPostProvider, useBlogPost} from \'@docusaurus/theme-common/internal\';\nimport BlogLayout from \'@theme/BlogLayout\';\nimport BlogPostItem from \'@theme/BlogPostItem\';\nimport BlogPostPaginator from \'@theme/BlogPostPaginator\';\nimport BlogPostPageMetadata from \'@theme/BlogPostPage/Metadata\';\nimport TOC from \'@theme/TOC\';\nfunction BlogPostPageContent({sidebar, children}) {\n  const {metadata, toc} = useBlogPost();\n  const {nextItem, prevItem, frontMatter} = metadata;\n  const {\n    hide_table_of_contents: hideTableOfContents,\n    toc_min_heading_level: tocMinHeadingLevel,\n    toc_max_heading_level: tocMaxHeadingLevel,\n  } = frontMatter;\n\n  // highlight-start\n  const commentElement = useRef(null);\n\n  useEffect(() => {\n    // Update the document title using the browser API\n    let s = document.createElement("script");\n    s.src = "https://giscus.app/client.js";\n    s.setAttribute("data-repo", "[\u4f60\u7684\u4ed3\u5e93]");\n    s.setAttribute("data-repo-id", "[\u4f60\u7684\u4ed3\u5e93 ID]=");\n    s.setAttribute("data-category", "[\u4f60\u7684\u5206\u7c7b\u540d]");\n    s.setAttribute("data-category-id", "[\u4f60\u7684\u5206\u7c7b ID]");\n    s.setAttribute("data-mapping", "pathname");\n    s.setAttribute("data-reactions-enabled", "1");\n    s.setAttribute("data-emit-metadata", "0");\n    s.setAttribute("data-input-position", "bottom");\n    s.setAttribute("data-theme", "light");\n    s.setAttribute("data-lang", "zh-CN");\n    s.setAttribute("crossorigin", "anonymous");\n    s.async = true;\n    commentElement.current.appendChild(s);\n  }, []);\n  // highlight-end\n  \n  return (\n    <BlogLayout\n      sidebar={sidebar}\n      toc={\n        !hideTableOfContents && toc.length > 0 ? (\n          <TOC\n            toc={toc}\n            minHeadingLevel={tocMinHeadingLevel}\n            maxHeadingLevel={tocMaxHeadingLevel}\n          />\n        ) : undefined\n      }>\n      <BlogPostItem>{children}</BlogPostItem>\n\n      {(nextItem || prevItem) && (\n        <BlogPostPaginator nextItem={nextItem} prevItem={prevItem} />\n      )}\n\n      // highlight-next-line\n      <div style={{marginTop:\'20px\'}} ref={commentElement}></div>\n    </BlogLayout>\n  );\n}\nexport default function BlogPostPage(props) {\n  const BlogPostContent = props.content;\n  return (\n    <BlogPostProvider content={props.content} isBlogPostPage>\n      <HtmlClassNameProvider\n        className={clsx(\n          ThemeClassNames.wrapper.blogPages,\n          ThemeClassNames.page.blogPostPage,\n        )}>\n        <BlogPostPageMetadata />\n        <BlogPostPageContent sidebar={props.sidebar}>\n          <BlogPostContent />\n        </BlogPostPageContent>\n      </HtmlClassNameProvider>\n    </BlogPostProvider>\n  );\n}\n')),(0,s.kt)("p",null,"\u81f3\u6b64\u8bc4\u8bba\u6dfb\u52a0\u5b8c\u6210"),(0,s.kt)("h2",{id:"\u5176\u4ed6"},"\u5176\u4ed6"),(0,s.kt)("p",null,"\u5982\u679c\u9700\u8981\u4fee\u6539\u6837\u5f0f\u6216\u8005\u60f3\u4f7f\u7528\u5176\u4ed6\u7ec4\u4ef6\u76f4\u63a5\u53bb\u5b98\u65b9\u627e\u6587\u6863\u5bf9\u5e94\u914d\u7f6e\u5c31\u53ef\u4ee5\u3002 "),(0,s.kt)("p",null,"\u5982\u679c\u60f3\u7528",(0,s.kt)("inlineCode",{parentName:"p"},"Disqus"),"\u7684\u8bdd\u53ef\u4ee5\u76f4\u63a5\u5b89\u88c5npm\u5305\u5f15\u7528\u5230\u5bf9\u5e94\u7684\u754c\u9762\u5c31\u53ef\u4ee5"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add disqus-react\n# or\nnpm add disqus-react\n")),(0,s.kt)("p",null,"Disqus\u914d\u7f6e+\u8bc4\u8bba\u9690\u85cf\u548c\u5c55\u793a\u63a7\u5236"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-markdown"},"---\nslug: your-blog-post-slug\n...\ndraft: true\nno_comments: false # for Disqus\n---\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx"},"import { DiscussionEmbed } from 'disqus-react'\n\nfunction BlogPostPage(props) {\n  ...\n  const { slug, title, description, nextItem, prevItem } = metadata\n  const { hide_table_of_contents: hideTableOfContents, no_comments } = frontMatter\n  ...\n  return (\n  ...\n  // after Edit this Page block\n  {!no_comments && (\n    <DiscussionEmbed\n      shortname='your_website_disqus_shortname'\n      config={{\n        url: slug,\n        identifier: slug,\n        title: title,\n        language: 'en_US',\n      }}\n    />\n  )}\n  // before nextItem\n  ...\n  )\n}\n")),(0,s.kt)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/facebook/docusaurus/discussions/5468"},"Report your customization use-cases")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/57564623/is-it-possible-to-support-visitor-comments-in-docusaurus"},"Is it possible to support visitor comments in Docusaurus?")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docusaurus.io/ko/feature-requests/p/comments-in-documents-or-blogs"},"Comments in documents or blogs")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://giscus.app/"},"giscus document"))))}p.isMDXComponent=!0}}]);