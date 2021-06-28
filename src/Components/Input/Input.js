import React from 'react';

const Input = props => {
  let element = <></>;
  if (props?.type === 'text') {
    element = (
      <input
        id={`input-text-element-${props.id}`}
        className="input"
        key={`input-text-element-${props.key}`}
        type="text"
        placeholder={props.placeholder}
        value={props.value}
        onChange={event => props.onChange(event.target.value)}
      />
    );
  }
  if (props?.type === 'number') {
    element = (
      <input
        id={`input-text-element-${props.id}`}
        className="input"
        key={`input-text-element-${props.key}`}
        type="number"
        value={props.value}
        placeholder={props.placeholder}
        onChange={event => props.onChange(event.target.value)}
      />
    );
  }
  return (
    <div className="input-container">
      {!props.hideLabel && <span> {props.label}</span>}
      {element}
      {!props.valid && (
        <span className="input-error-message"> {props.validationText}</span>
      )}
    </div>
  );
};

export default Input;
