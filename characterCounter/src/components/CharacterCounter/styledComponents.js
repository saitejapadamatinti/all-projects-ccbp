import styled from 'styled-components'

export const MainContainer = styled.div`
  min-height: 100vh;
  padding: 70px;
  text-align: center;
  font-family: 'Roboto';
`
export const InnerContainer = styled.div`
  display: flex;
  border-radius: 20px;
  overflow: hidden;
  min-height: 75vh;
`
export const LeftContainer = styled.div`
  background-color: #ffc533;
  min-height: 100%;
  padding: 40px;
  width: 50%;
`
export const RightContainer = styled.div`
  background-color: #334155;
  min-height: 100%;
  padding: 40px;
  width: 50%;
`
export const LeftHeading = styled.h1`
  color: #0f172a;
`
export const RightHeading = styled.h1`
  color: #ffbf1f;
`
export const InputItem = styled.input`
  height: 40px;
  border: 0;
  border-radius: 10px;
  margin-right: 10px;
  padding: 20px;
  outline: none;
`

export const Button = styled.button`
  background-color: #ffbf1f;
  color: #0f172a;
  height: 40px;
  width: 100px;
  border: 0;
  border-radius: 10px;
`

export const Img = styled.img`
  width: 100%;
`
export const WordsListContainer = styled.ul`
  list-style: none;
  padding-left: 0;
`
