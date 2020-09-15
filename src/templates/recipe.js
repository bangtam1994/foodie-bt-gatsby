import React from "react"
import Layout from "../components/layout"

import { ThinLine } from "../style/lines"

const Recipe = ({ pageContext: { recipe } }) => {
  return (
    <Layout>
      <img
        src={recipe.image}
        alt={recipe.name}
        style={{
          width: "100%",
          height: "500px",
          objectFit: "cover",
          objectPosition: "center",
          margin: "32px 0px",
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1 style={{ margin: "20px 0px", textAlign: "center" }}>
          {recipe.name}
        </h1>

        <ThinLine css={{ margin: "40px 0" }} />
      </div>

      {recipe &&
        recipe.recipes &&
        recipe.recipes.map((recipe, index) => {
          return (
            <div key={index}>
              <h2>{recipe.name}</h2>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <p style={{ margin: "10px 30px 10px 0px", flex: 3 }}>
                  {recipe.summary}
                </p>

                <ul
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "center",
                    justifyContent: "center",
                    backgroundColor: "#F4F4F4",
                    width: "170px",
                    height: "100%",
                    padding: "15px 10px",
                    marginRight: "20px",
                    flex: 1,
                  }}
                >
                  <span
                    style={{
                      textDecoration: "underline",
                    }}
                  >
                    Ingrédients
                  </span>
                  {recipe.ingredients.map((ingredient, index) => {
                    return <li ley={index}>{ingredient}</li>
                  })}
                </ul>
              </div>
            </div>
          )
        })}
    </Layout>
  )
}

export default Recipe
