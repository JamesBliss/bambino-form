import dot from 'dot-object';
import { useContext, useEffect } from 'react';

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
  } = useContext(FormContext);

  const fieldName = scopePath ? `${ scopePath }.${ name }` : name;

  useEffect(() => () => unregisterField(fieldName), [fieldName]);

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