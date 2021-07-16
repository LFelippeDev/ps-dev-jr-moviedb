import Slider from 'react-slick';
import { imgUrl } from '../../services/api';
import { Container, Card, ImageCard, Info } from './styles';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import { FavoritesList, Item } from '../../types/types';
import { Fragment, useEffect, useState } from 'react';
import ModalComponent from '../Modal';
import { render } from '@testing-library/react';

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
    autoplay: false,
    speed: 300,
    slidesToShow: 5,
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

  function openModal(item: Item) {
    render(<ModalComponent item={item} openModal={true} />);
  }

  return (
    <Fragment>
      <Container>
        <Slider {...settings}>
          {list.map((item) => (
            <Card key={item.id}>
              <ImageCard src={imgUrl + item.poster_path} alt={item.title} />
              <Info>
                <span onClick={() => openModal(item)}>{item.title}</span>
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
