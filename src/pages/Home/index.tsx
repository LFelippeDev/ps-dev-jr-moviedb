import { Fragment } from 'react';

import Navbar from '../../components/NavBar/index';
import { Container } from './styles';

const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <Container />
    </Fragment>
  );
};

export default Home;
