import dot from 'dot-object';
import React from 'react';

// context
import FormContext from '../Context';

// exported component
export default function useField(name) {
  const {
    initialValues,
    errors,
    scopePath,
    unregisterField,
    registerField,
    handleSubmit,
    handleFieldValidation
  } = React.useContext(FormContext);

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

  React.useEffect(() => () => unregisterField(fieldName), [fieldName, name]);

  const defaultValue = dot.pick(fieldName, initialValues);
  const error = errors[fieldName];

  return {
    fieldName,
    handleSubmit,
    handleFieldValidation,
    registerField,
    defaultValue,
    error
  };
}