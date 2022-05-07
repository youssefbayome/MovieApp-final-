import React from "react";
import "../MoviesCard/MovieCard.styles.css";
const MovieCard = ({
  movie: Year,
  Title,
  Images,
  Plot,
  Runtime,
  Genre,
  imdbRating,
}) => {
  return (
    <div className="movies_card">
      <div className="info_section">
        <div className="movie_header">
          <img className="locandina" src={Images[0]} alt="movie Poster" />
          <h1>{Title}</h1>
          <h4>{Year}</h4>
          <span className="minutes">{Runtime}</span>
          <p className="type">{Genre}</p>
          <p className="text">{imdbRating}</p>
        </div>
        <div className="movie_desc">
          <p className="text">{Plot}</p>
        </div>
      </div>
      <div
        className="blur_back bright_back"
        style={{
          backgroundImage: `url(${Images[1]})`,
        }}
      ></div>
    </div>
  );
};

export default MovieCard;
