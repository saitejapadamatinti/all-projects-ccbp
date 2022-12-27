import {Component} from 'react'

class RegistrationForm extends Component {
  state = {
    isSubmitted: false,
    firstName: '',
    lastName: '',
    firstNameError: '',
    secondNameError: '',
  }

  handilingFirstName = () => {
    const {firstName} = this.state
    if (firstName === '') {
      this.setState({firstNameError: 'Required'})
    } else {
      this.setState({firstNameError: ''})
    }
  }

  handilingSecondName = () => {
    const {lastName} = this.state
    if (lastName === '') {
      this.setState({secondNameError: 'Required'})
    } else {
      this.setState({secondNameError: ''})
    }
  }

  getFisrstName = event => {
    this.setState({firstName: event.target.value})
  }

  getSecondName = event => {
    this.setState({lastName: event.target.value})
  }

  formStatus = () => {
    const {firstName, lastName} = this.state

    if (firstName !== '' && lastName !== '') {
      this.setState({isSubmitted: true})
    }
  }

  submitForm = event => {
    event.preventDefault()
    this.handilingFirstName()
    this.handilingSecondName()
    this.formStatus()
  }

  anthorResponseBtn = () => {
    this.setState({isSubmitted: false})
  }

  render() {
    const {isSubmitted, firstNameError, secondNameError} = this.state

    return (
      <div>
        <h1>Registration</h1>
        {isSubmitted ? (
          <div>
            <img
              alt="success"
              src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
            />
            <p>Submitted Successfully</p>
            <button onClick={this.anthorResponseBtn} type="button">
              Submit Another Response
            </button>
          </div>
        ) : (
          <form onSubmit={this.submitForm}>
            <div>
              <label htmlFor="firstName">FIRST NAME</label> <br />
              <input
                id="firstName"
                onBlur={this.handilingFirstName}
                onChange={this.getFisrstName}
                placeholder="First name"
                type="text"
              />
              <p>{firstNameError}</p>
            </div>
            <div>
              <label htmlFor="lastName">LAST NAME</label> <br />
              <input
                id="lastName"
                onBlur={this.handilingSecondName}
                onChange={this.getSecondName}
                placeholder="Last name"
                type="text"
              />
              <p>{secondNameError}</p>
            </div>
            <button type="submit">Submit</button>
          </form>
        )}
      </div>
    )
  }
}

export default RegistrationForm
