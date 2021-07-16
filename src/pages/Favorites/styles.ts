import styled from 'styled-components'

export const Container = styled.div`
padding: 30px;
  strong{
  font-size: 25px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.text};
}
`
export const Title = styled.h1`
font-size: 40px;
font-weight: bold;
color: ${(props) => props.theme.colors.text};`

