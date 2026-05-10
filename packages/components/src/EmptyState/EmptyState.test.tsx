import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import { EmptyState } from './EmptyState';

test('renders empty state content', () => {
  render(
    <EmptyState
      title="No items"
      description="There are no items here."
      action={<button>Create item</button>}
    />
  );

  expect(screen.getByText('No items')).toBeInTheDocument();
  expect(screen.getByText('There are no items here.')).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Create item' })).toBeInTheDocument();
});
