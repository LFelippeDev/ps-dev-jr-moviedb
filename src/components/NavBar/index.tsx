import { useHistory } from 'react-router-dom';
import { useContext, useState } from 'react';
import api from '../../services/api';
import { debounce } from 'lodash';

import { Header, Nav, SearchInput, Image, Links } from './styles';
import logo from '../../assets/logo.png';
import { SearchContext } from '../../context/Search';

const Navbar = () => {
  const history = useHistory();
  const [search, setSearch] = useState<string>('');
  const { setList } = useContext(SearchContext);

  async function deboucingSearch() {
    if (search.length === 1) {
      history.push('search');
    }
    if (search.length === 0) {
      history.goBack();
    }
    if (search.trim() !== '') {
      const response = await api.get(
        'search/movie?api_key=' +
          process.env.REACT_APP_API_KEY +
          '&language=pt-Br&query=' +
          search
      );
      const deb = debounce(() => setList(response.data.results), 1000);
      deb();
    }
  }

  return (
    <Header>
      <Nav>
        <Image src={logo} alt="Logo Baduk" onClick={() => history.push('/')} />
        <Links to="/">Início</Links>
        <Links to="/favoritos">Favoritos</Links>
      </Nav>
      <form onKeyUp={deboucingSearch}>
        <SearchInput
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          placeholder="Digite um filme"
        />
      </form>
    </Header>
  );
};

export default Navbar;
