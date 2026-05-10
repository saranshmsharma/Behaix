import type { Meta, StoryObj } from '@storybook/react';
import { Code, Heading, Label, Text } from './Typography';

const meta = {
  title: 'Components/Typography',
  component: Text,
  tags: ['autodocs'],
  parameters: {
    docs: {
      source: { state: 'open' },
      description: {
        component:
          'Typography primitives provide consistent text hierarchy for Behaix interfaces. Use them for headings, paragraphs, labels, and inline code; avoid overriding token pairings unless a product surface has a documented exception.\n\nAccessibility: preserve semantic heading order, associate labels with inputs through `htmlFor`, and do not use heading components only for visual weight.\n\nDesign token dependencies: text scale, font families, font weights, line heights, neutral colors, semantic foreground colors, radius, and borders.\n\nKnown limitations: Typography does not perform automatic heading-level correction; page authors must keep document outline order accessible.'
      }
    }
  },
  argTypes: {
    size: { control: 'select', options: ['xs', 'sm', 'base', 'md', 'lg'] },
    weight: { control: 'select', options: ['regular', 'medium', 'semibold'] },
    leading: { control: 'select', options: ['tight', 'normal', 'relaxed'] },
    tone: { control: 'select', options: ['default', 'muted', 'subtle', 'danger', 'success'] },
    children: { control: 'text' }
  },
  args: {
    children: 'Behaix helps teams ship consistent enterprise interfaces.',
    size: 'base',
    weight: 'regular',
    leading: 'normal',
    tone: 'default'
  }
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Headings: Story = {
  render: () => (
    <div className="space-y-4">
      <Heading level="h1">Enterprise design system</Heading>
      <Heading level="h2">Component architecture</Heading>
      <Heading level="h3">Usage guidance</Heading>
      <Heading level="h4">Token dependency</Heading>
    </div>
  )
};

export const TextSizes: Story = {
  render: () => (
    <div className="space-y-3">
      <Text size="xs">Extra small supporting metadata</Text>
      <Text size="sm">Small helper copy for dense enterprise screens</Text>
      <Text size="base">Base body copy for default interface text</Text>
      <Text size="md">Medium text for prominent descriptions</Text>
      <Text size="lg">Large text for summaries and empty states</Text>
    </div>
  )
};

export const Weights: Story = {
  render: () => (
    <div className="space-y-3">
      <Text weight="regular">Regular text weight</Text>
      <Text weight="medium">Medium text weight</Text>
      <Text weight="semibold">Semibold text weight</Text>
    </div>
  )
};

export const Tones: Story = {
  render: () => (
    <div className="space-y-3">
      <Text tone="default">Default tone</Text>
      <Text tone="muted">Muted tone</Text>
      <Text tone="subtle">Subtle tone</Text>
      <Text tone="success">Success tone</Text>
      <Text tone="danger">Danger tone</Text>
    </div>
  )
};

export const LabelAndCode: Story = {
  render: () => (
    <div className="space-y-3">
      <Label htmlFor="project-name">Project name</Label>
      <Text>
        Import tokens from <Code>@behaix/tokens</Code> for runtime-safe values.
      </Text>
    </div>
  )
};

export const Composition: Story = {
  render: () => (
    <section className="max-w-xl rounded-[var(--radius-lg)] border border-[var(--color-neutral-300)] bg-[var(--color-surface-raised)] p-6">
      <Heading level="h2">Release checklist</Heading>
      <Text className="mt-2" tone="muted">
        Confirm visual states, keyboard support, and token usage before publishing a component.
      </Text>
      <Text className="mt-4" size="sm">
        Current package: <Code>@behaix/components</Code>
      </Text>
    </section>
  )
};

export const DarkMode: Story = {
  render: () => (
    <div data-theme="dark" className="space-y-3 bg-[var(--color-surface)] p-6">
      <Heading level="h2">Dark mode typography</Heading>
      <Text tone="muted">All contrast is resolved through dark token aliases.</Text>
      <Code>data-theme="dark"</Code>
    </div>
  ),
  parameters: { backgrounds: { default: 'dark' } }
};

export const Accessibility: Story = {
  render: () => (
    <article className="space-y-3">
      <Heading level="h2">Accessible text structure</Heading>
      <Text>Use headings to describe page structure, not just to create larger text.</Text>
      <Label htmlFor="accessible-field">Accessible label</Label>
    </article>
  )
};
