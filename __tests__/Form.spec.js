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

import { Form, Input, Select, Check, Scope } from '../src';

describe('Form', () => {
  it('should render form elements', () => {
    const { container } = render(
      <Form onSubmit={ jest.fn() }>
        <Input name='name' />
        <Input multiline name='message' />
        <Select name='country' options={ [{ id: 'uk', title: 'UK' }] } />
      </Form>
    );

    expect(!!container.querySelector('input[name=name]')).toBe(true);
    expect(!!container.querySelector('textarea[name=message]')).toBe(true);
    expect(!!container.querySelector('select[name=country]')).toBe(true);
  });

  it('should load initial data inside form elements', () => {
    const { container } = render(
      <Form onSubmit={ jest.fn() } initialValues={ { name: 'James' } }>
        <Input name='name' />
      </Form>
    );

    expect(container.querySelector('input[name=name]')).toHaveAttribute(
      'value',
      'James'
    );
  });

  it('should return form elements data on submit', async () => {
    const submitMock = jest.fn();

    const { getByTestId, getByLabelText } = render(
      <Form
        onSubmit={ submitMock }
        initialValues={ { address: { street: 'Bliss Street' } } }
      >
        <Input name='name' />
        <Scope path='address'>
          <Input name='street' />
        </Scope>
      </Form>
    );

    fireEvent.change(getByLabelText('name'), { target: { value: 'James' } });
    fireEvent.submit(getByTestId('form'));

    await wait(() => {
      expect(submitMock).toHaveBeenCalledWith(
        {
          name: 'James',
          address: { street: 'Bliss Street' }
        },
        { resetForm: expect.any(Function) }
      );
    });
  });

  it('should remove unmounted elements from refs', async () => {
    const submitMock = jest.fn();

    const { getByLabelText, getByTestId, rerender } = render(
      <Form onSubmit={ submitMock }>
        <Input name='name' value='James' />
      </Form>
    );

    fireEvent.change(getByLabelText('name'), { target: { value: 'Bliss' } });

    rerender(
      <Form onSubmit={ submitMock }>
        <Input name='another' value='James' />
      </Form>
    );

    fireEvent.change(getByLabelText('another'), { target: { value: 'Bliss' } });

    fireEvent.submit(getByTestId('form'));

    await wait(() => {
      expect(submitMock).toHaveBeenCalledWith(
        { another: 'Bliss' },
        { resetForm: expect.any(Function) }
      );
    });
  });

  it('should initial values should be resetable', async () => {
    const submitMock = jest.fn();

    const { getByTestId, rerender } = render(
      <Form onSubmit={ submitMock } initialValues={ { name: 'James' } }>
        <p>hello</p>
        <Input name='name' />
      </Form>
    );

    rerender(
      <Form onSubmit={ submitMock } initialValues={ { another: 'James' } }>
        <p>hello</p>
        <Input name='another' />
      </Form>
    );

    fireEvent.submit(getByTestId('form'));

    await wait(() => {
      expect(submitMock).toHaveBeenCalledWith(
        { another: 'James' },
        { resetForm: expect.any(Function) }
      );
    });
  });


  it('should reset form data when resetForm helper is dispatched', async () => {
    const { getByTestId, getByLabelText } = render(
      <Form testid='form' onSubmit={ (_, { resetForm }) => resetForm() }>
        <Input name='name' />
        <Select
          name='country'
          placeholder='Select...'
          options={ [{ id: 'uk', title: 'UK' }] }
        />
      </Form>
    );

    getByLabelText('name').setAttribute('value', 'James');

    fireEvent.change(getByLabelText('country'), { target: { value: 'uk' } });
    fireEvent.submit(getByTestId('form'));

    await wait(() => {
      expect((getByLabelText('name')).value).toBe('');
      expect((getByLabelText('country')).value).toBe('');
    });
  });

  it('should apply data when resetForm is dispatched with new values', async () => {
    const newData = {
      name: 'James',
      person: true,
      country: 'uk'
    };

    const { getByTestId, getByLabelText } = render(
      <Form testid='form' onSubmit={ (_, { resetForm }) => resetForm(newData) }>
        <Input name='name' />
        <Check name='person' />
        <Select
          name='country'
          placeholder='Select...'
          options={ [
            { id: 'uk', title: 'United Kingdom' },
            { id: 'it', title: 'Italy' }
          ] }
        />
      </Form>
    );

    fireEvent.change(getByLabelText('name'), { target: { value: 'bliss' } });
    fireEvent.change(getByLabelText('person'), { target: { checked: false } });
    fireEvent.change(getByLabelText('country'), { target: { value: 'it' } });
    fireEvent.submit(getByTestId('form'));

    await wait(() => {
      expect((getByLabelText('name')).value).toBe('James');
      expect((getByLabelText('person')).checked).toBe(true);
      expect((getByLabelText('country')).value).toBe('uk');
    });
  });

  it('should render form with class attribute', () => {
    const { container } = render(
      <Form testid='form' onSubmit={ jest.fn() } className='test-class'>
        <Input name='name' />
      </Form>
    );

    expect(libGetByTestId(container, 'form')).toHaveAttribute(
      'class',
      'test-class'
    );
  });

  it('Should error shown on field blur', async () => {
    const newData = { name: 'James' };

    const { getByLabelText, getByText } = render(
      <Form testid='form' initialValues={ newData } onSubmit={ _ => _ }>
        <Input name='name' schema={ Yup.string().required('Must have value') } />
      </Form>
    );

    getByLabelText('name').focus();
    fireEvent.change(getByLabelText('name'), { target: { value: '' } });
    getByLabelText('name').blur();

    await wait(() => {
      expect((getByLabelText('name')).value).toBe('');
      expect(getByText(/Must have value/)).toBeInTheDocument();
    });
  });

  it('Should error shown on submit', async () => {
    const newData = { name: 'James' };

    const { getByTestId, getByLabelText, getByText } = render(
      <Form testid='form' initialValues={ newData } onSubmit={ _ => _ }>
        <Input name='name' schema={ Yup.string().required('Must have value') } />
      </Form>
    );

    fireEvent.change(getByLabelText('name'), { target: { value: '' } });
    fireEvent.submit(getByTestId('form'));

    await wait(() => {
      expect((getByLabelText('name')).value).toBe('');
      expect(getByText(/Must have value/)).toBeInTheDocument();
    });
  });

  it('Should not lose unmapped data', async () => {
    const newData = {
      firstName: 'james',
      lastName: 'Bliss'
    };

    const submitMock = jest.fn();

    const { getByTestId, getByLabelText } = render(
      <Form testid='form' initialValues={ newData } onSubmit={ submitMock }>
        <Input name='firstName' />
      </Form>
    );

    fireEvent.change(getByLabelText('firstName'), { target: { value: 'James' } });
    fireEvent.submit(getByTestId('form'));


    await wait(() => {
      expect(submitMock).toHaveBeenCalledWith(
        {
          firstName: 'James',
          lastName: 'Bliss'
        },
        { resetForm: expect.any(Function) }
      );
    });
  });

  it('Should handle scoped an array of objects', async () => {
    const submitMock = jest.fn();

    const { getByTestId, getByLabelText } = render(
      <Form testid='form' onSubmit={ submitMock }>
        <Scope path='users'>
          <Scope path={ 0 }>
            <Input name='Name' />
          </Scope>
          <Scope path={ 1 }>
            <Input name='Name' />
          </Scope>
        </Scope>
      </Form>
    );

    fireEvent.change(getByLabelText('users[0].Name'), { target: { value: 'James' } });
    fireEvent.change(getByLabelText('users[1].Name'), { target: { value: 'Tim' } });


    fireEvent.submit(getByTestId('form'));

    await wait(() => {
      expect(submitMock).toHaveBeenCalledWith(
        {
          users: [
            { Name: 'James' },
            { Name: 'Tim' }
          ]
        },
        { resetForm: expect.any(Function) }
      );
    });
  });

  // it('Should handle scoped an array of strings', async () => {
  //   const submitMock = jest.fn(() => {
  //     console.log('submit');
  //   });

  //   const { getByTestId, getByLabelText } = render(
  //     <Form testid='form' onSubmit={ submitMock }>
  //       <Scope path='users'>
  //         <Input name='0' />
  //         <Input name='1' />
  //       </Scope>
  //     </Form>
  //   );

  //   // fireEvent.change(getByLabelText('users[0]'), { target: { value: 'James' } });
  //   // fireEvent.change(getByLabelText('users[1]'), { target: { value: 'Tim' } });

  //   fireEvent.submit(getByTestId('form'));

  //   await wait(() => {
  //     expect(submitMock).toHaveBeenCalledWith(
  //       { users: ['James', 'Tim'] },
  //       { resetForm: expect.any(Function) }
  //     );
  //   });
  // });
});