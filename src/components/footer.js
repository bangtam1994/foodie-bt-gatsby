import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  return (
    <footer
      style={{
        padding: `1rem`,
        backgroundColor: "bisque",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        Website made by{" "}
        <a
          href="https://linkedin.com/in/bangtamnguyen"
          style={{ textDecoration: "none", color: "pink" }}
        >
          {data.site.siteMetadata.author}
        </a>
        ©{new Date().getFullYear()}, Built with
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </div>
    </footer>
  )
}

export default Footer
