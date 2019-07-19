import React from 'react';
import PropTypes from 'prop-types';

// helper
import useDefault from '../useDefault';

// exported component
const InputField = ({
  name,
  label,
  schema,
  value,
  ...rest
}) => {
  const ref = React.useRef(null);

  // custom behaviour and logic from useField
  const {
    error,
    fieldName,
    defaultValue,
    ...bag
  } = useDefault({
    name,
    ref,
    schema,
    value,
    path: 'checked'
  });

  // props for check element
  const props = {
    ...rest,
    ...bag,
    type: 'checkbox',
    defaultValue,
    fieldName,
    ref
  };

  return (
    <>
      <input id={ fieldName } { ...props } />

      { label && <label htmlFor={ fieldName }>{ label }</label> }

      { error && <span>{ error }</span> }
    </>
  );
};

InputField.defaultProps = {
  label: null,
  value: false,
  schema: null
};

InputField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  schema: PropTypes.any,
  value: PropTypes.bool
};

export default InputField;