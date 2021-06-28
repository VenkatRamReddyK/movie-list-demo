const InputHelper = {
  validate,
  isValidForm
};

function validate(element) {
  // element.validations.forEach(validation => {
  for (const validation of element.validations) {
    if (validation.type === 'required' && element.value === '') {
      element.validationText = validation.message;
      element.valid = false;
      return;
    } else if (
      validation.type === 'validDigitRange' &&
      (parseInt(element.value) < element.min ||
        parseInt(element.value) > element.max)
    ) {
      element.validationText = validation.message;
      element.valid = false;
      return;
    } else if (validation.type === 'validDuration') {
      if (element.value !== '') {
        let lastValue = element.value.slice(-1);
        let isValid = lastValue === 'm' || lastValue === 'h';
        let durationValue = parseInt(
          element.value.slice(0, element.value.length - 1)
        );
        isValid = isValid && durationValue !== 'NaN';
        if (!isValid) {
          element.validationText = validation.message;
          element.valid = false;
          return;
        }
      }
    } else {
      element.validationText = '';
      element.valid = true;
    }
  }
}

function isValidForm(elementConfig) {
  return Object.entries(elementConfig)
    .map(el => el[1].valid)
    .reduce((isFormValid, elValid) => {
      isFormValid = isFormValid && !!elValid;
      return isFormValid;
    }, true);
}

export default InputHelper;
