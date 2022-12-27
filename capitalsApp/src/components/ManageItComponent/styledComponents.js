import styled from 'styled-components'

export const BackgrounImg = styled.div`
  background-image: url(${props => props.banner});
  height: 100%;
  background-size: cover;
  display: flex;
  align-items: flex-end;
`
