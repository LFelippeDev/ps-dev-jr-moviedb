import { Fragment } from 'react';
import Navbar from '../../components/NavBar/index';
import { Title, Container } from './style';

const FilterSearch = () => {
  return (
    <Fragment>
      <Navbar />
      <Container>
        <Title>Drama</Title>
      </Container>
    </Fragment>
  );
};

export default FilterSearch;
