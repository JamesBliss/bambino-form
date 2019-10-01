import React from 'react';
import { withInfo } from '@storybook/addon-info';
import marked from 'marked';
import { storiesOf } from '@storybook/react';
import { object, array, string } from 'yup';

// components //
import Form from '../src/Form';
import Scope from '../src/Scope';
import Input from '../src/Input';
import Context from '../src/Context';
import Select from '../src/Select';
import Check from '../src/Check';

// helper
import FormWrapper from './_helper';

// readme
import markdown from '../README.md';

// schema
const schema = object().shape({
  first_name: string().required('First name is required'),
  last_name: string(),
  details: object().shape({ language: string().required('Language is required') }),
  translations: array().of(object().shape({
    id: string().required('Translation ID is required'),
    label: string()
  }))
});

const info = `
Below is the yup schema used.

~~~js
const schema = object().shape({
  first_name: string().required('First name is required'),
  last_name: string(),
  details: object().shape({ language: string().required('Language is required') }),
  translations: array().of(object().shape({
    id: string().required('Translation ID is required'),
    label: string()
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
      propTables: [Form, Scope, Input, Select, Check],
      propTablesExclude: [FormWrapper]
    }
  })

  // story
  .add('Form: Array of objects', () => {
    return (
      <FormWrapper>
        { ({ setFields, count, setCount }) => (
          <Form
            schema={ schema }
            onSubmit={ (data) => setFields(data) }
          >
            <br />
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
            <Scope path='details'>
              <Select
                label='Language'
                name='language'
                placeholder='Please select...'
                options={ [
                  { id: 'en', title: 'English' },
                  { id: 'it', title: 'Italian' }
                ] }
              />
            </Scope>
            <hr />
            <Scope path='translations'>
              { [...Array(count).keys()].map(point => (
                <React.Fragment key={ point }>
                  <Scope path={ point }>
                    <Input
                      label='Translation ID'
                      placeholder='Enter translataion ID'
                      name='id'
                    />
                    <br />
                    <Input
                      label='Translation Label'
                      placeholder='Enter translataion label'
                      name='label'
                    />
                  </Scope>
                  <hr />
                </React.Fragment>
              )) }
            </Scope>
            <button type='button' onClick={ (e) => { e.preventDefault(); setCount(count + 1); } }>Add another translation</button>
            <button type='button' onClick={ (e) => { e.preventDefault(); setCount(count - 1); } }>Remove last translation</button>
            <hr />
            <Context.Consumer>
              { ({ errors }) => {
                return (
                  <button disabled={ Object.keys(errors).length } type='submit'>Save</button>
                );
              } }
            </Context.Consumer>
            <button type='submit'>Save</button>
          </Form>
        ) }
      </FormWrapper>
    );
  });