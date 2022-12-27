const LanguageItem = props => {
  const {eachItem} = props
  const {imageAltText, imageUrl} = eachItem
  return (
    <li>
      <div>
        <img alt={imageAltText} src={imageUrl} />
      </div>
    </li>
  )
}

export default LanguageItem
