import { useState } from 'react';
import { Item, Review } from '../../types/types';
import { Container, InfoModal, InfoMovie, MovieContent } from './styles';
import { IoCloseSharp } from 'react-icons/io5';
import noImage from '../../assets/noImage.jpg';
import { imgUrl } from '../../services/api';

type ModalProps = {
  item: Item;
  openModal: boolean;
  review?: Review;
};

const ModalComponent = (props: ModalProps) => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(props.openModal);
  return (
    <Container ariaHideApp={false} isOpen={modalIsOpen}>
      <InfoModal>
        <button type="button" onClick={() => setModalIsOpen(false)}>
          <IoCloseSharp />
        </button>
        <MovieContent>
          <img
            src={
              props.item.poster_path ? imgUrl + props.item.poster_path : noImage
            }
            alt={props.item.title}
          />
          <InfoMovie>
            <h2>{props.item.vote_average}</h2>
            <span>{props.item.title}</span>
            <h4>{props.review?.author}</h4>
            <p>{props.review?.content}</p>
          </InfoMovie>
        </MovieContent>
      </InfoModal>
    </Container>
  );
};

export default ModalComponent;
