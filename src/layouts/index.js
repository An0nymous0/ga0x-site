import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import { scale } from "../utils/typography"
import styles from "../styles"
import Logo from "../images/logo.png"

import "typeface-space-mono"
import "typeface-spectral"

import "prismjs/themes/prism-solarizedlight.css"
import "prismjs/plugins/line-numbers/prism-line-numbers.css"

class Layout extends React.Component {
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
          }
        `}
        render={data => {
          const { author, homepage } = data.site.siteMetadata
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
            <div className="container">
              <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                  <Link className="navbar-item" to="/">
                    <img src={Logo} width="112" height="28"/>
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

                    {/*<a className="navbar-item">*/}
                    {/*  Documentation*/}
                    {/*</a>*/}

                    {/*<div className="navbar-item has-dropdown is-hoverable">*/}
                    {/*  <a className="navbar-link">*/}
                    {/*    More*/}
                    {/*  </a>*/}

                    {/*  <div className="navbar-dropdown">*/}
                    {/*    <a className="navbar-item">*/}
                    {/*      About*/}
                    {/*    </a>*/}
                    {/*    <a className="navbar-item">*/}
                    {/*      Jobs*/}
                    {/*    </a>*/}
                    {/*    <a className="navbar-item">*/}
                    {/*      Contact*/}
                    {/*    </a>*/}
                    {/*    <hr className="navbar-divider"/>*/}
                    {/*      <a className="navbar-item">*/}
                    {/*        Report an issue*/}
                    {/*      </a>*/}
                    {/*  </div>*/}
                    {/*</div>*/}
                  </div>

                  {/*<div className="navbar-end">*/}
                  {/*  <div className="navbar-item">*/}
                  {/*    <div className="buttons">*/}
                  {/*      <a className="button is-primary">*/}
                  {/*        <strong>Sign up</strong>*/}
                  {/*      </a>*/}
                  {/*      <a className="button is-light">*/}
                  {/*        Log in*/}
                  {/*      </a>*/}
                  {/*    </div>*/}
                  {/*  </div>*/}
                  {/*</div>*/}
                </div>
              </nav>
              <div className="column is-6 is-offset-3">
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
          )
        }}
      />
    )
  }
}

export default Layout