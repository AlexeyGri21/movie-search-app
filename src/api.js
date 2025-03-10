import axios from "axios";

const API_URL = process.env.REACT_APP_TMDB_API_URL;
const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

export const api = axios.create({
  baseURL: API_URL,
  params: { api_key: API_KEY, language: "ru-RU" },
});

export const searchMovies = async (query, page = 1) => {
  const { data } = await api.get("/search/movie", { params: { query, page } });
  return data;
};

export const getMovieDetails = async (id) => {
  const { data } = await api.get(`/movie/${id}`);
  return data;
};
