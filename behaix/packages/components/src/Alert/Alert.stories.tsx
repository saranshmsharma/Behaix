import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from './Alert';

const meta = {
  title: 'Components/Alert',
  component: Alert,
  tags: ['autodocs'],
  parameters: {
    docs: {
      source: { state: 'open' },
      description: {
        component:
          'Alert displays inline contextual feedback. Use it for persistent information, warnings, success messages, and errors; avoid it for transient messages that should use Toast.\n\nAccessibility: Alert renders as `role=\"status\"`; dismissible alerts include a named close button.\n\nDesign token dependencies: semantic bg, border, and fg colors; radius; text; and focus tokens.\n\nKnown limitations: Alert does not animate entrance or removal in v1.'
      }
    }
  },
  argTypes: {
    variant: { control: 'select', options: ['info', 'success', 'warning', 'danger'] },
    title: { control: 'text' },
    description: { control: 'text' },
    onDismiss: { action: 'dismissed' }
  },
  args: {
    variant: 'info',
    title: 'Documentation updated',
    description: 'The component page now includes accessibility notes.'
  }
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Info: Story = { args: { variant: 'info' } };
export const Success: Story = { args: { variant: 'success', title: 'Release published' } };
export const Warning: Story = { args: { variant: 'warning', title: 'Review needed' } };
export const Danger: Story = { args: { variant: 'danger', title: 'Build failed' } };
export const Dismissible: Story = { args: { onDismiss: () => undefined } };

export const Composition: Story = {
  render: () => (
    <div className="max-w-xl">
      <Alert variant="warning" title="Token drift detected" description="Regenerate CSS variables before publishing the package." />
    </div>
  )
};

export const DarkMode: Story = {
  render: () => (
    <div data-theme="dark" className="bg-[var(--color-surface)] p-6">
      <Alert variant="success" title="Dark alert" description="Semantic aliases resolve correctly in dark mode." />
    </div>
  ),
  parameters: { backgrounds: { default: 'dark' } }
};

export const Accessibility: Story = {
  render: () => <Alert variant="danger" title="Validation error" description="Resolve all required fields before continuing." onDismiss={() => undefined} />
};
