import React from 'react';
import '@testing-library/react/cleanup-after-each';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import * as Yup from 'yup';

import {
  act,
  render,
  fireEvent,
  wait,
  getByTestId as libGetByTestId
} from '@testing-library/react';

import { Form, Check } from '../src';

describe('Form', () => {
  it('should show label', async () => {
    const { getByText } = render(
      <Form testid='form' onSubmit={ _ => _ }>
        <Check name='true' label='Is this true?' />
      </Form>
    );

    await wait(() => {
      expect((getByText('Is this true?'))).toBeInTheDocument();
    });
  });

  it('should show error', async () => {
    const { getByLabelText, getByText, getByTestId } = render(
      <Form testid='form' onSubmit={ _ => _ }>
        <Check
          name='true'
          label='Is this true?'
          schema={ Yup.bool().oneOf([true], 'True must be checked') }
        />
      </Form>
    );

    fireEvent.submit(getByTestId('form'));

    await wait(() => {
      expect((getByLabelText('true')).checked).toBe(false);
      expect((getByText('True must be checked'))).toBeInTheDocument();
    });
  });

  it('should update when clicked', async () => {
    const { getByTestId, getByLabelText, queryByText } = render(
      <Form testid='form' onSubmit={ _ => _ }>
        <Check
          name='true'
          label='Is this true?'
          schema={ Yup.bool().oneOf([true], 'True must be checked') }
        />
      </Form>
    );

    fireEvent.change(getByLabelText('true'), { target: { checked: true } });
    fireEvent.submit(getByTestId('form'));

    await wait(() => {
      expect((getByLabelText('true')).checked).toBe(true);
      expect((queryByText('i', 'True must be checked'))).not.toBeInTheDocument();
    });
  });
});