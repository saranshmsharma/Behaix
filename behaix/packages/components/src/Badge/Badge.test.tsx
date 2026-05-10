import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { Badge } from './Badge';

describe('Badge', () => {
  it('renders badge text', () => {
    render(<Badge>Active</Badge>);

    expect(screen.getByText('Active')).toBeInTheDocument();
  });

  it('renders a dot when requested', () => {
    const { container } = render(<Badge dot>Synced</Badge>);

    expect(container.querySelector('[aria-hidden="true"]')).toBeInTheDocument();
  });

  it('calls onRemove from the dismiss button', async () => {
    const user = userEvent.setup();
    const onRemove = vi.fn();

    render(
      <Badge onRemove={onRemove} removeLabel="Remove status">
        Status
      </Badge>
    );
    await user.click(screen.getByRole('button', { name: 'Remove status' }));

    expect(onRemove).toHaveBeenCalledTimes(1);
  });
});
