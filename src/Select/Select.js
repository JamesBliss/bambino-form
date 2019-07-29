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
    ref
  };

  return (
    <>
      { label && <label className='form__label' htmlFor={ fieldName }> { label } </label> }

      <select className='form__select' { ...props }>
        <option value={ defaultValue } disabled>
          { placeholder }
        </option>
        { options.map(({ id, title }) => (
          <option key={ id } value={ id }>
            { title }
          </option>
        )) }
      </select>

      { error && <span className='form__error'>{ error }</span> }
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
  /** Name and ID for the field. This will define what this is called in the output */
  name: PropTypes.string.isRequired,
  /** Label to show next to the checkbox */
  label: PropTypes.string,
  /** placeholder text for the first item in the dropdown */
  placeholder: PropTypes.string,
  /** Field level schema, will be overriden if a schema is passed into the <Form /> */
  schema: PropTypes.any,
  /** Initial value to populate the check state */
  value: PropTypes.string,
  /** Array options. Expected shape of [{ id: '', title: ''}] */
  options: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string
  }))
};

export default SelectField;