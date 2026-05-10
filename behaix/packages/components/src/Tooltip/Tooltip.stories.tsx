import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../Button';
import { Tooltip } from './Tooltip';

const meta = {
  title: 'Components/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  parameters: {
    docs: {
      source: { state: 'open' },
      description: {
        component:
          'Tooltip reveals brief contextual help on hover or focus. Use it for supplemental explanations; avoid it for critical information, interactive content, or long instructions.\n\nAccessibility: Radix supplies trigger/focus behavior and tooltip semantics. Content is constrained to 240px and wraps long text.\n\nDesign token dependencies: neutral colors, border, radius, shadow, text, and line-height tokens.\n\nKnown limitations: Tooltip content should remain non-interactive; use Popover or Dialog for interactive overlays.'
      }
    }
  },
  argTypes: {
    content: { control: 'text' },
    side: { control: 'select', options: ['top', 'right', 'bottom', 'left'] },
    delay: { control: 'number' },
    disabled: { control: 'boolean' }
  },
  args: {
    content: 'Create a new component package',
    side: 'top',
    delay: 300
  }
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Tooltip {...args}>
      <Button>Hover or focus</Button>
    </Tooltip>
  )
};

export const Sides: Story = {
  render: () => (
    <div className="flex gap-3">
      <Tooltip content="Top tooltip" side="top"><Button variant="secondary">Top</Button></Tooltip>
      <Tooltip content="Right tooltip" side="right"><Button variant="secondary">Right</Button></Tooltip>
      <Tooltip content="Bottom tooltip" side="bottom"><Button variant="secondary">Bottom</Button></Tooltip>
      <Tooltip content="Left tooltip" side="left"><Button variant="secondary">Left</Button></Tooltip>
    </div>
  )
};

export const Disabled: Story = {
  render: () => (
    <Tooltip disabled content="Hidden tooltip">
      <Button>Disabled tooltip</Button>
    </Tooltip>
  )
};

export const Composition: Story = {
  render: () => (
    <div className="rounded-[var(--radius-lg)] border border-[var(--color-neutral-300)] bg-[var(--color-surface-raised)] p-6">
      <Tooltip content="Token changes require visual regression review before release.">
        <Button variant="secondary">Why review?</Button>
      </Tooltip>
    </div>
  )
};

export const DarkMode: Story = {
  render: () => (
    <div data-theme="dark" className="bg-[var(--color-surface)] p-6">
      <Tooltip content="Dark mode tooltip">
        <Button>Hover or focus</Button>
      </Tooltip>
    </div>
  ),
  parameters: { backgrounds: { default: 'dark' } }
};

export const Accessibility: Story = {
  render: () => (
    <Tooltip content="Tooltips open on keyboard focus as well as hover.">
      <Button>Keyboard focus me</Button>
    </Tooltip>
  )
};
