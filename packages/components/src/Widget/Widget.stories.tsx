import type { Meta, StoryObj } from '@storybook/react';
import { StatWidget } from './Widget';
import { Users, DollarSign, Activity, ShoppingCart } from 'lucide-react';

const meta = {
  title: 'Components/Widget',
  component: StatWidget,
  tags: ['autodocs'],
  args: {
    label: 'Stat Label',
    value: '1,234',
  }
} satisfies Meta<typeof StatWidget>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-8 bg-surface-raised">
      <StatWidget 
        {...args}
        label="Total Users" 
        value="12,482" 
        trend={{ value: 12.5, isUp: true }} 
        icon={<Users size={20} className="text-primary" />} 
      />
      <StatWidget 
        {...args}
        label="Monthly Revenue" 
        value="$48,290" 
        trend={{ value: 4.2, isUp: true }} 
        icon={<DollarSign size={20} className="text-success" />} 
      />
      <StatWidget 
        {...args}
        label="Bounce Rate" 
        value="24.8%" 
        trend={{ value: 2.1, isUp: false }} 
        icon={<Activity size={20} className="text-warning" />} 
      />
      <StatWidget 
        {...args}
        label="Total Orders" 
        value="842" 
        trend={{ value: 8.4, isUp: true }} 
        icon={<ShoppingCart size={20} className="text-danger" />} 
      />
    </div>
  )
};

export const Primary: Story = {
  args: {
    label: 'Total Sales',
    value: '$124,000',
    variant: 'primary',
    trend: { value: 15.4, isUp: true },
    icon: <DollarSign size={20} />
  }
};

export const Glass: Story = {
  render: (args) => (
    <div className="p-20 bg-gradient-to-br from-primary/20 to-secondary/20">
      <StatWidget 
        {...args}
        variant="glass"
        label="System Uptime" 
        value="99.99%" 
        trend={{ value: 0.01, isUp: true }} 
        icon={<Activity size={20} className="text-primary" />} 
      />
    </div>
  )
};
