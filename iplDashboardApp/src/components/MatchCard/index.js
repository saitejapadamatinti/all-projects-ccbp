import './index.css'

const MatchCard = props => {
  const {recentMatches} = props
  const {
    competingTeam,
    competingTeamLogo,
    // date,
    // firstInnings,
    // id,
    // manOfTheMatch,
    matchStatus,
    result,
    // secondInnings,
    // umpires,
    // venue,
  } = recentMatches

  return (
    <li className="list-container">
      <img
        className="logo-image"
        alt={`competing team ${competingTeam}`}
        src={competingTeamLogo}
      />
      <p>{competingTeam}</p>
      <p>{result}</p>
      <p>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
