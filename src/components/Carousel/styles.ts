import styled from 'styled-components';

export const Container = styled.div`
  width: calc(100vw - 40px);
  margin-top: 20px;

  .slick-slide {
    margin-right: 36px;
  }
`;

export const Card = styled.div`
  outline: none;

  :hover {
    cursor: pointer;
  }
`;

export const ImageCard = styled.img`
  height: 350px;
  border-radius: 15px;
  box-shadow: 0 0 5px 1px;
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;

  margin-top: 10px;
  max-width: 233px;

  button {
    font-size: 24px;
    background: transparent;
    border: transparent;
    color: ${(props) => props.theme.colors.primary};
    cursor: pointer;
  }
  span {
    font-size: 24px;
    font-family: ${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme.colors.text};
  }
`;
