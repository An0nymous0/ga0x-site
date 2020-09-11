import React from "react"
import { Link, StaticQuery, graphql, useStaticQuery } from "gatsby"
import Logo from "../images/logo.png"
import Image from "../components/image"

import "typeface-space-mono"
import "typeface-spectral"

import "prismjs/themes/prism-solarizedlight.css"
import "prismjs/plugins/line-numbers/prism-line-numbers.css"
import Img from "gatsby-image"
import Header from "../components/header"

class Layout extends React.Component {
  scrollToAnchor = () => {
    let element = document.getElementById('asdf');
    let height = document.getElementById('asdf').offsetTop; //计算需要向上移动的距离
    element.scroll({
      top: height, //向上移动的距离，如果有fixede布局， 直接减去对应距离即可
      behavior: 'smooth', // 平滑移动
    });
  }
  render() {
    return (
      <StaticQuery
        query={graphql`
          query {
            site {
              siteMetadata {
                author
                homepage
              }
            }
            logoImage: file(relativePath: { eq: "logo.png" }) {
              childImageSharp {
                # fluid(maxWidth: 114,maxHeight:28) {
                #   ...GatsbyImageSharpFluid
                # }
                fixed(width: 117,height:28) {
                  # Choose either the fragment including a small base64ed image, a traced placeholder SVG, or one without.
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        `}
        render={data => {
          const { author, homepage } = data.site.siteMetadata
          const logoImage = data.logoImage
          return (
            // <div>
            //   <div {...styles.container} {...styles.verticalPadding}>
            //     <Link
            //       to="/"
            //       css={{
            //         display: `inline-block`,
            //         textDecoration: `none`,
            //       }}
            //     >
            //       <h1
            //         css={{
            //           ...scale(0),
            //           color: styles.colors.light,
            //           fontWeight: `normal`,
            //           lineHeight: 1,
            //           margin: 0,
            //         }}
            //       >
            //         Ga0x
            //       </h1>
            //     </Link>
            //   </div>
            //   <div {...styles.container} {...styles.verticalPadding}>
            //     {this.props.children}
            //     <div
            //       css={{
            //         ...scale(-0.5),
            //         color: styles.colors.light,
            //       }}
            //     >
            //       powered by
            //       {` `}
            //       <a target="_blank" rel="noopener noreferrer" href={homepage}>
            //         {author}
            //       </a>
            //     </div>
            //   </div>
            // </div>
            <div className="has-navbar-fixed-top">
              <nav id="asdf" className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                  <Link className="navbar-item" to="/">
                    <img src={Logo} width="112" height="28"></img>
                    {/*<Img fixed={data.logoImage.childImageSharp.fixed} loading="eager" backgroundColor="false" />*/}
                    {/*<div>{data.logoImage.childImageSharp.fluid}</div>*/}
                    {/*<Image />*/}
                  </Link>

                  <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false"
                     data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                  </a>
                </div>

                <div id="navbarBasicExample" className="navbar-menu">
                  <div className="navbar-start">
                    <Link className="navbar-item" to="/">
                      首页
                    </Link>
                  </div>
                </div>
              </nav>
              {/*<section className="hero is-medium is-primary is-bold">*/}
              {/*  <div className="hero-body">*/}
              {/*    <div className="container has-text-centered">*/}
              {/*      <h1 className="title">*/}
              {/*        Coder*/}
              {/*      </h1>*/}
              {/*    </div>*/}
              {/*  </div>*/}
              {/*</section>*/}
              <div className="container" style={{ marginTop: "65px" }}>
                <div>
                  {this.props.children}
                </div>
                <footer className="footer">
                  <div className="content has-text-centered">
                    <p>
                      <strong>Bulma</strong> by <a href="http://ga0x.com">Ga0x</a>. The source code is
                      licensed
                      <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
                      is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
                    </p>
                  </div>
                </footer>
              </div>
            </div>
          )
        }}
      />
    )
  }
}

export default Layout