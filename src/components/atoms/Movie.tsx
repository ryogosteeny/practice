import React from "react";
import { MovieType } from "../organism/Film";
import "./Movie.css";

interface Props {
  movie: MovieType;
}

/**
 * todo 定数ファイルへ移動させた方が良い
 */
const MOVIE_IMAGES_API = `https://image.tmdb.org/t/p/w300_and_h450_bestv2/`;

export const Movie = ({ movie }: Props) => {
  /**
   * 定義していくのは良いのか疑問
   */
  const disassemblyReleaseDate = movie.release_date.split("-");
  const releaseYear = disassemblyReleaseDate[0];
  const releaseMonth = disassemblyReleaseDate[1];
  const releaseDay = disassemblyReleaseDate[2];

  return (
    <div className="movie">
      <h2 className="h2 h2__text-overflow-ellipsis">{movie.title}</h2>
      <div>
        <img
          src={`${MOVIE_IMAGES_API}${movie.poster_path}`}
          alt={movie.title}
          width="200"
        />
      </div>
      <p className="release-year">
        {`${releaseYear}年${releaseMonth}月${releaseDay}日公開`}
      </p>
    </div>
  );
};