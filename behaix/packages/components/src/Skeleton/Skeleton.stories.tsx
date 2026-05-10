import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from './Skeleton';

const meta = {
  title: 'Components/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  parameters: {
    docs: {
      source: { state: 'open' },
      description: {
        component:
          'Skeleton reserves layout while content loads. Use it for cards, rows, and text placeholders; avoid using it for actions that need explicit progress feedback.\n\nAccessibility: Skeleton is hidden from assistive technology with `aria-hidden` and animation respects `prefers-reduced-motion`.\n\nDesign token dependencies: neutral color, radius, and animation behavior.\n\nKnown limitations: Skeleton does not announce loading; pair with status text or Spinner when screen-reader feedback is required.'
      }
    }
  },
  argTypes: {
    variant: { control: 'select', options: ['text', 'circle', 'rect'] },
    animate: { control: 'boolean' },
    width: { control: 'text' },
    height: { control: 'text' }
  },
  args: { variant: 'text', width: '240px', animate: true }
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Variants: Story = { render: () => <div className="grid gap-3"><Skeleton variant="text" width="240px" /><Skeleton variant="circle" width="40px" height="40px" /><Skeleton variant="rect" width="240px" height="120px" /></div> };
export const NoAnimation: Story = { args: { animate: false } };
export const Composition: Story = { render: () => <div className="max-w-sm rounded-[var(--radius-lg)] border border-[var(--color-neutral-300)] p-4"><div className="flex gap-3"><Skeleton variant="circle" width="40px" height="40px" /><div className="flex-1 space-y-2"><Skeleton width="70%" /><Skeleton width="100%" /></div></div></div> };
export const DarkMode: Story = { render: () => <div data-theme="dark" className="bg-[var(--color-surface)] p-6"><Skeleton variant="rect" width="240px" height="120px" /></div>, parameters: { backgrounds: { default: 'dark' } } };
export const Accessibility: Story = { render: () => <div aria-busy="true"><Skeleton width="240px" /></div> };
