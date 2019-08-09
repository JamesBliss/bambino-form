import React from 'react';
import dot from 'dot-object';

// context
import FormContext from '../Context';

// exported component
const useField = (name) => {
  // pull values and functions from context
  const {
    initialValues,
    errors,
    scopePath,
    unregisterField,
    registerField,
    handleSubmit,
    handleFieldValidation
  } = React.useContext(FormContext);

  // define field name based on number or string for path
  let fieldName;
  if (scopePath) {
    if (typeof name === 'number') {
      fieldName = `${ scopePath }[${ name }]`;
    } else {
      fieldName = `${ scopePath }.${ name }`;
    }
  } else {
    fieldName = `${ name }`;
  }

  // on 'unmount' unregister field from <Form />
  React.useEffect(() => () => unregisterField(fieldName), [fieldName, name]);

  // find default intial value
  const defaultValue = dot.pick(fieldName, initialValues);

  // find any errors
  const error = errors[fieldName];

  // pull together values and return them
  return {
    fieldName,
    handleSubmit,
    handleFieldValidation,
    registerField,
    defaultValue,
    error
  };
};

export default useField;