import { useEffect, useState, Fragment } from 'react';

import Carousel from '../../components/Carousel';
import api from '../../services/api';
import { Container, Title } from './styles';

const Home = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function loadList() {
      const response = await api.get(
        'discover/movie?sort_by=popularity.desc&api_key=' +
          process.env.REACT_APP_API_KEY +
          '&language=pt-Br'
      );
      setItems(response.data.results);
    }
    loadList();
  }, []);

  return (
    <Fragment>
      <Container>
        <Title>Destaques</Title>
        <Carousel favorite={false} list={items} />
      </Container>
    </Fragment>
  );
};

export default Home;
