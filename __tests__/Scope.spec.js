import React from 'react';
import '@testing-library/react/cleanup-after-each';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import { Form, Scope, Input } from '../src';

describe('Form', () => {
  it('should name form elements based on scope', () => {
    const { container } = render(
      <Form onSubmit={ jest.fn() }>
        <Scope path='profile'>
          <Input name='name' />
        </Scope>
      </Form>,
    );

    expect(!!container.querySelector("input[name='profile.name']")).toBe(true);
  });

  it('should name form elements based on scope number', () => {
    const { container } = render(
      <Form onSubmit={ jest.fn() }>
        <Scope path='profile'>
          <Scope path={ 0 }>
            <Input name='name' />
          </Scope>
        </Scope>
      </Form>,
    );

    expect(!!container.querySelector("input[name='profile[0].name']")).toBe(true);
  });

  it('should concat scope paths', () => {
    const { container } = render(
      <Form onSubmit={ jest.fn() }>
        <Scope path='profile'>
          <Scope path='user'>
            <Input name='name' />
          </Scope>
        </Scope>
      </Form>,
    );

    expect(!!container.querySelector("input[name='profile.user.name']")).toBe(
      true,
    );
  });
});