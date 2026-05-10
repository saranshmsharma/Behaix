import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { Alert } from './Alert';

describe('Alert', () => {
  it('renders title and description', () => {
    render(<Alert title="Saved" description="Changes saved." />);

    expect(screen.getByRole('status')).toHaveTextContent('Saved');
    expect(screen.getByText('Changes saved.')).toBeInTheDocument();
  });

  it('calls onDismiss when close button is clicked', async () => {
    const user = userEvent.setup();
    const onDismiss = vi.fn();
    render(<Alert title="Saved" onDismiss={onDismiss} />);

    await user.click(screen.getByRole('button', { name: 'Dismiss alert' }));

    expect(onDismiss).toHaveBeenCalledTimes(1);
  });
});
