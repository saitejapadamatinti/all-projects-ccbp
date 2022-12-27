// import './index.css'

// const TabItem = props => {
//   const {eachTab, tabKey, isApplied, getSelectedTab} = props
//   const {tabId, displayText} = eachTab

//   const getSelectedTabColor = isApplied ? 'color-tab' : ''

//   const selectedTab = () => {
//     getSelectedTab(tabId)
//   }

//   return (
//     <li>
//       <button
//         onClick={selectedTab}
//         className={`tab-btn ${getSelectedTabColor}`}
//         type="button"
//       >
//         {displayText}
//       </button>
//     </li>
//   )
// }

// export default TabItem

import './index.css'

const TabItem = props => {
  const {tabDetails, setActiveTabId, isActive} = props
  const {tabId, displayText} = tabDetails

  const onClickTab = () => {
    setActiveTabId(tabId)
  }

  const tabBtnClassName = isActive ? 'tab-button active' : 'tab-button'

  return (
    <li className="tab-item">
      <button type="button" onClick={onClickTab} className={tabBtnClassName}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
