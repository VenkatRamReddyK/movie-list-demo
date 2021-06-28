import React, { useState } from 'react';
import Cards from '../Components/Cards/Cards';
import Input from '../Components/Input/Input';
import MovieConfig from './Services/MovieConfig';
import InputHelper from '../Components/Input/InputHelper';

const MovieList = ({ movies }) => {
  const [movieListConfig, setMovieListConfig] = useState({ ...MovieConfig });
  let inputChangeHandler = (value, id) => {
    let updatedMovieListConfig = { ...movieListConfig };
    if (id) {
      let element = updatedMovieListConfig[id];
      element.value = value;
      InputHelper.validate(element);
      updatedMovieListConfig[id] = element;
      setMovieListConfig({ ...updatedMovieListConfig });
    }
  };
  return (
    <div className="movie-list">
      <Input
        {...movieListConfig.movieSearch}
        onChange={value => inputChangeHandler(value, 'movieSearch')}
      />
      <Cards
        data-test-id="moviesList"
        cards={movies}
        searchKey={movieListConfig.movieSearch.value}
      />
    </div>
  );
};

export default MovieList;
