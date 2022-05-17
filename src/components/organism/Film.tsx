import React, { useEffect, useState } from "react";
import "./Film.css";
import { Header } from "../atoms/Header";
import { Search } from "../molecules/Search";
import { Movie } from "../atoms/Movie";
import axios from "axios";
import { MOVIE_POPULAR_API, MY_API_KEY } from "../../api/Movie";
import { LocalNav } from "../atoms/LocalNav";

/**
 * todo 型定義ファイルへ移動させた方が良い
 */
export interface MovieType {
  title: string;
  release_date: string;
  id: number;
  poster_path: string;
}

export const Film = () => {
  const [movies, setMovies] = useState<MovieType[]>([]);

  useEffect(() => {
    // todo axiosに型をつけた方が良いのか？またなぜ必要なのかを調査
    axios
      .get(MOVIE_POPULAR_API)
      .then((res) => {
        console.log(res.data.results);
        setMovies(res.data.results);
      })
      .catch((e) => console.log(e.message));
  }, []);

  const search = async (searchValue: string) =>
    await axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${MY_API_KEY}&language=ja&query=${searchValue}&include_adult=false`
      )
      .then((res) => {
        console.log("search", res.data);
        setMovies(res.data.results);
      })
      .catch((e) => console.log(e.message));

  return (
    <div>
      <div className="page__header__color">
        <Header title={"映画の作品"} />
      </div>
      <div className="content-has-column">
        <main className="content__main">
          <Search search={search} />
          <ul className="movie-list movie-layout">
            {movies.map((movie: MovieType) => (
              <li className="movie-list__item" key={movie.id}>
                <Movie movie={movie} />
              </li>
            ))}
          </ul>
        </main>
        <aside className="content__side">
          <LocalNav />
        </aside>
      </div>
    </div>
  );
};

// todo ルーティングする
