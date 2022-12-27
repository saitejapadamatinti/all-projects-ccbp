import {Component} from 'react'
import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import './index.css'
import TeamCard from '../TeamCard'

class Home extends Component {
  state = {teamCards: [], loader: true}

  componentDidMount() {
    this.getTeamCards()
  }

  getTeamCards = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const updatedData = data.teams.map(each => ({
      id: each.id,
      name: each.name,
      teamImageUrl: each.team_image_url,
    }))
    this.setState({teamCards: updatedData, loader: false})
    console.log(data)
    console.log(updatedData)
  }

  render() {
    const {teamCards, loader} = this.state
    return (
      <div className="container">
        {loader ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />{' '}
          </div>
        ) : (
          <>
            <div className="header">
              <div>
                <img
                  className="logo"
                  src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                  alt="ipl logo"
                />
              </div>
              <h1>IPL Dashboard</h1>
            </div>
            <ul>
              {teamCards.map(each => (
                <Link
                  key={each.id}
                  className="teamCard"
                  to={`/team-matches/${each.id}`}
                >
                  <TeamCard teamCard={each} />
                </Link>
              ))}
            </ul>
          </>
        )}
      </div>
    )
  }
}
export default Home
