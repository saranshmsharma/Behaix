import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../Button';
import { Badge } from '../Badge';
import { Card, CardBody, CardFooter, CardHeader } from './Card';

const meta = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: {
    docs: {
      source: { state: 'open' },
      description: {
        component:
          'Card groups related content and actions on a raised or bordered surface. Use it for dashboard modules, settings groups, and compact summaries; avoid using it when spacing alone is enough to group content.\n\nAccessibility: interactive cards must contain a keyboard-focusable child or be paired with an appropriate semantic wrapper; the Card itself is a neutral `div` by default.\n\nDesign token dependencies: surface, neutral border and text colors, radius, shadow, focus, duration, and easing tokens.\n\nKnown limitations: Card does not implement a clickable role automatically because card semantics vary by use case.'
      }
    }
  },
  argTypes: {
    variant: { control: 'select', options: ['flat', 'outlined', 'elevated'] },
    isInteractive: { control: 'boolean' }
  },
  args: {
    variant: 'outlined',
    isInteractive: false
  }
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

const ExampleCard = (props: React.ComponentProps<typeof Card>) => (
  <Card className="max-w-md" {...props}>
    <CardHeader>
      <div className="flex items-center justify-between gap-3">
        <h3 className="m-0 text-[var(--text-lg)] font-[var(--font-semibold)] leading-[var(--leading-tight)]">Release readiness</h3>
        <Badge variant="success" dot>
          Ready
        </Badge>
      </div>
    </CardHeader>
    <CardBody>
      <p className="m-0 text-[var(--text-base)] leading-[var(--leading-normal)] text-[var(--color-neutral-600)]">
        All Tier 1 atoms meet the baseline Storybook and accessibility requirements.
      </p>
    </CardBody>
    <CardFooter>
      <Button size="sm">View checklist</Button>
      <Button size="sm" variant="secondary">
        Export
      </Button>
    </CardFooter>
  </Card>
);

export const Default: Story = {
  render: (args) => <ExampleCard {...args} />
};

export const Flat: Story = { render: () => <ExampleCard variant="flat" /> };
export const Outlined: Story = { render: () => <ExampleCard variant="outlined" /> };
export const Elevated: Story = { render: () => <ExampleCard variant="elevated" /> };

export const Interactive: Story = {
  render: () => (
    <ExampleCard variant="outlined" isInteractive tabIndex={0} role="button" aria-label="Open release readiness" />
  )
};

export const Composition: Story = {
  render: () => (
    <div className="grid gap-4 md:grid-cols-2">
      <ExampleCard variant="outlined" />
      <ExampleCard variant="elevated" />
    </div>
  )
};

export const DarkMode: Story = {
  render: () => (
    <div data-theme="dark" className="bg-[var(--color-surface)] p-6">
      <ExampleCard variant="outlined" />
    </div>
  ),
  parameters: { backgrounds: { default: 'dark' } }
};

export const Accessibility: Story = {
  render: () => (
    <Card className="max-w-md">
      <CardBody>
        <h3 className="m-0 text-[var(--text-lg)] font-[var(--font-semibold)]">Accessible card</h3>
        <p className="text-[var(--color-neutral-600)]">Use semantic headings and real buttons or links inside cards.</p>
        <Button>Keyboard action</Button>
      </CardBody>
    </Card>
  )
};
