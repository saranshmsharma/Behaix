import type { Meta, StoryObj } from '@storybook/react';
import { FormField } from './FormField';

const meta = {
  title: 'Components/FormField',
  component: FormField,
  tags: ['autodocs'],
  parameters: {
    docs: {
      source: { state: 'open' },
      description: {
        component:
          'FormField composes a label, control slot, hint text, and error text with automatic id wiring. Use it as the foundation for all form controls; avoid manually pairing labels and descriptions when a component can use this wrapper.\n\nAccessibility: labels use `htmlFor`, descriptions are exposed through generated ids, and errors render inside a live `role=\"alert\"` region.\n\nDesign token dependencies: text scale, neutral text, danger foreground, spacing, and label typography.\n\nKnown limitations: FormField does not validate input values; validation remains owned by the consuming form layer.'
      }
    }
  },
  argTypes: {
    label: { control: 'text' },
    hint: { control: 'text' },
    error: { control: 'text' },
    required: { control: 'boolean' }
  },
  args: {
    label: 'Email',
    hint: 'Use your work email address.',
    required: false
  }
} satisfies Meta<typeof FormField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <FormField {...args}>
      {({ id, describedBy, invalid }) => (
        <input
          id={id}
          aria-describedby={describedBy}
          aria-invalid={invalid}
          className="h-10 rounded-[var(--radius-md)] border border-[var(--color-neutral-300)] bg-[var(--color-surface-overlay)] px-3 text-[var(--text-base)] text-[var(--color-neutral-800)]"
        />
      )}
    </FormField>
  )
};

export const MultiError: Story = {
  args: {
    label: 'Password',
    error: ['Use at least 12 characters.', 'Include one number.']
  },
  render: (args) => (
    <FormField {...args}>
      {({ id, describedBy, invalid }) => (
        <input
          id={id}
          aria-describedby={describedBy}
          aria-invalid={invalid}
          className="h-10 rounded-[var(--radius-md)] border border-[var(--color-danger-border)] bg-[var(--color-surface-overlay)] px-3"
        />
      )}
    </FormField>
  )
};

export const DarkMode: Story = {
  render: () => (
    <div data-theme="dark" className="bg-[var(--color-surface)] p-6">
      <FormField label="Workspace" hint="Dark mode uses the same semantic ids.">
        {({ id, describedBy }) => (
          <input
            id={id}
            aria-describedby={describedBy}
            className="h-10 rounded-[var(--radius-md)] border border-[var(--color-neutral-600)] bg-[var(--color-surface-overlay)] px-3 text-[var(--color-neutral-100)]"
          />
        )}
      </FormField>
    </div>
  ),
  parameters: { backgrounds: { default: 'dark' } }
};

export const Accessibility: Story = {
  render: () => (
    <FormField label="Project name" hint="This appears in navigation." error="Project name is required." required>
      {({ id, describedBy, invalid }) => (
        <input id={id} aria-describedby={describedBy} aria-invalid={invalid} required />
      )}
    </FormField>
  )
};
