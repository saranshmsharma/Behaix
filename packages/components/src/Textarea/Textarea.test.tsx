import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { Textarea } from './Textarea';

describe('Textarea', () => {
  it('renders with an accessible label', () => {
    render(<Textarea label="Notes" />);

    expect(screen.getByLabelText('Notes')).toBeInTheDocument();
  });

  it('updates character count when maxLength is set', async () => {
    const user = userEvent.setup();
    render(<Textarea label="Notes" maxLength={20} />);

    await user.type(screen.getByLabelText('Notes'), 'Hello');

    expect(screen.getByText('5/20')).toBeInTheDocument();
  });

  it('sets aria-invalid when error is present', () => {
    render(<Textarea label="Notes" error="Notes are required." />);

    expect(screen.getByLabelText('Notes')).toHaveAttribute('aria-invalid', 'true');
    expect(screen.getByRole('alert')).toHaveTextContent('Notes are required.');
  });
});
