export const tokens = {
  color: {
    primary: 'var(--color-primary)',
    primaryHover: 'var(--color-primary-hover)',
    primaryFg: 'var(--color-primary-fg)',
    neutral: {
      50: 'var(--color-neutral-50)',
      100: 'var(--color-neutral-100)',
      200: 'var(--color-neutral-200)',
      300: 'var(--color-neutral-300)',
      400: 'var(--color-neutral-400)',
      500: 'var(--color-neutral-500)',
      600: 'var(--color-neutral-600)',
      700: 'var(--color-neutral-700)',
      800: 'var(--color-neutral-800)',
      900: 'var(--color-neutral-900)',
      950: 'var(--color-neutral-950)'
    },
    success: {
      default: 'var(--color-success)',
      bg: 'var(--color-success-bg)',
      border: 'var(--color-success-border)',
      fg: 'var(--color-success-fg)'
    },
    warning: {
      default: 'var(--color-warning)',
      bg: 'var(--color-warning-bg)',
      border: 'var(--color-warning-border)',
      fg: 'var(--color-warning-fg)'
    },
    danger: {
      default: 'var(--color-danger)',
      bg: 'var(--color-danger-bg)',
      border: 'var(--color-danger-border)',
      fg: 'var(--color-danger-fg)'
    },
    info: {
      default: 'var(--color-info)',
      bg: 'var(--color-info-bg)',
      border: 'var(--color-info-border)',
      fg: 'var(--color-info-fg)'
    },
    surface: 'var(--color-surface)',
    surfaceRaised: 'var(--color-surface-raised)',
    surfaceOverlay: 'var(--color-surface-overlay)'
  },
  font: {
    sans: 'var(--font-sans)',
    mono: 'var(--font-mono)',
    regular: 'var(--font-regular)',
    medium: 'var(--font-medium)',
    semibold: 'var(--font-semibold)'
  },
  text: {
    '2xs': 'var(--text-2xs)',
    xs: 'var(--text-xs)',
    sm: 'var(--text-sm)',
    base: 'var(--text-base)',
    md: 'var(--text-md)',
    lg: 'var(--text-lg)',
    xl: 'var(--text-xl)',
    '2xl': 'var(--text-2xl)',
    '3xl': 'var(--text-3xl)'
  },
  leading: {
    tight: 'var(--leading-tight)',
    normal: 'var(--leading-normal)',
    relaxed: 'var(--leading-relaxed)'
  },
  space: {
    1: 'var(--space-1)',
    2: 'var(--space-2)',
    3: 'var(--space-3)',
    4: 'var(--space-4)',
    5: 'var(--space-5)',
    6: 'var(--space-6)',
    7: 'var(--space-7)',
    8: 'var(--space-8)',
    9: 'var(--space-9)',
    10: 'var(--space-10)',
    11: 'var(--space-11)',
    12: 'var(--space-12)',
    13: 'var(--space-13)',
    14: 'var(--space-14)',
    15: 'var(--space-15)',
    16: 'var(--space-16)'
  },
  radius: {
    sm: 'var(--radius-sm)',
    md: 'var(--radius-md)',
    lg: 'var(--radius-lg)',
    xl: 'var(--radius-xl)',
    full: 'var(--radius-full)'
  },
  shadow: {
    sm: 'var(--shadow-sm)',
    md: 'var(--shadow-md)',
    lg: 'var(--shadow-lg)'
  },
  motion: {
    duration: {
      fast: 'var(--duration-fast)',
      base: 'var(--duration-base)',
      slow: 'var(--duration-slow)'
    },
    ease: {
      default: 'var(--ease-default)'
    }
  }
} as const;

export type BehaixTokens = typeof tokens;
export type SemanticColor = 'primary' | 'success' | 'warning' | 'danger' | 'info';
export type NeutralScale = keyof typeof tokens.color.neutral;
export type SpaceScale = keyof typeof tokens.space;
