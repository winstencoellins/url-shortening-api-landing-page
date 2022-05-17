import React from 'react'
import './Card.css'

function Card(props) {
  return (
    <div className="card">
      <div className="cardImage">
          <img src={props.image} alt="Img" className="imageC" />
      </div>
      <div className="cardContent">
        <p className="cardTitle">{props.title}</p>
        <p className="cardPar">{props.content}</p>
      </div>
    </div>
  )
}

export default Card