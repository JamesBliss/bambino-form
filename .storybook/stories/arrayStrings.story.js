import React from 'react';
import { storiesOf } from '@storybook/react';
import { object, string, array } from 'yup';
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
  test: array().of(string()),
  testTwo: array().of(object().shape({
    value: string()
  }))
});

const info = `
Showing generic form using components. Below is the yup schema used.

~~~js
const schema = object().shape({
  test: array().of(string()),
  testTwo: array().of(object().shape({
    value: string()
  }))
});
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
  .add('Form: Array of strings', () => {
    return (
      <FormWrapper>
        {({setFields}) => (
          <Form
            schema={ schema }
            onSubmit={ (data) => setFields(data) }
          >
            <hr />
            <Scope path='test'>
              <Input
                label='one'
                name={ 0 }
              />
              <Input
                label='two'
                name={ 1 }
              />
            </Scope>
            <br />
            <br />
            <Scope path='testTwo'>
              <Scope path={0}>
                <Input
                  label='one'
                  name='value'
                />
              </Scope>
              <Scope path={1}>
                <Input
                  label='two'
                  name='value'
                />
              </Scope>
            </Scope>
            <br />
            <br />
            <button type='submit'>Save</button>
            <br />
            <br />
          </Form>
        ) }
      </FormWrapper>
    );
  });