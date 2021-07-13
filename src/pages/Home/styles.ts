import styled from "styled-components";

export const Container = styled.div`
background: ${(props) => props.theme.colors.background};
width: 100vw;
height: calc(100vh - 100px);
`