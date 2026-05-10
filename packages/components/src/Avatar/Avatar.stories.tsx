import type { Meta, StoryObj } from '@storybook/react';
import { Avatar, AvatarGroup } from './Avatar';

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  parameters: {
    docs: {
      source: { state: 'open' },
      description: {
        component:
          'Avatar represents a user, team, or entity with an image, initials, or icon fallback. Use AvatarGroup for compact participant lists; avoid relying on avatar imagery alone to identify a critical person.\n\nAccessibility: avatar images are decorative inside a labeled `role=\"img\"` wrapper so the accessible name is controlled by `alt`, `name`, or initials.\n\nDesign token dependencies: neutral colors, surface, radius, border, font weight, and text scale.\n\nKnown limitations: Avatar does not detect broken image loading in v1; provide initials or name as a reliable fallback context.'
      }
    }
  },
  argTypes: {
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl'] },
    name: { control: 'text' },
    initials: { control: 'text' },
    src: { control: 'text' }
  },
  args: {
    name: 'Saransh Sharma',
    size: 'md'
  }
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Avatar name="Avery Stone" size="xs" />
      <Avatar name="Avery Stone" size="sm" />
      <Avatar name="Avery Stone" size="md" />
      <Avatar name="Avery Stone" size="lg" />
      <Avatar name="Avery Stone" size="xl" />
    </div>
  )
};

export const Initials: Story = {
  args: { initials: 'BX', name: undefined }
};

export const IconFallback: Story = {
  args: { name: undefined, initials: undefined }
};

export const Group: Story = {
  render: () => (
    <AvatarGroup
      avatars={[
        { name: 'Saransh Sharma' },
        { name: 'Avery Stone' },
        { name: 'Mina Patel' },
        { name: 'Jordan Lee' },
        { name: 'Nora Kim' }
      ]}
      max={4}
    />
  )
};

export const Composition: Story = {
  render: () => (
    <div className="flex items-center gap-3 rounded-[var(--radius-lg)] border border-[var(--color-neutral-300)] bg-[var(--color-surface-raised)] p-4">
      <Avatar name="Saransh Sharma" />
      <div>
        <p className="m-0 text-[var(--text-base)] font-[var(--font-medium)] text-[var(--color-neutral-800)]">Saransh Sharma</p>
        <p className="m-0 text-[var(--text-sm)] text-[var(--color-neutral-600)]">Design systems engineer</p>
      </div>
    </div>
  )
};

export const DarkMode: Story = {
  render: () => (
    <div data-theme="dark" className="bg-[var(--color-surface)] p-6">
      <AvatarGroup avatars={[{ name: 'Avery Stone' }, { name: 'Mina Patel' }, { name: 'Jordan Lee' }]} />
    </div>
  ),
  parameters: { backgrounds: { default: 'dark' } }
};

export const Accessibility: Story = {
  render: () => <Avatar name="Release owner" alt="Release owner avatar" />
};
