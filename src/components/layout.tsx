/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import NavigationBar from "./navigationBar"
import Header from "./Header/header"
import HeaderSmall from "./Header/HeaderSmall"

import Footer from "./footer"
import "../reset.css"
import "./layout.css"
import SearchBarRecipe from "./Search/SearchBarRecipe"

interface Props {
  children?: any
  isLandingPage: boolean
}

const Layout = ({ children, isLandingPage }: Props) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      {isLandingPage ? (
        <Header siteTitle={data.site.siteMetadata.title} />
      ) : (
        <HeaderSmall siteTitle={data.site.siteMetadata.title} />
      )}
      {isLandingPage ? <NavigationBar /> : <SearchBarRecipe />}
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
