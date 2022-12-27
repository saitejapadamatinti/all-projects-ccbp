import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

class Login extends Component {
  onLoginSuccess = jwtToken => {
    console.log(jwtToken)
    Cookies.set('jwt_token', jwtToken, {expires: 1})
    const {history} = this.props
    history.replace('/')
  }

  onLogin = async () => {
    const userDetails = {
      username: 'rahul',
      password: 'rahul@2021',
    }
    const apiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(apiUrl, options)
    const responseData = await response.json()

    if (response.ok) {
      this.onLoginSuccess(responseData.jwt_token)
    }
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <>
        <h1>Please Login</h1>
        <button onClick={this.onLogin} type="button">
          Login with Sample Creds
        </button>
      </>
    )
  }
}

export default Login
