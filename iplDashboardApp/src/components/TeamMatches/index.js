import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {
    bannerUrl: '',
    latestMatchesDetails: [],
    recentMatches: [],
    id: '',
    isLoading: true,
  }

  componentDidMount() {
    this.getDetailsofMatch()
  }

  getDetailsofMatch = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const getData = await response.json()
    const bannerDetails = getData.team_banner_url
    const latestMatches = {
      competingTeam: getData.latest_match_details.competing_team,
      competingTeamLogo: getData.latest_match_details.competing_team_logo,
      date: getData.latest_match_details.date,
      firstInnings: getData.latest_match_details.first_innings,
      id: getData.latest_match_details.id,
      manOfTheMatch: getData.latest_match_details.man_of_the_match,
      matchStatus: getData.latest_match_details.match_status,
      result: getData.latest_match_details.result,
      secondInnings: getData.latest_match_details.second_innings,
      umpires: getData.latest_match_details.umpires,
      venue: getData.latest_match_details.venue,
    }

    const recent = getData.recent_matches.map(each => ({
      competingTeam: each.competing_team,
      competingTeamLogo: each.competing_team_logo,
      date: each.date,
      firstInnings: each.first_innings,
      id: each.id,
      manOfTheMatch: each.man_of_the_match,
      matchStatus: each.match_status,
      result: each.result,
      secondInnings: each.second_innings,
      umpires: each.umpires,
      venue: each.venue,
    }))

    this.setState({
      bannerUrl: bannerDetails,
      latestMatchesDetails: latestMatches,
      recentMatches: recent,
      isLoading: false,
    })
  }

  render() {
    const {
      bannerUrl,
      latestMatchesDetails,
      recentMatches,
      id,
      isLoading,
    } = this.state

    return (
      <div>
        {isLoading ? (
          <div className="spinner-class">
            <Loader type="Oval" color="#000" height={50} width={50} />
          </div>
        ) : (
          <div className="backgroun-container">
            <img className="banner-image" alt="team banner" src={bannerUrl} />
            <div>
              <h1>Latest Matchs</h1>
              <LatestMatch
                key={id}
                latestMatchesDetails={latestMatchesDetails}
              />
            </div>
            <div>
              <ul className="ul-list">
                {recentMatches.map(each => (
                  <MatchCard key={each.id} recentMatches={each} />
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
