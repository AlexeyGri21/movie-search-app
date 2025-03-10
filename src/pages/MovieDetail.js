import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const API_KEY = "b744561452ef56a73a31d267914d094a";

const fetchMovieDetails = async (id) => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
  );
  return data;
};

function MovieDetail() {
  const { id } = useParams();
  const { data: movie, isLoading, error } = useQuery({
    queryKey: ["movie", id],
    queryFn: () => fetchMovieDetails(id),
  });

  if (isLoading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка загрузки...</p>;

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h1>{movie.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
        alt={movie.title}
      />
      <p>{movie.overview}</p>
      <p>Жанры: {movie.genres.map((g) => g.name).join(", ")}</p>
      <p>Дата выхода: {movie.release_date}</p>
    </div>
  );
}

export default MovieDetail;
