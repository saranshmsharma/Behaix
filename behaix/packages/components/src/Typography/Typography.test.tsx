import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Code, Heading, Label, Text } from './Typography';

describe('Typography', () => {
  it('renders semantic heading levels', () => {
    render(<Heading level="h1">Dashboard</Heading>);

    expect(screen.getByRole('heading', { level: 1, name: 'Dashboard' })).toBeInTheDocument();
  });

  it('renders text as a paragraph by default', () => {
    render(<Text>Body copy</Text>);

    expect(screen.getByText('Body copy').tagName).toBe('P');
  });

  it('renders label with htmlFor wiring', () => {
    render(<Label htmlFor="email">Email</Label>);

    expect(screen.getByText('Email')).toHaveAttribute('for', 'email');
  });

  it('renders inline code', () => {
    render(<Code>pnpm build</Code>);

    expect(screen.getByText('pnpm build').tagName).toBe('CODE');
  });

  it('supports asChild semantic overrides', () => {
    render(
      <Text asChild>
        <span>Inline text</span>
      </Text>
    );

    expect(screen.getByText('Inline text').tagName).toBe('SPAN');
  });
});
