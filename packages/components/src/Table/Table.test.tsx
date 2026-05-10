import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { expect, test, vi } from 'vitest';
import { Table, Column } from './Table';

const data = [
  { id: '1', name: 'Alice' },
  { id: '2', name: 'Bob' }
];

const columns: Column<any>[] = [
  { key: 'name', title: 'Name', sortable: true }
];

test('renders table data', () => {
  render(<Table columns={columns} data={data} />);
  expect(screen.getByText('Alice')).toBeInTheDocument();
  expect(screen.getByText('Bob')).toBeInTheDocument();
});

test('handles sorting click', () => {
  const onSort = vi.fn();
  render(<Table columns={columns} data={data} onSort={onSort} sortColumn="name" sortDirection="asc" />);
  
  fireEvent.click(screen.getByRole('button', { name: /Name/i }));
  expect(onSort).toHaveBeenCalledWith('name', 'desc');
});

test('handles row selection', () => {
  const onSelectionChange = vi.fn();
  render(
    <Table
      columns={columns}
      data={data}
      rowKey={(r) => r.id}
      selectedRowKeys={[]}
      onSelectionChange={onSelectionChange}
    />
  );
  
  const checkboxes = screen.getAllByRole('checkbox');
  // the first one is the "select all" checkbox
  fireEvent.click(checkboxes[1]!);
  
  expect(onSelectionChange).toHaveBeenCalledWith(['1']);
});
