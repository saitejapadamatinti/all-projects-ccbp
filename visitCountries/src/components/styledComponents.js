import styled from 'styled-components'

export const AppComponent = styled.div`
  display: flex;
  flex-direction: column;
  height: 140vh;
  background-color: #161624;
`
export const Heading = styled.h1`
  font-family: 'Roboto';
  color: #f8fafc;
`
export const CountriesList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 85%;
  height: 40vh;
  border-radius: 12px;
  background-color: #334155;
  overflow-y: auto;
  list-style-type: none;
  margin-left: 140px;
`
export const ListItem = styled.li`
  height: 40px;
  display: flex;
  justify-content: space-between;
  border-radius: 1px solid #94a3b8;
  margin: 10px;
  padding: 2px;
`
export const ListPara = styled.p`
  font-family: 'Roboto';
  color: #f1f5f9;
`
export const ListButton = styled.button`
  justify-content: space-around;
  background-color: ${props => (props.isVisit ? 'transparent' : '#3b82f6')};
  color: ${props => (props.isVisit ? '#94a3b8' : '#ffffff')};
  width: 80px;
  margin-right: 10px;
  border-radius: 5px;
  cursor: pointer;
`
export const VisitedCountries = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
`
export const VisitedListDisplay = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 90%;
`
export const ListItem1 = styled.li`
  display: flex;
  flex-direction: column;
  width: 30%;
`
export const EmptyHeader = styled.p`
  color: #ffffff;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
`

export const ItemBox = styled.div`
  display: flex;
  flex-direction: column;
`
export const ThumbItem = styled.img`
  height: 80px;
  width: 200px;
`

export const NameBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 200px;
`
export const NameOfItem = styled.p`
  font-family: 'Roboto';
  color: #cbd5e1;
`
export const DeleteButton = styled.button`
  border-radius: 3px;
  width: 80px;
  height: 30px;
  background-color: transparent;
  font-family: 'Roboto';
  color: #cbd5e1;
  margin-right: 10px;
  margin-top: 10px;
  cursor: pointer;
`
