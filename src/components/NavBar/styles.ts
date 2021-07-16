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
`
export const Nav = styled.div`
display: flex;
align-items: baseline;
justify-content: space-between;
margin-right:30px;
`
export const Image = styled.img`
height: 60px;
margin-right: 20px;
cursor: pointer;
`
export const Links= styled(Link)`
font-size: 20px;
margin-right: 10px;
font-weight: bold;
color: ${(props) => props.theme.colors.text};
text-decoration: none;
cursor: pointer;
`
export const SearchInput = styled.input`
background:  ${(props) => props.theme.colors.gray};
border: none;
border-radius: 10px;
padding-left: 20px;
height: 60px;
width: 500px;
outline: none;
font-size: 20px;
font-weight: bold;
color: ${(props) => props.theme.colors.text};
`