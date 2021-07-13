import { Header, SearchInput, Image, Favorites } from './styles';

import logo from '../../assets/logo.svg';

const Navbar = () => {
  return (
    <Header>
      <Image src={logo} alt="Logo Baduk" />
      <Favorites href="/">Favoritos</Favorites>
      <SearchInput placeholder="Digite um filme" value="" />
    </Header>
  );
};

export default Navbar;
