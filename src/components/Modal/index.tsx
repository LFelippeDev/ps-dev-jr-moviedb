import { Item } from '../../types/types';
import { Container, InfoMovie } from './styles';

type ModalProps = {
  item: Item;
  openModal: boolean;
};

const ModalComponent = (props: ModalProps) => {
  return (
    <Container isOpen={props.openModal}>
      <InfoMovie>
        <h2>{props.item.title}</h2>
        <button>X</button>
      </InfoMovie>
    </Container>
  );
};

export default ModalComponent;
