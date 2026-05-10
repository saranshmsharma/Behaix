import type { Meta, StoryObj } from '@storybook/react';
import { LinearProgress, CircularProgress, SegmentedProgress } from './Progress';

const meta = {
  title: 'Components/Progress',
  component: LinearProgress,
  tags: ['autodocs'],
  args: {
    value: 65,
  },
} satisfies Meta<typeof LinearProgress>;

export default meta;
type Story = StoryObj<typeof meta>;

// ─── Linear ──────────────────────────────────────────────────────────────────

export const Linear: Story = {
  render: () => (
    <div className="flex flex-col gap-6 w-full max-w-xl p-8 bg-surface border border-border-subtle rounded-2xl">
      <LinearProgress value={80} label="Storage Used" showValue color="primary" />
      <LinearProgress value={45} label="CPU Load" showValue color="success" />
      <LinearProgress value={70} label="Memory" showValue color="warning" />
      <LinearProgress value={20} label="Network Error Rate" showValue color="danger" />
      <LinearProgress value={60} label="Upload Progress" showValue color="gradient" />
      <LinearProgress value={88} label="Rainbow" showValue color="rainbow" />
    </div>
  )
};

export const LinearSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-6 w-full max-w-xl p-8 bg-surface border border-border-subtle rounded-2xl">
      <LinearProgress value={65} size="xs" label="Extra Small" showValue />
      <LinearProgress value={65} size="sm" label="Small" showValue />
      <LinearProgress value={65} size="md" label="Medium" showValue />
      <LinearProgress value={65} size="lg" label="Large" showValue />
      <LinearProgress value={65} size="xl" label="Extra Large" showValue />
    </div>
  )
};

export const LinearStriped: Story = {
  render: () => (
    <div className="flex flex-col gap-6 w-full max-w-xl p-8 bg-surface border border-border-subtle rounded-2xl">
      <LinearProgress value={70} label="Striped" showValue isStriped size="xl" />
      <LinearProgress value={55} label="Striped + Animated" showValue isStriped isAnimated color="success" size="xl" />
    </div>
  )
};

// ─── Circular ────────────────────────────────────────────────────────────────

export const Circular: Story = {
  render: () => (
    <div className="flex flex-wrap gap-8 p-8 bg-surface border border-border-subtle rounded-2xl justify-center">
      <CircularProgress value={75} color="primary" label="Primary" caption="Storage" />
      <CircularProgress value={90} color="success" label="Success" caption="Uptime" />
      <CircularProgress value={40} color="warning" label="Warning" caption="CPU" />
      <CircularProgress value={15} color="danger" label="Danger" caption="Errors" />
      <CircularProgress value={60} color="gradient" label="Gradient" caption="Progress" />
    </div>
  )
};

export const CircularSizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-end gap-8 p-8 bg-surface border border-border-subtle rounded-2xl justify-center">
      <CircularProgress value={65} size="sm" label="Small" />
      <CircularProgress value={65} size="md" label="Medium" />
      <CircularProgress value={65} size="lg" label="Large" />
      <CircularProgress value={65} size="xl" label="Extra Large" />
    </div>
  )
};

export const CircularIndeterminate: Story = {
  render: () => (
    <div className="flex gap-8 p-8 bg-surface border border-border-subtle rounded-2xl justify-center">
      <CircularProgress value={0} isIndeterminate showValue={false} label="Loading..." color="primary" />
      <CircularProgress value={0} isIndeterminate showValue={false} label="Processing..." color="gradient" size="lg" />
    </div>
  )
};

// ─── Segmented ───────────────────────────────────────────────────────────────

export const Segmented: Story = {
  render: () => (
    <div className="flex flex-col gap-6 w-full max-w-xl p-8 bg-surface border border-border-subtle rounded-2xl">
      <SegmentedProgress value={60} steps={10} label="10 Segments" showValue color="primary" />
      <SegmentedProgress value={75} steps={5} label="5 Segments" showValue color="success" />
      <SegmentedProgress value={40} steps={20} label="20 Segments" showValue color="warning" size="lg" />
      <SegmentedProgress value={90} steps={7} label="Streak (6/7 days)" showValue color="danger" />
    </div>
  )
};

// ─── Dashboard Showcase ───────────────────────────────────────────────────────

export const DashboardShowcase: Story = {
  render: () => (
    <div className="p-8 bg-surface-raised rounded-3xl grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl">
      <div className="bg-surface rounded-2xl p-6 border border-border-subtle col-span-1 lg:col-span-2">
        <h3 className="text-sm font-bold text-foreground-muted uppercase tracking-widest mb-6">Server Resources</h3>
        <div className="flex flex-col gap-5">
          <LinearProgress value={82} label="Disk Storage" showValue color="primary" size="md" />
          <LinearProgress value={47} label="Memory" showValue color="success" size="md" />
          <LinearProgress value={91} label="CPU Usage" showValue color="danger" size="md" />
        </div>
      </div>
      
      <div className="bg-surface rounded-2xl p-6 border border-border-subtle">
        <h3 className="text-sm font-bold text-foreground-muted uppercase tracking-widest mb-6">Overall Health</h3>
        <div className="flex justify-center">
          <CircularProgress value={78} size="xl" color="gradient" caption="System Health Score" />
        </div>
      </div>
      
      <div className="bg-surface rounded-2xl p-6 border border-border-subtle">
        <h3 className="text-sm font-bold text-foreground-muted uppercase tracking-widest mb-6">Weekly Activity</h3>
        <SegmentedProgress value={71} steps={7} label="5 of 7 days active" showValue color="primary" size="lg" />
        <SegmentedProgress value={57} steps={7} label="Sync (4 of 7)" showValue color="success" size="md" className="mt-5" />
      </div>
    </div>
  )
};
