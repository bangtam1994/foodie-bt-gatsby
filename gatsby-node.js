

const path = require("path")
const data = require("./src/data/recipes-iamfoodblog.json")
const slugify = require("slugify")

exports.createPages = ({ actions }) => {
  const { createPage } = actions

  // Your component that should be rendered for every item in JSON.
  const template = path.resolve(`./src/templates/recipe.js`)

  // Create pages for each JSON entry.
  data.forEach(recipe => {

    let nameSlug = slugify(recipe.name, {remove: /[*+~.()'"!:@]/g })

    createPage({
      path: `/recipe/${nameSlug}`,
      component: template,
      context: { recipe },

      // Send additional data to page from JSON (or query inside template)
    })
  })
}
