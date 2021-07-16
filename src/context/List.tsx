import { createContext, ReactNode, useState } from 'react';
import { Item } from '../types/types';

type ListContextPropsType = {
  children: ReactNode;
};

type ListContextType = {
  list: Item[] | undefined;
  setList: React.Dispatch<React.SetStateAction<Item[] | undefined>>;
  genre: string | undefined;
  setGenre: React.Dispatch<React.SetStateAction<string | undefined>>;
};

export const ListContext = createContext({} as ListContextType);

export function ListContextProvider(props: ListContextPropsType) {
  const [list, setList] = useState<Item[]>();
  const [genre, setGenre] = useState<string>();

  return (
    <ListContext.Provider value={{ list, setList, genre, setGenre }}>
      {props.children}
    </ListContext.Provider>
  );
}
