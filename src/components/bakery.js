import React from "react"
import { Link } from "gatsby"
import { navigate } from "@reach/router"

const Bakery = ({ placeId, name, description, pictures }) => {
  return (
    <Link to={"/post/recipe/" + placeId}>
      <div
        className="bakery-card"
        onClick={() => {
          navigate(`/post/recipe/${placeId}`)
        }}
      >
        <div>
          <h2>{name}</h2>
        </div>

        {/* <div>
        {pictures.map((picture, index) => {
          return <img key={index} src={picture} className="bakery-pic" />
        })}
      </div> */}

        <img src={pictures[0]} className="bakery-pic" />
      </div>
    </Link>
  )
}

export default Bakery
