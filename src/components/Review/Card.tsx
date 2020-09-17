import React from "react"
import { Link } from "gatsby"
import { navigate } from "@reach/router"
import { Node } from "../../pages/recipes"
import "./Card.css"

interface Props {
  nameSlug: string
  title: string
}

const Card = ({ nameSlug, title }: Props) => {
  return (
    <Link
      to={nameSlug}
      style={{
        textDecoration: `none`,
        marginTop: 32,
      }}
    >
      <div className="card">
        {/* <img src={smallPicture} className="thumbnail" /> */}
        <div className="cardTitle">
          <h2>{title}</h2>
        </div>
      </div>
    </Link>
  )
}

export default Card
