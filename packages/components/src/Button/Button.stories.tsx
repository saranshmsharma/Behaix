import type { Meta, StoryObj } from '@storybook/react';
import { ArrowRight, Download, Plus } from 'lucide-react';
import { Button } from './Button';

import { ButtonGroup } from '../ButtonGroup';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: {
      source: {
        state: 'open'
      },
      description: {
        component:
          'Button triggers an action or navigates to a new destination. Use it for primary, secondary, destructive, ghost, and inline link actions; avoid using it for static labels or non-interactive decoration.\n\nAccessibility: buttons are keyboard focusable by default, expose disabled and loading states with `disabled`, `aria-disabled`, and `aria-busy`, and require `aria-label` when rendered without visible text.\n\nDesign token dependencies: `--color-primary`, `--color-primary-hover`, `--color-primary-fg`, `--color-danger`, `--color-danger-fg`, neutral colors, radius, shadow, text, leading, duration, easing, and focus tokens.\n\nKnown limitations: icon-only buttons require an accessible `aria-label`; `asChild` disabled behavior is represented with ARIA and pointer-event prevention because non-button elements do not support the native `disabled` attribute.'
      }
    }
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost', 'danger', 'link']
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg']
    },
    asChild: {
      control: 'boolean'
    },
    disabled: {
      control: 'boolean'
    },
    isLoading: {
      control: 'boolean'
    },
    leftIcon: {
      control: false
    },
    rightIcon: {
      control: false
    },
    children: {
      control: 'text'
    }
  },
  args: {
    children: 'Create project',
    size: 'md',
    variant: 'primary'
  }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Save changes'
  }
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Cancel'
  }
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Dismiss'
  }
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    children: 'Delete workspace'
  }
};

export const Link: Story = {
  args: {
    variant: 'link',
    children: 'View documentation'
  }
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Use small buttons in dense toolbars, medium buttons for standard forms, and large buttons for prominent empty-state or onboarding actions.'
      }
    }
  }
};

export const WithIcons: Story = {
  args: {
    leftIcon: <Plus aria-hidden="true" size={16} />,
    rightIcon: <ArrowRight aria-hidden="true" size={16} />,
    children: 'New workflow'
  }
};

export const IconOnly: Story = {
  args: {
    'aria-label': 'Download report',
    leftIcon: <Download aria-hidden="true" size={16} />,
    children: undefined
  },
  parameters: {
    docs: {
      description: {
        story: 'Icon-only buttons must include an `aria-label` so screen readers can announce their purpose.'
      }
    }
  }
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Unavailable'
  }
};

export const Loading: Story = {
  args: {
    isLoading: true,
    children: 'Saving'
  }
};

export const Grouped: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <ButtonGroup>
        <Button variant="secondary">Years</Button>
        <Button variant="secondary">Months</Button>
        <Button variant="secondary">Days</Button>
      </ButtonGroup>
      <ButtonGroup orientation="vertical">
        <Button variant="secondary">Top</Button>
        <Button variant="secondary">Middle</Button>
        <Button variant="secondary">Bottom</Button>
      </ButtonGroup>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '`ButtonGroup` creates a unified visual set of related actions by sharing borders and removing internal radii.'
      }
    }
  }
};

export const AsChild: Story = {
  render: () => (
    <Button asChild>
      <a href="https://behaix.design">Open Behaix</a>
    </Button>
  ),
  parameters: {
    docs: {
      description: {
        story: '`asChild` applies button styling to another semantic element, such as an anchor for navigation.'
      }
    }
  }
};

export const Composition: Story = {
  render: () => (
    <div className="max-w-sm rounded-[var(--radius-lg)] border border-[var(--color-neutral-300)] bg-[var(--color-surface-raised)] p-6 shadow-[var(--shadow-sm)]">
      <h3 className="m-0 text-[var(--text-lg)] font-[var(--font-semibold)] leading-[var(--leading-tight)] text-[var(--color-neutral-800)]">
        Invite your team
      </h3>
      <p className="mb-5 mt-2 text-[var(--text-base)] leading-[var(--leading-normal)] text-[var(--color-neutral-600)]">
        Add collaborators to review design-system changes before release.
      </p>
      <div className="flex gap-3">
        <Button leftIcon={<Plus aria-hidden="true" size={16} />}>Invite member</Button>
        <Button variant="secondary">Copy link</Button>
      </div>
    </div>
  )
};

export const DarkMode: Story = {
  args: {
    children: 'Create project'
  },
  decorators: [
    (Story) => (
      <div data-theme="dark" className="bg-[var(--color-surface)] p-6">
        <Story />
      </div>
    )
  ],
  parameters: {
    backgrounds: {
      default: 'dark'
    },
    docs: {
      description: {
        story: 'Dark mode is driven by `[data-theme="dark"]` token overrides, not alternate component styles.'
      }
    }
  }
};

export const Accessibility: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Button>Keyboard focusable button</Button>
      <Button isLoading>Announces busy state</Button>
      <Button aria-label="Add item" leftIcon={<Plus aria-hidden="true" size={16} />} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Keyboard: Tab moves focus to enabled buttons, Enter and Space activate native buttons. Screen readers: loading state uses `aria-busy`; icon-only buttons require `aria-label`.'
      }
    }
  }
};
