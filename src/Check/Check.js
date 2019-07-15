import React from 'react';
import PropTypes from 'prop-types';

// helper
import useField from '../useField';

// styles
import { Wrapper, Checkbox, Label, Error } from '../Styles';

// exported component
const InputField = ({
  name,
  label,
  isRequired,
  isInline,
  optionalLabel,
  multiline,
  size,
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
    <Wrapper size={ size } isInline={ true }>
      <Checkbox { ...props } />

      { label && (
        <Label isInline={ true } htmlFor={ fieldName }>
          { label }
          { !isRequired && (<span>{ optionalLabel }</span>) }
        </Label>
      ) }

      { error && <Error>{ error }</Error> }
    </Wrapper>
  );
};

InputField.defaultProps = {
  label: null,
  isRequired: true,
  isInline: false,
  optionalLabel: 'optional',
  multiline: false,
  size: '14px'
};

InputField.propTypes = {
  name: PropTypes.string.isRequired,
  optionalLabel: PropTypes.string,
  isRequired: PropTypes.bool,
  label: PropTypes.string,
  isInline: PropTypes.bool,
  multiline: PropTypes.bool,
  size: PropTypes.string
};

export default InputField;