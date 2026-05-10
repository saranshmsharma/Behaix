import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Spinner } from './Spinner';

describe('Spinner', () => {
  it('renders a status with label', () => {
    render(<Spinner label="Loading releases" />);

    expect(screen.getByRole('status', { name: 'Loading releases' })).toBeInTheDocument();
  });
});
