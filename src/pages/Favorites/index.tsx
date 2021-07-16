import { Fragment, useState, useEffect } from 'react';
import Carousel from '../../components/Carousel/index';

import { Container, Title } from './styles';
import { FavoritesList, Item } from '../../types/types';

const Favorites = () => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    function loadList() {
      if (localStorage.Favorites) {
        const favorites = localStorage.Favorites;
        const listFavorites: FavoritesList = JSON.parse(favorites);
        setItems(listFavorites.item);
      }
    }
    loadList();
  }, []);

  return (
    <Fragment>
      <Container>
        <Title>Favoritos</Title>
        {items.length !== 0 ? (
          <Carousel favorite list={items} />
        ) : (
          <strong>Não há nada no favoritos no momento</strong>
        )}
      </Container>
    </Fragment>
  );
};

export default Favorites;
