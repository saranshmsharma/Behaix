import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';

const options = [
  { label: 'Design system', value: 'design-system' },
  { label: 'Analytics', value: 'analytics' },
  { label: 'Billing', value: 'billing' }
];

const groupedOptions = [
  {
    label: 'Product',
    options: [
      { label: 'Design system', value: 'design-system' },
      { label: 'Component docs', value: 'component-docs' }
    ]
  },
  {
    label: 'Operations',
    options: [
      { label: 'Billing', value: 'billing' },
      { label: 'Permissions', value: 'permissions', disabled: true }
    ]
  }
];

const meta = {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
  parameters: {
    docs: {
      source: { state: 'open' },
      description: {
        component:
          'Select lets users choose one value from a constrained list using Radix Select. Use it for finite option sets; avoid it for long free-form search where combobox behavior is more appropriate.\n\nAccessibility: Radix supplies keyboard navigation, roving focus, typeahead, and listbox semantics. FormField wires labels, hints, and errors.\n\nDesign token dependencies: surface, neutral colors, semantic danger colors, radius, shadow, text scale, focus color, and motion tokens.\n\nKnown limitations: searchable mode filters visible options but remains a Select, not a full ARIA combobox.'
      }
    }
  },
  argTypes: {
    label: { control: 'text' },
    hint: { control: 'text' },
    error: { control: 'text' },
    placeholder: { control: 'text' },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    searchable: { control: 'boolean' },
    isLoading: { control: 'boolean' },
    disabled: { control: 'boolean' }
  },
  args: {
    label: 'Product area',
    options,
    placeholder: 'Select area',
    size: 'md'
  }
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Sizes: Story = {
  render: () => (
    <div className="grid gap-4">
      <Select label="Small" size="sm" options={options} />
      <Select label="Medium" size="md" options={options} />
      <Select label="Large" size="lg" options={options} />
    </div>
  )
};

export const Grouped: Story = {
  args: {
    options: groupedOptions,
    label: 'Workspace area'
  }
};

export const Searchable: Story = {
  args: {
    options: groupedOptions,
    searchable: true,
    label: 'Searchable area'
  }
};

export const Loading: Story = {
  args: {
    isLoading: true,
    label: 'Loading options'
  }
};

export const Error: Story = {
  args: {
    error: 'Select a product area.'
  }
};

export const Disabled: Story = {
  args: {
    disabled: true
  }
};

export const Composition: Story = {
  render: () => (
    <div className="max-w-md rounded-[var(--radius-lg)] border border-[var(--color-neutral-300)] bg-[var(--color-surface-raised)] p-6">
      <Select label="Default team" hint="New components will be assigned here." options={groupedOptions} />
    </div>
  )
};

export const DarkMode: Story = {
  render: () => (
    <div data-theme="dark" className="bg-[var(--color-surface)] p-6">
      <Select label="Dark select" options={options} />
    </div>
  ),
  parameters: { backgrounds: { default: 'dark' } }
};

export const Accessibility: Story = {
  render: () => <Select label="Required select" required error="Selection is required." options={options} />
};
