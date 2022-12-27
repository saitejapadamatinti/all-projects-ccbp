// Write your code here
import './index.css'

const EventItem = props => {
  const {eventsList, handleClick} = props
  const {imageUrl, name, location, registrationStatus} = eventsList

  const getEventDetails = () => {
    console.log('clicked')
    handleClick(registrationStatus)
  }

  return (
    <div className="col-6">
      <li>
        <button type="button" onClick={getEventDetails}>
          <img className="w-100" src={imageUrl} alt="event" />
        </button>
        <p>{name}</p>
        <p>{location}</p>
      </li>
    </div>
  )
}

export default EventItem
