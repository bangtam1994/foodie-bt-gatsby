import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

const Recipe = ({ pageContext: { recipe } }) => {
  return (
    <Layout>
      <h1>{recipe.name}</h1>
      <p>{recipe.description}</p>
     
<img src={recipe.image} alt={recipe.name} style={{width : "100%", height : "500px", objectFit:"cover", objectPosition:"center"}} />   

{recipe && recipe.recipes && recipe.recipes.map((recipe, index) => {
  return (
<div key={index}> 

<h2> {recipe.name}</h2>
  <p>{recipe.summary}</p>


</div>

  )
})}

 </Layout>
  )
}

export default Recipe
