import React from "react"
import Layout from "../components/layout"

import { useStaticQuery, graphql, Link } from "gatsby"

interface Edge {
  node : Node
}

export interface Frontmatter {
title:string
path : string
date : string
}
export interface Node {
  id : string,
  frontmatter  : Frontmatter
  
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
               path
               date
           }
          }
        }
      }
    }
  `)
  return (
    <Layout isLandingPage={false}>
      <div className="bakery-all-cards">
        {reviews &&
          reviews.edges &&
          reviews.edges.map(({ node }:Edge) => {
            return (
             <Link to={node.frontmatter.path}>

                 <h3>{node.frontmatter.title}</h3>
             </Link>
            )
          })}
      </div>
    </Layout>
  )
}

export default Recipes
