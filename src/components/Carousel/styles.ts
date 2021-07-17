import styled from 'styled-components';

export const Container = styled.div`
  max-width: calc(100vw - 40px);
  margin-top: 20px;

  .slick-slide {
    margin-right: 36px;
    padding: 12px;

    @media(max-width: 500px){
    margin-right: 10px;
    padding: 10px;
  }
  }
  
`

export const Card = styled.div`
  outline: none;

  :hover {
    cursor: pointer;
    transform: scale(1.05)
  }
`

export const ImageCard = styled.img`
  height: 350px;
  border-radius: 15px;
  box-shadow: 0 0 5px 1px;
  
  @media(max-width: 500px){
  height: 120px;
  }
`

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;

  margin-top: 10px;
  max-width: 233px;

  button {
    font-size:  1.5rem;
    background: transparent;
    border: transparent;
    color: ${(props) => props.theme.colors.primary};
    cursor: pointer;
  }
  span {
    font-size: 1.5rem;
    color: ${(props) => props.theme.colors.text};
  }

  @media(max-width: 500px){
  width: 81px;
  button,span{
    font-size: .75rem;
  }
  }
`;
