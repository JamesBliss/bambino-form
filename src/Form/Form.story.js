import React from 'react';
import { storiesOf } from '@storybook/react';
import { object, number, boolean, lazy, array, string } from 'yup';
import mapValues from 'lodash/mapValues';

// components //
import * as Form from '../../src';


const schema = object().shape({
  first_name: string().required('First name is required'),
  last_name: string(),
  details: object().shape({ language: string().required('Language is required') }),
  translations: array().of(object().shape({
    id: string().required('Translation ID is required'),
    label: string()
  }))
});

const testSchema = object().shape({
  ID: string().required('required'),
  translations: lazy(obj => object(mapValues(obj, () => string().required())))
});

const testData = {
  ID: '5',
  translations: {
    'en': 'hello',
    'fr': ''
  }
};

// const testData = {
//   ID: '5',
//   translations: [
//     {
//       'locale': 'en',
//       'name': 'fr'
//     }
//   ]
// }


const fancyData = {
  'ID': '',
  'Revision': {
    'TypeID': '',
    'ClassificationID': '',
    'Certification': null,
    'UVA': false,
    'Fresh': false,
    'Naked': false,
    'Meltable': false,
    'Ingredients': [],
    'Sizes': []
  },
  'Translations': [
    {
      'Locale': 'en',
      'Name': '',
      'Strapline': '',
      'Description': ''
    }
  ]
};

const fancySchema = object().shape({
  ID: string(),
  Revision: object().shape({
    TypeID: string().required('PRODUCT_TYPE_ID_IS_REQUIRED'),
    ClassificationID: string().required('PRODUCT_CLASSIFICATION_IS_REQUIRED'),
    Certification: number().required('PRODUCT_CERTIFICATION_IS_REQUIRED'),
    UVA: boolean(),
    Fresh: boolean(),
    Naked: boolean(),
    Meltable: boolean()
  }),
  Translations: array().of(
    object().shape({
      Locale: string().required('LOCALE_IS_REQUIRED'),
      Name: string().required('NAME_IS_REQUIRED'),
      Strapline: number().required('STRAPLINE_IS_REQUIRED'),
      Description: number().required('DESCRIPTION_IS_REQUIRED')
    })
  )
});

const partialData = {
  'ID': '',
  'Revision': {
    'TypeID': '',
    'ClassificationID': '',
    'Certification': '',
    'UVA': false,
    'Fresh': false,
    'Naked': false,
    'Meltable': false,
    'Ingredients': [],
    'Sizes': []
  },
  'Translations': [
    {
      'Locale': 'en',
      'Name': '',
      'Strapline': '',
      'Description': ''
    }
  ]
};

const partialSchema = object().shape({
  ID: string(),
  Revision: object().shape({
    TypeID: string(),
    ClassificationID: string(),
    Certification: string(),
    UVA: boolean(),
    Fresh: boolean(),
    Naked: boolean(),
    Meltable: boolean()
  }),
  Translations: array().of(
    object().shape({
      Locale: string(),
      Name: string().required('NAME_IS_REQUIRED'),
      Strapline: string(),
      Description: string()
    })
  )
});


// story //
storiesOf('Form', module)

  // decorators
  .addParameters({
    options: { showAddonPanel: false },
    notes: '<h1>hello</h1>',
    info: { header: false }
  })

  // stories
  .add('partial form', () => {
    const FormWrapper = () => {
      const [fields, setFields] = React.useState({});

      return (
        <Form.Form
          initialData={ partialData }
          schema={ partialSchema }
          onSubmit={ (data) => setFields(data) }
        >
          <Form.Scope path='Translations'>
            <Form.Scope path={ 0 }>
              <div>
                <Form.Input
                  label='Name'
                  name='Name'
                />
              </div>
              <div>
                <Form.Input
                  label='Strapline'
                  name='Strapline'
                />
              </div>
              <div>
                <Form.Input
                  label='Description'
                  name='Description'
                />
              </div>
            </Form.Scope>
            <Form.Scope path={ 1 }>
              <div>
                <Form.Input
                  label='Name'
                  name='Name'
                />
              </div>
              <div>
                <Form.Input
                  label='Strapline'
                  name='Strapline'
                />
              </div>
              <div>
                <Form.Input
                  label='Description'
                  name='Description'
                />
              </div>
            </Form.Scope>
          </Form.Scope>
          <hr />
          <button type='submit'>Save</button>
          <pre>{ JSON.stringify(fields, null, 2) }</pre>
        </Form.Form>
      );
    };
    return <FormWrapper />;
  })
  .add('dynamic schema', () => {
    const FormWrapper = () => {
      const [fields, setFields] = React.useState({});

      return (
        <Form.Form
          onSubmit={ (data) => setFields(data) }
        >
          <Form.Input
            label='First Name'
            name='first_name'
            schema={ string().required('First name is required') }
          />
          <Form.Input
            label='Last Name'
            name='last_name'
          />
          <Form.Scope path='languages'>
            <Form.Input
              label='Language spoken'
              name='language_spoken'
              schema={ string().required('language spoken is required') }
            />
            <Form.Input
              label='Language not spoken'
              name='language_not_spoken'
              schema={ string().required('language not spoken is required') }
            />
            <Form.Scope path='languages_to_learn'>
              <Form.Input
                label='Language language list'
                name='language_list'
                schema={ string().required('Language list is required') }
              />
            </Form.Scope>
          </Form.Scope>
          <Form.Scope path='skills'>
            <Form.Scope path={ 0 }>
              <Form.Input
                label='Skill'
                name='skill'
                schema={ string().required('skill is required') }
              />
              <Form.Scope path='thing'>
                <Form.Input
                  label='name'
                  name='name'
                  schema={ string().required('skill name is required') }
                />
              </Form.Scope>
            </Form.Scope>
            <Form.Scope path={ 1 }>
              <Form.Input
                label='Skill'
                name='skill'
                schema={ string().required('skill is required') }
              />
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
          <pre>{ JSON.stringify(fields, null, 2) }</pre>
        </Form.Form>
      );
    };
    return <FormWrapper />;
  })
  .add('another test', () => {
    const FormWrapper = () => {
      const [fields, setFields] = React.useState({});

      return (
        <Form.Form
          schema={ fancySchema }
          initialData={ fancyData }
          onSubmit={ (data) => setFields(data) }
        >
          <Form.Scope path='Translations'>
            <Form.Scope path={ 0 }>
              <Form.Input
                label='Name'
                name='Name'
              />
            </Form.Scope>
          </Form.Scope>
          <Form.Scope path='Revision'>
            <Form.Check
              label='Meltable'
              name='Meltable'
            />
          </Form.Scope>
          <hr />
          <button type='submit'>Save</button>
          <pre>{ JSON.stringify(fields, null, 2) }</pre>
        </Form.Form>
      );
    };
    return <FormWrapper />;
  })
  .add('key/value validation', () => {
    const FormWrapper = () => {
      const [fields, setFields] = React.useState({});

      return (
        <Form.Form
          schema={ testSchema }
          initialData={ testData }
          onSubmit={ (data) => setFields(data) }
        >
          <Form.Input
            label='ID'
            name='ID'
          />
          <Form.Scope path='translations'>
            { Object.keys(testData.translations).map((key, index) => (
              <React.Fragment>
                <h1>{ key }</h1>
                <Form.Input
                  label='locale'
                  name={ key }
                />
              </React.Fragment>
            )) }
          </Form.Scope>
          <hr />
          <button type='submit'>Save</button>
          <pre>{ JSON.stringify(fields, null, 2) }</pre>
        </Form.Form>
      );
    };
    return <FormWrapper />;
  })
  .add('Default too', () => {
    const FormWrapper = () => {
      const [fields, setFields] = React.useState({});

      return (
        <Form.Form
          schema={ schema }
          onSubmit={ (data) => setFields(data) }
        >
          <Form.Input
            label='First Name'
            placeholder='Enter first name'
            type='input'
            name='first_name'
          />
          <hr />
          <Form.Input
            isRequired={ false }
            label='Last Name'
            placeholder='Enter last name'
            type='input'
            name='last_name'
          />
          <hr />
          <Form.Scope path='details'>
            <Form.Select
              label='language'
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
            <Form.Scope path={ 0 }>
              <Form.Input
                label='Translation ID'
                placeholder='Enter translataion ID'
                type='input'
                name='id'
              />
              <Form.Input
                isRequired={ false }
                label='Translation Label'
                placeholder='Enter translataion label'
                type='input'
                name='label'
              />
            </Form.Scope>
          </Form.Scope>
          <hr />
          <button type='submit'>Save</button>
          <pre>{ JSON.stringify(fields, null, 2) }</pre>
        </Form.Form>
      );
    };
    return <FormWrapper />;
  })
  .add('No validation', () => {
    const FormWrapper = () => {
      const [fields, setFields] = React.useState({});

      return (
        <Form.Form
          onSubmit={ (data) => setFields(data) }
        >
          <Form.Input
            label='First Name'
            placeholder='Enter first name'
            type='input'
            name='first_name'
          />
          <hr />
          <Form.Input
            isRequired={ false }
            label='Last Name'
            placeholder='Enter last name'
            type='input'
            name='last_name'
          />
          <hr />
          <Form.Scope path='details'>
            <Form.Select
              label='language'
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
            <Form.Scope path={ 0 }>
              <Form.Input
                label='Translation ID'
                placeholder='Enter translataion ID'
                type='input'
                name='id'
              />
              <Form.Input
                isRequired={ false }
                label='Translation Label'
                placeholder='Enter translataion label'
                type='input'
                name='label'
              />
            </Form.Scope>
          </Form.Scope>
          <hr />
          <button type='submit'>Save</button>
          <pre>{ JSON.stringify(fields, null, 2) }</pre>
        </Form.Form>
      );
    };
    return <FormWrapper />;
  })
  .add('Disabled submit', () => {
    const FormWrapper = () => {
      const [fields, setFields] = React.useState({});

      return (
        <Form.Form
          schema={ schema }
          onSubmit={ (data) => setFields(data) }
        >
          <Form.Input
            label='First Name'
            placeholder='Enter first name'
            type='input'
            name='first_name'
          />
          <hr />
          <Form.Input
            isRequired={ false }
            label='Last Name'
            placeholder='Enter last name'
            type='input'
            name='last_name'
          />
          <hr />
          <Form.Scope path='details'>
            <Form.Select
              label='language'
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
            <Form.Scope path={ 0 }>
              <Form.Input
                label='Translation ID'
                placeholder='Enter translataion ID'
                type='input'
                name='id'
              />
              <Form.Input
                isRequired={ false }
                label='Translation Label'
                placeholder='Enter translataion label'
                type='input'
                name='label'
              />
            </Form.Scope>
          </Form.Scope>
          <hr />
          <Form.Context.Consumer>
            { ({ errors }) => {
              return (
                <button disabled={ Object.keys(errors).length } type='submit'>Save</button>
              );
            } }
          </Form.Context.Consumer>
          <pre>{ JSON.stringify(fields, null, 2) }</pre>
        </Form.Form>
      );
    };
    return <FormWrapper />;
  })
  .add('Inline elements', () => {
    const FormWrapper = () => {
      const [fields, setFields] = React.useState({});

      return (
        <Form.Form
          schema={ schema }
          onSubmit={ (data) => setFields(data) }
        >
          <Form.Input
            isInline
            label='First Name'
            placeholder='Enter first name'
            type='input'
            name='first_name'
          />
          <hr />
          <Form.Input
            isInline
            isRequired={ false }
            label='Last Name'
            placeholder='Enter last name'
            type='input'
            name='last_name'
          />
          <hr />
          <Form.Scope path='details'>
            <Form.Select
              isInline
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
            <Form.Scope path={ 0 }>
              <Form.Input
                isInline
                label='Translation ID'
                placeholder='Enter translataion ID'
                type='input'
                name='id'
              />
              <Form.Input
                isInline
                isRequired={ false }
                label='Translation Label'
                placeholder='Enter translataion label'
                type='input'
                name='label'
              />
            </Form.Scope>
          </Form.Scope>
          <hr />
          <Form.Context.Consumer>
            { ({ errors }) => {
              return (
                <button disabled={ Object.keys(errors).length } type='submit'>Save</button>
              );
            } }
          </Form.Context.Consumer>
          <pre>{ JSON.stringify(fields, null, 2) }</pre>
        </Form.Form>
      );
    };
    return <FormWrapper />;
  });