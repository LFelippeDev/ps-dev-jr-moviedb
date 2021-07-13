import styled from 'styled-components'

export const Header = styled.header`
background: ${(props) => props.theme.colors.black};
box-shadow: 0 0 5px 1px;

width: 100vw;
height: 100px;

display: flex;
align-items: center;
justify-content: center;
`
export const Image = styled.img`
height: 60px;
`
export const Navigation = styled.div`
display: flex;
`
export const Favorites = styled.a`
font-family: ${(props) => props.theme.fonts.regular};
font-size: 20px;
font-weight: bold;
color: ${(props) => props.theme.colors.text};
text-decoration: none;
`
export const SearchInput = styled.input`
background:  ${(props) => props.theme.colors.gray};
border: none;
border-radius: 10px;

height: 60px;
width: 500px;
outline: none;

font-family: ${(props) => props.theme.fonts.regular};
font-size: 20px;
font-weight: bold;
color: ${(props) => props.theme.colors.text};
`