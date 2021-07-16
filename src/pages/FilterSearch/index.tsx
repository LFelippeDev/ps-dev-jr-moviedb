import { Fragment, useContext } from 'react';
import Carousel from '../../components/Carousel/index';
import { SearchContext } from '../../context/Search';
import { Title, Container } from './style';
const FilterSearch = () => {
  const { list } = useContext(SearchContext);
  return (
    <Fragment>
      <Container>
        <Title>Resutados</Title>
        <Carousel favorite={false} list={list} />
      </Container>
    </Fragment>
  );
};

export default FilterSearch;
