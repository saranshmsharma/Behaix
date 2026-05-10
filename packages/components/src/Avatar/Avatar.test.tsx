import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Avatar, AvatarGroup, getInitials } from './Avatar';

describe('Avatar', () => {
  it('generates initials from name', () => {
    expect(getInitials('Saransh Sharma')).toBe('SS');
  });

  it('renders accessible avatar', () => {
    render(<Avatar name="Saransh Sharma" />);

    expect(screen.getByRole('img', { name: 'Saransh Sharma' })).toBeInTheDocument();
    expect(screen.getByText('SS')).toBeInTheDocument();
  });

  it('renders overflow in AvatarGroup', () => {
    render(
      <AvatarGroup
        avatars={[{ name: 'One User' }, { name: 'Two User' }, { name: 'Three User' }]}
        max={2}
      />
    );

    expect(screen.getByLabelText('1 more avatars')).toBeInTheDocument();
  });
});
