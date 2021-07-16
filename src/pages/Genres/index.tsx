import { Fragment, useContext } from 'react';
import Carousel from '../../components/Carousel/index';
import { ListContext } from '../../context/List';
import { Title, Container } from './style';

const FilterSearch = () => {
  const { list, genre } = useContext(ListContext);

  return (
    <Fragment>
      <Container>
        <Title>{genre}</Title>
        <Carousel favorite={false} list={list} />
      </Container>
    </Fragment>
  );
};

export default FilterSearch;
