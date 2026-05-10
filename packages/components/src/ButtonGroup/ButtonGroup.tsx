import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const buttonGroupVariants = cva(
  'inline-flex items-center justify-center rounded-lg border border-border-subtle shadow-sm overflow-hidden',
  {
    variants: {
      orientation: {
        horizontal: 'flex-row',
        vertical: 'flex-col'
      },
      isFullWidth: {
        true: 'w-full flex',
        false: 'w-fit'
      }
    },
    defaultVariants: {
      orientation: 'horizontal',
      isFullWidth: false
    }
  }
);

export interface ButtonGroupProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof buttonGroupVariants> {}

export const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>(
  ({ orientation = 'horizontal', isFullWidth, className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={buttonGroupVariants({ orientation, isFullWidth, className })}
        {...props}
      >
        {React.Children.map(children, (child, index) => {
          if (!React.isValidElement(child)) return child;

          const isFirst = index === 0;
          const isLast = index === React.Children.count(children) - 1;

          return React.cloneElement(child as React.ReactElement<any>, {
            className: [
              child.props.className,
              'rounded-none border-none shadow-none focus-visible:z-10',
              orientation === 'horizontal' && !isLast && 'border-r border-border-subtle',
              orientation === 'vertical' && !isLast && 'border-b border-border-subtle',
              isFullWidth && 'flex-1'
            ].filter(Boolean).join(' ')
          });
        })}
      </div>
    );
  }
);

ButtonGroup.displayName = 'ButtonGroup';
