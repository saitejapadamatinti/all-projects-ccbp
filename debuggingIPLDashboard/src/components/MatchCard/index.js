import {Component} from 'react'
import './index.css'

export default class MatchCard extends Component {
  render() {
    const {details} = this.props
    const {competingTeamLogo, competingTeam, result, matchStatus} = details
    return (
      <li className="card">
        <img
          className="logo"
          src={competingTeamLogo}
          alt={`competing team ${competingTeam}`}
        />
        <p>{competingTeam}</p>
        <p>{result}</p>
        <p>{matchStatus}</p>
      </li>
    )
  }
}
