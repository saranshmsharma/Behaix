import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const spinnerVariants = cva('inline-block animate-spin rounded-[var(--radius-full)] border-2 border-current border-t-transparent motion-reduce:animate-none', {
  variants: {
    size: {
      sm: 'size-4',
      md: 'size-6',
      lg: 'size-8'
    },
    color: {
      inherit: 'text-current',
      primary: 'text-[var(--color-primary)]',
      muted: 'text-[var(--color-neutral-500)]'
    }
  },
  defaultVariants: {
    size: 'md',
    color: 'inherit'
  }
});

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ');
}

export interface SpinnerProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof spinnerVariants> {
  label?: string;
}

export const Spinner = React.forwardRef<HTMLSpanElement, SpinnerProps>(
  ({ className, color = 'inherit', label = 'Loading...', size = 'md', ...props }, ref) => (
    <span ref={ref} aria-label={label} className={cx(spinnerVariants({ color, size }), className)} role="status" {...props} />
  )
);

Spinner.displayName = 'Spinner';

export { spinnerVariants };
