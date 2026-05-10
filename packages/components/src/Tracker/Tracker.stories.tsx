import type { Meta, StoryObj } from '@storybook/react';
import { Tracker, TrackerItem } from './Tracker';
import { Clock, Utensils, Package, Truck, Home } from 'lucide-react';

const meta = {
  title: 'Components/Tracker',
  component: Tracker,
  tags: ['autodocs'],
} satisfies Meta<typeof Tracker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const OrderTracking: Story = {
  render: () => (
    <div className="w-full max-w-xl p-10 bg-surface border border-border-subtle rounded-3xl shadow-xl">
      <div className="mb-8">
        <h3 className="text-xl font-black tracking-tight">Order #BK-9482</h3>
        <p className="text-sm text-foreground-muted">Estimated delivery: 12:45 PM</p>
      </div>
      <Tracker>
        <TrackerItem 
          title="Order Received" 
          description="We've received your order and it's being processed." 
          time="11:30 AM"
          status="completed" 
          icon={<Clock size={20} />}
        />
        <TrackerItem 
          title="Preparing Food" 
          description="The chef is preparing your meal with fresh ingredients." 
          time="11:45 AM"
          status="completed" 
          icon={<Utensils size={20} />}
        />
        <TrackerItem 
          title="In the Oven" 
          description="Your pizza is baking to perfection." 
          time="12:05 PM"
          status="current" 
          icon={<Package size={20} />}
        />
        <TrackerItem 
          title="Out for Delivery" 
          description="Our courier is on the way to your location." 
          status="pending" 
          icon={<Truck size={20} />}
        />
        <TrackerItem 
          title="Delivered" 
          description="Enjoy your meal!" 
          status="pending" 
          icon={<Home size={20} />}
        />
      </Tracker>
    </div>
  )
};

export const DeliveryStatus: Story = {
  render: () => (
    <div className="w-full max-w-md p-8 bg-surface-raised border border-border-subtle rounded-2xl">
      <Tracker size="sm">
        <TrackerItem 
          title="Shipped" 
          time="Oct 12"
          status="completed" 
        />
        <TrackerItem 
          title="Arrived at Facility" 
          time="Oct 13"
          status="completed" 
        />
        <TrackerItem 
          title="Out for Delivery" 
          time="Today"
          status="current" 
        />
        <TrackerItem 
          title="Delivered" 
          status="pending" 
        />
      </Tracker>
    </div>
  )
};
