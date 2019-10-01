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

import { Form, Select } from '../src';

describe('Form', () => {
  it('should show label', async () => {
    const { getByText } = render(
      <Form testid='form' onSubmit={ _ => _ }>
        <Select
          name='name'
          label='Select Name'
          placeholder='Select...'
          options={ [
            { id: 'james', title: 'James' },
            { id: 'tim', title: 'Tim' }
          ] }
        />
      </Form>
    );

    await wait(() => {
      expect((getByText('Select Name'))).toBeInTheDocument();
    });
  });

  it('should show error', async () => {
    const { getByLabelText, getByText, getByTestId } = render(
      <Form testid='form' onSubmit={ _ => _ }>
        <Select
          name='name'
          schema={ Yup.string().required('Name must have a value') }
          placeholder='Select...'
          options={ [
            { id: 'james', title: 'James' },
            { id: 'tim', title: 'Tim' }
          ] }
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
        <Select
          name='name'
          schema={ Yup.string().required('Name must have a value') }
          placeholder='Select...'
          options={ [
            { id: 'james', title: 'James' },
            { id: 'tim', title: 'Tim' }
          ] }
        />
      </Form>
    );

    fireEvent.change(getByLabelText('name'), { target: { value: 'james' } });
    fireEvent.submit(getByTestId('form'));

    await wait(() => {
      expect((getByLabelText('name')).value).toBe('james');
      expect((queryByText('i', 'Name must have a value'))).not.toBeInTheDocument();
    });
  });
});