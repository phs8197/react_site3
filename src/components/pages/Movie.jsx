import React from "react";
import { useState, useEffect } from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Contents from "../layout/Contents";
import MovieCont from "../include/MovieCont";
import MovieSlider from "../include/MovieSlider";
import MovieSearch from "../include/MovieSearch";
import Title from "../layout/Title";
import Contact from "../layout/Contact";

const Movie = () => {
  const [movies, setMovies] = useState([]);

  const search = async (query) => {
    await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=ff9ab24e09762b068299cbf883f73362&query=${query}`
    )
      .then((response) => response.json())
      .then((result) => setMovies(result.results))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=ff9ab24e09762b068299cbf883f73362&page=1"
    )
      .then((response) => response.json())
      .then((result) => setMovies(result.results))
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <>
      <Header />
      <Contents>
        <Title title={["movie", "reference api"]} />
        <MovieSlider movies={movies} />
        <MovieSearch onSearch={search} />
        <MovieCont movies={movies} />
        <Contact />
      </Contents>
      <Footer />
    </>
  );
};

export default Movie;
