import React from "react"
import { graphql } from "gatsby"
import bt from "../images/bt.jpeg"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data }) => (
  <Layout>
    <SEO title="About" />

    <h1> About {data.site.siteMetadata.title}</h1>
    <div className="d-flex">
      <div>
        <p>
          This is my first blog about food. Because I love food. I enjoy eating
          at restaurants as much as making my own meals.
        </p>
        <p>
          Also, have a tendency to eat very yummy fat food but trying slowly to
          eat healthier (its hard!){" "}
        </p>
      </div>

      <img src={bt} alt="bt" className="bt-pic" />
    </div>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
