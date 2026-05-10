import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './Tabs';

const meta = {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Pill: Story = {
  render: (args) => (
    <Tabs defaultValue="account" className="w-[400px]" {...args}>
      <TabsList variant="pill">
        <TabsTrigger variant="pill" value="account">Account</TabsTrigger>
        <TabsTrigger variant="pill" value="password">Password</TabsTrigger>
        <TabsTrigger variant="pill" value="settings">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="account">Make changes to your account here.</TabsContent>
      <TabsContent value="password">Change your password here.</TabsContent>
      <TabsContent value="settings">Manage your settings.</TabsContent>
    </Tabs>
  )
};

export const Underline: Story = {
  render: (args) => (
    <Tabs defaultValue="account" className="w-[400px]" {...args}>
      <TabsList variant="underline">
        <TabsTrigger variant="underline" value="account">Account</TabsTrigger>
        <TabsTrigger variant="underline" value="password">Password</TabsTrigger>
        <TabsTrigger variant="underline" value="settings">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="account">Make changes to your account here.</TabsContent>
      <TabsContent value="password">Change your password here.</TabsContent>
      <TabsContent value="settings">Manage your settings.</TabsContent>
    </Tabs>
  )
};
