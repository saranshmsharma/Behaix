import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { Button } from '../Button';
import { ToastProvider, useToast } from './Toast';

function Demo() {
  const { showToast } = useToast();
  return <Button onClick={() => showToast({ title: 'Saved', description: 'Changes saved.' })}>Show toast</Button>;
}

describe('Toast', () => {
  it('shows a toast from the provider hook', async () => {
    const user = userEvent.setup();
    render(
      <ToastProvider>
        <Demo />
      </ToastProvider>
    );

    await user.click(screen.getByRole('button', { name: 'Show toast' }));

    expect(screen.getByRole('status')).toHaveTextContent('Saved');
  });

  it('dismisses a toast', async () => {
    const user = userEvent.setup();
    render(
      <ToastProvider>
        <Demo />
      </ToastProvider>
    );

    await user.click(screen.getByRole('button', { name: 'Show toast' }));
    await user.click(screen.getByRole('button', { name: 'Dismiss notification' }));

    expect(screen.queryByRole('status')).not.toBeInTheDocument();
  });

  it('throws outside provider', () => {
    const spy = vi.spyOn(console, 'error').mockImplementation(() => undefined);
    expect(() => render(<Demo />)).toThrow('useToast must be used within a ToastProvider.');
    spy.mockRestore();
  });
});
