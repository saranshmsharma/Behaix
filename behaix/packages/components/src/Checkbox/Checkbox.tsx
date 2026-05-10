import * as React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check, Minus } from 'lucide-react';
import { cva, type VariantProps } from 'class-variance-authority';
import { FormField } from '../FormField';

const rootVariants = cva(
  [
    'peer flex shrink-0 items-center justify-center rounded-[var(--radius-sm)] border bg-[var(--color-surface-overlay)] text-[var(--color-primary-fg)] shadow-[var(--shadow-sm)]',
    'transition-[background-color,border-color,box-shadow] duration-[var(--duration-base)] ease-[var(--ease-default)]',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-surface)]',
    'disabled:cursor-not-allowed disabled:opacity-60 data-[state=checked]:border-[var(--color-primary)] data-[state=checked]:bg-[var(--color-primary)]',
    'data-[state=indeterminate]:border-[var(--color-primary)] data-[state=indeterminate]:bg-[var(--color-primary)] motion-reduce:transition-none'
  ],
  {
    variants: {
      size: {
        sm: 'size-4',
        md: 'size-5'
      },
      state: {
        default: 'border-[var(--color-neutral-300)]',
        error: 'border-[var(--color-danger-border)]'
      }
    },
    defaultVariants: {
      size: 'md',
      state: 'default'
    }
  }
);

const itemVariants = cva('flex items-start gap-2');
const labelVariants = cva('text-[var(--text-base)] leading-[var(--leading-normal)] text-[var(--color-neutral-800)] peer-disabled:opacity-60');
const descriptionVariants = cva('text-[var(--text-sm)] leading-[var(--leading-normal)] text-[var(--color-neutral-600)]');
const groupVariants = cva('grid gap-3', {
  variants: {
    orientation: {
      vertical: 'grid',
      horizontal: 'flex flex-wrap'
    }
  },
  defaultVariants: {
    orientation: 'vertical'
  }
});

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ');
}

export interface CheckboxProps
  extends Omit<CheckboxPrimitive.CheckboxProps, 'children'>,
    VariantProps<typeof rootVariants> {
  description?: React.ReactNode;
  error?: boolean;
  label?: React.ReactNode;
}

export const Checkbox = React.forwardRef<HTMLButtonElement, CheckboxProps>(
  ({ checked, className, description, error = false, id, label, size = 'md', ...props }, ref) => {
    const generatedId = React.useId();
    const checkboxId = id ?? `behaix-checkbox-${generatedId}`;
    const state = error ? 'error' : 'default';

    return (
      <div className={itemVariants()}>
        <CheckboxPrimitive.Root
          ref={ref}
          id={checkboxId}
          checked={checked}
          className={cx(rootVariants({ size, state }), className)}
          {...props}
        >
          <CheckboxPrimitive.Indicator>
            {checked === 'indeterminate' ? <Minus aria-hidden="true" className="size-3.5" /> : <Check aria-hidden="true" className="size-3.5" />}
          </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>
        {label || description ? (
          <div className="grid gap-0.5">
            {label ? (
              <label className={labelVariants()} htmlFor={checkboxId}>
                {label}
              </label>
            ) : null}
            {description ? <p className={descriptionVariants()}>{description}</p> : null}
          </div>
        ) : null}
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';

export interface CheckboxGroupOption {
  description?: React.ReactNode;
  disabled?: boolean;
  label: React.ReactNode;
  value: string;
}

export interface CheckboxGroupProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'defaultValue' | 'onChange'>,
    VariantProps<typeof groupVariants> {
  defaultValue?: string[];
  error?: string | string[];
  hint?: React.ReactNode;
  label?: React.ReactNode;
  name: string;
  onValueChange?: (value: string[]) => void;
  options: CheckboxGroupOption[];
  value?: string[];
}

export const CheckboxGroup = React.forwardRef<HTMLDivElement, CheckboxGroupProps>(
  (
    {
      className,
      defaultValue = [],
      error,
      hint,
      label,
      name,
      onValueChange,
      options,
      orientation = 'vertical',
      value,
      ...props
    },
    ref
  ) => {
    const [internalValue, setInternalValue] = React.useState(defaultValue);
    const selectedValue = value ?? internalValue;
    const invalid = Boolean(error);

    const updateValue = (optionValue: string, checked: CheckboxPrimitive.CheckedState) => {
      const nextValue = checked
        ? Array.from(new Set([...selectedValue, optionValue]))
        : selectedValue.filter((currentValue) => currentValue !== optionValue);
      setInternalValue(nextValue);
      onValueChange?.(nextValue);
    };

    return (
      <FormField error={error} hint={hint} label={label}>
        {({ describedBy }) => (
          <div
            ref={ref}
            aria-describedby={describedBy}
            aria-invalid={invalid}
            className={cx(groupVariants({ orientation }), className)}
            role="group"
            {...props}
          >
            {options.map((option) => (
              <Checkbox
                key={option.value}
                checked={selectedValue.includes(option.value)}
                description={option.description}
                disabled={option.disabled}
                error={invalid}
                label={option.label}
                name={name}
                value={option.value}
                onCheckedChange={(checked) => updateValue(option.value, checked)}
              />
            ))}
          </div>
        )}
      </FormField>
    );
  }
);

CheckboxGroup.displayName = 'CheckboxGroup';

export { descriptionVariants, groupVariants, itemVariants, labelVariants, rootVariants };
