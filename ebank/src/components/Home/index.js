import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

const Home = props => {
  const {history} = props
  const logutButton = () => {
    Cookies.remove('jwt_token')
    history.replace('/ebank/login')
  }

  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/ebank/login" />
  }

  return (
    <>
      <div>
        <button type="button">
          <img
            alt="website logo"
            src="https://assets.ccbp.in/frontend/react-js/ebank-logo-img.png"
          />
        </button>
        <button onClick={logutButton} type="button">
          Logout
        </button>
        <h1>Your Flexibility, Our Excellence</h1>
        <img
          alt="digital card"
          src="https://assets.ccbp.in/frontend/react-js/ebank-digital-card-img.png"
        />
      </div>
    </>
  )
}
export default Home
