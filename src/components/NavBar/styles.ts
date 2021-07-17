import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Header = styled.header`
background: ${(props) => props.theme.colors.black};
box-shadow: 0 0 5px 1px;
max-width: 100vw;
height: 100px;
display: flex;
align-items: center;
justify-content: center;

@media(max-width: 1000px){
  justify-content: space-between;
  padding: 0 20px;
}
`
export const Nav = styled.div`
display: flex;
align-items: baseline;
justify-content: space-between;
`
export const Image = styled.img`
height: 60px;
cursor: pointer;
margin: 0 10px;

@media(max-width: 1000px){
  height: 35px;
  margin: 0;
}
`
export const Links= styled(Link)`
font-size: 20px;
margin: 0 10px;
font-weight: bold;
text-decoration: none;
color: ${(props) => props.theme.colors.text};

:hover{
  color: ${(props) => props.theme.colors.primary};
  cursor: pointer;
}

@media(max-width: 1000px){
display: none;
}
`

export const SearchInput = styled.input`
border: none;
border-radius: 10px;
padding: 0 10px;
height: 60px;
width: 500px;
font-size: 20px;
font-weight: bold;
outline: none;
background: ${(props) => props.theme.colors.gray};
color: ${(props) => props.theme.colors.text};

@media(max-width: 1000px){
width: 40vw;
}
`
export const ResponsiveMenu = styled.button`
display: none;
background: transparent;
border: none;
font-size: 25px;
color: #fff;

@media(max-width:1000px){
  display: block;
}

:active {
  ul{
    display: block;
  }
}
`

export const MenuOptions = styled.ul`
display: none;
position: relative;
margin-top: 50px;
li{
  padding: 10px;
  background: black;
}
:hover{
display: block;
}
`