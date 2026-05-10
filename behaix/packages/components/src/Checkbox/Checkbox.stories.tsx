import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox, CheckboxGroup } from './Checkbox';

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  parameters: {
    docs: {
      source: { state: 'open' },
      description: {
        component:
          'Checkbox lets users select one or more independent options, including indeterminate parent states. Use CheckboxGroup when options share a name and validation message.\n\nAccessibility: Radix supplies checkbox roles, keyboard toggling with Space, checked and indeterminate state, and disabled behavior.\n\nDesign token dependencies: primary color, primary foreground, neutral borders, danger border, radius, shadow, focus, text, and motion tokens.\n\nKnown limitations: CheckboxGroup supports controlled or uncontrolled values but does not integrate with a form library automatically.'
      }
    }
  },
  argTypes: {
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    size: { control: 'select', options: ['sm', 'md'] },
    label: { control: 'text' },
    description: { control: 'text' }
  },
  args: {
    label: 'Accept terms',
    size: 'md'
  }
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Sizes: Story = {
  render: () => (
    <div className="grid gap-3">
      <Checkbox size="sm" label="Small checkbox" />
      <Checkbox size="md" label="Medium checkbox" />
    </div>
  )
};

export const Indeterminate: Story = {
  args: {
    checked: 'indeterminate',
    label: 'Partially selected'
  }
};

export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'Disabled option'
  }
};

export const Group: Story = {
  render: () => (
    <CheckboxGroup
      name="notifications"
      label="Notifications"
      hint="Choose which updates to receive."
      options={[
        { label: 'Release notes', value: 'release-notes' },
        { label: 'Security alerts', value: 'security-alerts' },
        { label: 'Weekly digest', value: 'weekly-digest' }
      ]}
    />
  )
};

export const Error: Story = {
  render: () => (
    <CheckboxGroup
      name="permissions"
      label="Permissions"
      error="Select at least one permission."
      options={[
        { label: 'Can edit components', value: 'edit' },
        { label: 'Can publish releases', value: 'publish' }
      ]}
    />
  )
};

export const Composition: Story = {
  render: () => (
    <div className="max-w-md rounded-[var(--radius-lg)] border border-[var(--color-neutral-300)] bg-[var(--color-surface-raised)] p-6">
      <Checkbox label="Create pull request after generation" description="Recommended for open-source review workflows." />
    </div>
  )
};

export const DarkMode: Story = {
  render: () => (
    <div data-theme="dark" className="bg-[var(--color-surface)] p-6">
      <Checkbox label="Dark mode checkbox" defaultChecked />
    </div>
  ),
  parameters: { backgrounds: { default: 'dark' } }
};

export const Accessibility: Story = {
  render: () => <Checkbox checked="indeterminate" label="Select all components" description="Some components are already selected." />
};
