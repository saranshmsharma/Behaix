import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { FormField } from './FormField';

describe('FormField', () => {
  it('wires label to the generated control id', () => {
    render(
      <FormField label="Email">
        {({ id }) => <input id={id} />}
      </FormField>
    );

    expect(screen.getByLabelText('Email')).toBeInTheDocument();
  });

  it('provides aria descriptions for hint and error', () => {
    render(
      <FormField label="Email" hint="Use work email." error="Email is required.">
        {({ id, describedBy, invalid }) => <input id={id} aria-describedby={describedBy} aria-invalid={invalid} />}
      </FormField>
    );

    expect(screen.getByLabelText('Email')).toHaveAttribute('aria-invalid', 'true');
    expect(screen.getByText('Use work email.')).toBeInTheDocument();
    expect(screen.getByRole('alert')).toHaveTextContent('Email is required.');
  });

  it('renders multiple errors', () => {
    render(
      <FormField label="Password" error={['Too short.', 'Missing number.']}>
        {({ id }) => <input id={id} />}
      </FormField>
    );

    expect(screen.getByText('Too short.')).toBeInTheDocument();
    expect(screen.getByText('Missing number.')).toBeInTheDocument();
  });
});
