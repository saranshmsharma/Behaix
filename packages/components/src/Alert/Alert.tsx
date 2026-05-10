import * as React from 'react';
import { AlertCircle, Check, Info, TriangleAlert, X } from 'lucide-react';
import { cva, type VariantProps } from 'class-variance-authority';

const alertVariants = cva('grid grid-cols-[auto_1fr_auto] gap-3 rounded-[var(--radius-lg)] border p-4', {
  variants: {
    variant: {
      info: 'border-info-border bg-info-bg text-info-fg',
      success: 'border-success-border bg-success-bg text-success-fg',
      warning: 'border-warning-border bg-warning-border bg-warning-bg text-warning-fg',
      danger: 'border-danger-border bg-danger-bg text-danger-fg'
    }
  },
  defaultVariants: {
    variant: 'info'
  }
});

const alertTitleVariants = cva('text-base font-semibold leading-tight');
const alertDescriptionVariants = cva('mt-1 text-sm leading-normal opacity-90');
const alertDismissVariants = cva('rounded-sm p-1 opacity-70 hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary');

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
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'>,
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
        <div className={alertTitleVariants()}>{title}</div>
        {description ? <div className={alertDescriptionVariants()}>{description}</div> : null}
      </div>
      {onDismiss ? (
        <button aria-label="Dismiss alert" className={alertDismissVariants()} type="button" onClick={onDismiss}>
          <X aria-hidden="true" className="size-4" />
        </button>
      ) : <span />}
    </div>
  )
);

Alert.displayName = 'Alert';

export { alertVariants, alertDescriptionVariants, alertDismissVariants, alertTitleVariants };
