import Slider from 'react-slick';
import { Container, Card, ImageCard, Info } from './styles';
import teste from '../../assets/teste.jpg';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';

type CarouselProps = {
  favorite: boolean;
};

const Carousel = (props: CarouselProps) => {
  const settings = {
    arrows: false,
    autoplay: false,
    infinite: false,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 5,
    variableWidth: true,
  };

  return (
    <Container>
      <Slider {...settings}>
        <Card>
          <ImageCard src={teste} alt="" />
          <Info>
            <span>WandaVision</span>
            <button aria-label="Favoritar">
              {props.favorite === true ? <AiFillStar /> : <AiOutlineStar />}
            </button>
          </Info>
        </Card>
      </Slider>
    </Container>
  );
};
export default Carousel;
