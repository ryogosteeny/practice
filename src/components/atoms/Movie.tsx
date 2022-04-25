import React from "react";
import "./Movie.css";

interface Props {
  title: string;
  year: string;
}

export const Movie = ({ title, year }: Props) => {
  return (
    <div className="movie">
      <h2>{title}</h2>
      <div>
        <img
          src="https://1.bp.blogspot.com/-noejtvMJM8Q/V4SA7f_DLbI/AAAAAAAA8OM/Ajwehtq2jCgO2QvPdxGJz5I290VyUZVLQCLcB/s400/dog_akitainu.png"
          alt="dog"
          width="200"
        />
      </div>
      <p className="release-year">{year}年公開</p>
    </div>
  );
};
