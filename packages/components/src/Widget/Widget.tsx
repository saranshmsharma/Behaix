import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { TrendingUp, TrendingDown } from 'lucide-react';

const widgetVariants = cva(
  'relative flex flex-col gap-1 rounded-2xl border border-border-subtle bg-surface p-6 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5',
  {
    variants: {
      variant: {
        default: 'bg-surface',
        glass: 'bg-surface/80 backdrop-blur-md',
        primary: 'bg-primary text-primary-fg border-primary shadow-lg shadow-primary/20'
      }
    },
    defaultVariants: {
      variant: 'default'
    }
  }
);

export interface StatWidgetProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof widgetVariants> {
  label: string;
  value: string | number;
  trend?: {
    value: number;
    isUp: boolean;
  };
  icon?: React.ReactNode;
}

export const StatWidget = ({ label, value, trend, icon, variant = 'default', className, ...props }: StatWidgetProps) => {
  return (
    <div className={widgetVariants({ variant, className })} {...props}>
      <div className="flex items-center justify-between">
        <span className={['text-sm font-medium', variant === 'primary' ? 'text-primary-fg/80' : 'text-foreground-muted'].join(' ')}>
          {label}
        </span>
        {icon && (
          <div className={['flex h-10 w-10 items-center justify-center rounded-xl', variant === 'primary' ? 'bg-primary-fg/10' : 'bg-surface-raised border border-border-subtle'].join(' ')}>
            {icon}
          </div>
        )}
      </div>

      <div className="mt-2 flex items-baseline gap-2">
        <h3 className="text-2xl font-bold tracking-tight">{value}</h3>
        {trend && (
          <div className={['flex items-center gap-0.5 text-xs font-bold', trend.isUp ? 'text-success' : 'text-danger', variant === 'primary' && 'text-primary-fg'].filter(Boolean).join(' ')}>
            {trend.isUp ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
            <span>{trend.value}%</span>
          </div>
        )}
      </div>

      <div className={['mt-4 h-1 w-full rounded-full overflow-hidden', variant === 'primary' ? 'bg-primary-fg/20' : 'bg-surface-raised'].join(' ')}>
        <div 
          className={['h-full transition-all duration-1000', variant === 'primary' ? 'bg-primary-fg' : 'bg-primary'].join(' ')} 
          style={{ width: '65%' }} // Demo progress
        />
      </div>
    </div>
  );
};
