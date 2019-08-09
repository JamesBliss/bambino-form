import React from 'react';
import dot from 'dot-object';

// context
import FormContext from '../Context';

// exported component
const useDefault = ({
  name,
  ref,
  schema,
  value,
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

export default useDefault;