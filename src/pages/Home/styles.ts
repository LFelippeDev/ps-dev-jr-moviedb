import styled from "styled-components";

export const Container = styled.div`
background: ${(props) => props.theme.colors.background};
width: calc(100vw - 60px);
height: calc(100vh - 160px);

padding: 30px;
`

export const Title = styled.h1`
font-family: ${(props) => props.theme.fonts.regular};
font-size: 40px;
font-weight: bold;
color: ${(props) => props.theme.colors.text}
` 