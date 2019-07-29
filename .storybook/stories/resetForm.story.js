import React from 'react';
import { storiesOf } from '@storybook/react';
import { object, bool, string } from 'yup';
import { withInfo } from '@storybook/addon-info';
import marked from 'marked';

// components //
import Form from '../../src/Form';
import Scope from '../../src/Scope';
import Input from '../../src/Input';
import Context from '../../src/Context';
import Select from '../../src/Select';
import Check from '../../src/Check';

// helper
import FormWrapper from './_helper';

// readme
import markdown from '../../README.md'

// schema
const schema = object().shape({
  name: string().required('Name is required'),
  language: string().required('Language is required'),
  alive: bool().oneOf([true], 'Field must be checked')
});

const info = `

~~~js
<Form
  schema={ schema }
  onSubmit={(data, { resetForm }) => { setFields(data); resetForm(); } }
>
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
      propTables: [Form, Scope, Input, Select, Check ],
      propTablesExclude: [FormWrapper]
    }
  })

  // story
  .add('Form: Reset form', () => {
    return (
      <FormWrapper>
        {({setFields}) => (
          <Form
            schema={ schema }
            onSubmit={(data, { resetForm }) => { setFields(data); resetForm(); } }
          >
            <hr />
            <Input
              label='Name'
              placeholder='Enter name'
              name='name'
            />
            <br />
            <Select
              label='Language'
              name='language'
              placeholder='Please select...'
              options={ [
                { id: 'en', title: 'English' },
                { id: 'it', title: 'Italian' }
              ] }
            />
            <br />
            <Check
              label='Alive?'
              name='alive'
            />
            <hr />
            <button type='submit'>Save</button>
          </Form>
        ) }
      </FormWrapper>
    );
  });