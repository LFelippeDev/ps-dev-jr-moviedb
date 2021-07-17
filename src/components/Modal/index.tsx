import { useState } from 'react';
import { Item } from '../../types/types';
import { Container, InfoModal, InfoMovie, MovieContent } from './styles';
import { IoCloseSharp } from 'react-icons/io5';
import { imgUrl } from '../../services/api';
import noImage from '../../assets/noImage.jpg';

type ModalProps = {
  item: Item;
  openModal: boolean;
};

const ModalComponent = (props: ModalProps) => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(props.openModal);
  return (
    <Container isOpen={modalIsOpen}>
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
          </InfoMovie>
        </MovieContent>
      </InfoModal>
    </Container>
  );
};

export default ModalComponent;
