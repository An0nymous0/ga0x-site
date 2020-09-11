import React from "react"
import "./mystyles.scss"
import "./global.css"
import "./index.css"
import { Link, graphql } from "gatsby"
import Layout from "../layouts"

class Index extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    return (
      <Layout location={this.props.location}>
        <div className="columns is-8 is-variable">
          <div className="column is-9">
            {posts.map(post => (
              <div className="card" key={post.node.id} style={{marginBottom:'20px'}}>
                <div className="card-content">
                  <p className="title" style={{ color: "black",fontSize:"1.3rem" }}>
                    <Link to={post.node.fields.slug} className="link-underline">
                      {post.node.frontmatter.title}
                    </Link>
                  </p>
                  <p className="subtitle" style={{ fontSize:"1rem",color:"#999999" }}>
                    {post.node.excerpt}
                  </p>
                  <time>{post.node.frontmatter.date}</time>
                </div>
              </div>
            ))}
          </div>
          <div className="column is-3">
            {/*{this.props.children}*/}
            123
          </div>
        </div>
        {/*<div className="columns is-mobile is-centered">*/}
        {/*  <div className="column is-half">*/}
        {/*      <code className="html">is-half</code><br/>*/}
        {/*  </div>*/}
        {/*</div>*/}
        <div className="columns is-centered">
          <div className="column" style={{ textAlign: "center" }}>
            <Link to="/blog" rel="next" className="button is-primary is-light">
              更多
            </Link>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Index

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      limit: 10
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { draft: { ne: true }, example: { ne: true } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "YYYY-MM-DD")
          }
          excerpt
          id
        }
      }
    }
  }
`