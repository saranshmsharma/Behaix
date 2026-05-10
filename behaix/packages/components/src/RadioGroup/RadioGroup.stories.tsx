import type { Meta, StoryObj } from '@storybook/react';
import { RadioGroup } from './RadioGroup';

const options = [
  { label: 'Owner', value: 'owner', description: 'Full access to settings and releases.' },
  { label: 'Editor', value: 'editor', description: 'Can edit components and documentation.' },
  { label: 'Viewer', value: 'viewer', description: 'Can view documentation only.' }
];

const meta = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
  parameters: {
    docs: {
      source: { state: 'open' },
      description: {
        component:
          'RadioGroup lets users choose exactly one option from a related set. Use it when options need to be visible for comparison; avoid it for long lists where Select is more compact.\n\nAccessibility: Radix supplies radio roles, roving focus, arrow-key navigation, and checked state. Labels are associated with each radio item.\n\nDesign token dependencies: primary color, neutral borders, danger border, radius, shadow, focus, text, and motion tokens.\n\nKnown limitations: RadioGroup does not support multi-select; use CheckboxGroup for independent choices.'
      }
    }
  },
  argTypes: {
    orientation: { control: 'select', options: ['vertical', 'horizontal'] },
    size: { control: 'select', options: ['sm', 'md'] },
    label: { control: 'text' },
    error: { control: 'text' }
  },
  args: {
    label: 'Role',
    name: 'role',
    options,
    defaultValue: 'editor',
    orientation: 'vertical',
    size: 'md'
  }
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Horizontal: Story = {
  args: {
    orientation: 'horizontal'
  }
};

export const Sizes: Story = {
  render: () => (
    <div className="grid gap-6">
      <RadioGroup name="small-role" label="Small" size="sm" options={options} />
      <RadioGroup name="medium-role" label="Medium" size="md" options={options} />
    </div>
  )
};

export const Error: Story = {
  args: {
    error: 'Select a role.',
    defaultValue: undefined
  }
};

export const DisabledOption: Story = {
  args: {
    options: [...options, { label: 'Admin', value: 'admin', disabled: true }]
  }
};

export const Composition: Story = {
  render: () => (
    <div className="max-w-lg rounded-[var(--radius-lg)] border border-[var(--color-neutral-300)] bg-[var(--color-surface-raised)] p-6">
      <RadioGroup name="density" label="Interface density" options={[
        { label: 'Comfortable', value: 'comfortable' },
        { label: 'Compact', value: 'compact' }
      ]} />
    </div>
  )
};

export const DarkMode: Story = {
  render: () => (
    <div data-theme="dark" className="bg-[var(--color-surface)] p-6">
      <RadioGroup name="dark-role" label="Dark radio group" options={options} defaultValue="owner" />
    </div>
  ),
  parameters: { backgrounds: { default: 'dark' } }
};

export const Accessibility: Story = {
  render: () => <RadioGroup name="required-role" label="Required role" error="Role is required." options={options} />
};
