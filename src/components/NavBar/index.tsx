import { useHistory, useLocation } from 'react-router-dom';
import { useContext, useState } from 'react';
import api from '../../services/api';
import { debounce } from 'lodash';

import { Header, Nav, SearchInput, Image, Links, Genres } from './styles';
import logo from '../../assets/logo.png';
import { ListContext } from '../../context/List';
import { Item } from '../../types/types';

const Navbar = () => {
  const history = useHistory();
  const location = useLocation();
  const [search, setSearch] = useState<string>('');
  const { setList, setGenre } = useContext(ListContext);

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
    if (search.length === 0) {
      history.goBack();
      return;
    }

    if (search.length > 1 && location.pathname !== '/search') {
      history.push('search');
    }
    deboucingSearch();
  }

  async function setGenreList(genre: string) {
    const response = await api.get(
      'search/multi?api_key=' +
        process.env.REACT_APP_API_KEY +
        '&language=pt-Br&query=' +
        genre
    );
    const listGenre: Item[] = response.data.results;
    setList(listGenre);
    setGenre(genre);
    history.push('genres');
  }

  return (
    <Header>
      <Nav>
        <Image src={logo} alt="Logo Baduk" onClick={() => history.push('/')} />
        <Links to="/">Início</Links>
        <Links to="#">
          Genêros
          <Genres>
            <li onClick={() => setGenreList('teste')}>Teste</li>
          </Genres>
        </Links>
        <Links to="/favoritos">Favoritos</Links>
      </Nav>
      <form onKeyUp={handleSearch}>
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
