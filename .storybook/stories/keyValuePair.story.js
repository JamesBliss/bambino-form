import React from 'react';
import { storiesOf } from '@storybook/react';
import { object, lazy, string } from 'yup';
import mapValues from 'lodash/mapValues';

// components //
import * as Form from '../../src';

// helper
import FormWrapper from './_helper';

// readme
import markdown from '../../README.md'

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

// story //
storiesOf('Form', module)

  // decorators
  .addParameters({
    options: { showAddonPanel: false },
    notes: { markdown },
    info: { header: false }
  })

  // story
  .add('Form: Key value pair', () => {
    return (
      <FormWrapper>
        {({setFields}) => (
          <Form.Form
            schema={ schema }
            initialValues={ initialValues }
            onSubmit={ (data) => setFields(data) }
          >
            <h1>Translations are an array of objects using scope with an id to map them.</h1>
            <pre>{`
const schema = object().shape({
  ID: string().required('required'),
  translations: lazy(obj => object(mapValues(obj, () => string().required('This is required'))))
});
            `}</pre>
            <br />
            <hr />
            <Form.Input
              label='user id'
              name='id'
            />
            <br />
            <Form.Scope path='translations'>
              { Object.keys(initialValues.translations).map((key, index) => (
                <React.Fragment>
                  <Form.Input
                    label={`${key} - locale`}
                    name={ key }
                  />
                  <br />
                </React.Fragment>
              )) }
            </Form.Scope>
            <hr />
            <button type='submit'>Save</button>
          </Form.Form>
        ) }
      </FormWrapper>
    );
  });