import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Search, FolderOpen, AlertCircle } from 'lucide-react';
import { EmptyState } from './EmptyState';
import { Button } from '../Button';

const meta = {
  title: 'Components/EmptyState',
  component: EmptyState,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'EmptyState provides feedback when a view contains no data, either because it has not been created yet or due to a filter/error.\n\nAccessibility: The component structure uses appropriate heading levels.'
      }
    }
  },
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' }
  }
} satisfies Meta<typeof EmptyState>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    illustration: <FolderOpen size={48} />,
    title: 'No projects found',
    description: 'Get started by creating a new project. Once you have projects, they will show up here.',
    action: <Button>Create Project</Button>
  }
};

export const SearchNoResults: Story = {
  args: {
    illustration: <Search size={48} />,
    title: 'No results found',
    description: 'We couldn\'t find anything matching "behaix". Try adjusting your search or filters.',
    action: <Button variant="secondary">Clear filters</Button>
  }
};

export const ErrorState: Story = {
  args: {
    illustration: <AlertCircle size={48} className="text-[var(--color-danger)]" />,
    title: 'Failed to load data',
    description: 'There was a problem loading the data. Please check your connection and try again.',
    action: <Button variant="secondary">Try again</Button>
  }
};
