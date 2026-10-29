import React from 'react';
import NotFound from '@theme-original/NotFound';

// 尾斜杠归一化兜底。
//
// 背景：本站 trailingSlash: false，规范 URL 不带尾斜杠（sitemap.xml 里全部如此）。
// 但 GitHub Pages 是纯静态托管，请求 /blog/ 时会先看有没有 build/blog/ 目录——
// blog/ 目录存在（存年份归档），里面又没有 index.html，于是直接返回 404.html，
// 不会回退到 blog.html。同理 /docs/ 因为 build/docs/ 存在也 404。
//
// GitHub Pages 不支持 _redirects / _headers 之类的服务端重定向规则，所以只能在
// 404 页面上做一次客户端跳转。放在这里而不是独立 <script>，是因为 404.html 的
// head 无法通过配置注入自定义脚本，而本组件会被打进 404 页面的 bundle。
function useTrailingSlashFix() {
  const [done, setDone] = React.useState(false);

  React.useEffect(() => {
    if (done || typeof window === 'undefined') return;
    const {pathname, search, hash} = window.location;

    // 只处理带尾斜杠且非根路径的情况
    if (pathname.length > 1 && pathname.endsWith('/')) {
      setDone(true);
      const target = pathname.replace(/\/+$/, '') + search + hash;
      // replace 而非 assign，避免污染浏览器历史
      window.location.replace(target);
    }
  }, [done]);
}

export default function NotFoundWrapper(props) {
  useTrailingSlashFix();

  return (
    <>
      <NotFound {...props} />
    </>
  );
}
