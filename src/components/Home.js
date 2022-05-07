import React, { useState } from "react";
import Search from "./Search/Search";
import MovieList from "./MovieList";
import { Movies } from "./Data";

function Home() {
  const [moviesList] = useState(Movies);
  const [titleSearch, setTitleSearch] = useState("");

  return (
    <div className="App">
      <Search setTitleSearch={setTitleSearch} />
      <MovieList Movies={moviesList} titleSearch={titleSearch} />
    </div>
  );
}

export default Home;
