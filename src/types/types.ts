export type Item = {
  id: number;
  title: string;
  name: string;
  poster_path: string;
  vote_average: number
};

export type Review = {
    author:string
    content:string
};

export type FavoritesList = {
  item: Item[];
};

