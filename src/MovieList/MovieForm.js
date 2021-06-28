import React, { useState } from 'react';
import Input from '../Components/Input/Input';
import cloneDeep from 'lodash/cloneDeep';
import MovieFormConfig from './Services/MovieFormConfig';
import InputHelper from '../Components/Input/InputHelper';

const MovieForm = ({ addMovie }) => {
  const [movieConfig, setMovieConfig] = useState(MovieFormConfig);
  const [isFormValid, setFormValid] = useState(false);
  let inputChangeHandler = (value, id) => {
    let updatedMovieConfig = { ...movieConfig };
    if (id) {
      let element = updatedMovieConfig[id];
      element.value = value;
      InputHelper.validate(element);
      console.log('element: ', element);
      updatedMovieConfig[id] = element;
      setMovieConfig(updatedMovieConfig);
      setFormValid(InputHelper.isValidForm(updatedMovieConfig));
    }
  };

  const formatDuration = () => {
    let elValue = movieConfig.movieDuration.value;
    let lastValue = elValue.slice(-1);
    let multiplier = 1;
    if (lastValue === 'm') {
      multiplier = 1 / 60;
    }
    let durationValue =
      parseInt(elValue.slice(0, elValue.length - 1)) * multiplier;
    return durationValue.toFixed(1);
  };
  const addMovieFn = () => {
    addMovie({
      name: movieConfig.movieName.value,
      rating: movieConfig.movieRatings.value,
      duration: formatDuration()
    });
    let updatedMovieConfig = cloneDeep(movieConfig);
    updatedMovieConfig['movieName'].value = '';
    updatedMovieConfig['movieRatings'].value = '';
    updatedMovieConfig['movieDuration'].value = '';

    setMovieConfig(updatedMovieConfig);
    setFormValid(false);
  };

  return (
    <div className="movie-form">
      <Input
        {...movieConfig.movieName}
        onChange={value => inputChangeHandler(value, 'movieName')}
      />
      <Input
        {...movieConfig.movieRatings}
        onChange={value => inputChangeHandler(value, 'movieRatings')}
      />
      <Input
        {...movieConfig.movieDuration}
        onChange={value => inputChangeHandler(value, 'movieDuration')}
      />

      <div className="add-movie-container">
        <button
          data-testid="addButton"
          type="button"
          disabled={!isFormValid}
          className="add-movie"
          onClick={addMovieFn}
        >
          Add Movie
        </button>
      </div>
    </div>
  );
};

export default MovieForm;
