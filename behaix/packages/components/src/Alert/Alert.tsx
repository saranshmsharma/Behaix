import * as React from 'react';
import { AlertCircle, Check, Info, TriangleAlert, X } from 'lucide-react';
import { cva, type VariantProps } from 'class-variance-authority';

const alertVariants = cva('grid grid-cols-[auto_1fr_auto] gap-3 rounded-[var(--radius-lg)] border p-4', {
  variants: {
    variant: {
      info: 'border-[var(--color-info-border)] bg-[var(--color-info-bg)] text-[var(--color-info-fg)]',
      success: 'border-[var(--color-success-border)] bg-[var(--color-success-bg)] text-[var(--color-success-fg)]',
      warning: 'border-[var(--color-warning-border)] bg-[var(--color-warning-bg)] text-[var(--color-warning-fg)]',
      danger: 'border-[var(--color-danger-border)] bg-[var(--color-danger-bg)] text-[var(--color-danger-fg)]'
    }
  },
  defaultVariants: {
    variant: 'info'
  }
});

const titleVariants = cva('text-[var(--text-base)] font-[var(--font-semibold)] leading-[var(--leading-tight)]');
const descriptionVariants = cva('mt-1 text-[var(--text-sm)] leading-[var(--leading-normal)] opacity-90');
const dismissVariants = cva('rounded-[var(--radius-sm)] p-1 opacity-70 hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]');

function getIcon(variant: NonNullable<AlertProps['variant']>) {
  if (variant === 'success') return <Check aria-hidden="true" className="size-5" />;
  if (variant === 'warning') return <TriangleAlert aria-hidden="true" className="size-5" />;
  if (variant === 'danger') return <AlertCircle aria-hidden="true" className="size-5" />;
  return <Info aria-hidden="true" className="size-5" />;
}

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ');
}

export interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  description?: React.ReactNode;
  icon?: React.ReactNode;
  onDismiss?: () => void;
  title: React.ReactNode;
}

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, description, icon, onDismiss, title, variant = 'info', ...props }, ref) => (
    <div ref={ref} className={cx(alertVariants({ variant }), className)} role="status" {...props}>
      <div className="pt-0.5">{icon ?? getIcon(variant ?? 'info')}</div>
      <div>
        <div className={titleVariants()}>{title}</div>
        {description ? <div className={descriptionVariants()}>{description}</div> : null}
      </div>
      {onDismiss ? (
        <button aria-label="Dismiss alert" className={dismissVariants()} type="button" onClick={onDismiss}>
          <X aria-hidden="true" className="size-4" />
        </button>
      ) : <span />}
    </div>
  )
);

Alert.displayName = 'Alert';

export { alertVariants, descriptionVariants, dismissVariants, titleVariants };
