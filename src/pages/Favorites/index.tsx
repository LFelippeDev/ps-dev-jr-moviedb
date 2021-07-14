import { Fragment, useState } from 'react';
import Navbar from '../../components/NavBar/index';
import Carousel from '../../components/Carousel/index';

import { Container, Title } from './styles';
import { useEffect } from 'react';
import { FavoritesList, Item } from '../../types/types';

const Favorites = () => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    function loadList() {
      const favorites = localStorage.Favorites;
      const listFavorites: FavoritesList = JSON.parse(favorites);
      setItems(listFavorites.item);
    }
    loadList();
  }, []);
  return (
    <Fragment>
      <Navbar />
      <Container>
        <Title>Favoritos</Title>
        <Carousel favorite list={items} />
      </Container>
    </Fragment>
  );
};

export default Favorites;
