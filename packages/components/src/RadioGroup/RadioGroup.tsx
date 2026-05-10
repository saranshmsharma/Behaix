import * as React from 'react';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { cva, type VariantProps } from 'class-variance-authority';
import { FormField } from '../FormField';

const groupVariants = cva('grid gap-3');

const itemShellVariants = cva('flex items-start gap-2');
const radioItemVariants = cva(
  [
    'aspect-square shrink-0 rounded-[var(--radius-full)] border bg-[var(--color-surface-overlay)] shadow-[var(--shadow-sm)]',
    'transition-[background-color,border-color,box-shadow] duration-[var(--duration-base)] ease-[var(--ease-default)]',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-surface)]',
    'disabled:cursor-not-allowed disabled:opacity-60 data-[state=checked]:border-[var(--color-primary)] motion-reduce:transition-none'
  ],
  {
    variants: {
      state: {
        default: 'border-[var(--color-neutral-300)]',
        error: 'border-[var(--color-danger-border)]'
      },
      size: {
        sm: 'size-4',
        md: 'size-5'
      }
    },
    defaultVariants: {
      state: 'default',
      size: 'md'
    }
  }
);

const indicatorVariants = cva('flex size-full items-center justify-center after:block after:rounded-[var(--radius-full)] after:bg-[var(--color-primary)]', {
  variants: {
    size: {
      sm: 'after:size-1.5',
      md: 'after:size-2'
    }
  },
  defaultVariants: {
    size: 'md'
  }
});

const radioLabelVariants = cva('text-[var(--text-base)] leading-[var(--leading-normal)] text-[var(--color-neutral-800)]');
const radioDescriptionVariants = cva('text-[var(--text-sm)] leading-[var(--leading-normal)] text-[var(--color-neutral-600)]');

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ');
}

export interface RadioOption {
  description?: React.ReactNode;
  disabled?: boolean;
  label: React.ReactNode;
  value: string;
}

export interface RadioGroupProps
  extends Omit<RadioGroupPrimitive.RadioGroupProps, 'children'>,
    VariantProps<typeof groupVariants>,
    VariantProps<typeof radioItemVariants> {
  error?: string | string[];
  hint?: React.ReactNode;
  label?: React.ReactNode;
  options: RadioOption[];
}

export const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(
  (
    {
      className,
      error,
      hint,
      label,
      options,
      orientation = 'vertical',
      size = 'md',
      ...props
    },
    ref
  ) => {
    const invalid = Boolean(error);
    const state = invalid ? 'error' : 'default';

    return (
      <FormField error={error} hint={hint} label={label}>
        {({ describedBy }) => (
          <RadioGroupPrimitive.Root
            ref={ref}
            aria-describedby={describedBy}
            aria-invalid={invalid}
            className={cx(
              groupVariants(),
              orientation === 'horizontal' ? 'flex flex-wrap' : 'grid',
              className
            )}
            orientation={orientation ?? 'vertical'}
            {...props}
          >
            {options.map((option) => {
              const itemId = `${props.name ?? 'radio'}-${option.value}`;
              return (
                <div key={option.value} className={itemShellVariants()}>
                  <RadioGroupPrimitive.Item
                    id={itemId}
                    className={radioItemVariants({ size, state })}
                    disabled={option.disabled}
                    value={option.value}
                  >
                    <RadioGroupPrimitive.Indicator className={indicatorVariants({ size })} />
                  </RadioGroupPrimitive.Item>
                  <div className="grid gap-0.5">
                    <label className={radioLabelVariants()} htmlFor={itemId}>
                      {option.label}
                    </label>
                    {option.description ? <p className={radioDescriptionVariants()}>{option.description}</p> : null}
                  </div>
                </div>
              );
            })}
          </RadioGroupPrimitive.Root>
        )}
      </FormField>
    );
  }
);

RadioGroup.displayName = 'RadioGroup';

export { radioDescriptionVariants, groupVariants, indicatorVariants, itemShellVariants, radioLabelVariants, radioItemVariants };
