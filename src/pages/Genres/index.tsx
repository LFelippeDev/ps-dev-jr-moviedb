import { Fragment, useEffect, useState } from 'react';
import Carousel from '../../components/Carousel/index';
import api from '../../services/api';
import { GenresList } from '../../types/Genres';
import { Item } from '../../types/types';
import { Title, Container } from './style';

type teste = Item[];
const Genres = () => {
  const [list, setList] = useState<teste[]>([]);

  useEffect(() => {
    async function setGenreList() {
      const array: teste[] = [];
      let i = 0;
      while (i < 19) {
        let response = await api.get(
          'discover/movie?&api_key=' +
            process.env.REACT_APP_API_KEY +
            '&language=pt-Br&with_genres=' +
            GenresList[i].id
        );
        array.push(response.data.results);
        i++;
      }
      setList(array);
    }
    setGenreList();
  }, []);
  console.log(list);
  return (
    <Fragment>
      <Container>
        {GenresList.map((item, index) => (
          <Fragment key={item.id}>
            <Title>{item.name}</Title>
            <Carousel favorite={false} list={list[index]} />
          </Fragment>
        ))}
      </Container>
    </Fragment>
  );
};

export default Genres;
