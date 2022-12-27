import './index.css'

const HistoryItem = props => {
  const {details, deleteItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = details

  const handleClick = () => {
    deleteItem(id)
  }

  return (
    <li className="w-70 mb-3 d-flex justify-content-between">
      <div className="d-flex">
        <p className="mr-5">{timeAccessed}</p>
        <img className="logo" src={logoUrl} alt="domain logo" />
        <p className="ml-4 mr-4">{title}</p>
        <p>{domainUrl}</p>
      </div>
      <div>
        <button
          onClick={handleClick}
          testid="delete"
          className="delete"
          type="button"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
