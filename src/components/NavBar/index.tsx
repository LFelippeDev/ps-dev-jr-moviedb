import { useHistory } from 'react-router-dom';
import { Header, Nav, SearchInput, Image, Favorites } from './styles';

import logo from '../../assets/logo.png';

const Navbar = () => {
  const history = useHistory();

  return (
    <Header>
      <Nav>
        <Image src={logo} alt="Logo Baduk" onClick={() => history.push('/')} />
        <Favorites onClick={() => history.push('/favoritos')}>
          Favoritos
        </Favorites>
      </Nav>
      <SearchInput placeholder="Digite um filme" />
    </Header>
  );
};

export default Navbar;
