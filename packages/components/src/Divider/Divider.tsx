import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const dividerVariants = cva('shrink-0 border-[var(--color-neutral-300)]', {
  variants: {
    orientation: {
      horizontal: 'w-full border-t',
      vertical: 'h-full min-h-4 border-l'
    }
  },
  defaultVariants: {
    orientation: 'horizontal'
  }
});

const labelVariants = cva(
  'px-3 text-[var(--text-xs)] font-[var(--font-medium)] leading-[var(--leading-tight)] text-[var(--color-neutral-500)]'
);

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ');
}

export interface DividerProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>,
    VariantProps<typeof dividerVariants> {
  label?: string;
}

export const Divider = React.forwardRef<HTMLDivElement, DividerProps>(
  ({ className, label, orientation = 'horizontal', role, ...props }, ref) => {
    if (label && orientation === 'horizontal') {
      return (
        <div
          ref={ref}
          className={cx('flex w-full items-center', className)}
          role={role ?? 'separator'}
          aria-orientation="horizontal"
          {...props}
        >
          <span className="h-px flex-1 bg-[var(--color-neutral-300)]" />
          <span className={labelVariants()}>{label}</span>
          <span className="h-px flex-1 bg-[var(--color-neutral-300)]" />
        </div>
      );
    }

    return (
      <div
        ref={ref}
        className={cx(dividerVariants({ orientation }), className)}
        role={role ?? 'separator'}
        aria-orientation={orientation ?? 'horizontal'}
        {...props}
      />
    );
  }
);

Divider.displayName = 'Divider';

export { dividerVariants, labelVariants as dividerLabelVariants };
