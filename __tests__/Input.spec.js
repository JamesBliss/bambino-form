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

import { Form, Input } from '../src';

describe('Form', () => {
  it('should show label', async () => {
    const { getByText } = render(
      <Form testid='form' onSubmit={ _ => _ }>
        <Input name='name' label='Enter Name' />
      </Form>
    );

    await wait(() => {
      expect((getByText('Enter Name'))).toBeInTheDocument();
    });
  });

  it('should show error', async () => {
    const { getByLabelText, getByText, getByTestId } = render(
      <Form testid='form' onSubmit={ _ => _ }>
        <Input
          name='name'
          schema={ Yup.string().required('Name must have a value') }
        />
      </Form>
    );

    fireEvent.submit(getByTestId('form'));

    await wait(() => {
      expect((getByLabelText('name')).value).toBe('');
      expect((getByText('Name must have a value'))).toBeInTheDocument();
    });
  });

  it('should update when clicked', async () => {
    const { getByTestId, getByLabelText, queryByText } = render(
      <Form testid='form' onSubmit={ _ => _ }>
        <Input
          name='name'
          schema={ Yup.string().required('Name must have a value') }
        />
      </Form>
    );

    fireEvent.change(getByLabelText('name'), { target: { value: 'James' } });
    fireEvent.submit(getByTestId('form'));

    await wait(() => {
      expect((getByLabelText('name')).value).toBe('James');
      expect((queryByText('i', 'Name must have a value'))).not.toBeInTheDocument();
    });
  });
});