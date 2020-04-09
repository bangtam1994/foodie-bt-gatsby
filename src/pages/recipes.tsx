import React from "react"
import Layout from "../components/layout"
import Card from "../components/Recipe/Card"
import SearchBarRecipe from "../components/Search/SearchBarRecipe"

import { useStaticQuery, graphql } from "gatsby"

interface Edge {
  node : Node
}

export interface Recipe {
name:string
}
export interface Node {
  id : string,
  image?:string,
  smallPicture?:string,
  domain? : string,
  name:string,
  recipes?: Recipe[]
  
}
const Recipes = () => {
  const { recipes } = useStaticQuery(graphql`
    {
      recipes: allRecipesIamfoodblogJson {
        edges {
          node {
            id
            image
            name
            domain
            smallPicture
            recipes {name}
          }
        }
      }
    }
  `)

  return (
    <Layout isLandingPage={false}>
      <div className="bakery-all-cards">
        {recipes &&
          recipes.edges &&
          recipes.edges.map(({ node }:Edge) => {
            return (
              <Card
                id={node.id}
                name={node.name}
                smallPicture={node.smallPicture}
                key={node.id}
                domain={node.domain}
                recipes={node.recipes}
              />
            )
          })}
      </div>
    </Layout>
  )
}

export default Recipes
