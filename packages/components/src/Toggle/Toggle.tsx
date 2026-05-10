import * as React from 'react';
import * as SwitchPrimitive from '@radix-ui/react-switch';
import { Loader2 } from 'lucide-react';
import { cva, type VariantProps } from 'class-variance-authority';

const switchVariants = cva(
  [
    'peer inline-flex shrink-0 cursor-pointer items-center rounded-[var(--radius-full)] border border-transparent shadow-[var(--shadow-sm)]',
    'transition-colors duration-[var(--duration-base)] ease-[var(--ease-default)]',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-surface)]',
    'disabled:cursor-not-allowed disabled:opacity-60 data-[state=checked]:bg-[var(--color-primary)] data-[state=unchecked]:bg-[var(--color-neutral-300)] motion-reduce:transition-none'
  ],
  {
    variants: {
      size: {
        sm: 'h-5 w-9',
        md: 'h-6 w-11'
      },
      loading: {
        true: 'cursor-wait',
        false: ''
      }
    },
    defaultVariants: {
      size: 'md',
      loading: false
    }
  }
);

const thumbVariants = cva(
  [
    'pointer-events-none flex items-center justify-center rounded-[var(--radius-full)] bg-[var(--color-surface-overlay)] text-[var(--color-primary)] shadow-[var(--shadow-sm)]',
    'transition-transform duration-[var(--duration-base)] ease-[var(--ease-default)] motion-reduce:transition-none'
  ],
  {
    variants: {
      size: {
        sm: 'size-4 data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0.5',
        md: 'size-5 data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0.5'
      }
    },
    defaultVariants: {
      size: 'md'
    }
  }
);

const toggleLabelVariants = cva('text-[var(--text-base)] leading-[var(--leading-normal)] text-[var(--color-neutral-800)]');
const toggleDescriptionVariants = cva('text-[var(--text-sm)] leading-[var(--leading-normal)] text-[var(--color-neutral-600)]');

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ');
}

export interface ToggleProps
  extends Omit<SwitchPrimitive.SwitchProps, 'children'>,
    VariantProps<typeof switchVariants> {
  description?: React.ReactNode;
  isLoading?: boolean;
  label?: React.ReactNode;
}

export const Toggle = React.forwardRef<HTMLButtonElement, ToggleProps>(
  ({ className, description, disabled = false, id, isLoading = false, label, size = 'md', ...props }, ref) => {
    const generatedId = React.useId();
    const toggleId = id ?? `behaix-toggle-${generatedId}`;

    return (
      <div className="flex items-start gap-3">
        <SwitchPrimitive.Root
          ref={ref}
          id={toggleId}
          aria-busy={isLoading}
          className={cx(switchVariants({ loading: isLoading, size }), className)}
          disabled={disabled || isLoading}
          {...props}
        >
          <SwitchPrimitive.Thumb className={thumbVariants({ size })}>
            {isLoading ? <Loader2 aria-hidden="true" className="size-3 animate-spin motion-reduce:animate-none" /> : null}
          </SwitchPrimitive.Thumb>
        </SwitchPrimitive.Root>
        {label || description ? (
          <div className="grid gap-0.5">
            {label ? (
              <label className={toggleLabelVariants()} htmlFor={toggleId}>
                {label}
              </label>
            ) : null}
            {description ? <p className={toggleDescriptionVariants()}>{description}</p> : null}
          </div>
        ) : null}
      </div>
    );
  }
);

Toggle.displayName = 'Toggle';

export { toggleDescriptionVariants, toggleLabelVariants, switchVariants, thumbVariants };
