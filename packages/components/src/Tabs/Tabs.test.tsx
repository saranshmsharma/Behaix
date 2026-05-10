import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { expect, test } from 'vitest';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './Tabs';

test('renders tabs and changes content', () => {
  render(
    <Tabs defaultValue="t1">
      <TabsList>
        <TabsTrigger value="t1">Tab 1</TabsTrigger>
        <TabsTrigger value="t2">Tab 2</TabsTrigger>
      </TabsList>
      <TabsContent value="t1">Content 1</TabsContent>
      <TabsContent value="t2">Content 2</TabsContent>
    </Tabs>
  );

  expect(screen.getByText('Content 1')).toBeInTheDocument();
  expect(screen.queryByText('Content 2')).not.toBeInTheDocument();

  fireEvent.click(screen.getByRole('tab', { name: 'Tab 2' }));

  expect(screen.queryByText('Content 1')).not.toBeInTheDocument();
  expect(screen.getByText('Content 2')).toBeInTheDocument();
});
