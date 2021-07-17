import { useHistory, useLocation } from 'react-router-dom';
import { useContext, useState } from 'react';
import api from '../../services/api';
import { debounce } from 'lodash';

import {
  Header,
  Nav,
  SearchInput,
  Image,
  Links,
  ResponsiveMenu,
  MenuOptions,
} from './styles';
import logo from '../../assets/logo.png';
import { GiHamburgerMenu } from 'react-icons/gi';
import { ListContext } from '../../context/List';

const Navbar = () => {
  const history = useHistory();
  const location = useLocation();
  const [search, setSearch] = useState<string>('');
  const { setList } = useContext(ListContext);

  async function deboucingSearch() {
    if (search.trim() !== '') {
      const response = await api.get(
        'search/multi?api_key=' +
          process.env.REACT_APP_API_KEY +
          '&language=pt-Br&query=' +
          search
      );
      const deb = debounce(() => setList(response.data.results), 1000);
      deb();
    }
  }

  function handleSearch() {
    if (search.length === 0 && location.pathname === '/search') {
      history.goBack();
      return;
    }

    if (search.length > 1 && location.pathname !== '/search') {
      history.push('search');
    }
    deboucingSearch();
  }

  return (
    <Header>
      <Nav>
        <Image src={logo} alt="Logo Baduk" onClick={() => history.push('/')} />
        <Links to="/">Início</Links>
        <Links to="/generos">Genêros</Links>
        <Links to="/favoritos">Favoritos</Links>
      </Nav>
      <form onKeyUp={handleSearch}>
        <SearchInput
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          placeholder="Busque algo..."
        />
      </form>
      <ResponsiveMenu>
        <GiHamburgerMenu />
        <MenuOptions>
          <li onClick={() => history.push('/')}>Início</li>
          <li onClick={() => history.push('/generos')}>Genêros</li>
          <li onClick={() => history.push('/favoritos')}>Favoritos</li>
        </MenuOptions>
      </ResponsiveMenu>
    </Header>
  );
};

export default Navbar;
