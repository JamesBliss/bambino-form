import React from 'react';
import dot from 'dot-object';
import { reach, object, mixed, array } from 'yup';
import PropTypes from 'prop-types';
import merge from 'deepmerge';

// context
import FormContext from '../Context';

// helper
const looptheloop = obj => {
  const shape = {};

  Object.keys(obj).forEach(key => {
    const keyType = obj[key].constructor.name;

    if (keyType === 'Object') {
      shape[key] = object().shape(looptheloop(obj[key]));
    } else if (keyType === 'Array') {
      const result = Object.keys(obj[key]).reduce(
        (r, k) => ({ ...r, ...obj[key][k] }),
        {}
      );

      shape[key] = array().of(object().shape(looptheloop({ ...result })));
    } else {
      shape[key] = obj[key];
    }
  });
  return shape;
};

// exported
const Form = ({
  initialValues,
  children,
  schema,
  onSubmit,
  ...rest
}) => {
  const [fields, setFields] = React.useState([]);
  const [errors, setErrors] = React.useState({});

  function parseForm() {
    const data = Object.assign({}, initialValues);
    const parsedDymanicSchema = {};

    fields.forEach(({ name, ref, path, parseValue, dymanicSchema }) => {
      const value = dot.pick(path, ref);

      if (dymanicSchema) {
        parsedDymanicSchema[name] = dymanicSchema;
      } else {
        parsedDymanicSchema[name] = mixed().notRequired();
      }

      data[name] = parseValue ? parseValue(value) : value;
    });

    dot.object(parsedDymanicSchema);
    dot.object(data);

    return {
      data,
      dymanicSchema: object().shape(looptheloop(parsedDymanicSchema))
    };
  }

  function resetForm() {
    fields.forEach(({ ref, path, clearValue }) => {
      if (clearValue) {
        return clearValue(ref);
      }

      return dot.set(path, '', ref);
    });
  }

  async function handleFieldValidation({ name, value }) {
    const { data, dymanicSchema } = parseForm();

    try {
      const runSchema = schema || dymanicSchema;
      if (runSchema) {
        await reach(runSchema, name, data).validate(value);
      }

      const { [name]: remove, ...remaining } = errors;
      setErrors(remaining);
    } catch (err) {
      const validationErrors = { ...errors };

      if (err.message) {
        validationErrors[name] = err.message;
      }

      setErrors(validationErrors);
    }
  }

  async function handleValidation(callback = null) {
    const { data, dymanicSchema } = parseForm();
    let castData = data;
    let finalDataSet = {};

    try {
      const runSchema = schema || dymanicSchema;
      if (runSchema) {
        await runSchema.validate(data, {
          abortEarly: false,
          stripUnknown: true,
          context: {}
        });

        castData = runSchema.cast(data, {
          stripUnknown: true,
          context: {}
        });

        finalDataSet = merge(initialValues, castData, {
          arrayMerge: (destinationArray, sourceArray) => {
            return sourceArray.map((mapArray, index) => ({
              ...destinationArray[index],
              ...mapArray
            }));
          }
        });
      }

      setErrors({});

      if (typeof callback === 'function') {
        callback(finalDataSet);
      }
    } catch (err) {
      const validationErrors = {};

      if (!err.inner) {
        throw err;
      }

      err.inner.forEach((error) => {
        validationErrors[error.path] = error.message;
      });

      setErrors(validationErrors);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    handleValidation((data) => onSubmit(data, { resetForm }));
  }

  function registerField(field) {
    setFields(state => [...state, field]);
  }

  function unregisterField(name) {
    setFields(state => state.filter(field => field.name !== name));
  }

  return (
    <FormContext.Provider
      value={ {
        initialValues,
        errors,
        scopePath: '',
        registerField,
        unregisterField,
        handleFieldValidation,
        handleSubmit
      } }
    >
      <form { ...rest } data-testid='form' onSubmit={ handleSubmit }>
        { children }
      </form>
    </FormContext.Provider>
  );
};


Form.defaultProps = {
  initialValues: {},
  schema: null
};

Form.propTypes = {
  /** Initial values to populate the form */
  initialValues: PropTypes.object,
  /** Overall yup validation object. ❗️ Will override inline field level schema */
  schema: PropTypes.object,
  /** Any react childrent you would like 😁 */
  children: PropTypes.any.isRequired,
  /** Function which returns the data object and a resetForm function */
  onSubmit: PropTypes.func.isRequired
};

export default Form;