import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Table, Column } from './Table';

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  status: 'Active' | 'Inactive';
}

const data: User[] = [
  { id: '1', name: 'Alice Smith', email: 'alice@example.com', role: 'Admin', status: 'Active' },
  { id: '2', name: 'Bob Jones', email: 'bob@example.com', role: 'User', status: 'Active' },
  { id: '3', name: 'Charlie Brown', email: 'charlie@example.com', role: 'User', status: 'Inactive' },
];

const columns: Column<User>[] = [
  { key: 'name', title: 'Name', sortable: true },
  { key: 'email', title: 'Email' },
  { key: 'role', title: 'Role' },
  { key: 'status', title: 'Status' }
];

const meta = {
  title: 'Components/Table',
  component: Table as any,
  tags: ['autodocs'],
} satisfies Meta<any>;

export default meta;
type Story = StoryObj<any>;

export const Default: Story = {
  args: {
    columns,
    data
  }
};
