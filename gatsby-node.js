const path = require("path")
const recipes = require("./src/data/recipes-iamfoodblog.json")
const slugify = require("slugify")

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  //RECIPES
  const RecipeTemplate = path.resolve(`./src/templates/recipe.js`)

  recipes.forEach(recipe => {
    let nameSlug = slugify(recipe.name, { remove: /[*+~.()'"!:@]/g })
    createPage({
      path: `/recipe/${nameSlug}`,
      component: RecipeTemplate,
      context: { recipe },
    })
  })

  //REVIEWS
  const blogPostTemplate = path.resolve(`src/templates/review.js`)
  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              title
            }
          }
        }
      }
    }
  `)
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    let nameSlug = slugify(node.frontmatter.title, { remove: /[*+~.()'"!:@]/g })

    createPage({
      path: `/restaurants/${nameSlug}`,
      component: blogPostTemplate,
      context: {}, // additional data can be passed via context
    })
  })
}

const { createFilePath } = require(`gatsby-source-filesystem`)
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}
