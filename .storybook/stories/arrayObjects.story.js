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
  last_name: string(),
  details: object().shape({ language: string().required('Language is required') }),
  translations: array().of(object().shape({
    id: string().required('Translation ID is required'),
    label: string()
  }))
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
  .add('Form: Array of objects', () => {
    return (
      <FormWrapper>
        {({setFields, count, setCount}) => (
          <Form.Form
            schema={ schema }
            onSubmit={ (data) => setFields(data) }
          >
            <h1>Translations are an array of objects using scope with an id to map them.</h1>
            <pre>{`
const schema = object().shape({
  first_name: string().required('First name is required'),
  last_name: string(),
  details: object().shape({ language: string().required('Language is required') }),
  translations: array().of(object().shape({
    id: string().required('Translation ID is required'),
    label: string()
  }))
});
            `}</pre>
            <br />
            <hr />
            <Form.Input
              label='First Name'
              placeholder='Enter first name'
              name='first_name'
            />
            <hr />
            <Form.Input
              isRequired={ false }
              label='Last Name'
              placeholder='Enter last name'
              name='last_name'
            />
            <hr />
            <Form.Scope path='details'>
              <Form.Select
                label='Language'
                name='language'
                placeholder='Please select...'
                options={ [
                  { id: 'en', title: 'English' },
                  { id: 'it', title: 'Italian' }
                ] }
              />
            </Form.Scope>
            <hr />
            <Form.Scope path='translations'>
              {[...Array(count).keys()].map(point => (
                <React.Fragment key={point}>
                  <Form.Scope path={ point }>
                    <Form.Input
                      label='Translation ID'
                      placeholder='Enter translataion ID'
                      name='id'
                    />
                    <br />
                    <Form.Input
                      isRequired={ false }
                      label='Translation Label'
                      placeholder='Enter translataion label'
                      name='label'
                    />
                  </Form.Scope>
                  <hr />
                </React.Fragment>
              ))}
            </Form.Scope>
            <button onClick={(e) => { e.preventDefault(); setCount(count + 1) }}>Add another translation</button>
            <hr />
            <button type='submit'>Save</button>
          </Form.Form>
        ) }
      </FormWrapper>
    );
  });