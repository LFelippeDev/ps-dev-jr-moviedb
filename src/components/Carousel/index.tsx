import Slider from 'react-slick';
import { Container, Card, ImageCard, Info } from './styles';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import { FavoritesList, Item } from '../../types/types';

type CarouselProps = {
  favorite: boolean;
  list: Item[];
};

const Carousel = (props: CarouselProps) => {
  const imgUrl = 'https://image.tmdb.org/t/p/w185';
  const settings = {
    arrows: false,
    infinite: false,
    autoplay: false,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 5,
    variableWidth: true,
  };

  function addFavorite(item: Item) {
    if (localStorage.Favorites) {
      const favorites: FavoritesList = JSON.parse(localStorage.Favorites);
      if (!favorites.item.includes(item)) {
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
    const deleteFavorite = favorites.item.filter((e: Item) => e.id !== item.id);
    localStorage.setItem('Favorites', JSON.stringify(deleteFavorite));
    if (favorites.item.length === 1) {
      localStorage.removeItem('Favorites');
    }
  }

  return (
    <Container>
      <Slider {...settings}>
        {props.list.map((item) => (
          <Card key={item.id}>
            <ImageCard src={imgUrl + item.poster_path} alt={item.title} />
            <Info>
              <span>{item.title}</span>
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
  );
};
export default Carousel;
