import {Component} from 'react'

import Loader from 'react-loader-spinner'

import './index.css'

import TeamCard from '../TeamCard'

class Home extends Component {
  state = {
    dashboardArr: [],
    isSpinning: true,
  }

  componentDidMount() {
    this.gettingArrayDetails()
  }

  gettingArrayDetails = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const getData = await response.json()
    const dataArray = getData.teams.map(each => ({
      id: each.id,
      name: each.name,
      teamImageUrl: each.team_image_url,
    }))
    this.setState({isSpinning: false, dashboardArr: dataArray})
  }

  render() {
    const {isSpinning, dashboardArr} = this.state

    return (
      <div>
        {isSpinning ? (
          <div className="spinner-class">
            <Loader type="Oval" color="#000" height={50} width={50} />
          </div>
        ) : (
          <div className="main-container">
            <div className="ipl-dashbord-container">
              <img
                className="cricket-image"
                alt="ipl logo"
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              />
              <h1>IPL Dashboard</h1>
            </div>
            <ul className="ul-list">
              {dashboardArr.map(each => (
                <TeamCard key={each.id} finalArray={each} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default Home
