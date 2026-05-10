import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

const buttonVariants = cva(
  [
    'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[var(--radius-md)]',
    'font-[var(--font-medium)] leading-[var(--leading-tight)]',
    'transition-[background-color,border-color,color,box-shadow,opacity] duration-[var(--duration-base)] ease-[var(--ease-default)]',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-surface)]',
    'disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
    'data-[disabled=true]:pointer-events-none data-[disabled=true]:cursor-not-allowed data-[disabled=true]:opacity-50',
    'data-[loading=true]:cursor-wait',
    'motion-reduce:transition-none'
  ],
  {
    variants: {
      variant: {
        primary: [
          'border border-transparent bg-[var(--color-primary)] text-[var(--color-primary-fg)] shadow-[var(--shadow-sm)]',
          'hover:bg-[var(--color-primary-hover)]'
        ],
        secondary: [
          'border border-[var(--color-neutral-300)] bg-[var(--color-surface-raised)] text-[var(--color-neutral-800)] shadow-[var(--shadow-sm)]',
          'hover:border-[var(--color-neutral-400)] hover:bg-[var(--color-neutral-100)]'
        ],
        ghost: [
          'border border-transparent bg-transparent text-[var(--color-neutral-800)]',
          'hover:bg-[var(--color-neutral-100)]'
        ],
        danger: [
          'border border-transparent bg-[var(--color-danger)] text-[var(--color-primary-fg)] shadow-[var(--shadow-sm)]',
          'hover:bg-[var(--color-danger-fg)]'
        ],
        link: [
          'h-auto border border-transparent bg-transparent p-0 text-[var(--color-primary)] underline-offset-4',
          'hover:text-[var(--color-primary-hover)] hover:underline'
        ]
      },
      size: {
        sm: 'h-8 px-3 text-[var(--text-sm)]',
        md: 'h-10 px-4 text-[var(--text-base)]',
        lg: 'h-12 px-5 text-[var(--text-md)]'
      },
      isIconOnly: {
        true: '',
        false: ''
      }
    },
    compoundVariants: [
      {
        size: 'sm',
        isIconOnly: true,
        className: 'w-8 px-0'
      },
      {
        size: 'md',
        isIconOnly: true,
        className: 'w-10 px-0'
      },
      {
        size: 'lg',
        isIconOnly: true,
        className: 'w-12 px-0'
      },
      {
        variant: 'link',
        size: 'sm',
        className: 'h-auto px-0'
      },
      {
        variant: 'link',
        size: 'md',
        className: 'h-auto px-0'
      },
      {
        variant: 'link',
        size: 'lg',
        className: 'h-auto px-0'
      }
    ],
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      isIconOnly: false
    }
  }
);

const spinnerVariants = cva(
  [
    'shrink-0 animate-spin rounded-[var(--radius-full)] border-2 border-current border-t-transparent',
    'motion-reduce:animate-none'
  ],
  {
    variants: {
      size: {
        sm: 'size-3',
        md: 'size-4',
        lg: 'size-5'
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

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'disabled'>,
    VariantProps<typeof buttonVariants> {
  /**
   * Render the button styles onto a child element using the Radix Slot pattern.
   */
  asChild?: boolean;
  /**
   * Disables interaction and applies disabled styles.
   */
  disabled?: boolean;
  /**
   * Shows a loading spinner and disables interaction while preserving button width.
   */
  isLoading?: boolean;
  /**
   * Icon or visual element rendered before the label.
   */
  leftIcon?: React.ReactNode;
  /**
   * Icon or visual element rendered after the label.
   */
  rightIcon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      asChild = false,
      children,
      className,
      disabled = false,
      isLoading = false,
      leftIcon,
      rightIcon,
      size = 'md',
      type = 'button',
      variant = 'primary',
      'aria-label': ariaLabel,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button';
    const isDisabled = disabled || isLoading;
    const isIconOnly = !children && Boolean(ariaLabel);

    return (
      <Comp
        ref={ref}
        className={cx(buttonVariants({ variant, size, isIconOnly }), className)}
        type={asChild ? undefined : type}
        disabled={asChild ? undefined : isDisabled}
        aria-disabled={asChild && isDisabled ? true : undefined}
        aria-busy={isLoading ? true : undefined}
        aria-label={ariaLabel}
        data-disabled={isDisabled ? true : undefined}
        data-loading={isLoading ? true : undefined}
        tabIndex={asChild && isDisabled ? -1 : props.tabIndex}
        {...props}
      >
        {isLoading ? <span aria-hidden="true" className={spinnerVariants({ size })} /> : leftIcon}
        {children}
        {!isLoading ? rightIcon : null}
      </Comp>
    );
  }
);

Button.displayName = 'Button';

export { buttonVariants };
