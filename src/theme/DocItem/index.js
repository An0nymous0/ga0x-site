import React, { useEffect, useRef }  from 'react';
import {HtmlClassNameProvider} from '@docusaurus/theme-common';
import {DocProvider} from '@docusaurus/theme-common/internal';
import DocItemMetadata from '@theme/DocItem/Metadata';
import DocItemLayout from '@theme/DocItem/Layout';
export default function DocItem(props) {
  const docHtmlClassName = `docs-doc-id-${props.content.metadata.unversionedId}`;
  const MDXComponent = props.content;

  const commentElement = useRef(null);

  useEffect(() => {
    // Update the document title using the browser API
    let s = document.createElement("script");
    s.src = "https://utteranc.es/client.js";
    s.setAttribute("repo", "An0nymous0/ga0x-site");
    s.setAttribute("issue-term", "pathname");
    s.setAttribute("label", "comment✨💬✨");
    s.setAttribute("theme", "github-light");
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

        <div className="row">
          <div className="col col--9" ref={commentElement}></div>
        </div>
      </HtmlClassNameProvider>
    </DocProvider>
  );
}
