import {Component} from 'react'

class EvenOddApp extends Component {
  state = {count: 0}

  incrementBtn = () => {
    this.setState(prevState => ({
      count: prevState.count + Math.ceil(Math.random() * 100),
    }))
  }

  //   gettingEvenOrOdd = () => {
  //     this.setState(prevState => ({count: !prevState.count}))
  //   }

  render() {
    const {count} = this.state

    return (
      <div>
        <div>
          <h1>Count {count}</h1>
          <p>Count is {count % 2 === 0 ? 'Even' : 'Odd'}</p>
          <button type="button" onClick={this.incrementBtn}>
            Increment
          </button>
          <p>*Increase by Random number between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
