let MovieFormConfig = {
  movieName: {
    id: 'movieName',
    key: 'movieName',
    'data-test-id': 'nameInput',
    type: 'text',
    label: 'Movie Name',
    placeholder: 'Enter movie name',
    value: '',
    valid: undefined,
    validationText: '',
    validations: [
      {
        type: 'required',
        message: 'This is a Required field'
      }
    ]
  },
  movieRatings: {
    id: 'movieRatings',
    key: 'movieRatings',
    'data-test-id': 'ratingsInput',
    type: 'number',
    label: 'Movie Ratings',
    placeholder: 'Enter ratings on a scale of 1 to 100',
    value: '0',
    valid: undefined,
    validationText: '',
    min: 1,
    max: 100,
    validations: [
      {
        type: 'required',
        message: 'This is a Required field'
      },
      {
        type: 'validDigitRange',
        message: 'Movie Ratings should be within 1 to 100 range'
      }
    ]
  },
  movieDuration: {
    id: 'movieDuration',
    key: 'movieDuration',
    'data-test-id': 'durationInput',
    type: 'text',
    label: 'Movie Duration',
    placeholder: 'Enter duration in hours or minutes',
    value: '',
    valid: undefined,
    validationText: '',
    validations: [
      {
        type: 'required',
        message: 'This is a Required field'
      },
      {
        type: 'validDuration',
        message: 'Please specify time in hours or minutes(e.g. 2.5h or 120m)'
      }
    ]
  }
};

export default MovieFormConfig;
