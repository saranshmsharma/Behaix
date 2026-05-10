import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Stepper, Step } from './Stepper';

const meta = {
  title: 'Components/Stepper',
  component: Stepper,
  tags: ['autodocs'],
} satisfies Meta<typeof Stepper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div className="w-full max-w-6xl p-10 bg-surface border border-border-subtle rounded-2xl shadow-sm">
      <Stepper {...args}>
        <Step label="Configuration" description="Select your environment" />
        <Step label="Deployment" description="Uploading assets..." />
        <Step label="Finalizing" description="Wait for build" />
        <Step label="Success" description="Project is live" />
      </Stepper>
    </div>
  ),
  args: {
    activeStep: 1
  }
};

export const States: Story = {
  render: () => (
    <div className="flex flex-col gap-12 w-full max-w-4xl p-10 bg-surface border border-border-subtle rounded-2xl">
      <div className="space-y-4">
        <h4 className="text-sm font-bold text-foreground-muted uppercase tracking-wider">Loading State</h4>
        <Stepper activeStep={1}>
          <Step label="Preparation" />
          <Step label="Processing" status="loading" />
          <Step label="Completion" />
        </Stepper>
      </div>

      <div className="space-y-4">
        <h4 className="text-sm font-bold text-foreground-muted uppercase tracking-wider">Error State</h4>
        <Stepper activeStep={1}>
          <Step label="Data Upload" />
          <Step label="Validation" status="error" description="File format invalid" />
          <Step label="Analysis" />
        </Stepper>
      </div>

      <div className="space-y-4">
        <h4 className="text-sm font-bold text-foreground-muted uppercase tracking-wider">Warning State</h4>
        <Stepper activeStep={2}>
          <Step label="Setup" />
          <Step label="Security" />
          <Step label="Permissions" status="warning" description="Limited access" />
          <Step label="Review" />
        </Stepper>
      </div>
    </div>
  )
};

export const Interactive: Story = {
  render: () => {
    const [active, setActive] = React.useState(1);
    return (
      <div className="w-full max-w-6xl p-10 bg-surface border border-border-subtle rounded-2xl shadow-sm">
        <div className="mb-6">
          <h3 className="text-lg font-bold">Interactive Wizard</h3>
          <p className="text-sm text-foreground-muted">Click the steps below or use Tab + Enter to navigate.</p>
        </div>
        <Stepper activeStep={active} isInteractive onStepClick={setActive}>
          <Step label="Project Basics" description="Name and type" />
          <Step label="Team Access" description="Add collaborators" />
          <Step label="Infrastructure" description="Choose a region" />
          <Step label="Review" description="Confirm details" />
        </Stepper>
        <div className="mt-10 p-20 bg-surface-raised border border-dashed border-border-subtle rounded-xl flex items-center justify-center">
          <span className="text-foreground-muted font-medium">Step {active + 1} Content</span>
        </div>
      </div>
    );
  }
};

export const MobileResponsive: Story = {
  render: () => (
    <div className="flex flex-col gap-10">
      <div className="space-y-4">
        <p className="text-sm font-medium text-foreground-muted underline">Desktop View (Wide)</p>
        <div className="w-full p-10 bg-surface border border-border-subtle rounded-2xl">
          <Stepper activeStep={1}>
            <Step label="Step 1" description="Long description text" />
            <Step label="Step 2" description="Another long description" />
            <Step label="Step 3" description="Final step info" />
          </Stepper>
        </div>
      </div>

      <div className="space-y-4">
        <p className="text-sm font-medium text-foreground-muted underline">Simulated Mobile/Small View (Try resizing browser)</p>
        <div className="w-[400px] p-6 bg-surface border border-border-subtle rounded-2xl">
          <Stepper activeStep={1}>
            <Step label="Step 1" />
            <Step label="Step 2" />
            <Step label="Step 3" />
          </Stepper>
        </div>
      </div>
    </div>
  )
};

export const Vertical: Story = {
  render: (args) => (
    <div className="w-fit p-10 bg-surface border border-border-subtle rounded-2xl">
      <Stepper {...args} orientation="vertical">
        <Step label="Order Placed" description="Yesterday at 2:30 PM" />
        <Step label="In Transit" description="Courier is on the way" />
        <Step label="Out for Delivery" status="loading" description="Arriving today" />
        <Step label="Delivered" />
      </Stepper>
    </div>
  ),
  args: {
    activeStep: 2
  }
};
