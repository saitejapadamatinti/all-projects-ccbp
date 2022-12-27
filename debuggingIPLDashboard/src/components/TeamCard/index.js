import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

export default class TeamCard extends Component {
  render() {
    const {teamCard} = this.props
    const {id, name, teamImageUrl} = teamCard
    console.log(name)
    return (
      <li className="links">
        <div>
          <img className="teamLogo" src={teamImageUrl} alt={name} />
        </div>
        <div className="heading">
          <p>{name}</p>
        </div>
      </li>
    )
  }
}
