import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Skeleton } from './Skeleton';

describe('Skeleton', () => {
  it('is hidden from assistive technology', () => {
    const { container } = render(<Skeleton />);

    expect(container.firstElementChild).toHaveAttribute('aria-hidden', 'true');
  });

  it('applies width and height styles', () => {
    const { container } = render(<Skeleton width="100px" height="20px" />);

    expect(container.firstElementChild).toHaveStyle({ width: '100px', height: '20px' });
  });
});
