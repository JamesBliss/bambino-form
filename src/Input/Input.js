import React from 'react';
import PropTypes from 'prop-types';

// helper
import useDefault from '../useDefault';

// exported component
const InputField = ({
  name,
  label,
  multiline,
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
    value
  });

  // props to be spread on input elemnt
  const props = {
    ...rest,
    ...bag,
    defaultValue,
    fieldName,
    ref
  };

  return (
    <>
      { label && <label htmlFor={ fieldName }>{ label }</label> }

      { multiline ? (
        <textarea { ...props } />
      ) : (
        <input { ...props } />
      ) }

      { error && <span>{ error }</span> }
    </>
  );
};

InputField.defaultProps = {
  label: null,
  multiline: false,
  schema: null,
  value: null
};

InputField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  multiline: PropTypes.bool,
  schema: PropTypes.any,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default InputField;