import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./Header.css"

const Header = ({ siteTitle }) => (
  <header>
    <Link
      to="/"
      style={{
        textDecoration: `none`,
      }}
    >
      <div className="header-title">{siteTitle}</div>
    </Link>
    <nav>
      <Link
        to="/restaurants"
        style={{
          color: "black",
          textDecoration: "none",
          fontSize: "1rem",
        }}
      >
        <span>Restaurants</span>
      </Link>
      <div></div>
      <Link
        to="/"
        style={{
          color: "black",
          textDecoration: "none",
          fontSize: "1rem",
        }}
      >
        <span>Patisseries</span>
      </Link>
      <div></div>

      <Link
        to="/recipes"
        style={{
          color: "black",
          textDecoration: "none",
          fontSize: "1rem",
        }}
      >
        <span>Recettes</span>
      </Link>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
