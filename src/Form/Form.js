import React from 'react';
import dot from 'dot-object';
import { reach, object, mixed, array } from 'yup';
import PropTypes from 'prop-types';
import merge from 'deepmerge';
import { useDebouncedCallback } from 'use-debounce';

// context
import FormContext from '../Context';

// helper
const looptheloop = obj => {
  const shape = {};

  Object.keys(obj).forEach(key => {
    if (obj[key] === undefined) return;
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

const emptyTarget = value => (Array.isArray(value) ? [] : {});
const clone = (value, options) => merge(emptyTarget(value), value, options);

const combineMerge = (target, source, options) => {
  const destination = target.slice();

  source.forEach((item, index) => {
    if (typeof destination[index] === 'undefined') {
      const cloneRequested = options.clone !== false;
      const shouldClone = cloneRequested && options.isMergeableObject(item);
      destination[index] = shouldClone ? clone(item, options) : item;
    } else if (options.isMergeableObject(item)) {
      destination[index] = merge(target[index], item, options);
    } else if (target.indexOf(item) === -1) {
      destination.push(item);
    }
  });
  return destination;
};

// exported
const Form = ({
  initialValues,
  children,
  schema,
  onSubmit,
  context,
  fieldDebounced,
  tagName,
  ...rest
}) => {
  const [fields, setFields] = React.useState([]);
  const [errors, setErrors] = React.useState({});
  const [initialData, setInitialData] = React.useState({});

  React.useEffect(() => {
    // deep copy the initial values passed in and store
    setInitialData(JSON.parse(JSON.stringify(initialValues)));
  }, []);

  // parse registered fields and return a schema and current values
  function parseForm() {
    // deep copy the values that are initially set
    const data = JSON.parse(JSON.stringify(initialValues));

    // create a place to hold the generated schema
    const parsedDymanicSchema = {};

    // loop over the registered field.
    fields.forEach(({ name, ref, path, parseValue, dymanicSchema }) => {
      const value = dot.pick(path, ref);

      // if dymanic scheme, build it up else create a generic rule
      if (dymanicSchema) {
        parsedDymanicSchema[name] = dymanicSchema;
      } else {
        parsedDymanicSchema[name] = mixed().nullable().notRequired();
      }

      // if custom parse function is supplied then use it!
      data[name] = typeof parseValue === 'function' ? parseValue(value) : value;
    });

    // reassign the schema and data into correct shaped object
    dot.object(parsedDymanicSchema);
    dot.object(data);

    // return both, put schema in a yup shape wrap
    return {
      data,
      dymanicSchema: object().shape(looptheloop(parsedDymanicSchema))
    };
  }

  // generic reset form, will empty all fields
  function resetForm(data = {}) {
    fields.forEach(({ name, ref, path, clearValue }) => {
      if (clearValue) {
        return clearValue(ref);
      }

      return dot.set(path, data[name] ? data[name] : '', ref);
    });
  }

  // updates global error per field by field
  async function handleDebouncedFieldValidation({ name, value }) {
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

  // Debounce callback
  const [handleFieldValidation] = useDebouncedCallback(
    // function
    ({ name, value }) => {
      handleDebouncedFieldValidation({ name, value });
    },
    // delay in ms
    fieldDebounced
  );

  async function handleValidation() {
    const { data, dymanicSchema } = parseForm();
    let castData = data;
    let finalDataSet = {};
    const finalErrors = {};

    try {
      const runSchema = schema || dymanicSchema;
      if (runSchema) {
        await runSchema.validate(data, {
          abortEarly: false,
          stripUnknown: true,
          context
        });

        castData = runSchema.cast(data, {
          stripUnknown: true,
          context
        });

        finalDataSet = merge(initialData, castData, { arrayMerge: combineMerge });
      }

      setErrors({});
    } catch (err) {
      if (!err.inner) {
        throw err;
      }

      err.inner.forEach((error) => {
        finalErrors[error.path] = error.message;
      });

      setErrors(finalErrors);
    }

    // in case user want to run this as a function not on submit return object
    return { errors: finalErrors, data: finalDataSet, resetForm };
  }

  async function handleSubmit(e) {
    if (e) {
      e.preventDefault();
    }

    const args = await handleValidation();
    if (Object.keys(args.errors).length === 0 && typeof onSubmit === 'function') {
      onSubmit(args.data, { resetForm });
    }
  }

  // when registering a field, add new field into fields array
  function registerField(field) {
    setFields(state => [...state, field]);
  }

  // when unregistering a field, remove from fields array and initialData
  function unregisterField(name) {
    setInitialData(state => {
      const data = {};
      Object.keys(state).map(key => {
        if (key !== name) data[key] = state[key];
        return data;
      });
      return data;
    });
    setFields(state => state.filter(field => field.name !== name));
    const { [name]: remove, ...remaining } = errors;
    setErrors(remaining);
  }

  // return
  return (
    <FormContext.Provider
      value={ {
        initialValues,
        errors,
        scopePath: '',
        registerField,
        unregisterField,
        getFields: parseForm,
        handleFieldValidation,
        handleValidation,
        handleResetForm: resetForm,
        handleSubmit
      } }
    >
      { React.createElement(
        tagName,
        { ...rest, 'data-testid': 'form', onSubmit: handleSubmit },
        children
      ) }
    </FormContext.Provider>
  );
};

Form.defaultProps = {
  initialValues: {},
  context: {},
  schema: null,
  fieldDebounced: 10,
  tagName: 'form'
};

Form.propTypes = {
  /** Initial values to populate the form */
  initialValues: PropTypes.object,
  context: PropTypes.object,
  /** Overall yup validation object. ❗️ Will override inline field level schema */
  schema: PropTypes.object,
  /** Any react childrent you would like 😁 */
  children: PropTypes.any.isRequired,
  /** Function which returns the data object and a resetForm function */
  onSubmit: PropTypes.func.isRequired,
  /** Changes length of the debounce for the handleFieldValidation function */
  fieldDebounced: PropTypes.number,
  /** Element / tag the wrapper of the children that are rendered */
  tagName: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func
  ])
};

export default Form;