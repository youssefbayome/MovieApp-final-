import React from "react";
import "../MovieInfo/MovieInfo.styles.css";
import { Link, useParams } from "react-router-dom";
import { Movies } from "../Data";
import "../MovieInfo/MovieInfo.styles.css";
import Icon from "../../images/icon.svg";
import Back from "../../images/back.svg";

const MovieInfo = () => {
  const { imdbID } = useParams();
  const movie = Movies.find((element) => element.imdbID === imdbID);

  return (
    <div>
      <Link
        to="/"
        style={{
          position: "absolute",
          top: "180px",
          left: "100px",
        }}
      >
        <img src={Back} alt="back home" style={{ width: "50px" }} />
      </Link>
      <div className="movie_card">
        <div className="info_section">
          <div className="movie_header">
            <img
              className="locandina"
              src={movie.Images[2]}
              alt="movie Poster"
            />
            <h1>{movie.Title}</h1>
            <h4>RELEASE YEAR: {movie.Year}</h4>
            <span className="minutes">RUNTIME: {movie.Runtime}</span>
            <p className="type">GENRE: {movie.Genre}</p>
            <p className="text">RATING: {movie.imdbRating}</p>
          </div>
          <div className="movie_desc">
            <p className="text">{movie.Plot}</p>
          </div>
          <div className="workers">
            <label for="actors">Actors</label>
            <h3 className="text" name="actors">
              {movie.Actors}
            </h3>
            <label for="Director">Director</label>

            <h3 className="text">{movie.Director}</h3>
          </div>
          <div className="trailer">
            <img src={Icon} alt="icon" />
            <a href={movie.trailer}>watch trailer</a>
          </div>
        </div>
        <div
          className="blur_back bright_back"
          style={{
            backgroundImage: `url(${movie.Images[0]})`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default MovieInfo;
