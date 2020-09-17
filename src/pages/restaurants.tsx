import React from "react"
import Layout from "../components/layout"

import { useStaticQuery, graphql, Link } from "gatsby"
import slugify from "slugify"
import Card from "../components/Review/Card"

interface Edge {
  node: Node
}

export interface Frontmatter {
  title: string
  path: string
  date: string
}
export interface Node {
  id: string
  frontmatter: Frontmatter
}
const Recipes = () => {
  const { reviews } = useStaticQuery(graphql`
    {
      reviews: allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              title
              date
            }
          }
        }
      }
    }
  `)
  return (
    <Layout isLandingPage={false}>
      <div className="bakery-all-cards flexColumn">
        {reviews &&
          reviews.edges &&
          reviews.edges.map(({ node }: Edge) => {
            let nameSlug = slugify(node.frontmatter.title, {
              remove: /[*+~.()'"!:@]/g,
            })
            console.log(nameSlug)
            return <Card nameSlug={nameSlug} title={node.frontmatter.title} />
          })}
      </div>
    </Layout>
  )
}

export default Recipes
