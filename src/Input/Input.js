import React from 'react';
import PropTypes from 'prop-types';

// helper
import useField from '../useField';

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
  } = useField({
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
    ref
  };

  return (
    <>
      { label && <label className='form__label' htmlFor={ fieldName }>{ label }</label> }

      { multiline ? (
        <textarea className='form__textarea' { ...props } />
      ) : (
        <input className='form__input' { ...props } />
      ) }

      { error && <span className='form__error'>{ error }</span> }
    </>
  );
};

InputField.defaultProps = {
  label: null,
  placeholder: '',
  multiline: false,
  schema: null,
  value: null
};

InputField.propTypes = {
  /** Name and ID for the field. This will define what this is called in the output */
  name: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]).isRequired,
  /** Label to show next to the checkbox */
  label: PropTypes.string,
  /** placeholder text */
  placeholder: PropTypes.string,
  /** <textarea /> or <input /> */
  multiline: PropTypes.bool,
  /** Field level schema, will be overriden if a schema is passed into the <Form /> */
  schema: PropTypes.any,
  /** Initial value to populate the check state */
  value: PropTypes.PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default InputField;