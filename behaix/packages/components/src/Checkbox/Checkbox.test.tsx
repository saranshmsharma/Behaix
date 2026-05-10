import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { Checkbox, CheckboxGroup } from './Checkbox';

describe('Checkbox', () => {
  it('renders with an accessible label', () => {
    render(<Checkbox label="Accept terms" />);

    expect(screen.getByRole('checkbox', { name: 'Accept terms' })).toBeInTheDocument();
  });

  it('toggles when clicked', async () => {
    const user = userEvent.setup();
    render(<Checkbox label="Subscribe" />);

    await user.click(screen.getByRole('checkbox', { name: 'Subscribe' }));

    expect(screen.getByRole('checkbox', { name: 'Subscribe' })).toBeChecked();
  });

  it('calls CheckboxGroup onValueChange', async () => {
    const user = userEvent.setup();
    const onValueChange = vi.fn();

    render(
      <CheckboxGroup
        name="areas"
        onValueChange={onValueChange}
        options={[{ label: 'Design system', value: 'design-system' }]}
      />
    );
    await user.click(screen.getByRole('checkbox', { name: 'Design system' }));

    expect(onValueChange).toHaveBeenCalledWith(['design-system']);
  });
});
