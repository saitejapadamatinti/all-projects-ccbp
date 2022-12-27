import React from 'react'
import styled from 'styled-components'

const NotFound = () => (
  <Container>
    <Image
      src="https://assets.ccbp.in/frontend/react-js/meetup/not-found-img.png"
      alt="not found"
    />
    <Heading>Page Not Found</Heading>
    <Description>
      We are sorry, the page you requested could not be found.
    </Description>
  </Container>
)

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const Image = styled.img`
  width: 300px;
`

const Heading = styled.h1``

const Description = styled.p``
export default NotFound
