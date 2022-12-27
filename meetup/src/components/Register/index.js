import React, {Component} from 'react'
import styled from 'styled-components'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

export default class Register extends Component {
  state = {name: '', error: ''}

  getName = e => {
    this.setState({name: e.target.value})
  }

  handleClick = e => {
    e.preventDefault()
    const {name, error} = this.state
    if (name === '') {
      this.setState({error: 'Please enter your name'})
    } else {
      this.setState({error: ''})
      const {history} = this.props
      history.replace('/')
    }
  }

  render() {
    const {error, name} = this.state
    return (
      <MainContainer>
        <>
          <Logo
            src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
            alt="website logo"
          />
        </>
        <Container>
          <SubContainer>
            <Image
              src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
              alt="website register"
            />
          </SubContainer>
          <SubContainer>
            <Heading>Let Us Join</Heading>
            <form>
              <label htmlFor="name">NAME {name}</label>
              <br />
              <input
                onChange={this.getName}
                id="name"
                placeholder="Your name"
                type="text"
              />
              <br />
              <label htmlFor="select">TOPICS</label>
              <br />
              <select id="select">
                {topicsList.map(each => (
                  <option value={each.id} key={each.id}>
                    {each.displayText}
                  </option>
                ))}
              </select>
              <br />
              <Button onClick={this.handleClick}>Register Now</Button>
            </form>
            <Error>{error}</Error>
          </SubContainer>
        </Container>
      </MainContainer>
    )
  }
}
const Button = styled.button`
  background-color: #2563eb;
  border: 0;
  border-radius: 20px;
  color: #fff;
  padding: 10px 15px;
  margin-top: 10px;
`

const Heading = styled.h1``
const Content = styled.p``
const MainContainer = styled.div`
  padding: 20px;
  height: 100vh;
`

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const SubContainer = styled.div``
const Logo = styled.img``

const Image = styled.img`
  width: 300px;
`
const Error = styled.p`
  color: red;
`
