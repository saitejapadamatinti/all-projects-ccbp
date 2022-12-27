import './index.css'

const LanguageFilterItem = props => {
  const {itemDetails, clickAction, activeId} = props
  const {id, language} = itemDetails
  const classAdd = id === activeId ? 'color-item' : ''
  const clickEvent = () => {
    clickAction(id)
  }
  return (
    <li className="list-item">
      <button
        type="button"
        className={`list-button ${classAdd}`}
        onClick={clickEvent}
      >
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
