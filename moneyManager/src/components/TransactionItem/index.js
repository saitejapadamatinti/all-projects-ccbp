import './index.css'

const TransectionItem = props => {
  const {title, amount, type} = props

  return (
    <div>
      <li className="list-items">
        <span>{title}</span>
        <span>{amount}</span>
        <span>{type}</span>
      </li>
    </div>
  )
}

export default TransectionItem
