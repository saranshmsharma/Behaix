import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { Button } from '../Button';
import { Tooltip } from './Tooltip';

describe('Tooltip', () => {
  it('shows tooltip content on focus', async () => {
    const user = userEvent.setup();
    render(
      <Tooltip content="Helpful context" delay={0}>
        <Button>Focus me</Button>
      </Tooltip>
    );

    await user.tab();

    expect(await screen.findByText('Helpful context')).toBeInTheDocument();
  });

  it('does not render content when disabled', () => {
    render(
      <Tooltip content="Hidden" disabled>
        <Button>Trigger</Button>
      </Tooltip>
    );

    expect(screen.queryByText('Hidden')).not.toBeInTheDocument();
  });
});
