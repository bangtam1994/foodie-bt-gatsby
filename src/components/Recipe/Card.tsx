import React from "react"
import { Link } from "gatsby"
import { navigate } from "@reach/router"
import { Node } from "../../pages/recipes"
import slugify from "slugify"
import "./Card.css"

const Card = ({ id, name, smallPicture, domain, recipes }: Node) => {
  let nameSlug = slugify(name, { remove: /[*+~.()'"!:@]/g })

  return (
    <Link
      to={"/recipe/" + nameSlug}
      style={{
        textDecoration: `none`,
        marginTop: 32,
      }}
    >
      <div className="card">
        <img src={smallPicture} className="thumbnail" />
        <div className="cardTitle">
          <h2>{name}</h2>
        </div>
      </div>
    </Link>
  )
}

export default Card
