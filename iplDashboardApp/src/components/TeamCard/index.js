import './index.css'

import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {finalArray} = props
  const {id, name, teamImageUrl} = finalArray

  return (
    <Link className="link-item" to={`/team-matches/${id}`}>
      <li className="team-container">
        <img className="team-image" alt={name} src={teamImageUrl} />
        <p>{name}</p>
      </li>
    </Link>
  )
}
export default TeamCard
