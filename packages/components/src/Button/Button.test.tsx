import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { Button } from './Button';

describe('Button', () => {
  it('renders a native button with default props', () => {
    render(<Button>Save changes</Button>);

    expect(screen.getByRole('button', { name: 'Save changes' })).toBeInTheDocument();
  });

  it('calls onClick when activated', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();

    render(<Button onClick={onClick}>Create project</Button>);
    await user.click(screen.getByRole('button', { name: 'Create project' }));

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('does not call onClick when disabled', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();

    render(
      <Button disabled onClick={onClick}>
        Disabled action
      </Button>
    );
    await user.click(screen.getByRole('button', { name: 'Disabled action' }));

    expect(onClick).not.toHaveBeenCalled();
    expect(screen.getByRole('button', { name: 'Disabled action' })).toBeDisabled();
  });

  it('sets aria-busy and disables the button while loading', () => {
    render(<Button isLoading>Saving</Button>);

    const button = screen.getByRole('button', { name: 'Saving' });
    expect(button).toHaveAttribute('aria-busy', 'true');
    expect(button).toBeDisabled();
  });

  it('renders left and right icons when provided', () => {
    render(
      <Button leftIcon={<span data-testid="left-icon" />} rightIcon={<span data-testid="right-icon" />}>
        Continue
      </Button>
    );

    expect(screen.getByTestId('left-icon')).toBeInTheDocument();
    expect(screen.getByTestId('right-icon')).toBeInTheDocument();
  });

  it('renders as a child element with button styles', () => {
    render(
      <Button asChild>
        <a href="/docs">Open docs</a>
      </Button>
    );

    expect(screen.getByRole('link', { name: 'Open docs' })).toHaveAttribute('href', '/docs');
  });

  it('supports icon-only accessible names', () => {
    render(<Button aria-label="Add item" leftIcon={<span aria-hidden="true">+</span>} />);

    expect(screen.getByRole('button', { name: 'Add item' })).toBeInTheDocument();
  });
});
