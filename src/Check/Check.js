import React from 'react';
import PropTypes from 'prop-types';

// helper
import useDefault from '../useDefault';

// exported component
const CheckField = ({
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
    ref
  };

  return (
    <>
      <input className='form__input' { ...props } />

      { label && <label className='form__label' htmlFor={ fieldName }>{ label }</label> }

      { error && <span className='form__error'>{ error }</span> }
    </>
  );
};

CheckField.defaultProps = {
  label: null,
  value: false,
  schema: null
};

CheckField.propTypes = {
  /** Name and ID for the field. This will define what this is called in the output */
  name: PropTypes.string.isRequired,
  /** Label to show next to the checkbox */
  label: PropTypes.string,
  /** Field level schema, will be overriden if a schema is passed into the <Form /> */
  schema: PropTypes.any,
  /** Initial value to populate the check state */
  value: PropTypes.bool
};

export default CheckField;