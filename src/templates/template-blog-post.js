import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import rehype2react from "rehype-react"

import Counter from "../components/Counter"
import Layout from "../layouts"

import "./template-blog-post.scss"
import "katex/dist/katex.min.css"
import "github-markdown-css/github-markdown.css"
import SEO from "../components/seo"

const renderAst = new rehype2react({
  createElement: React.createElement,
  components: { "interactive-counter": Counter }
}).Compiler

class BlogPostRoute extends React.Component {
  render() {
    const post = this.props.data.markdownRemark

    let tags
    let tagsSection
    if (post.fields.tagSlugs) {
      const tagsArray = post.fields.tagSlugs
      tags = tagsArray.map((tag, i) => {
        const divider = i < tagsArray.length - 1 && <span>{`, `}</span>
        return (
          <span key={tag}>
            <Link to={tag}>{post.frontmatter.tags[i]}</Link>
            {divider}
          </span>
        )
      })
      tagsSection = (
        <span
          css={{
            fontStyle: `normal`,
            textAlign: `left`
          }}
        >
          tagged {tags}
        </span>
      )
    }

    return (
      <Layout location={this.props.location}>
        <SEO title={post.frontmatter.title}/>
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="content">
              <header>
                <h1>{post.frontmatter.title}</h1>
                <h1
                  css={{
                    color: post.frontmatter.shadow
                  }}
                >
                </h1>
                <p>
                  {post.timeToRead} min read &middot; {tagsSection}
                </p>
              </header>

              <div dangerouslySetInnerHTML={{ __html: post.tableOfContents }}/>
              {renderAst(post.htmlAst)}
            </div>
            <hr/>
            <p>
              <Img
                alt={`Avatar of ${post.frontmatter.author.id}`}
                fixed={post.frontmatter.author.avatar.children[0].fixed}
                css={{
                  borderRadius: `100%`,
                  float: `left`,
                  marginBottom: 0
                }}
                Tag="span"
              />
              <span
              >
              <small
              >
                {post.frontmatter.author.id}
              </small>
                {` `}
                {post.frontmatter.author.bio}
            </span>
            </p>
          </div>
        </div>
      </Layout>
    )
  }
}

export default BlogPostRoute

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
      timeToRead
      tableOfContents
      fields {
        tagSlugs
      }
      frontmatter {
        title
        tags
        date(formatString: "YYYY-MM-DD")
        author {
          id
          bio
          avatar {
            children {
              ... on ImageSharp {
                fixed(width: 50, height: 50, quality: 75) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
`