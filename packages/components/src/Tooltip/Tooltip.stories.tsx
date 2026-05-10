import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../Button';
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from './Tooltip';

const meta = {
  title: 'Components/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  parameters: {
    docs: {
      source: { state: 'open' },
      description: {
        component:
          'Tooltip reveals brief contextual help on hover or focus. Use it for supplemental explanations; avoid it for critical information, interactive content, or long instructions.'
      }
    }
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <TooltipProvider delayDuration={300}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button>Hover or focus</Button>
        </TooltipTrigger>
        <TooltipContent side="top">
          Create a new component package
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
};

export const Sides: Story = {
  render: () => (
    <TooltipProvider delayDuration={300}>
      <div className="flex gap-3">
        <Tooltip>
          <TooltipTrigger asChild><Button variant="secondary">Top</Button></TooltipTrigger>
          <TooltipContent side="top">Top tooltip</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild><Button variant="secondary">Right</Button></TooltipTrigger>
          <TooltipContent side="right">Right tooltip</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild><Button variant="secondary">Bottom</Button></TooltipTrigger>
          <TooltipContent side="bottom">Bottom tooltip</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild><Button variant="secondary">Left</Button></TooltipTrigger>
          <TooltipContent side="left">Left tooltip</TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  )
};
