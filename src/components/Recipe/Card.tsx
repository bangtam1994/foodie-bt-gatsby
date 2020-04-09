import React from "react"
import { Link } from "gatsby"
import { navigate } from "@reach/router"
import {Node} from "../../pages/recipes"
import slugify from "slugify"
import "./Card.css"


const Card = ({ id, name, smallPicture, domain , recipes}: Node) => {
  let nameSlug = slugify(name, {remove: /[*+~.()'"!:@]/g })

  return (
    <Link to={"/recipe/" + nameSlug}  style={{
      textDecoration: `none`,
    }}>
    <div
      className="card"
      // onClick={() =
      //   navigate(`/post/recipe/${placeId}`)
      // }}
    >
      <img src={smallPicture} className="thumbnail" />
      <div>
        <h2 >{name}</h2>
      </div>
    </div>
    </Link>
  )
}

export default Card
