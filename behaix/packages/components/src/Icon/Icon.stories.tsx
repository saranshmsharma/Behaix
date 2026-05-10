import type { Meta, StoryObj } from '@storybook/react';
import { Icon, iconMap } from './Icon';

const meta = {
  title: 'Components/Icon',
  component: Icon,
  tags: ['autodocs'],
  parameters: {
    docs: {
      source: { state: 'open' },
      description: {
        component:
          'Icon is a thin typed wrapper around selected Lucide icons. Use it to keep icon names, sizes, colors, and accessibility behavior consistent; avoid using icons as the only indicator of meaning unless a text label or accessible name is present.\n\nAccessibility: decorative icons are `aria-hidden`; meaningful standalone icons require `label`, which sets `role=\"img\"` and `aria-label`.\n\nDesign token dependencies: semantic foreground colors, neutral colors, and current text color inheritance.\n\nKnown limitations: only curated Lucide icons in `IconName` are available in v1; add names intentionally to preserve bundle and API control.'
      }
    }
  },
  argTypes: {
    name: { control: 'select', options: Object.keys(iconMap) },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    color: { control: 'select', options: ['inherit', 'primary', 'muted', 'success', 'warning', 'danger', 'info'] },
    label: { control: 'text' }
  },
  args: {
    name: 'plus',
    size: 'md',
    color: 'inherit'
  }
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const AllIcons: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-4 text-[var(--color-neutral-800)]">
      {Object.keys(iconMap).map((name) => (
        <div key={name} className="flex items-center gap-2 text-[var(--text-sm)]">
          <Icon name={name as keyof typeof iconMap} />
          <span>{name}</span>
        </div>
      ))}
    </div>
  )
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Icon name="settings" size="sm" />
      <Icon name="settings" size="md" />
      <Icon name="settings" size="lg" />
    </div>
  )
};

export const Colors: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Icon name="info" color="primary" />
      <Icon name="check" color="success" />
      <Icon name="alertCircle" color="warning" />
      <Icon name="trash" color="danger" />
      <Icon name="search" color="muted" />
    </div>
  )
};

export const MeaningfulIcon: Story = {
  args: {
    name: 'info',
    label: 'Information'
  }
};

export const Composition: Story = {
  render: () => (
    <button className="inline-flex items-center gap-2 rounded-[var(--radius-md)] border border-[var(--color-neutral-300)] bg-[var(--color-surface-raised)] px-3 py-2 text-[var(--text-base)] text-[var(--color-neutral-800)]">
      <Icon name="download" aria-hidden="true" />
      Download report
    </button>
  )
};

export const DarkMode: Story = {
  render: () => (
    <div data-theme="dark" className="flex gap-4 bg-[var(--color-surface)] p-6">
      <Icon name="info" color="primary" />
      <Icon name="check" color="success" />
      <Icon name="trash" color="danger" />
    </div>
  ),
  parameters: { backgrounds: { default: 'dark' } }
};

export const Accessibility: Story = {
  render: () => (
    <div className="flex gap-4">
      <Icon name="search" />
      <Icon name="info" label="Information" />
    </div>
  )
};
