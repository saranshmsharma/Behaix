import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { RadioGroup } from './RadioGroup';

const options = [
  { label: 'Owner', value: 'owner' },
  { label: 'Editor', value: 'editor' }
];

describe('RadioGroup', () => {
  it('renders radio options', () => {
    render(<RadioGroup name="role" label="Role" options={options} />);

    expect(screen.getByRole('radio', { name: 'Owner' })).toBeInTheDocument();
    expect(screen.getByRole('radio', { name: 'Editor' })).toBeInTheDocument();
  });

  it('selects an option when clicked', async () => {
    const user = userEvent.setup();
    render(<RadioGroup name="role" label="Role" options={options} />);

    await user.click(screen.getByRole('radio', { name: 'Editor' }));

    expect(screen.getByRole('radio', { name: 'Editor' })).toBeChecked();
  });

  it('renders errors', () => {
    render(<RadioGroup name="role" label="Role" error="Role is required." options={options} />);

    expect(screen.getByRole('alert')).toHaveTextContent('Role is required.');
  });
});
