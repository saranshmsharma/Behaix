import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

// ─── Linear Progress Bar ──────────────────────────────────────────────────────

const linearVariants = cva(
  'relative w-full overflow-hidden rounded-full transition-all duration-300',
  {
    variants: {
      variant: {
        default: 'bg-surface-raised',
        subtle: 'bg-border-subtle',
        inset: 'bg-surface-raised shadow-inner'
      },
      size: {
        xs: 'h-1',
        sm: 'h-2',
        md: 'h-3',
        lg: 'h-4',
        xl: 'h-6'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'md'
    }
  }
);

const linearFillVariants = cva(
  'h-full rounded-full transition-all duration-700 ease-out',
  {
    variants: {
      color: {
        primary: 'bg-primary',
        success: 'bg-success',
        warning: 'bg-warning',
        danger: 'bg-danger',
        gradient: 'bg-gradient-to-r from-primary to-secondary',
        rainbow: 'bg-gradient-to-r from-violet-500 via-pink-500 via-amber-500 to-emerald-500'
      }
    },
    defaultVariants: {
      color: 'primary'
    }
  }
);

export interface LinearProgressProps extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof linearVariants> {
  value: number;
  max?: number;
  label?: string;
  showValue?: boolean;
  isAnimated?: boolean;
  isStriped?: boolean;
  color?: 'primary' | 'success' | 'warning' | 'danger' | 'gradient' | 'rainbow';
}

export const LinearProgress = ({
  value,
  max = 100,
  label,
  showValue = false,
  isAnimated = false,
  isStriped = false,
  variant,
  size,
  color,
  className,
  ...props
}: LinearProgressProps) => {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  return (
    <div className="flex flex-col gap-2 w-full">
      {(label || showValue) && (
        <div className="flex items-center justify-between">
          {label && <span className="text-sm font-semibold text-foreground">{label}</span>}
          {showValue && (
            <span className="text-sm font-bold tabular-nums text-foreground-muted">
              {Math.round(percentage)}%
            </span>
          )}
        </div>
      )}
      <div className={linearVariants({ variant, size, className })} role="progressbar" aria-valuenow={value} aria-valuemin={0} aria-valuemax={max} {...props}>
        <div
          className={[
            linearFillVariants({ color: color as 'primary' | 'success' | 'warning' | 'danger' | 'gradient' | 'rainbow' | undefined }),
            isStriped && 'bg-[length:1rem_1rem] bg-[linear-gradient(45deg,rgba(255,255,255,0.15)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.15)_50%,rgba(255,255,255,0.15)_75%,transparent_75%,transparent)]',
            isAnimated && isStriped && 'animate-[progress-stripe_1s_linear_infinite]'
          ].filter(Boolean).join(' ')}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

// ─── Circular Progress Ring ───────────────────────────────────────────────────

const circularSizes = {
  sm: { size: 48, stroke: 4, fontSize: 'text-xs' },
  md: { size: 72, stroke: 6, fontSize: 'text-sm' },
  lg: { size: 100, stroke: 8, fontSize: 'text-base' },
  xl: { size: 140, stroke: 10, fontSize: 'text-xl' }
};

const circularColors: Record<string, string> = {
  primary: 'text-primary',
  success: 'text-success',
  warning: 'text-warning',
  danger: 'text-danger',
  gradient: 'text-primary'
};

const circularTrackColors: Record<string, string> = {
  primary: 'text-surface-raised',
  success: 'text-surface-raised',
  warning: 'text-surface-raised',
  danger: 'text-surface-raised',
  gradient: 'text-surface-raised'
};

export interface CircularProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number;
  max?: number;
  size?: keyof typeof circularSizes;
  color?: 'primary' | 'success' | 'warning' | 'danger' | 'gradient';
  label?: string;
  showValue?: boolean;
  caption?: string;
  isIndeterminate?: boolean;
}

export const CircularProgress = ({
  value,
  max = 100,
  size = 'md',
  color = 'primary',
  label,
  showValue = true,
  caption,
  isIndeterminate = false,
  className,
  ...props
}: CircularProgressProps) => {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);
  const config = circularSizes[size];
  const radius = (config.size - config.stroke * 2) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  const gradientId = React.useId();

  return (
    <div className={['flex flex-col items-center gap-3', className].join(' ')} {...props}>
      {label && <span className="text-sm font-semibold text-foreground">{label}</span>}
      <div className="relative inline-flex items-center justify-center">
        <svg
          width={config.size}
          height={config.size}
          viewBox={`0 0 ${config.size} ${config.size}`}
          className={isIndeterminate ? 'animate-spin' : ''}
        >
          {color === 'gradient' && (
            <defs>
              <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="var(--color-primary)" />
                <stop offset="100%" stopColor="var(--color-secondary, #8b5cf6)" />
              </linearGradient>
            </defs>
          )}
          {/* Track */}
          <circle
            cx={config.size / 2}
            cy={config.size / 2}
            r={radius}
            fill="none"
            strokeWidth={config.stroke}
            className={circularTrackColors[color]}
            stroke="currentColor"
          />
          {/* Progress arc */}
          <circle
            cx={config.size / 2}
            cy={config.size / 2}
            r={radius}
            fill="none"
            strokeWidth={config.stroke}
            stroke={color === 'gradient' ? `url(#${gradientId})` : 'currentColor'}
            className={color !== 'gradient' ? circularColors[color] : ''}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={isIndeterminate ? circumference * 0.75 : strokeDashoffset}
            transform={`rotate(-90 ${config.size / 2} ${config.size / 2})`}
            style={{ transition: 'stroke-dashoffset 0.7s ease-out' }}
          />
        </svg>
        {showValue && !isIndeterminate && (
          <span className={['absolute font-black tabular-nums text-foreground', config.fontSize].join(' ')}>
            {Math.round(percentage)}%
          </span>
        )}
      </div>
      {caption && <span className="text-xs text-foreground-muted text-center max-w-[120px]">{caption}</span>}
    </div>
  );
};

// ─── Segmented / Steps Progress ──────────────────────────────────────────────

export interface SegmentedProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number;
  steps: number;
  color?: 'primary' | 'success' | 'warning' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  label?: string;
  showValue?: boolean;
}

const segmentColorMap = {
  primary: 'bg-primary',
  success: 'bg-success',
  warning: 'bg-warning',
  danger: 'bg-danger'
};

const segmentHeightMap = {
  sm: 'h-1.5',
  md: 'h-2.5',
  lg: 'h-4'
};

export const SegmentedProgress = ({
  value,
  steps,
  color = 'primary',
  size = 'md',
  label,
  showValue = false,
  className,
  ...props
}: SegmentedProgressProps) => {
  const filled = Math.round((value / 100) * steps);

  return (
    <div className={['flex flex-col gap-2 w-full', className].join(' ')} {...props}>
      {(label || showValue) && (
        <div className="flex justify-between items-center">
          {label && <span className="text-sm font-semibold text-foreground">{label}</span>}
          {showValue && <span className="text-sm font-bold text-foreground-muted">{value}%</span>}
        </div>
      )}
      <div className="flex gap-1 w-full">
        {Array.from({ length: steps }).map((_, i) => (
          <div
            key={i}
            className={[
              'flex-1 rounded-full transition-all duration-500',
              segmentHeightMap[size],
              i < filled ? segmentColorMap[color] : 'bg-surface-raised'
            ].join(' ')}
            style={{ transitionDelay: `${i * 50}ms` }}
          />
        ))}
      </div>
    </div>
  );
};
