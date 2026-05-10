import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { Check, X, AlertTriangle, Loader2 } from 'lucide-react';

const stepperVariants = cva(
  'flex w-full items-start transition-all duration-300',
  {
    variants: {
      orientation: {
        horizontal: 'flex-row items-start justify-between',
        vertical: 'flex-col'
      }
    },
    defaultVariants: {
      orientation: 'horizontal'
    }
  }
);

interface StepperContextValue {
  activeStep: number;
  orientation: 'horizontal' | 'vertical';
  totalSteps: number;
  isInteractive?: boolean;
  onStepClick?: (index: number) => void;
}

const StepperContext = React.createContext<StepperContextValue | undefined>(undefined);

export function useStepper() {
  const context = React.useContext(StepperContext);
  if (!context) throw new Error('Stepper components must be used within a Stepper');
  return context;
}

export interface StepperProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof stepperVariants> {
  activeStep: number;
  isInteractive?: boolean;
  onStepClick?: (index: number) => void;
}

export const Stepper = ({ 
  activeStep, 
  orientation = 'horizontal', 
  isInteractive = false,
  onStepClick,
  className, 
  children, 
  ...props 
}: StepperProps) => {
  const validChildren = React.Children.toArray(children).filter(React.isValidElement);
  const totalSteps = validChildren.length;

  return (
    <StepperContext.Provider value={{ activeStep, orientation: orientation || 'horizontal', totalSteps, isInteractive, onStepClick }}>
      <nav 
        className={stepperVariants({ orientation, className })} 
        aria-label="Progress Stepper"
        {...props}
      >
        {validChildren.map((child, index) => {
          return React.cloneElement(child as React.ReactElement<any>, {
            index,
            isLast: index === totalSteps - 1
          });
        })}
      </nav>
    </StepperContext.Provider>
  );
};

export type StepStatus = 'default' | 'error' | 'warning' | 'loading';

interface StepProps extends React.HTMLAttributes<HTMLDivElement> {
  index?: number;
  label: string;
  description?: string;
  status?: StepStatus;
  isLast?: boolean;
}

export const Step = ({ index = 0, label, description, status = 'default', isLast, className, ...props }: StepProps) => {
  const { activeStep, orientation, isInteractive, onStepClick } = useStepper();
  
  // Ensure index is a number to avoid NaN
  const safeIndex = typeof index === 'number' ? index : 0;
  const isCompleted = activeStep > safeIndex;
  const isActive = activeStep === safeIndex;
  const isPending = activeStep < safeIndex;

  const renderIcon = () => {
    if (status === 'loading' && isActive) {
      return <Loader2 size={16} className="animate-spin" />;
    }
    if (status === 'error' && isActive) {
      return <X size={16} />;
    }
    if (status === 'warning' && isActive) {
      return <AlertTriangle size={16} />;
    }
    if (isCompleted) {
      return <Check size={16} />;
    }
    return safeIndex + 1;
  };

  const getCircleClasses = () => {
    if (status === 'error' && isActive) return 'bg-danger border-danger text-danger-fg';
    if (status === 'warning' && isActive) return 'bg-warning border-warning text-warning-fg';
    if (status === 'loading' && isActive) return 'border-primary text-primary bg-surface animate-pulse';
    if (isCompleted) return 'bg-primary border-primary text-primary-fg shadow-lg shadow-primary/20';
    if (isActive) return 'border-primary text-primary bg-surface shadow-md shadow-primary/20 scale-110';
    return 'border-border-subtle text-foreground-muted bg-surface group-hover:border-primary/50';
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (isInteractive && onStepClick && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      onStepClick(safeIndex);
    }
  };

  return (
    <div 
      className={[
        'group relative flex flex-1 flex-col items-center',
        orientation === 'vertical' && 'flex-row items-start pb-10 last:pb-0',
        isInteractive ? 'cursor-pointer pointer-events-auto' : 'cursor-default',
        className
      ].filter(Boolean).join(' ')} 
      onClick={() => isInteractive && onStepClick?.(safeIndex)}
      onKeyDown={handleKeyDown}
      role={isInteractive ? 'button' : 'listitem'}
      tabIndex={isInteractive ? 0 : -1}
      aria-current={isActive ? 'step' : undefined}
      {...props}
    >
      {/* Connector Line for Horizontal */}
      {orientation === 'horizontal' && !isLast && (
        <div className="absolute top-5 left-[calc(50%+20px)] right-[calc(-50%+20px)] h-0.5 bg-border-subtle z-0">
          <div 
            className="h-full bg-primary transition-all duration-500 ease-in-out"
            style={{ width: isCompleted ? '100%' : '0%' }}
          />
        </div>
      )}

      {/* Circle Icon and Vertical Line Container */}
      <div className="flex flex-col items-center relative z-10 shrink-0">
        <div className={[
          'flex h-10 w-10 items-center justify-center rounded-full border-2 text-sm font-bold transition-all duration-300 ring-offset-2 group-focus-visible:ring-2 group-focus-visible:ring-primary',
          getCircleClasses()
        ].filter(Boolean).join(' ')}>
          {renderIcon()}
        </div>
        
        {/* Connector Line for Vertical */}
        {orientation === 'vertical' && !isLast && (
          <div className="absolute top-10 left-1/2 -translate-x-1/2 w-0.5 h-[calc(100%-10px)] bg-border-subtle overflow-hidden">
            <div 
              className="w-full bg-primary transition-all duration-500 ease-in-out"
              style={{ height: isCompleted ? '100%' : '0%' }}
            />
          </div>
        )}
      </div>
      
      {/* Labels */}
      <div className={[
        'flex flex-col transition-all duration-300',
        orientation === 'horizontal' ? 'items-center mt-3' : 'items-start ml-4 mt-1'
      ].join(' ')}>
        <span className={[
          'text-sm font-bold transition-colors',
          isActive ? 'text-foreground' : 'text-foreground-muted',
          status === 'error' && isActive && 'text-danger',
          status === 'warning' && isActive && 'text-warning',
          orientation === 'horizontal' && 'text-center hidden sm:inline-block'
        ].filter(Boolean).join(' ')}>
          {label}
        </span>
        {description && (orientation === 'vertical' || !isPending) && (
          <span className={[
            'text-xs text-foreground-muted mt-1 transition-all duration-300',
            orientation === 'horizontal' ? 'text-center max-w-[120px] hidden lg:inline-block' : 'text-left'
          ].join(' ')}>
            {description}
          </span>
        )}
      </div>
    </div>
  );
};
