import { createContext, ReactNode, useState } from 'react';
import { Item } from '../types/types';

type SearchContextPropsType = {
  children: ReactNode;
};

type SearchContextType = {
  list: Item[] | undefined;
  setList: React.Dispatch<React.SetStateAction<Item[] | undefined>>;
};

export const SearchContext = createContext({} as SearchContextType);

export function SearchContextProvider(props: SearchContextPropsType) {
  const [list, setList] = useState<Item[]>();

  return (
    <SearchContext.Provider value={{ list, setList }}>
      {props.children}
    </SearchContext.Provider>
  );
}
