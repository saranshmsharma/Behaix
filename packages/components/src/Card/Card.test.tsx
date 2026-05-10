import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Card, CardBody, CardFooter, CardHeader } from './Card';

describe('Card', () => {
  it('renders card content', () => {
    render(<Card>Content</Card>);

    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('renders slot components', () => {
    render(
      <Card>
        <CardHeader>Header</CardHeader>
        <CardBody>Body</CardBody>
        <CardFooter>Footer</CardFooter>
      </Card>
    );

    expect(screen.getByText('Header')).toBeInTheDocument();
    expect(screen.getByText('Body')).toBeInTheDocument();
    expect(screen.getByText('Footer')).toBeInTheDocument();
  });

  it('applies interactive classes when requested', () => {
    const { container } = render(<Card isInteractive />);

    expect(container.firstElementChild?.getAttribute('class')).toContain('cursor-pointer');
  });
});
