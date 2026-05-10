import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { expect, test, vi } from 'vitest';
import { Menu, MenuTrigger, MenuContent, MenuItem } from './Menu';

test('renders menu trigger and opens menu', () => {
  render(
    <Menu>
      <MenuTrigger>Open Menu</MenuTrigger>
      <MenuContent>
        <MenuItem>Item 1</MenuItem>
        <MenuItem>Item 2</MenuItem>
      </MenuContent>
    </Menu>
  );

  expect(screen.getByText('Open Menu')).toBeInTheDocument();
  
  // Menu content shouldn't be visible initially
  expect(screen.queryByText('Item 1')).not.toBeInTheDocument();

  // Open menu
  fireEvent.click(screen.getByText('Open Menu'));

  // Items should be visible
  expect(screen.getByText('Item 1')).toBeInTheDocument();
  expect(screen.getByText('Item 2')).toBeInTheDocument();
});
