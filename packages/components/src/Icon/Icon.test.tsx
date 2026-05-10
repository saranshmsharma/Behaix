import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Icon } from './Icon';

describe('Icon', () => {
  it('hides decorative icons from assistive technology by default', () => {
    const { container } = render(<Icon name="plus" />);

    expect(container.querySelector('svg')).toHaveAttribute('aria-hidden', 'true');
  });

  it('renders meaningful icons with an accessible label', () => {
    render(<Icon name="info" label="Information" />);

    expect(screen.getByRole('img', { name: 'Information' })).toBeInTheDocument();
  });

  it('applies size and color classes', () => {
    const { container } = render(<Icon name="check" color="success" size="lg" />);

    expect(container.querySelector('svg')?.getAttribute('class')).toContain('size-6');
    expect(container.querySelector('svg')?.getAttribute('class')).toContain('text-[var(--color-success-fg)]');
  });
});
