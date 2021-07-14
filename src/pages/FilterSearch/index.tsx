import { Fragment } from 'react';
import Navbar from '../../components/NavBar/index';
import Carousel from '../../components/Carousel/index';
import { Title, Container } from './style';

const FilterSearch = () => {
  return (
    <Fragment>
      <Navbar />
      <Container>
        <Title>Drama</Title>
        <Carousel favorite={false} list={[]} />
      </Container>
    </Fragment>
  );
};

export default FilterSearch;
