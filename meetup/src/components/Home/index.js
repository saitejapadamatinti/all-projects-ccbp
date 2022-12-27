import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

export default class Home extends Component {
  //   getRegistered = () => {
  //     const {history} = this.props
  //     history.replace('/register')
  //   }

  render() {
    return (
      <MainContainer>
        <>
          <Logo
            src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
            alt="website logo"
          />
        </>
        <Container>
          <Heading>Welcome to Meetup</Heading>
          <Content>Please register for the topic</Content>
          <Link to="/register">
            <Button>Register</Button>
          </Link>
          <Image
            src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
            alt="meetup"
          />
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
`

const Heading = styled.h1``
const Content = styled.p``
const MainContainer = styled.div`
  padding: 20px;
  height: 100vh;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Logo = styled.img``

const Image = styled.img`
  width: 60%;
  margin: 10px;
`
