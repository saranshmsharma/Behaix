import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { TextInput } from './TextInput';

describe('TextInput', () => {
  it('renders with an accessible label', () => {
    render(<TextInput label="Email" />);

    expect(screen.getByLabelText('Email')).toBeInTheDocument();
  });

  it('accepts typed values', async () => {
    const user = userEvent.setup();
    render(<TextInput label="Project" />);

    await user.type(screen.getByLabelText('Project'), 'Behaix');

    expect(screen.getByLabelText('Project')).toHaveValue('Behaix');
  });

  it('sets aria-invalid when error is present', () => {
    render(<TextInput label="Email" error="Invalid email." />);

    expect(screen.getByLabelText('Email')).toHaveAttribute('aria-invalid', 'true');
    expect(screen.getByRole('alert')).toHaveTextContent('Invalid email.');
  });

  it('supports disabled and read-only states', () => {
    render(
      <>
        <TextInput label="Disabled" disabled />
        <TextInput label="Read only" readOnly value="BEH-1" />
      </>
    );

    expect(screen.getByLabelText('Disabled')).toBeDisabled();
    expect(screen.getByLabelText('Read only')).toHaveAttribute('readonly');
  });
});
