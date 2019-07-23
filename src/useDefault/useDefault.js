import React from 'react';

// hool
import useField from '../useField';

// exported component
const useDefault = ({ name, ref, schema, value, path = 'value' }) => {
  const {
    fieldName,
    handleFieldValidation,
    registerField,
    defaultValue,
    error
  } = useField(name);

  React.useEffect(() => {
    if (ref.current) {
      registerField({
        name: fieldName,
        ref: ref.current,
        path,
        dymanicSchema: schema
      });
    }
  }, [ref.current, fieldName]);

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

  return props;
};

export default useDefault;