import React from 'react';

const FormWrapper = ({ children }) => {
  const [fields, setFields] = React.useState({});
  const [count, setCount] = React.useState(2);

  return (
    <React.Fragment>
      { children({ setFields, fields, count, setCount }) }
      <pre>{ JSON.stringify(fields, null, 2) }</pre>
    </React.Fragment>
  );
};

export default FormWrapper;