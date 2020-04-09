import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import pasta from "../images/spaghetti.jpg"
import SEO from "../components/seo"



export 

const IndexPage = () => (
  <Layout isLandingPage={true}>
    <SEO title="Home" />
    <div>
      <img src={pasta} alt="pasta" className="landing-picture" />
    </div>
    <h1>My Foodie Blog</h1>
    <p>Welcome to my little blog dedicated to food, only food.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
