import './index.css'

const SuggestionItem = props => {
  const {suggestions, updateSearchInput} = props
  const {suggestion} = suggestions

  const arrowClick = () => {
    updateSearchInput(suggestion)
  }
  return (
    <div className="listItem">
      <li>
        <p>{suggestion}</p>
      </li>
      <img
        onClick={arrowClick}
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
      />
    </div>
  )
}

export default SuggestionItem
