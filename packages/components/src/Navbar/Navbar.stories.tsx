import type { Meta, StoryObj } from '@storybook/react';
import { Search, Bell, User, Menu } from 'lucide-react';
import { Navbar, NavbarSection, NavbarBrand, NavbarLink } from './Navbar';
import { Button } from '../Button';
import { TextInput } from '../TextInput';

const meta = {
  title: 'Components/Navbar',
  component: Navbar,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

const NavbarTemplate = (args: any) => (
  <div className="h-[400px] w-full bg-surface-raised overflow-auto">
    <Navbar {...args}>
      <NavbarSection>
        <Button variant="ghost" size="sm" isIconOnly className="md:hidden">
          <Menu size={18} />
        </Button>
        <NavbarBrand>
          <div className="size-8 rounded-lg bg-primary flex items-center justify-center text-primary-fg shadow-lg shadow-primary/30">B</div>
          <span className="hidden sm:inline">Behaix</span>
        </NavbarBrand>
        <div className="hidden md:flex items-center gap-4 ml-4 h-full">
          <NavbarLink isActive href="#">Overview</NavbarLink>
          <NavbarLink href="#">Projects</NavbarLink>
          <NavbarLink href="#">Team</NavbarLink>
        </div>
      </NavbarSection>

      <NavbarSection className="flex-1 max-w-md mx-8">
        <div className="relative w-full">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-foreground-muted" />
          <TextInput placeholder="Search anything..." className="pl-9 h-9 bg-surface-raised/50" />
        </div>
      </NavbarSection>

      <NavbarSection>
        <Button variant="ghost" size="sm" isIconOnly>
          <Bell size={18} />
        </Button>
        <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-fg shadow-md shadow-primary/20">
          <User size={16} />
        </div>
      </NavbarSection>
    </Navbar>
    <div className="p-8">
      <h2 className="text-2xl font-bold">Content Scroll Test</h2>
      {Array.from({ length: 10 }).map((_, i) => (
        <p key={i} className="mt-4 text-foreground-muted leading-relaxed">
          Scroll down to see the navbar variants in action. The glass variant will blur the content behind it, 
          while the floating variant stays centered and elevated.
        </p>
      ))}
    </div>
  </div>
);

export const Glass: Story = {
  render: (args) => <NavbarTemplate {...args} />,
  args: { variant: 'glass' }
};

export const Floating: Story = {
  render: (args) => <NavbarTemplate {...args} />,
  args: { variant: 'floating' }
};

export const Solid: Story = {
  render: (args) => <NavbarTemplate {...args} />,
  args: { variant: 'default' }
};
