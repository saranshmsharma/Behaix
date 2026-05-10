import * as React from 'react';

export interface EmptyStateProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  illustration?: React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
  action?: React.ReactNode;
}

export const EmptyState = React.forwardRef<HTMLDivElement, EmptyStateProps>(
  ({ illustration, title, description, action, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={['flex flex-col items-center justify-center p-8 text-center', className].filter(Boolean).join(' ')}
        {...props}
      >
        {illustration && (
          <div className="mb-4 flex items-center justify-center text-foreground-muted/40">
            {illustration}
          </div>
        )}
        <h3 className="mb-2 text-lg font-semibold leading-tight text-foreground">
          {title}
        </h3>
        {description && (
          <p className="mb-6 max-w-sm text-sm leading-normal text-foreground-muted">
            {description}
          </p>
        )}
        {action && <div>{action}</div>}
      </div>
    );
  }
);
EmptyState.displayName = 'EmptyState';
