import React from 'react';
import { storiesOf } from '@storybook/react';
import { object, number, string } from 'yup';
import { withInfo } from '@storybook/addon-info';
import marked from 'marked';

// components //
import Form from '../../src/Form';
import Scope from '../../src/Scope';
import Input from '../../src/Input';
import Context from '../../src/Context';
import Select from '../../src/Select';
import Check from '../../src/Check';

// helper
import FormWrapper from './_helper';

// readme
import markdown from '../../README.md'

// story //
storiesOf('Form', module)

  // decorators
  .addParameters({
    options: { showAddonPanel: false },
    notes: { markdown }
  })

  // story
  .add('Form: Massive', () => {
    return (
      <FormWrapper>
        {({setFields}) => (
          <Form  onSubmit={ (data) => setFields(data) } >
            { [...Array(100).keys()].map(point => (
              <React.Fragment>
                <Input
                  label={ `${ point }-name` }
                  placeholder={ `enter-${ point }-name` }
                  name={ `${ point }-name` }
                  schema={ string().required(`${ point }-name-required`)}
                />
                <br />
              </React.Fragment>
            ))}
            <br />
            <hr />
            <button type='submit'>Save</button>
          </Form>
        ) }
      </FormWrapper>
    );
  });