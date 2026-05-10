import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { Toggle } from './Toggle';

describe('Toggle', () => {
  it('renders with an accessible label', () => {
    render(<Toggle label="Enable analytics" />);

    expect(screen.getByRole('switch', { name: 'Enable analytics' })).toBeInTheDocument();
  });

  it('toggles when clicked', async () => {
    const user = userEvent.setup();
    render(<Toggle label="Enable analytics" />);

    await user.click(screen.getByRole('switch', { name: 'Enable analytics' }));

    expect(screen.getByRole('switch', { name: 'Enable analytics' })).toBeChecked();
  });

  it('sets busy and disabled while loading', () => {
    render(<Toggle label="Sync settings" isLoading />);

    const toggle = screen.getByRole('switch', { name: 'Sync settings' });
    expect(toggle).toHaveAttribute('aria-busy', 'true');
    expect(toggle).toBeDisabled();
  });
});
