import React from 'react';
import { storiesOf } from '@storybook/react';
import { object, string } from 'yup';
import { withInfo } from '@storybook/addon-info';
import marked from 'marked';

// components //
import Form from '../src/Form';
import Scope from '../src/Scope';
import Context from '../src/Context';
import Input from '../src/Input';
import Select from '../src/Select';
import Check from '../src/Check';

// helper
import FormWrapper from './_helper';

// readme
import markdown from '../README.md';

// schema
const schema = object().shape({
  first_name: string().required('First name is required'),
  last_name: string()
});

const info = `
Below is the yup schema used.

~~~js
<Context.Consumer>
  { ({ errors }) => {
    return (
      <button disabled={ Object.keys(errors).length } type='submit'>Save</button>
    );
  } }
</Context.Consumer>
~~~
`;

// story //
storiesOf('Form', module)

  // decorators
  .addDecorator(withInfo)
  .addParameters({
    options: { showAddonPanel: false },
    notes: { markdown },
    info: {
      text: marked(info),
      inline: true,
      header: false,
      source: false,
      propTables: [Form, Scope, Input, Select, Check],
      propTablesExclude: [FormWrapper]
    }
  })

  // story
  .add('Form: Disabled submit', () => {
    return (
      <FormWrapper>
        { ({ setFields }) => (
          <Form
            schema={ schema }
            onSubmit={ (data) => setFields(data) }
          >
            <hr />
            <Input
              label='First Name'
              placeholder='Enter first name'
              name='first_name'
            />
            <hr />
            <Input
              label='Last Name'
              placeholder='Enter last name'
              name='last_name'
            />
            <hr />
            <Context.Consumer>
              { ({ errors }) => {
                return (
                  <button disabled={ Object.keys(errors).length } type='submit'>Save</button>
                );
              } }
            </Context.Consumer>
          </Form>
        ) }
      </FormWrapper>
    );
  });