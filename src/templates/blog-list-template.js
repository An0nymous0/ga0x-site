import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../layouts"

export default class BlogList extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges

    const { currentPage, numPages } = this.props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? "/blog" : (currentPage - 1).toString()
    const nextPage = (currentPage + 1).toString()
    return (
      <Layout>

          {posts.map(post => (
            <div className="columns"  key={post.node.id}>
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
        <div className="columns">
          <div className="column is-full">
            <nav className="pagination is-centered" role="navigation" aria-label="pagination">
              {!isFirst && (
                <Link to={prevPage} rel="prev" className="pagination-previous">
                  ← Previous Page
                </Link>
              )}
              {!isLast && (
                <Link to={nextPage} rel="next" className="pagination-next">
                  Next Page →
                </Link>
              )}
            </nav>
          </div>
        </div>
      </Layout>
    )
  }
}

export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
      filter: { frontmatter: { draft: { ne: true }, example: { ne: true } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "YYYY-DD-MM")
          }
          excerpt
          id
        }
      }
    }
  }
`