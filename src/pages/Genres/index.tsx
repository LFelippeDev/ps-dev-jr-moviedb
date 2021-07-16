import { Fragment } from 'react';
import Carousel from '../../components/Carousel/index';
import { Title, Container } from './style';

const FilterSearch = () => {
  return (
    <Fragment>
      <Container>
        <Title>Drama</Title>
        <Carousel favorite={false} list={[]} />
      </Container>
    </Fragment>
  );
};

export default FilterSearch;
