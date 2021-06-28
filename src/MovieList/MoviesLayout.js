import React, { useState } from 'react';
import MovieList from './MovieList';
import MovieForm from './MovieForm';

const MoviesLayout = () => {
  const [movies, setMovies] = useState([]);

  const addMovie = newMovie => {
    setMovies([...movies, newMovie]);
  };
  return (
    <>
      <h2 className="movie-header"> Favorite Movie Directory</h2>
      <div className="movie-container">
        <MovieForm addMovie={addMovie} />
        <MovieList movies={movies} />
      </div>
    </>
  );
};

export default MoviesLayout;
