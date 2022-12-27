import React, {Component} from 'react'
import Loader from 'react-loader-spinner'
import MatchCard from '../MatchCard'
import LatestMatch from '../LatestMatch'
import './index.css'

export default class TeamMatches extends Component {
  state = {
    latestMatchDetails: [],
    banner: '',
    recentMatches: [],
    className: '',
    loader: true,
  }

  componentDidMount() {
    this.getTeamMatches()
  }

  getTeamMatches = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const latestMatches = {
      competingTeam: data.latest_match_details.competing_team,
      competingTeamLogo: data.latest_match_details.competing_team_logo,
      firstInnings: data.latest_match_details.first_innings,
      id: data.latest_match_details.id,
      date: data.latest_match_details.date,
      manOfTheMatch: data.latest_match_details.man_of_the_match,
      matchStatus: data.latest_match_details.match_status,
      result: data.latest_match_details.result,
      secondInnings: data.latest_match_details.second_innings,
      umpires: data.latest_match_details.umpires,
      venue: data.latest_match_details.venue,
    }
    const banner = data.team_banner_url
    const recent = data.recent_matches.map(each => ({
      competingTeam: each.competing_team,
      competingTeamLogo: each.competing_team_logo,
      firstInnings: each.first_innings,
      id: each.id,
      date: each.date,
      manOfTheMatch: each.man_of_the_match,
      matchStatus: each.match_status,
      result: each.result,
      secondInnings: each.second_innings,
      umpires: each.umpires,
      venue: each.venue,
    }))
    this.setState({
      latestMatchDetails: latestMatches,
      banner,
      recentMatches: recent,
      className: id,
      loader: false,
    })
    // console.log(banner)
    // console.log(latestMatches)
    // console.log(recent)
    console.log(data)
  }

  render() {
    const {
      latestMatchDetails,
      banner,
      recentMatches,
      className,
      loader,
    } = this.state
    const {competingTeam} = latestMatchDetails

    console.log(banner)
    console.log(recentMatches)
    console.log(latestMatchDetails)
    return (
      <div className={className}>
        {loader ? (
          <div testid="loader">
            {' '}
            <Loader type="Oval" color="#ffffff" height={50} width={50} />{' '}
          </div>
        ) : (
          <div className="fullCard">
            <div>
              <div>
                <img className="banner" src={banner} alt="team banner" />
              </div>
              <h1>Latest Matches</h1>
              <LatestMatch latestMatchDetails={latestMatchDetails} />
            </div>
            <ul>
              {recentMatches.map(each => (
                <MatchCard key={each.id} details={each} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}
