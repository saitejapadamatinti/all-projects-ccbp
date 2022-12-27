import './index.css'

const CardItem = prop => {
  const {cardDetails, uniqueId} = prop
  const {title, description, imgUrl, className} = cardDetails
  return (
    <li className={className} key={uniqueId}>
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
        <div className="image-cls">
          <img src={imgUrl} alt={title} />
        </div>
      </div>
    </li>
  )
}

export default CardItem
