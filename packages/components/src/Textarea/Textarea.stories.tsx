import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from './Textarea';

const meta = {
  title: 'Components/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  parameters: {
    docs: {
      source: { state: 'open' },
      description: {
        component:
          'Textarea captures multi-line text and uses FormField for labels, hints, and errors. Use it for comments, descriptions, and notes; avoid it for short values that should remain single-line.\n\nAccessibility: labels, descriptions, and invalid states are automatically wired; character count is visible when `maxLength` is provided.\n\nDesign token dependencies: surface, neutral colors, danger colors, radius, shadow, text scale, leading, duration, and focus color.\n\nKnown limitations: auto-resize uses content height and does not enforce a maximum visual height by default.'
      }
    }
  },
  argTypes: {
    label: { control: 'text' },
    hint: { control: 'text' },
    error: { control: 'text' },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    autoResize: { control: 'boolean' },
    disabled: { control: 'boolean' },
    readOnly: { control: 'boolean' },
    maxLength: { control: 'number' }
  },
  args: {
    label: 'Description',
    placeholder: 'Describe this component',
    rows: 4,
    size: 'md'
  }
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Sizes: Story = {
  render: () => (
    <div className="grid gap-4">
      <Textarea label="Small" size="sm" />
      <Textarea label="Medium" size="md" />
      <Textarea label="Large" size="lg" />
    </div>
  )
};

export const CharacterCount: Story = {
  args: {
    label: 'Release note',
    maxLength: 120,
    defaultValue: 'Improves keyboard support for all Tier 1 atoms.'
  }
};

export const AutoResize: Story = {
  args: {
    label: 'Auto-resizing note',
    autoResize: true,
    rows: 2,
    defaultValue: 'This textarea grows as content wraps onto new lines.'
  }
};

export const Error: Story = {
  args: {
    label: 'Description',
    error: 'Description is required.'
  }
};

export const Disabled: Story = {
  args: {
    label: 'Disabled description',
    disabled: true,
    value: 'Unavailable'
  }
};

export const ReadOnly: Story = {
  args: {
    label: 'Read-only description',
    readOnly: true,
    value: 'Generated from release metadata.'
  }
};

export const Composition: Story = {
  render: () => (
    <div className="max-w-lg rounded-[var(--radius-lg)] border border-[var(--color-neutral-300)] bg-[var(--color-surface-raised)] p-6">
      <Textarea label="Feedback" hint="Tell the component owner what should change." maxLength={240} />
    </div>
  )
};

export const DarkMode: Story = {
  render: () => (
    <div data-theme="dark" className="bg-[var(--color-surface)] p-6">
      <Textarea label="Dark textarea" hint="Uses dark mode token aliases." />
    </div>
  ),
  parameters: { backgrounds: { default: 'dark' } }
};

export const Accessibility: Story = {
  render: () => <Textarea label="Required notes" required error="Notes are required." />
};
