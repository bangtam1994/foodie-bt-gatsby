import React from "react"
import Layout from "../components/layout"
import Bakery from "../components/bakery"

import { useStaticQuery } from "gatsby"

const HappyCow = () => {
  const { bakeries } = useStaticQuery(graphql`
    {
      bakeries: allHappycowJson(limit: 50) {
        edges {
          node {
            placeId
            id
            name
            pictures
            description
          }
        }
      }
    }
  `)

  return (
    <Layout>
      {console.log(bakeries)}
      <div className="bakery-all-cards">
        {bakeries.edges.map(({ node }) => {
          return (
            <Bakery
              placeId={node.placeId}
              name={node.name}
              pictures={node.pictures}
              description={node.description}
              key={node.id}
            />
          )
        })}
      </div>
    </Layout>
  )
}

export default HappyCow
