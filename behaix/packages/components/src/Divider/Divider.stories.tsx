import type { Meta, StoryObj } from '@storybook/react';
import { Divider } from './Divider';

const meta = {
  title: 'Components/Divider',
  component: Divider,
  tags: ['autodocs'],
  parameters: {
    docs: {
      source: { state: 'open' },
      description: {
        component:
          'Divider separates related content groups with a low-emphasis rule. Use it to clarify layout hierarchy; avoid using dividers as decoration when spacing alone is sufficient.\n\nAccessibility: dividers render `role=\"separator\"` and set `aria-orientation`; labeled horizontal dividers include visible text between two separator lines.\n\nDesign token dependencies: neutral border color, text size, font weight, line height, and muted foreground color.\n\nKnown limitations: labels are supported for horizontal dividers only; vertical labels are intentionally excluded for readability.'
      }
    }
  },
  argTypes: {
    orientation: { control: 'select', options: ['horizontal', 'vertical'] },
    label: { control: 'text' }
  },
  args: {
    orientation: 'horizontal'
  }
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Horizontal: Story = {
  args: {
    orientation: 'horizontal'
  }
};

export const Vertical: Story = {
  render: () => (
    <div className="flex h-10 items-center gap-4 text-[var(--text-base)] text-[var(--color-neutral-800)]">
      <span>Overview</span>
      <Divider orientation="vertical" />
      <span>Analytics</span>
      <Divider orientation="vertical" />
      <span>Settings</span>
    </div>
  )
};

export const WithLabel: Story = {
  args: {
    label: 'or continue with'
  }
};

export const Composition: Story = {
  render: () => (
    <div className="max-w-md rounded-[var(--radius-lg)] border border-[var(--color-neutral-300)] bg-[var(--color-surface-raised)] p-6">
      <h3 className="m-0 text-[var(--text-lg)] font-[var(--font-semibold)] text-[var(--color-neutral-800)]">
        Workspace settings
      </h3>
      <Divider className="my-4" />
      <p className="m-0 text-[var(--text-base)] text-[var(--color-neutral-600)]">
        Manage members, billing, and release permissions from one place.
      </p>
    </div>
  )
};

export const DarkMode: Story = {
  render: () => (
    <div data-theme="dark" className="bg-[var(--color-surface)] p-6">
      <Divider label="Dark token separator" />
    </div>
  ),
  parameters: { backgrounds: { default: 'dark' } }
};

export const Accessibility: Story = {
  render: () => (
    <div>
      <span>Section A</span>
      <Divider className="my-3" />
      <span>Section B</span>
    </div>
  )
};
