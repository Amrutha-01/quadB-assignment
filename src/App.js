import "./App.css";
import HomePage from "./components/homePage/homePage";
import MovieDetails from "./components/movieDetails/movieDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";

function App() {
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((res) => res.json())
      .then((res) => setMovieData(res))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="App">
      {/* <HomePage/> */}
      <Router>
        <Routes>
          <Route
            path="/movie/:id"
            element={<MovieDetails movieData={movieData} />}
          />
          <Route path="/" element={<HomePage movieData={movieData} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
