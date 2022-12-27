// import './index.css'

// const AppItem = props => {
//   const {eachAppList, appKey} = props
//   const {appName, imageUrl} = eachAppList

//   return (
//     <li className="list-app">
//       <img className="app-image" alt={appName} src={imageUrl} />
//       <p>{appName}</p>
//     </li>
//   )
// }

// export default AppItem

import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appName, imageUrl} = appDetails

  return (
    <li className="app-item">
      <img className="app-image" src={imageUrl} alt={appName} />
      <p className="app-name">{appName}</p>
    </li>
  )
}

export default AppItem
