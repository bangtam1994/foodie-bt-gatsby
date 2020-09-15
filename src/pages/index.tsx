import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import pasta from "../images/spaghetti.jpg"
import SEO from "../components/seo"
import Card from "../components/Recipe/Card"

interface Edge {
  node: Node
}

export interface Recipe {
  name: string
}
export interface Node {
  id: string
  image?: string
  smallPicture?: string
  domain?: string
  name: string
  recipes?: Recipe[]
}
export const IndexPage = () => {
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
            recipes {
              name
            }
          }
        }
      }
    }
  `)

  return (
    <Layout isLandingPage={true}>
      <SEO title="Home" />
      <h1>
        <img src={pasta} alt="pasta" className="landing-picture" />
      </h1>
      <h1>My Foodie Blog</h1>
      <br />
      <p>Welcome to my little blog dedicated to food, only food.</p>
      {/* <Link to="/page-2/">Go to page 2</Link> */}
      <div className="bakery-all-cards">
        {recipes &&
          recipes.edges &&
          recipes.edges.map(({ node }: Edge) => {
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

export default IndexPage
