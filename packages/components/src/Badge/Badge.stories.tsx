import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';

const meta = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  parameters: {
    docs: {
      source: { state: 'open' },
      description: {
        component:
          'Badge communicates compact status, category, or metadata. Use it for labels and low-emphasis states; avoid using badges as primary actions or long-form content containers.\n\nAccessibility: dismissible badges expose a named button for removal, and dot badges still include visible text so color is not the only indicator.\n\nDesign token dependencies: semantic colors with bg, border, and fg aliases; neutral colors; radius; text; duration; and focus tokens.\n\nKnown limitations: Badge does not manage a collection state internally; consumers should remove dismissed badges from their own data model.'
      }
    }
  },
  argTypes: {
    variant: { control: 'select', options: ['default', 'success', 'warning', 'danger', 'info', 'outline'] },
    size: { control: 'select', options: ['sm', 'md'] },
    dot: { control: 'boolean' },
    onRemove: { action: 'removed' },
    children: { control: 'text' }
  },
  args: {
    children: 'Active',
    variant: 'default',
    size: 'md',
    dot: false
  }
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge>Default</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="danger">Danger</Badge>
      <Badge variant="info">Info</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  )
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Badge size="sm">Small</Badge>
      <Badge size="md">Medium</Badge>
    </div>
  )
};

export const WithDot: Story = {
  args: {
    dot: true,
    variant: 'success',
    children: 'Synced'
  }
};

export const Dismissible: Story = {
  args: {
    children: 'Filter: Enterprise',
    onRemove: () => undefined,
    removeLabel: 'Remove Enterprise filter'
  }
};

export const Composition: Story = {
  render: () => (
    <div className="rounded-[var(--radius-lg)] border border-[var(--color-neutral-300)] bg-[var(--color-surface-raised)] p-4">
      <div className="flex items-center gap-2">
        <span className="text-[var(--text-base)] font-[var(--font-medium)] text-[var(--color-neutral-800)]">
          Release health
        </span>
        <Badge dot variant="success">
          Ready
        </Badge>
      </div>
    </div>
  )
};

export const DarkMode: Story = {
  render: () => (
    <div data-theme="dark" className="flex gap-2 bg-[var(--color-surface)] p-6">
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="danger">Danger</Badge>
      <Badge variant="info">Info</Badge>
    </div>
  ),
  parameters: { backgrounds: { default: 'dark' } }
};

export const Accessibility: Story = {
  render: () => (
    <div className="flex gap-2">
      <Badge dot variant="warning">
        Pending review
      </Badge>
      <Badge onRemove={() => undefined} removeLabel="Remove Pending review badge">
        Pending review
      </Badge>
    </div>
  )
};
