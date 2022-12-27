import './index.css'

const Songs = props => {
  const {songsDetails, deleteSong} = props
  const {imageUrl, name, genre, duration, id} = songsDetails

  const onDelete = () => {
    deleteSong(id)
  }

  return (
    <li className="list-item">
      <img src={imageUrl} alt="track" className="image" />
      <p>{name}</p>
      <p>{genre}</p>
      <p>{duration}</p>
      <button
        testid="delete"
        type="button"
        className="button"
        onClick={onDelete}
      >
        Delete
      </button>
    </li>
  )
}

export default Songs
