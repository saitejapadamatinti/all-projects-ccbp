import './index.css'

const LatestMatch = props => {
  const {latestMatchesDetails} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    // id,
    manOfTheMatch,
    // matchStatus,
    result,
    secondInnings,
    umpires,
    venue,
  } = latestMatchesDetails

  return (
    <div className="main-container-1">
      <div>
        <p>{competingTeam}</p>
        <p>{date}</p>
        <p>{venue}</p>
        <p>{result}</p>
      </div>
      <div>
        <img
          className="image-logo"
          alt={`latest match ${competingTeam}`}
          src={competingTeamLogo}
        />
      </div>
      <div className="latest-match-bottom">
        <h3>First Innings</h3>
        <p>{firstInnings}</p>
        <h3>Second Innings</h3>
        <p>{secondInnings}</p>
        <h4>Second Innings</h4>
        <p>{manOfTheMatch}</p>
        <h3>Umpires</h3>
        <p>{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
