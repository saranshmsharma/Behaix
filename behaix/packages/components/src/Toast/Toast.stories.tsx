import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../Button';
import { ToastProvider, useToast } from './Toast';

function ToastDemo({ variant = 'default' as const }) {
  const { showToast } = useToast();

  return (
    <Button
      onClick={() =>
        showToast({
          title: 'Component published',
          description: 'Storybook documentation is now available.',
          variant,
          action: <Button size="sm" variant="secondary">View docs</Button>
        })
      }
    >
      Show toast
    </Button>
  );
}

const meta = {
  title: 'Components/Toast',
  component: ToastProvider,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ToastProvider>
        <Story />
      </ToastProvider>
    )
  ],
  parameters: {
    docs: {
      source: { state: 'open' },
      description: {
        component:
          'Toast provides contextual, temporary feedback through a provider and `useToast` hook. Use it for non-blocking confirmations and status updates; avoid it for critical decisions that require user acknowledgement.\n\nAccessibility: the viewport uses `aria-live=\"polite\"`; each toast uses `role=\"status\"` and includes a named dismiss button.\n\nDesign token dependencies: semantic bg, border, and fg colors; surface; neutral border; radius; shadow; text; and focus tokens.\n\nKnown limitations: v1 stores toasts in local provider state and does not support swipe gestures.'
      }
    }
  }
} satisfies Meta<typeof ToastProvider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { render: () => <ToastDemo /> };
export const Success: Story = { render: () => <ToastDemo variant="success" /> };
export const Warning: Story = { render: () => <ToastDemo variant="warning" /> };
export const Danger: Story = { render: () => <ToastDemo variant="danger" /> };

export const Positioned: Story = {
  decorators: [
    (Story) => (
      <ToastProvider position="bottom-left">
        <Story />
      </ToastProvider>
    )
  ],
  render: () => <ToastDemo variant="success" />
};

export const Composition: Story = {
  render: () => (
    <div className="rounded-[var(--radius-lg)] border border-[var(--color-neutral-300)] bg-[var(--color-surface-raised)] p-6">
      <ToastDemo variant="success" />
    </div>
  )
};

export const DarkMode: Story = {
  render: () => (
    <div data-theme="dark" className="bg-[var(--color-surface)] p-6">
      <ToastDemo variant="success" />
    </div>
  ),
  parameters: { backgrounds: { default: 'dark' } }
};

export const Accessibility: Story = {
  render: () => <ToastDemo variant="default" />
};
