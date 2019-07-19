import React from 'react';
import { storiesOf } from '@storybook/react';
import { object, number, string } from 'yup';

// components //
import * as Form from '../../src';

// helper
import FormWrapper from './_helper';

// readme
import markdown from '../../README.md'

// schema
const schema = object().shape({
  name: string(),
  details: object().shape({
    age: number().required('Age is required'),
    hair_colour: string()
  })
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
  .add('Form: Scope', () => {
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
  name: string(),
  details: object().shape({
    age: number().required('Age is required'),
    hair_colour: string()
  })
});
            `}</pre>
            <p>Markup:</p>
            <pre>{`
<Input name='name' />
<Scope path='details'>
  <Input name='age' />
  <Input name='hair_colour' />
</Scope>
            `}</pre>
            <br />
            <hr />
            <Form.Input
              label='Name'
              placeholder='Enter name'
              defaultValue='James'
              name='name'
            />
            <br />
            <Form.Scope path='details'>
              <Form.Input
                label='Age'
                placeholder='Enter age'
                type='number'
                defaultValue={ 0 }
                name='age'
              />
              <br />
              <Form.Input
                label='Hair colour'
                placeholder='Enter hair colour'
                name='hair_colour'
                defaultValue='Dark brown'
              />
            </Form.Scope>
            <hr />
            <button type='submit'>Save</button>
          </Form.Form>
        ) }
      </FormWrapper>
    );
  });