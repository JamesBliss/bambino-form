import { createContext } from 'react';

export default createContext({
  initialValues: {},
  errors: {},
  scopePath: '',
  registerField: () => {},
  unregisterField: () => {},
  handleSubmit: () => {},
  handleFieldValidation: () => {}
});