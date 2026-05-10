import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { FormField } from '../FormField';

const inputShellVariants = cva(
  [
    'flex w-full items-center rounded-[var(--radius-md)] border bg-[var(--color-surface-overlay)] text-[var(--color-neutral-800)] shadow-[var(--shadow-sm)]',
    'transition-[border-color,box-shadow,background-color] duration-[var(--duration-base)] ease-[var(--ease-default)]',
    'focus-within:border-[var(--color-primary)] focus-within:ring-2 focus-within:ring-[var(--color-primary)]/20',
    'motion-reduce:transition-none'
  ],
  {
    variants: {
      size: {
        sm: 'min-h-8 px-2 text-[var(--text-sm)]',
        md: 'min-h-10 px-3 text-[var(--text-base)]',
        lg: 'min-h-12 px-4 text-[var(--text-md)]'
      },
      state: {
        default: 'border-[var(--color-neutral-300)]',
        error: 'border-[var(--color-danger-border)] focus-within:border-[var(--color-danger)] focus-within:ring-[var(--color-danger)]/20',
        disabled: 'border-[var(--color-neutral-200)] bg-[var(--color-neutral-100)] opacity-60',
        readOnly: 'border-[var(--color-neutral-300)] bg-[var(--color-neutral-100)]'
      }
    },
    defaultVariants: {
      size: 'md',
      state: 'default'
    }
  }
);

const inputVariants = cva(
  [
    'min-w-0 flex-1 border-0 bg-transparent p-0 text-inherit outline-none',
    'placeholder:text-[var(--color-neutral-500)]',
    'disabled:cursor-not-allowed read-only:cursor-default'
  ]
);

const affixVariants = cva('shrink-0 text-[var(--color-neutral-500)]', {
  variants: {
    position: {
      prefix: 'mr-2',
      suffix: 'ml-2'
    }
  }
});

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ');
}

export interface TextInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'prefix'>,
    VariantProps<typeof inputShellVariants> {
  error?: string | string[];
  hint?: React.ReactNode;
  label?: React.ReactNode;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
}

export const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      className,
      disabled = false,
      error,
      hint,
      id,
      label,
      prefix,
      readOnly = false,
      required = false,
      size = 'md',
      suffix,
      ...props
    },
    ref
  ) => {
    const controlState = error ? 'error' : disabled ? 'disabled' : readOnly ? 'readOnly' : 'default';

    return (
      <FormField error={error} hint={hint} id={id} label={label} required={required}>
        {({ describedBy, id: fieldId, invalid }) => (
          <div className={cx(inputShellVariants({ size, state: controlState }), className)}>
            {prefix ? <span className={affixVariants({ position: 'prefix' })}>{prefix}</span> : null}
            <input
              ref={ref}
              id={fieldId}
              aria-describedby={describedBy}
              aria-invalid={invalid}
              className={inputVariants()}
              disabled={disabled}
              readOnly={readOnly}
              required={required}
              {...props}
            />
            {suffix ? <span className={affixVariants({ position: 'suffix' })}>{suffix}</span> : null}
          </div>
        )}
      </FormField>
    );
  }
);

TextInput.displayName = 'TextInput';

export { affixVariants, inputShellVariants, inputVariants };
