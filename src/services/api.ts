import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

export default api;

export const imgUrl = 'https://image.tmdb.org/t/p/w185';