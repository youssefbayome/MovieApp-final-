import React from "react";
import "./search.styles.css"
const Search = ({ setTitleSearch }) => {
  return (
    <div>
      <div className="search">
        <input
          type="text"
          placeholder="Search your favorite movie"
          onChange={(e) => setTitleSearch(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Search;
