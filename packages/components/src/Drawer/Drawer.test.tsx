import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { expect, test, vi } from 'vitest';
import { Drawer, DrawerContent, DrawerHeader, DrawerBody, DrawerFooter, DrawerTitle, DrawerDescription } from './Drawer';

test('renders drawer content', () => {
  render(
    <Drawer open={true}>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Test Drawer</DrawerTitle>
          <DrawerDescription>This is a test description</DrawerDescription>
        </DrawerHeader>
        <DrawerBody>Content</DrawerBody>
        <DrawerFooter>Footer</DrawerFooter>
      </DrawerContent>
    </Drawer>
  );

  expect(screen.getByText('Test Drawer')).toBeInTheDocument();
  expect(screen.getByText('This is a test description')).toBeInTheDocument();
  expect(screen.getByText('Content')).toBeInTheDocument();
  expect(screen.getByText('Footer')).toBeInTheDocument();
});
