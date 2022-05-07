import React from "react";
import { Movies } from "./Data";
import { Link } from "react-router-dom";
import MovieCard from "./MoviesCard/MovieCard";

const MovieList = ({ titleSearch }) => {
  return (
    <div>
      {Movies.filter((movie) =>
        movie.Title.toLowerCase().includes(titleSearch.toLowerCase().trim())
      ).map((movie) => (
        <Link to={`/MovieInfo/${movie.imdbID}`}
        style={{ textDecoration:"none" }}
        >
          <MovieCard
            key={movie.imdbID}
            titleSearch={titleSearch}
            Genre={movie.Genre}
            Runtime={movie.Runtime}
            Images={movie.Images}
            Title={movie.Title}
            Year={movie.Year}
            Plot={movie.Plot}
            imdbRating={movie.imdbRating}
          />
        </Link>
      ))}
    </div>
  );
};

export default MovieList;
