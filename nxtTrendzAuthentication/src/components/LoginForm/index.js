import {Component} from 'react'
import './index.css'

export default class LoginForm extends Component {
  state = {username: '', password: '', message: ''}

  getUsername = e => {
    this.setState({username: e.target.value})
  }

  getPassword = e => {
    this.setState({password: e.target.value})
  }

  successLogin = () => {
    const {history} = this.props
    history.replace('/')
  }

  submitForm = async e => {
    e.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    if (response.ok) {
      this.successLogin()
    } else {
      this.setState({message: data.error_msg})
    }
  }

  render() {
    const {username, password, message} = this.state
    console.log(username)
    console.log(password)

    return (
      <div className="loginContainer">
        <div>
          <img
            className="loginImage"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="website login"
          />
        </div>
        <div>
          <img
            className="logo"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
          />
          <form>
            <label htmlFor="username">USERNAME</label>
            <br />
            <input
              onChange={this.getUsername}
              placeholder="Username"
              type="text"
              id="username"
            />
            <br />
            <label htmlFor="password">PASSWORD</label>
            <br />
            <input
              onChange={this.getPassword}
              placeholder="Password"
              id="password"
              type="password"
            />
            <br />
            <button onClick={this.submitForm} type="submit">
              Login
            </button>
            <p className="message">{message}</p>
          </form>
        </div>
      </div>
    )
  }
}
