import * as React from 'react';

export type Theme = 'light' | 'dark';

export interface ThemeProviderProps {
  children: React.ReactNode;
  theme?: Theme;
}

export function ThemeProvider({ children, theme = 'light' }: ThemeProviderProps) {
  return (
    <div
      data-theme={theme}
      style={{
        minHeight: '100%',
        background: 'var(--color-surface)',
        color: 'var(--color-foreground)',
        fontFamily: 'var(--font-sans)',
        padding: 'var(--space-6)'
      }}
    >
      {children}
    </div>
  );
}
