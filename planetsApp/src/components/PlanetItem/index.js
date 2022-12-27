import React from 'react'
import './index.css'

const PlanetItem = props => {
  const {details} = props
  const {name, imageUrl, description} = details

  return (
    <div className="cardItem">
      <img width="200" src={imageUrl} alt={`planet ${name}`} />
      <h1>{name}</h1>
      <p>{description}</p>
    </div>
  )
}
export default PlanetItem
