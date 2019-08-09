import React from 'react';

const FormWrapper = ({ children }) => {
  const [fields, setFields] = React.useState({});
  const [count, setCount] = React.useState(2);
  const formRef = React.useRef();

  console.log(formRef)

  return (
    <React.Fragment>
      { children({ setFields, fields, count, setCount, formRef }) }
      <pre>{ JSON.stringify(fields, null, 2) }</pre>
    </React.Fragment>
  );
};

export default FormWrapper;