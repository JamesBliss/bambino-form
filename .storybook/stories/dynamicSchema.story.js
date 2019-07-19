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
  .add('Form: Dynamic Schema', () => {
    return (
      <FormWrapper>
        {({setFields}) => (
          <Form.Form
            onSubmit={ (data) => setFields(data) }
          >
            <h1>Each field has it's own inline schema</h1>
            <pre>{`
<Input
  label='First Name'
  name='first_name'
  schema={ string().required('First name is required') }
/>
            `}</pre>
            <br />
            <hr />
            <Form.Input
              label='First Name'
              name='first_name'
              schema={ string().required('First name is required') }
            />
            <br />
            <Form.Input
              label='Last Name'
              name='last_name'
              schema={ string().required('Last name is required') }
            />
            <hr />
            <Form.Scope path='languages'>
              <Form.Input
                label='Language spoken'
                name='language_spoken'
                schema={ string().required('language spoken is required') }
              />
              <br />
              <Form.Input
                label='Language not spoken'
                name='language_not_spoken'
                schema={ string().required('language not spoken is required') }
              />
              <br />
              <Form.Scope path='languages_to_learn'>
                <Form.Input
                  label='Language language list'
                  name='language_list'
                  schema={ string().required('Language list is required') }
                />
              </Form.Scope>
            </Form.Scope>
            <hr />
            <Form.Scope path='skills'>
              <Form.Scope path={ 0 }>
                <Form.Input
                  label='Skill'
                  name='skill'
                  schema={ string().required('skill is required') }
                />
                <br />
                <Form.Scope path='thing'>
                  <Form.Input
                    label='name'
                    name='name'
                    schema={ string().required('skill name is required') }
                  />
                </Form.Scope>
              </Form.Scope>
              <hr />
              <Form.Scope path={ 1 }>
                <Form.Input
                  label='Skill'
                  name='skill'
                  schema={ string().required('skill is required') }
                />
                <br />
                <Form.Scope path='thing'>
                  <Form.Input
                    label='name'
                    name='name'
                    schema={ string().required('skill name is required') }
                  />
                </Form.Scope>
              </Form.Scope>
            </Form.Scope>
            <hr />
            <button type='submit'>Save</button>
          </Form.Form>
        ) }
      </FormWrapper>
    );
  });