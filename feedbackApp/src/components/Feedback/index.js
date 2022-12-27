import React from 'react'
import './index.css'

const FeedbackItem = props => {
  const {imageUrl, name, imageClick} = props
  return (
    <li className="FeedbackItem">
      <img onClick={imageClick} src={imageUrl} alt={name} />
      <p>{name}</p>
    </li>
  )
}

class Feedback extends React.Component {
  state = {formStatus: true}

  imageClick = () => {
    const {formStatus} = this.state

    console.log('Clicked')
    this.setState({formStatus: !formStatus})
  }

  render() {
    const {formStatus} = this.state

    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    return (
      <div>
        <div className="FeedbackContainer">
          {formStatus ? (
            <div>
              <h1>
                How satisfied are you with our customer support performance?
              </h1>
              <ul className="FeedbackCardsContainer">
                {emojis.map(eachItem => (
                  <FeedbackItem
                    imageClick={this.imageClick}
                    key={eachItem.id}
                    name={eachItem.name}
                    imageUrl={eachItem.imageUrl}
                  />
                ))}
              </ul>
            </div>
          ) : (
            <div>
              <center>
                <img
                  className="heartIcon"
                  src={loveEmojiUrl}
                  alt="love emoji"
                />
                <h1>Thank You!</h1>
                <p>We will use your feecback to improve our customer support</p>
              </center>
            </div>
          )}
        </div>
      </div>
    )
  }
}
export default Feedback
