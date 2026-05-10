import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { Select } from './Select';

const options = [
  { label: 'Design system', value: 'design-system' },
  { label: 'Analytics', value: 'analytics' }
];

describe('Select', () => {
  it('renders with an accessible label', () => {
    render(<Select label="Area" options={options} />);

    expect(screen.getByLabelText('Area')).toBeInTheDocument();
  });

  it('opens options when clicked', async () => {
    const user = userEvent.setup();
    render(<Select label="Area" options={options} />);

    await user.click(screen.getByRole('combobox', { name: 'Area' }));

    expect(screen.getByRole('option', { name: 'Design system' })).toBeInTheDocument();
  });

  it('sets aria-invalid when error is present', () => {
    render(<Select label="Area" error="Area is required." options={options} />);

    expect(screen.getByLabelText('Area')).toHaveAttribute('aria-invalid', 'true');
    expect(screen.getByRole('alert')).toHaveTextContent('Area is required.');
  });
});
