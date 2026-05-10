import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { X } from 'lucide-react';

const badgeVariants = cva(
  [
    'inline-flex max-w-full items-center gap-1.5 rounded-full border font-medium leading-tight',
    'transition-colors duration-[var(--duration-base)] ease-[var(--ease-default)] motion-reduce:transition-none'
  ],
  {
    variants: {
      variant: {
        default: 'border-[var(--color-neutral-300)] bg-[var(--color-neutral-100)] text-foreground',
        success: 'border-success-border bg-success-bg text-success-fg',
        warning: 'border-warning-border bg-warning-bg text-warning-fg',
        danger: 'border-danger-border bg-danger-bg text-danger-fg',
        info: 'border-info-border bg-info-bg text-info-fg',
        outline: 'border-[var(--color-neutral-300)] bg-transparent text-foreground'
      },
      size: {
        sm: 'px-2 py-0.5 text-xs',
        md: 'px-2.5 py-1 text-sm'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'md'
    }
  }
);

const dotVariants = cva('rounded-[var(--radius-full)] bg-current', {
  variants: {
    size: {
      sm: 'size-1.5',
      md: 'size-2'
    }
  },
  defaultVariants: {
    size: 'md'
  }
});

const removeVariants = cva(
  [
    '-mr-1 inline-flex rounded-[var(--radius-full)] text-current opacity-70 transition-opacity duration-[var(--duration-fast)] ease-[var(--ease-default)]',
    'hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-1 focus-visible:ring-offset-[var(--color-surface)]'
  ],
  {
    variants: {
      size: {
        sm: 'p-0.5',
        md: 'p-0.5'
      }
    },
    defaultVariants: {
      size: 'md'
    }
  }
);

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ');
}

export interface BadgeProps
  extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'onRemove'>,
    VariantProps<typeof badgeVariants> {
  dot?: boolean;
  onRemove?: () => void;
  removeLabel?: string;
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      children,
      className,
      dot = false,
      onRemove,
      removeLabel = 'Remove badge',
      size = 'md',
      variant = 'default',
      ...props
    },
    ref
  ) => (
    <span ref={ref} className={cx(badgeVariants({ size, variant }), className)} {...props}>
      {dot ? <span aria-hidden="true" className={dotVariants({ size })} /> : null}
      <span className="truncate">{children}</span>
      {onRemove ? (
        <button aria-label={removeLabel} className={removeVariants({ size })} type="button" onClick={onRemove}>
          <X aria-hidden="true" className="size-3" />
        </button>
      ) : null}
    </span>
  )
);

Badge.displayName = 'Badge';

export { badgeVariants, dotVariants, removeVariants };
