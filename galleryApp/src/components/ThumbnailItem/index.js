import './index.css'

const ThumbnailItem = props => {
  const {isActive, thumbnailImage, clickToChangeimage} = props
  const {id, thumbnailUrl, thumbnailAltText} = thumbnailImage

  const selectedThumbnail = isActive ? 'thumbnail' : ''

  const onClickThumbnail = () => {
    clickToChangeimage(id)
  }

  return (
    <li>
      <button onClick={onClickThumbnail} className="list-item" type="button">
        <img
          className={selectedThumbnail}
          alt={thumbnailAltText}
          src={thumbnailUrl}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
