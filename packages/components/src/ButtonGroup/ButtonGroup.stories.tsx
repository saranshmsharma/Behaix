import type { Meta, StoryObj } from '@storybook/react';
import { ButtonGroup } from './ButtonGroup';
import { Button } from '../Button';
import { LayoutGrid, List, Table } from 'lucide-react';

const meta = {
  title: 'Components/ButtonGroup',
  component: ButtonGroup,
  tags: ['autodocs'],
} satisfies Meta<typeof ButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <ButtonGroup {...args}>
      <Button variant="secondary">Years</Button>
      <Button variant="secondary">Months</Button>
      <Button variant="secondary">Days</Button>
    </ButtonGroup>
  )
};

export const Icons: Story = {
  render: (args) => (
    <ButtonGroup {...args}>
      <Button variant="secondary" isIconOnly><LayoutGrid size={16} /></Button>
      <Button variant="secondary" isIconOnly><List size={16} /></Button>
      <Button variant="secondary" isIconOnly><Table size={16} /></Button>
    </ButtonGroup>
  )
};

export const Vertical: Story = {
  render: (args) => (
    <ButtonGroup {...args} orientation="vertical">
      <Button variant="secondary">Top</Button>
      <Button variant="secondary">Middle</Button>
      <Button variant="secondary">Bottom</Button>
    </ButtonGroup>
  )
};

export const Primary: Story = {
  render: (args) => (
    <ButtonGroup {...args}>
      <Button>Save</Button>
      <Button className="border-l border-primary-fg/20">Publish</Button>
    </ButtonGroup>
  )
};
