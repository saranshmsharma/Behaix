import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  Menu,
  MenuTrigger,
  MenuContent,
  MenuItem,
  MenuLabel,
  MenuSeparator,
  MenuSub,
  MenuSubTrigger,
  MenuSubContent,
  MenuCheckboxItem,
  MenuRadioGroup,
  MenuRadioItem,
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem
} from './Menu';
import { Button } from '../Button';
import { User, Settings, LogOut, Mail, MessageSquare } from 'lucide-react';

const meta = {
  title: 'Components/Menu',
  component: Menu,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Menus display a list of actions or options that a user can choose. Uses Radix DropdownMenu and ContextMenu primitives.\n\nAccessibility: fully supports keyboard navigation (arrows to move between items, Enter/Space to activate, Escape to close).'
      }
    }
  }
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Menu>
      <MenuTrigger asChild>
        <Button variant="secondary">Open Menu</Button>
      </MenuTrigger>
      <MenuContent className="w-56">
        <MenuLabel>My Account</MenuLabel>
        <MenuSeparator />
        <MenuItem>
          <User className="mr-2 h-4 w-4" />
          <span>Profile</span>
        </MenuItem>
        <MenuItem>
          <Settings className="mr-2 h-4 w-4" />
          <span>Settings</span>
        </MenuItem>
        <MenuSub>
          <MenuSubTrigger>
            <Mail className="mr-2 h-4 w-4" />
            <span>Invite users</span>
          </MenuSubTrigger>
          <MenuSubContent>
            <MenuItem>Email</MenuItem>
            <MenuItem>Message</MenuItem>
            <MenuSeparator />
            <MenuItem>More...</MenuItem>
          </MenuSubContent>
        </MenuSub>
        <MenuSeparator />
        <MenuItem disabled>
          <MessageSquare className="mr-2 h-4 w-4" />
          <span>Feedback (disabled)</span>
        </MenuItem>
        <MenuItem className="text-[var(--color-danger)] focus:text-[var(--color-danger-fg)] focus:bg-[var(--color-danger)]">
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </MenuItem>
      </MenuContent>
    </Menu>
  )
};

export const CheckboxesAndRadios: Story = {
  render: () => {
    const [showStatusBar, setShowStatusBar] = React.useState(true);
    const [showActivityBar, setShowActivityBar] = React.useState(false);
    const [position, setPosition] = React.useState('bottom');

    return (
      <Menu>
        <MenuTrigger asChild>
          <Button variant="secondary">View Options</Button>
        </MenuTrigger>
        <MenuContent className="w-56">
          <MenuLabel>Appearance</MenuLabel>
          <MenuSeparator />
          <MenuCheckboxItem checked={showStatusBar} onCheckedChange={setShowStatusBar}>
            Status Bar
          </MenuCheckboxItem>
          <MenuCheckboxItem checked={showActivityBar} onCheckedChange={setShowActivityBar}>
            Activity Bar
          </MenuCheckboxItem>
          <MenuSeparator />
          <MenuLabel>Panel Position</MenuLabel>
          <MenuRadioGroup value={position} onValueChange={setPosition}>
            <MenuRadioItem value="top">Top</MenuRadioItem>
            <MenuRadioItem value="bottom">Bottom</MenuRadioItem>
            <MenuRadioItem value="right">Right</MenuRadioItem>
          </MenuRadioGroup>
        </MenuContent>
      </Menu>
    );
  }
};

export const ContextMenuDemo: Story = {
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed border-[var(--color-neutral-300)] text-sm">
        Right click here
      </ContextMenuTrigger>
      <ContextMenuContent className="w-64">
        <ContextMenuItem inset>Back</ContextMenuItem>
        <ContextMenuItem inset disabled>Forward</ContextMenuItem>
        <ContextMenuItem inset>Reload</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
};
