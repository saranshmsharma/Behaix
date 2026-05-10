import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { expect, test, vi } from 'vitest';
import { Pagination } from './Pagination';

test('renders pagination and handles page change', () => {
  const onPageChange = vi.fn();
  render(<Pagination totalPages={5} currentPage={2} onPageChange={onPageChange} />);

  expect(screen.getByRole('navigation', { name: /pagination navigation/i })).toBeInTheDocument();
  
  const nextButton = screen.getByRole('button', { name: /next page/i });
  fireEvent.click(nextButton);
  expect(onPageChange).toHaveBeenCalledWith(3);
});

test('disables prev/next buttons at limits', () => {
  const onPageChange = vi.fn();
  const { rerender } = render(<Pagination totalPages={5} currentPage={1} onPageChange={onPageChange} />);
  
  const prevButton = screen.getByRole('button', { name: /previous page/i });
  expect(prevButton).toBeDisabled();
  
  rerender(<Pagination totalPages={5} currentPage={5} onPageChange={onPageChange} />);
  const nextButton = screen.getByRole('button', { name: /next page/i });
  expect(nextButton).toBeDisabled();
});
