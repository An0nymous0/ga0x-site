import React, { useEffect, useRef }  from 'react';
import {HtmlClassNameProvider} from '@docusaurus/theme-common';
import {DocProvider} from '@docusaurus/theme-common/internal';
import DocItemMetadata from '@theme/DocItem/Metadata';
import DocItemLayout from '@theme/DocItem/Layout';
export default function DocItem(props) {
  const docHtmlClassName = `docs-doc-id-${props.content.metadata.id}`;
  const MDXComponent = props.content;

  const commentElement = useRef(null);

  useEffect(() => {
    // Update the document messages using the browser API
    let s = document.createElement("script");
    s.src = "https://giscus.app/client.js";
    s.setAttribute("data-repo", "An0nymous0/ga0x-site");
    s.setAttribute("data-repo-id", "MDEwOlJlcG9zaXRvcnkyODE4OTk3NzQ=");
    s.setAttribute("data-category", "Comments");
    s.setAttribute("data-category-id", "DIC_kwDOEM1y_s4CQK1p");
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

  return (
    <DocProvider content={props.content}>
      <HtmlClassNameProvider className={docHtmlClassName}>
        <DocItemMetadata />
        <DocItemLayout>
          <MDXComponent />
        </DocItemLayout>

        <div style={{marginTop:'20px'}} className="row">
          <div className="col col--9" ref={commentElement}></div>
        </div>
      </HtmlClassNameProvider>
    </DocProvider>
  );
}
