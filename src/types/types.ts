export type Item = {
  id: number;
  title: string;
  poster_path: string;
};

export type FavoritesList = {
  item: Item[];
};