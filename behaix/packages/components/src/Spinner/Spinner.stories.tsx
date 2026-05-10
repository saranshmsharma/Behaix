import type { Meta, StoryObj } from '@storybook/react';
import { Spinner } from './Spinner';

const meta = {
  title: 'Components/Spinner',
  component: Spinner,
  tags: ['autodocs'],
  parameters: {
    docs: {
      source: { state: 'open' },
      description: {
        component:
          'Spinner indicates an indeterminate loading state. Use it when progress duration is unknown; avoid it when a skeleton can preserve layout better.\n\nAccessibility: Spinner uses `role=\"status\"` and a screen-reader label, defaulting to “Loading...”. Animation respects `prefers-reduced-motion`.\n\nDesign token dependencies: radius and semantic/current text color.\n\nKnown limitations: Spinner is indeterminate only and does not show percentage progress.'
      }
    }
  },
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    color: { control: 'select', options: ['inherit', 'primary', 'muted'] },
    label: { control: 'text' }
  },
  args: { size: 'md', color: 'primary' }
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Sizes: Story = { render: () => <div className="flex items-center gap-4"><Spinner size="sm" /><Spinner size="md" /><Spinner size="lg" /></div> };
export const Colors: Story = { render: () => <div className="flex items-center gap-4"><Spinner color="inherit" /><Spinner color="primary" /><Spinner color="muted" /></div> };
export const Composition: Story = { render: () => <button className="inline-flex items-center gap-2"><Spinner size="sm" /> Loading</button> };
export const DarkMode: Story = { render: () => <div data-theme="dark" className="bg-[var(--color-surface)] p-6"><Spinner color="primary" /></div>, parameters: { backgrounds: { default: 'dark' } } };
export const Accessibility: Story = { args: { label: 'Loading releases' } };
