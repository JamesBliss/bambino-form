import React from 'react';
import { storiesOf } from '@storybook/react';
import { object, lazy, string } from 'yup';
import mapValues from 'lodash/mapValues';
import { withInfo } from '@storybook/addon-info';
import marked from 'marked';

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
import markdown from '../README.md'

// schema
const schema = object().shape({
  id: string().required('required'),
  translations: lazy(obj => object(mapValues(obj, () => string().required('This is required'))))
});

const initialValues = {
  id: '5',
  translations: {
    'en': 'hello',
    'fr': ''
  }
};

const info = `
Below is the yup schema used.

~~~js
const schema = object().shape({
  ID: string().required('required'),
  translations: lazy(obj => object(mapValues(obj, () => string().required('This is required'))))
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
  .add('Form: Key value pair', () => {
    return (
      <FormWrapper>
        {({setFields}) => (
          <Form
            schema={ schema }
            initialValues={ initialValues }
            onSubmit={ (data) => setFields(data) }
          >
            <hr />
            <Input
              label='user id'
              name='id'
            />
            <br />
            <Scope path='translations'>
              { Object.keys(initialValues.translations).map((key, index) => (
                <React.Fragment>
                  <Input
                    label={`${key} - locale`}
                    name={ key }
                  />
                  <br />
                </React.Fragment>
              )) }
            </Scope>
            <hr />
            <button type='submit'>Save</button>
          </Form>
        ) }
      </FormWrapper>
    );
  });