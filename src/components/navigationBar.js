import React from "react"
import { Link } from "gatsby"

const NavigationBar = () => {
  return (
    <div
      className="navigation-bar"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <nav
        style={{
          backgroundColor: "#F9F9F9",
          height: "40px",
          width: "90%",
          marginBottom: "10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div> </div>
        <div className="navigation-bar-left">
          <Link
            to="/about"
            style={{
              color: "black",
              textDecoration: "none",
            }}
          >
            <span>About</span>
          </Link>
          <Link
            to="/contact"
            style={{
              color: "black",
              textDecoration: "none",
            }}
          >
            <span>Contact</span>
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default NavigationBar
