import React from "react"
import "./mystyles.scss"
import "./global.css"
import { Link, graphql } from "gatsby"
import Layout from "../layouts"
import styles from "../styles"
import presets from "../utils/presets"
import { rhythm, scale } from "../utils/typography"

class Index extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location}>
        {posts.map(post => (
          <div className="columns" key={post.node.id}>
            <div className="column is-full">
              <div className="card">
                <div className="card-content">
                  <p className="title" style={{ color: "black" }}>
                    <Link to={post.node.fields.slug} className="link-underline">
                      {post.node.frontmatter.title}
                    </Link>
                  </p>
                  <p className="subtitle">
                    {post.node.excerpt}
                  </p>
                  <time>{post.node.frontmatter.date}</time>
                </div>
              </div>
            </div>
          </div>
        ))}
        {/*<div className="columns is-mobile is-centered">*/}
        {/*  <div className="column is-half">*/}
        {/*      <code className="html">is-half</code><br/>*/}
        {/*  </div>*/}
        {/*</div>*/}
        <div className="columns is-centered">
          <div className="column" style={{textAlign:'center'}}>
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