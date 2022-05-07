import React from "react";
import Header from "./components/Header/Header";
import Home from "./components/Home";
import MovieInfo from "./components/MovieInfo/MovieInfo";
import AddMovie from "./components/AddMovie/AddMovie";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" excat element={<Home />} />
          <Route path="/AddMovie" element={<AddMovie />} />
          <Route path="/MovieInfo/:imdbID" element={<MovieInfo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
