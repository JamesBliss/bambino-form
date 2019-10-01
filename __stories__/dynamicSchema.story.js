import React from 'react';
import { storiesOf } from '@storybook/react';
import { string } from 'yup';
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
import markdown from '../README.md';

const info = `
~~~js
<Input
  label='First Name'
  name='first_name'
  schema={ string().required('First name is required') }
/>
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
  .add('Form: Dynamic Schema', () => {
    return (
      <FormWrapper>
        { ({ setFields }) => (
          <Form
            onSubmit={ (data) => setFields(data) }
          >
            <hr />
            <Input
              label='First Name'
              name='first_name'
              schema={ string().required('First name is required') }
            />
            <br />
            <Input
              label='Last Name'
              name='last_name'
              schema={ string().required('Last name is required') }
            />
            <hr />
            <Scope path='languages'>
              <Input
                label='Language spoken'
                name='language_spoken'
                schema={ string().required('language spoken is required') }
              />
              <br />
              <Input
                label='Language not spoken'
                name='language_not_spoken'
                schema={ string().required('language not spoken is required') }
              />
              <br />
              <Scope path='languages_to_learn'>
                <Input
                  label='Language language list'
                  name='language_list'
                  schema={ string().required('Language list is required') }
                />
              </Scope>
            </Scope>
            <hr />
            <Scope path='skills'>
              <Scope path={ 0 }>
                <Input
                  label='Skill'
                  name='skill'
                  schema={ string().required('skill is required') }
                />
                <br />
                <Scope path='thing'>
                  <Input
                    label='name'
                    name='name'
                    schema={ string().required('skill name is required') }
                  />
                </Scope>
              </Scope>
              <hr />
              <Scope path={ 1 }>
                <Input
                  label='Skill'
                  name='skill'
                  schema={ string().required('skill is required') }
                />
                <br />
                <Scope path='thing'>
                  <Input
                    label='name'
                    name='name'
                    schema={ string().required('skill name is required') }
                  />
                </Scope>
              </Scope>
            </Scope>
            <hr />
            <button type='submit'>Save</button>
          </Form>
        ) }
      </FormWrapper>
    );
  });