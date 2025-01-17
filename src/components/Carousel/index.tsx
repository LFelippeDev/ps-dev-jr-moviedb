import Slider from 'react-slick';
import api, { imgUrl } from '../../services/api';
import { Container, Card, ImageCard, Info } from './styles';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import { FavoritesList, Item } from '../../types/types';
import { Fragment, useEffect, useState } from 'react';
import ModalComponent from '../Modal';
import { render } from '@testing-library/react';
import noImage from '../../assets/noImage.jpg';

type CarouselProps = {
  favorite: boolean;
  list?: Item[];
};

const Carousel = (props: CarouselProps) => {
  const [list, setList] = useState<Item[]>([]);

  useEffect(() => {
    function loadList() {
      if (props.list !== undefined) setList(props.list);
    }
    loadList();
  }, [props.list]);

  const settings = {
    arrows: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 5,
    variableWidth: true,
  };

  function addFavorite(item: Item) {
    if (localStorage.Favorites) {
      const favorites: FavoritesList = JSON.parse(localStorage.Favorites);
      if (!favorites.item.find((e) => e.id === item.id)) {
        favorites.item.push(item);
        localStorage.setItem('Favorites', JSON.stringify(favorites));
      }
    } else {
      const favorites: FavoritesList = { item: [item] };
      localStorage.setItem('Favorites', JSON.stringify(favorites));
    }
  }

  function removeFavorite(item: Item) {
    const favorites: FavoritesList = JSON.parse(localStorage.Favorites);
    const deleteFavorites = favorites.item.filter(
      (e: Item) => e.id !== item.id
    );
    favorites.item = deleteFavorites;
    localStorage.setItem('Favorites', JSON.stringify(favorites));
    if (favorites.item.length === 0) {
      localStorage.removeItem('Favorites');
    }
    if (props.favorite === true) {
      setList(deleteFavorites);
    }
  }

  async function openModal(item: Item) {
    const response = await api.get(
      'movie/' +
        item.id +
        '/reviews?api_key=' +
        process.env.REACT_APP_API_KEY +
        '&language=pt-Br'
    );

    render(
      <ModalComponent
        item={item}
        openModal={true}
        review={response.data.results[0]}
      />
    );
  }

  return (
    <Fragment>
      <Container>
        <Slider {...settings}>
          {list.map((item) => (
            <Card key={item.id}>
              <ImageCard
                src={item.poster_path ? imgUrl + item.poster_path : noImage}
                alt={item.title ? item.title : item.name}
              />
              <Info>
                <span onClick={() => openModal(item)}>
                  {item.title ? item.title : item.name}
                </span>
                <button
                  aria-label="Favoritar"
                  onClick={
                    props.favorite === true
                      ? () => removeFavorite(item)
                      : () => addFavorite(item)
                  }
                >
                  {props.favorite === true ? <AiFillStar /> : <AiOutlineStar />}
                </button>
              </Info>
            </Card>
          ))}
        </Slider>
      </Container>
    </Fragment>
  );
};
export default Carousel;
