import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import {BackgroundDiv, BackgroundImageDiv} from './styledComponents'

class Login extends Component {
  state = {
    userId: '',
    userPin: '',
    isError: false,
    errorMessage: '',
  }

  onSubmitSuccess = Token => {
    const {history} = this.props
    // Cookies.set('jwt_token', jwtToken, {expires: 30})
    Cookies.set('jwt_token', Token, {expires: 3})
    history.replace('/')
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {userId, userPin} = this.state
    const userDetails = {user_id: userId, pin: userPin}
    const apiUrl = 'https://apis.ccbp.in/ebank/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwtToken)
    } else {
      this.setState({isError: true, errorMessage: data.error_msg})
    }
  }

  userIdInput = event => {
    this.setState({userId: event.target.value})
  }

  userPinInput = event => {
    this.setState({userPin: event.target.value})
  }

  render() {
    const {userId, userPin, errorMessage, isError} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <>
        <BackgroundDiv>
          <BackgroundImageDiv>
            <div className="image-div">
              <img
                alt="website login"
                src="https://assets.ccbp.in/frontend/react-js/ebank-login-img.png"
              />
            </div>
            <form onSubmit={this.onSubmitForm}>
              <h1>Welcome Back!</h1>
              <label htmlFor="User ID">User Id</label> <br />
              <input
                value={userId}
                onChange={this.userIdInput}
                id="User ID"
                type="text"
              />
              <br />
              <label htmlFor="PIN">PIN</label>
              <br />
              <input
                value={userPin}
                onChange={this.userPinInput}
                id="PIN"
                type="password"
              />
              <button type="submit">Login</button>
              {isError ? <p>{errorMessage}</p> : ''}
            </form>
          </BackgroundImageDiv>
        </BackgroundDiv>
      </>
    )
  }
}

export default Login
