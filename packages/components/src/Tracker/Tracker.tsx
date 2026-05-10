import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { Check, Clock, Package, Truck, Utensils, Home } from 'lucide-react';

const trackerVariants = cva(
  'flex flex-col w-full max-w-2xl',
  {
    variants: {
      size: {
        sm: 'gap-4',
        md: 'gap-6',
        lg: 'gap-8'
      }
    },
    defaultVariants: {
      size: 'md'
    }
  }
);

export interface TrackerProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof trackerVariants> {}

export const Tracker = ({ size, className, children, ...props }: TrackerProps) => {
  const totalItems = React.Children.count(children);

  return (
    <div className={trackerVariants({ size, className })} {...props}>
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement<any>, {
            isLast: index === totalItems - 1
          });
        }
        return child;
      })}
    </div>
  );
};

const trackerItemVariants = cva(
  'relative flex gap-4 transition-all duration-500',
  {
    variants: {
      status: {
        completed: 'text-foreground',
        current: 'text-primary',
        pending: 'text-foreground-muted opacity-60'
      }
    },
    defaultVariants: {
      status: 'pending'
    }
  }
);

export interface TrackerItemProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof trackerItemVariants> {
  title: string;
  description?: string;
  time?: string;
  icon?: React.ReactNode;
  isLast?: boolean;
}

export const TrackerItem = ({ 
  title, 
  description, 
  time, 
  icon, 
  status = 'pending', 
  isLast, 
  className, 
  ...props 
}: TrackerItemProps) => {
  return (
    <div className={trackerItemVariants({ status, className })} {...props}>
      {/* Connector Line */}
      {!isLast && (
        <div className="absolute left-6 top-10 bottom-[-24px] w-0.5 bg-border-subtle overflow-hidden">
          <div 
            className={[
              'w-full h-full bg-primary transition-all duration-1000 origin-top',
              status === 'completed' ? 'scale-y-100' : 'scale-y-0'
            ].join(' ')} 
          />
        </div>
      )}

      {/* Icon Container */}
      <div className="relative shrink-0">
        <div className={[
          'flex h-12 w-12 items-center justify-center rounded-2xl border-2 transition-all duration-500 z-10 relative bg-surface',
          status === 'completed' && 'border-primary bg-primary text-primary-fg shadow-lg shadow-primary/20 scale-100',
          status === 'current' && 'border-primary text-primary animate-pulse scale-110 shadow-xl shadow-primary/10',
          status === 'pending' && 'border-border-subtle text-foreground-muted'
        ].filter(Boolean).join(' ')}>
          {status === 'completed' ? <Check size={20} /> : icon || <Clock size={20} />}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col py-1">
        <div className="flex items-center justify-between gap-4">
          <h4 className={[
            'font-bold tracking-tight transition-colors',
            status === 'current' ? 'text-primary' : 'text-foreground'
          ].join(' ')}>
            {title}
          </h4>
          {time && (
            <span className="text-xs font-medium text-foreground-muted whitespace-nowrap">
              {time}
            </span>
          )}
        </div>
        {description && (
          <p className="mt-1 text-sm text-foreground-muted leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};
