import type { Meta, StoryObj } from '@storybook/react';
import { Home, Settings, Users, Bell, Search } from 'lucide-react';
import {
  Sidebar,
  SidebarHeader,
  SidebarBrand,
  SidebarContent,
  SidebarFooter,
  SidebarItem,
  SidebarToggle
} from './Sidebar';

const meta = {
  title: 'Components/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

const SidebarTemplate = (args: any) => (
  <div className="flex h-[600px] w-full bg-surface-raised overflow-hidden">
    <Sidebar {...args}>
      <SidebarToggle />
      <SidebarHeader>
        <SidebarBrand>
          <div className="size-8 rounded-lg bg-primary flex items-center justify-center text-primary-fg shadow-lg shadow-primary/30 shrink-0">B</div>
          <span className="font-bold text-primary">Behaix UI</span>
        </SidebarBrand>
      </SidebarHeader>
      <SidebarContent>
        <SidebarItem icon={<Home size={18} />} label="Dashboard" isActive />
        <SidebarItem icon={<Users size={18} />} label="Team" />
        <SidebarItem icon={<Bell size={18} />} label="Notifications" />
        <SidebarItem icon={<Search size={18} />} label="Search" />
      </SidebarContent>
      <SidebarFooter>
        <SidebarItem icon={<Settings size={18} />} label="Settings" />
      </SidebarFooter>
    </Sidebar>
    <main className="flex-1 p-10 text-foreground overflow-auto">
      <h1 className="text-3xl font-bold tracking-tight">Workspace Dashboard</h1>
      <p className="mt-4 text-foreground-muted text-lg">Experience the premium {args.variant || 'default'} sidebar variant.</p>
      <div className="mt-10 grid gap-6 grid-cols-2">
        <div className="h-40 rounded-2xl bg-surface border border-border-subtle shadow-sm p-6">Card 1</div>
        <div className="h-40 rounded-2xl bg-surface border border-border-subtle shadow-sm p-6">Card 2</div>
      </div>
    </main>
  </div>
);

export const Default: Story = {
  render: (args) => <SidebarTemplate {...args} />,
  args: { variant: 'default' }
};

export const Floating: Story = {
  render: (args) => <SidebarTemplate {...args} />,
  args: { variant: 'floating' }
};

export const Inset: Story = {
  render: (args) => <SidebarTemplate {...args} />,
  args: { variant: 'inset' }
};

export const Collapsed: Story = {
  render: (args) => <SidebarTemplate {...args} defaultCollapsed />,
  args: { variant: 'default' }
};
