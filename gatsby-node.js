/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const _ = require(`lodash`)
const path = require(`path`)
const { slash } = require(`gatsby-core-utils`)
const { createFilePath } = require("gatsby-source-filesystem")

const LodashModuleReplacementPlugin = require(`lodash-webpack-plugin`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve(`src/templates/template-blog-post.js`)
  const blogListTemplate = path.resolve(`src/templates/blog-list-template.js`)
  const tagPagesTemplate = path.resolve(`src/templates/template-tag-page.js`)
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          limit: 1000
          filter: { frontmatter: { draft: { ne: true } } }
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                tags
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create blog posts pages.
  result.data.allMarkdownRemark.edges.forEach(edge => {
    createPage({
      path: edge.node.fields.slug, // required
      component: slash(blogPostTemplate),
      context: {
        slug: edge.node.fields.slug,
        highlight: edge.node.frontmatter.highlight,
        shadow: edge.node.frontmatter.shadow,
      },
    })
  })

  const result1 = await graphql(
    `
      {
        allMarkdownRemark(
          limit: 1000
          filter: { frontmatter: { draft: { ne: true }, example: { ne: true } } }
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                tags
              }
            }
          }
        }
      }
    `
  )

  if (result1.errors) {
    throw result1.errors
  }

  // Create blog-list pages
  const posts = result1.data.allMarkdownRemark.edges
  const postsPerPage = 10
  const numPages = Math.ceil(posts.length / postsPerPage)
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog` : `/blog/${i + 1}`,
      component: slash(blogListTemplate),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })

  // Create tag pages.
  let tags = []
  result.data.allMarkdownRemark.edges.forEach(edge => {
    if (_.get(edge, `node.frontmatter.tags`)) {
      tags = tags.concat(edge.node.frontmatter.tags)
    }
  })
  tags = _.uniq(tags)
  tags.forEach(tag => {
    const tagPath = `/tags/${_.kebabCase(tag)}/`
    createPage({
      path: tagPath,
      component: tagPagesTemplate,
      context: {
        tag,
      },
    })
  })

}

// Add custom url pathname for blog posts.
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `File`) {
    const parsedFilePath = path.parse(node.absolutePath)
    const slug = `/${parsedFilePath.dir.split(`---`)[1]}/`
    createNodeField({ node, name: `slug`, value: slug })
  } else if (
    node.internal.type === `MarkdownRemark` &&
    typeof node.slug === `undefined`
  ) {
    const fileNode = getNode(node.parent)
    createNodeField({
      node,
      name: `slug`,
      value: fileNode.fields.slug,
    })

    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })

    if (node.frontmatter.tags) {
      const tagSlugs = node.frontmatter.tags.map(
        tag => `/tags/${_.kebabCase(tag)}/`
      )
      createNodeField({ node, name: `tagSlugs`, value: tagSlugs })
    }
  }
}

// Sass and Lodash.
exports.onCreateWebpackConfig = ({ stage, actions }) => {
  switch (stage) {
    case `build-javascript`:
      actions.setWebpackConfig({
        plugins: [new LodashModuleReplacementPlugin()],
      })
  }
}