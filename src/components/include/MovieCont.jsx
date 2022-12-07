import React from "react";

const MovieItem = (props) => {
  return (
    <li>
      <a href="/">
        <img
          src={`https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`}
        />
      </a>
    </li>
  );
};
const MovieCont = (props) => {
  return (
    <section className="cont__movie">
      <div className="container">
        <div className="movie__inner">
          <ul>
            {props.movies.map((movies, index) => (
              <MovieItem key={index} movie={movies} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MovieCont;
