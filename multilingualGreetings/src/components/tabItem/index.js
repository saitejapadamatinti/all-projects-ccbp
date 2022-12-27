import './index.css'

const TabItem = props => {
  const {eachItem, onClickeToChange, activeTabId} = props
  const {id, buttonText} = eachItem

  const languageBtn = () => {
    onClickeToChange(id)
  }

  const selectedBtn = activeTabId ? 'selectBtn' : ' '

  return (
    <li>
      <div>
        <button className={selectedBtn} onClick={languageBtn} type="button">
          {buttonText}
        </button>
      </div>
    </li>
  )
}
export default TabItem
