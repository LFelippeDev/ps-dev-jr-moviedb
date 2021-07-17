import { createContext, ReactNode, useState } from 'react';
import { Item } from '../types/types';

type ListContextPropsType = {
  children: ReactNode;
};

type ListContextType = {
  list: Item[] | undefined;
  setList: React.Dispatch<React.SetStateAction<Item[] | undefined>>;
};

export const ListContext = createContext({} as ListContextType);

export function ListContextProvider(props: ListContextPropsType) {
  const [list, setList] = useState<Item[]>();

  return (
    <ListContext.Provider value={{ list, setList }}>
      {props.children}
    </ListContext.Provider>
  );
}
