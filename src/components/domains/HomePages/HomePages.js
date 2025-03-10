import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import { TableCardMovie } from "../../ui/TableCardsMovie/TableCardMovie";
import { Search } from "../../ui/Search/Search";

const API_KEY = "b744561452ef56a73a31d267914d094a";

const fetchMovies = async (query) => {
  if (!query) return null;
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
  );
  return data.results;
};

const HomePages = () => {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  const { data: movies, isFetching, isLoading } = useQuery({
    queryKey: ["movies", query],
    queryFn: () => fetchMovies(query),
    enabled: !!query, 
  });

  const handleSearch = () => {
    setQuery(search); 
  };

  const moviesFound = movies && movies.length > 0;

  return (
    <div>
      <Search
        search={search}
        onChange={(e) => setSearch(e.target.value)}
        onClick={handleSearch}
        isLoading={isLoading || isFetching} 
        disabled={isLoading || isFetching} 
        moviesFound={moviesFound} 
      />
      {moviesFound ? <TableCardMovie movies={movies} /> : null}
    </div>
  );
};

export { HomePages };
