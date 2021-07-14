import { Fragment } from 'react';
import Navbar from '../../components/NavBar/index';
import Carousel from '../../components/Carousel/index';

import { Container, Title } from './styles';

const Favorites = () => {
  return (
    <Fragment>
      <Navbar />
      <Container>
        <Title>Favoritos</Title>
        <Carousel favorite />
      </Container>
    </Fragment>
  );
};

export default Favorites;
