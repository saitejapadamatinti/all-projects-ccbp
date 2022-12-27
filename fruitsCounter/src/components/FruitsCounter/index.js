import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {mango: 0, banana: 0}

  mangoFruit = () => {
    this.setState(prevState => ({
      mango: prevState.mango + 1,
    }))
  }

  bananaFruit = () => {
    this.setState(prevState => ({
      banana: prevState.banana + 1,
    }))
  }

  render() {
    const {mango, banana} = this.state

    return (
      <div className="main-container">
        <div className="main-container-2">
          <h1>
            Bob ate {mango} mangoes {banana} bananas
          </h1>
          <img
            className="img"
            alt="mango"
            src="https://assets.ccbp.in/frontend/react-js/mango-img.png "
          />
          <img
            className="img"
            alt="banana"
            src="https://assets.ccbp.in/frontend/react-js/banana-img.png "
          />
          <button type="button" onClick={this.mangoFruit}>
            Eat Mango
          </button>
          <button type="button" onClick={this.bananaFruit}>
            Eat Banana
          </button>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
