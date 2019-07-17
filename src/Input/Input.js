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
  ...rest
}) => {
  const ref = React.useRef(null);
  const { fieldName, handleFieldValidation, registerField, defaultValue, error } = useField(name);

  React.useEffect(() => {
    if (ref.current) {
      registerField({
        name: fieldName,
        ref: ref.current,
        path: 'value',
        dymanicSchema: schema
      });
    }
  }, [ref.current, fieldName]);

  const props = {
    ...rest,
    ref,
    id: fieldName,
    name: fieldName,
    'aria-label': fieldName,
    defaultValue,
    onChange: ({ target }) => handleFieldValidation({ name: target.name, value: target.value }),
    onBlur: ({ target }) => handleFieldValidation({ name: target.name, value: target.value })
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
  schema: null
};

InputField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  multiline: PropTypes.bool,
  schema: PropTypes.any
};

export default InputField;