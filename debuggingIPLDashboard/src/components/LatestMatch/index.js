import React, {Component} from 'react'
import './index.css'

export default class LatestMatch extends Component {
  render() {
    const {latestMatchDetails} = this.props
    const {
      competingTeam,
      date,
      venue,
      result,
      competingTeamLogo,
      firstInnings,
      secondInnings,
      manOfTheMatch,
      umpires,
    } = latestMatchDetails
    return (
      <div className="matchCard">
        <div>
          <p>{competingTeam}</p>
          <p>{date}</p>
          <p>{venue}</p>
          <p>{result}</p>
          <p>Man Of The Match</p>
          <p>{manOfTheMatch}</p>
        </div>
        <div>
          <img
            className="teamLogo"
            src={competingTeamLogo}
            alt={`latest match ${competingTeam}`}
          />
        </div>
        <div>
          <p>First Innings</p>
          <p>{firstInnings}</p>
          <p>Second Innings</p>
          <p>{secondInnings}</p>
          <p>Umpires</p>
          <p>{umpires}</p>
        </div>
      </div>
    )
  }
}
