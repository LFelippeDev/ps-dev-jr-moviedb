import styled from 'styled-components'
import Modal from 'react-modal'

export const Container = styled(Modal)`
height: 100vh;
width: 100vw;


display: flex;
align-items: center;
justify-content: center;

`
export const InfoModal = styled.div`
height: 405px;
width: 500px;
padding: 20px;
border-radius: 10px;

display: flex;
flex-direction: column;
align-items: flex-end;
background: #fff;
button {
  border: none;
  background: transparent;
  cursor: pointer;

  svg{
  font-size: 25px;
  color: red;
}
}
` 
export const MovieContent = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
img{
  width: 240px;
  border-radius: 20px;
}
` 
export const InfoMovie = styled.div`
width: 240px;
display: flex;
flex-direction: column;
align-items: center;

h2{
  color: #faa61b;
  font-size: 30px;
}
span{
  font-weight: bold;
  font-size: 24px;
}
`