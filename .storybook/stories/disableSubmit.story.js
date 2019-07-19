import React from 'react';
import { storiesOf } from '@storybook/react';
import { object, array, string } from 'yup';

// components //
import * as Form from '../../src';

// helper
import FormWrapper from './_helper';

// readme
import markdown from '../../README.md'

// schema
const schema = object().shape({
  first_name: string().required('First name is required'),
  last_name: string()
});

// story //
storiesOf('Form', module)

  // decorators
  .addParameters({
    options: { showAddonPanel: false },
    notes: { markdown },
    info: { header: false }
  })

  // story
  .add('Form: Disabled submit', () => {
    return (
      <FormWrapper>
        {({setFields}) => (
          <Form.Form
            schema={ schema }
            onSubmit={ (data) => setFields(data) }
          >
            <h1>Using the form context we can disable the submit if there are errors.</h1>
            <pre>{`
<Context.Consumer>
  { ({ errors }) => {
    return (
      <button disabled={ Object.keys(errors).length } type='submit'>Save</button>
    );
  } }
</Context.Consumer>
            `}</pre>
            <br />
            <hr />
            <Form.Input
              isInline
              label='First Name'
              placeholder='Enter first name'
              name='first_name'
            />
            <hr />
            <Form.Input
              isInline
              isRequired={ false }
              label='Last Name'
              placeholder='Enter last name'
              name='last_name'
            />
            <hr />
            <Form.Context.Consumer>
              { ({ errors }) => {
                return (
                  <button disabled={ Object.keys(errors).length } type='submit'>Save</button>
                );
              } }
            </Form.Context.Consumer>
          </Form.Form>
        ) }
      </FormWrapper>
    );
  });