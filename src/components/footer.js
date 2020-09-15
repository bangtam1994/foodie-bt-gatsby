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
        backgroundColor: "#000000",
        marginTop: "200px",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        bottom: 0,
      }}
    >
      <div>
        Website made by{" "}
        <a
          href="https://linkedin.com/in/bangtamnguyen"
          style={{ textDecoration: "none", color: "white" }}
        >
          {data.site.siteMetadata.author}
        </a>
        ©{new Date().getFullYear()}, Built with
        <a
          href="https://www.gatsbyjs.org"
          style={{ textDecoration: "none", color: "white" }}
        >
          Gatsby
        </a>
      </div>
    </footer>
  )
}

export default Footer
