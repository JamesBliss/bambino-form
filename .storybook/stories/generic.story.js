import React from 'react';
import { storiesOf } from '@storybook/react';
import { object, bool, string } from 'yup';

// components //
import * as Form from '../../src';

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

// story //
storiesOf('Form', module)

  // decorators
  .addParameters({
    options: { showAddonPanel: false },
    notes: { markdown },
    info: { header: false }
  })

  // story
  .add('Form: Generic', () => {
    return (
      <FormWrapper>
        {({setFields}) => (
          <Form.Form
            schema={ schema }
            onSubmit={ (data) => setFields(data) }
          >
            <h1>Generic using input, select and check</h1>
            <pre>{`
const schema = object().shape({
  name: string().required('Name is required'),
  language: string().required('Language is required'),
  alive: bool()
});
            `}</pre>
            <br />
            <hr />
            <Form.Input
              label='Name'
              placeholder='Enter name'
              name='name'
            />
            <br />
            <Form.Select
              label='Language'
              name='language'
              placeholder='Please select...'
              options={ [
                { id: 'en', title: 'English' },
                { id: 'it', title: 'Italian' }
              ] }
            />
            <br />
            <Form.Check
              label='Alive?'
              name='alive'
            />
            <hr />
            <button type='submit'>Save</button>
          </Form.Form>
        ) }
      </FormWrapper>
    );
  });