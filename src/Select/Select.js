import React from 'react';
import PropTypes from 'prop-types';

// hook
import useDefault from '../useDefault';

// exported component
function SelectField({
  name,
  label,
  placeholder,
  value,
  options,
  schema,
  ...rest
}) {
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
    value
  });

  // props to be spread on select element
  const props = {
    ...rest,
    ...bag,
    defaultValue,
    fieldName,
    ref
  };

  return (
    <>
      { label && <label htmlFor={ fieldName }> { label } </label> }

      <select { ...props }>
        <option value={ defaultValue } disabled>
          { placeholder }
        </option>
        { options.map(({ id, title }) => (
          <option key={ id } value={ id }>
            { title }
          </option>
        )) }
      </select>

      { error && <span>{ error }</span> }
    </>
  );
}


SelectField.defaultProps = {
  label: null,
  schema: null,
  value: '',
  placeholder: 'Please select',
  options: []
};

SelectField.propTypes = {
  name: PropTypes.string.isRequired,
  schema: PropTypes.any,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  options: PropTypes.array
};

export default SelectField;