import type { Meta, StoryObj } from '@storybook/react';
import { Search } from 'lucide-react';
import { TextInput } from './TextInput';

const meta = {
  title: 'Components/TextInput',
  component: TextInput,
  tags: ['autodocs'],
  parameters: {
    docs: {
      source: { state: 'open' },
      description: {
        component:
          'TextInput captures single-line text and always renders through FormField. Use it for names, search terms, URLs, and short values; avoid using it for multi-line input or highly formatted values.\n\nAccessibility: labels, hints, and errors are automatically wired through `htmlFor`, `aria-describedby`, and `aria-invalid`.\n\nDesign token dependencies: surface, neutral colors, semantic danger colors, radius, shadow, text scale, duration, and focus color.\n\nKnown limitations: TextInput does not format or mask values; consumers should provide formatting behavior at the form layer.'
      }
    }
  },
  argTypes: {
    label: { control: 'text' },
    hint: { control: 'text' },
    error: { control: 'text' },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    disabled: { control: 'boolean' },
    readOnly: { control: 'boolean' },
    placeholder: { control: 'text' }
  },
  args: {
    label: 'Project name',
    placeholder: 'Enter project name',
    size: 'md'
  }
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Sizes: Story = {
  render: () => (
    <div className="grid gap-4">
      <TextInput label="Small" size="sm" placeholder="Small input" />
      <TextInput label="Medium" size="md" placeholder="Medium input" />
      <TextInput label="Large" size="lg" placeholder="Large input" />
    </div>
  )
};

export const WithAffixes: Story = {
  args: {
    label: 'Search',
    prefix: <Search aria-hidden="true" size={16} />,
    suffix: '⌘K',
    placeholder: 'Search components'
  }
};

export const Error: Story = {
  args: {
    label: 'Email',
    defaultValue: 'saransh',
    error: 'Enter a valid email address.'
  }
};

export const Disabled: Story = {
  args: {
    label: 'Disabled field',
    disabled: true,
    value: 'Unavailable'
  }
};

export const ReadOnly: Story = {
  args: {
    label: 'Read-only field',
    readOnly: true,
    value: 'BEH-1248'
  }
};

export const Composition: Story = {
  render: () => (
    <div className="max-w-md rounded-[var(--radius-lg)] border border-[var(--color-neutral-300)] bg-[var(--color-surface-raised)] p-6">
      <TextInput label="Workspace slug" prefix="behaix.com/" placeholder="acme-design" hint="Lowercase letters and hyphens only." />
    </div>
  )
};

export const DarkMode: Story = {
  render: () => (
    <div data-theme="dark" className="bg-[var(--color-surface)] p-6">
      <TextInput label="Component" placeholder="Button" hint="Dark mode inherits token aliases." />
    </div>
  ),
  parameters: { backgrounds: { default: 'dark' } }
};

export const Accessibility: Story = {
  render: () => <TextInput label="Required field" required error="This field is required." />
};
