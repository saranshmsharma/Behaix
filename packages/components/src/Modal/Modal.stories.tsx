import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalTitle,
  ModalDescription
} from './Modal';
import { Button } from '../Button';
import { TextInput } from '../TextInput';

const meta = {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A window overlaid on either the primary window or another dialog window, rendering the content underneath inert.\n\nAccessibility: Focus is trapped within the modal, and it is automatically closed on Escape or outside click unless overridden. Uses Radix Dialog primitive.'
      }
    }
  },
  argTypes: {
    isOpen: { control: 'boolean' },
    size: { control: 'select', options: ['sm', 'md', 'lg', 'fullscreen'] },
    closeOnOverlay: { control: 'boolean' },
    closeOnEsc: { control: 'boolean' }
  }
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

function ModalDemo(props: any) {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      <Modal {...props} isOpen={open} onClose={() => setOpen(false)}>
        <ModalHeader>
          <ModalTitle>Edit profile</ModalTitle>
          <ModalDescription>Make changes to your profile here. Click save when you're done.</ModalDescription>
        </ModalHeader>
        <ModalBody className="py-4">
          <div className="flex flex-col gap-4">
            <TextInput label="Name" defaultValue="Pedro Duarte" />
            <TextInput label="Username" defaultValue="@peduarte" />
          </div>
        </ModalBody>
        <ModalFooter>
          <Button variant="ghost" onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={() => setOpen(false)}>Save changes</Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export const Default: Story = {
  render: (args) => <ModalDemo {...args} />
};

export const Small: Story = {
  render: (args) => <ModalDemo {...args} size="sm" />
};

export const Large: Story = {
  render: (args) => <ModalDemo {...args} size="lg" />
};

export const Fullscreen: Story = {
  render: (args) => <ModalDemo {...args} size="fullscreen" />
};

export const NonDismissible: Story = {
  render: (args) => <ModalDemo {...args} closeOnEsc={false} closeOnOverlay={false} />
};
