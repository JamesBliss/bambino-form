import React from 'react';
import PropTypes from 'prop-types';
import dot from 'dot-object';

// context
import FormContext from '../Context';

// helpers
import { generateScopedFieldName } from '../helpers';

// exported component
const useField = ({
  name,
  ref,
  value,
  schema = null,
  parseValue = null,
  path = 'value'
}) => {
  // pull values and functions from context
  const {
    initialValues,
    errors,
    scopePath,
    unregisterField,
    registerField,
    handleFieldValidation
  } = React.useContext(FormContext);

  // define field name based on number or string for path
  const fieldName = generateScopedFieldName({ name, scopePath });

  // on 'unmount' unregister field from <Form />
  React.useEffect(() => () => unregisterField(fieldName), [fieldName, name]);

  // find default intial value
  const defaultValue = dot.pick(fieldName, initialValues);

  // find any errors
  const error = errors[fieldName];

  // register field with <Form />
  React.useEffect(() => {
    if (ref.current) {
      registerField({
        name: fieldName,
        ref: ref.current,
        path,
        parseValue,
        dymanicSchema: schema
      });
    }
    return () => unregisterField(fieldName);
  }, [ref.current, fieldName]);

  // pull together props
  const props = {
    ref,
    fieldName,
    id: fieldName,
    name: fieldName,
    'aria-label': fieldName,
    defaultValue: defaultValue || value,
    error,
    onChange: ({ target }) => handleFieldValidation({ name: target.name, value: target[path] }),
    onBlur: ({ target }) => handleFieldValidation({ name: target.name, value: target[path] })
  };

  // return props
  return props;
};

useField.propTypes = {
  name: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]).isRequired,
  ref: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
  schema: PropTypes.any,
  parseValue: PropTypes.func,
  path: PropTypes.string
};

export default useField;