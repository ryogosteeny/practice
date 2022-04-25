import React, { useEffect, useState } from "react";
import "./Film.css";
import { Header } from "../atoms/Header";
import { Search } from "../atoms/Search";
import { Movie } from "../atoms/Movie";
import axios from "axios";

const MOVIE_API_URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=c4334dc544bd24c517220cd39c834a76&language=ja`;

/**
 * todo 型定義ファイルへ移動させた方が良い
 */
export interface MovieType {
  title: string;
  release_date: string;
  id: number;
  poster_path: string;
}

/**
 * containerComponent
 * @constructor
 */
export const Film = () => {
  const [movies, setMovies] = useState<MovieType[]>([]);

  useEffect(() => {
    axios
      .get(MOVIE_API_URL)
      .then((res) => {
        console.log(res.data.results);
        setMovies(res.data.results);
      })
      .catch((e) => console.log(e.message));
  }, []);

  return (
    <div>
      <Header title={"映画の作品"} />
      <Search />
      <ul className="movie-list movie-layout">
        {movies.map((movie: MovieType) => (
          <li className="movie-list__item" key={movie.id}>
            <Movie movie={movie} />
          </li>
        ))}
      </ul>
    </div>
  );
};
