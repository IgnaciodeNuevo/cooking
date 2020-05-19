const { createFilePath } = require("gatsby-source-filesystem")
const path = require("path")

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    const slug = createFilePath({
      node,
      getNode,
      basePath: "pages",
    })

    createNodeField({
      node,
      value: slug,
      name: "slug",
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const templateFile = path.resolve("src/pages/receta.js")

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(({ data }) => {
    data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: templateFile,
        context: {
          slug: node.fields.slug,
        },
      })
    })
  })
}
