import type { Meta, StoryObj } from '@storybook/react';
import { Toggle } from './Toggle';

const meta = {
  title: 'Components/Toggle',
  component: Toggle,
  tags: ['autodocs'],
  parameters: {
    docs: {
      source: { state: 'open' },
      description: {
        component:
          'Toggle controls an immediate on/off preference using Radix Switch. Use it for binary settings that apply quickly; avoid it for actions that require review or multi-step confirmation.\n\nAccessibility: Radix supplies switch role, checked state, Space toggling, and disabled behavior. Loading state sets `aria-busy` and prevents interaction.\n\nDesign token dependencies: primary color, primary foreground, neutral colors, surface, radius, shadow, focus, duration, easing, and text tokens.\n\nKnown limitations: Toggle does not render validation messages; wrap it in higher-level form messaging if validation is required.'
      }
    }
  },
  argTypes: {
    checked: { control: 'boolean' },
    defaultChecked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    isLoading: { control: 'boolean' },
    size: { control: 'select', options: ['sm', 'md'] },
    label: { control: 'text' },
    description: { control: 'text' }
  },
  args: {
    label: 'Enable analytics',
    description: 'Collect anonymous usage data for product improvements.',
    size: 'md'
  }
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Sizes: Story = {
  render: () => (
    <div className="grid gap-4">
      <Toggle size="sm" label="Small toggle" />
      <Toggle size="md" label="Medium toggle" />
    </div>
  )
};

export const Checked: Story = {
  args: {
    defaultChecked: true
  }
};

export const Disabled: Story = {
  args: {
    disabled: true
  }
};

export const Loading: Story = {
  args: {
    isLoading: true
  }
};

export const Composition: Story = {
  render: () => (
    <div className="max-w-md rounded-[var(--radius-lg)] border border-[var(--color-neutral-300)] bg-[var(--color-surface-raised)] p-6">
      <Toggle label="Auto-publish docs" description="Publish Storybook after every successful release." />
    </div>
  )
};

export const DarkMode: Story = {
  render: () => (
    <div data-theme="dark" className="bg-[var(--color-surface)] p-6">
      <Toggle label="Dark toggle" defaultChecked />
    </div>
  ),
  parameters: { backgrounds: { default: 'dark' } }
};

export const Accessibility: Story = {
  render: () => <Toggle label="Keyboard-operable switch" description="Use Tab to focus and Space to toggle." />
};
