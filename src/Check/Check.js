import React from 'react';
import PropTypes from 'prop-types';

// helper
import useField from '../useField';

// exported component
const InputField = ({
  name,
  label,
  ...rest
}) => {
  const ref = React.useRef(null);
  const { fieldName, handleFieldValidation, registerField, defaultValue, error } = useField(name);

  React.useEffect(() => {
    if (ref.current) {
      registerField({
        name: fieldName,
        ref: ref.current,
        path: 'checked'
      });
    }
  }, [ref.current, fieldName]);

  const props = {
    ...rest,
    ref,
    id: fieldName,
    name: fieldName,
    'aria-label': fieldName,
    type: 'checkbox',
    defaultChecked: defaultValue,
    onChange: ({ target }) => handleFieldValidation({ name: target.name, value: target.checked }),
    onBlur: ({ target }) => handleFieldValidation({ name: target.name, value: target.checked })
  };

  return (
    <>
      <input id={ fieldName } { ...props } />

      { label && <label htmlFor={ fieldName }>{ label }</label> }

      { error && <span>{ error }</span> }
    </>
  );
};

InputField.defaultProps = { label: null };

InputField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string
};

export default InputField;