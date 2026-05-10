import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { FormField } from '../FormField';

const textareaVariants = cva(
  [
    'w-full rounded-[var(--radius-md)] border bg-[var(--color-surface-overlay)] px-3 py-2 text-[var(--color-neutral-800)] shadow-[var(--shadow-sm)] outline-none',
    'placeholder:text-[var(--color-neutral-500)]',
    'transition-[border-color,box-shadow,background-color] duration-[var(--duration-base)] ease-[var(--ease-default)]',
    'focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20',
    'disabled:cursor-not-allowed disabled:border-[var(--color-neutral-200)] disabled:bg-[var(--color-neutral-100)] disabled:opacity-60',
    'read-only:cursor-default read-only:bg-[var(--color-neutral-100)] motion-reduce:transition-none'
  ],
  {
    variants: {
      size: {
        sm: 'text-[var(--text-sm)] leading-[var(--leading-normal)]',
        md: 'text-[var(--text-base)] leading-[var(--leading-normal)]',
        lg: 'text-[var(--text-md)] leading-[var(--leading-normal)]'
      },
      state: {
        default: 'border-[var(--color-neutral-300)]',
        error: 'border-[var(--color-danger-border)] focus:border-[var(--color-danger)] focus:ring-[var(--color-danger)]/20'
      },
      autoResize: {
        true: 'resize-none overflow-hidden',
        false: 'resize-y'
      }
    },
    defaultVariants: {
      size: 'md',
      state: 'default',
      autoResize: false
    }
  }
);

const countVariants = cva('text-right text-[var(--text-xs)] leading-[var(--leading-tight)]', {
  variants: {
    state: {
      default: 'text-[var(--color-neutral-500)]',
      error: 'text-[var(--color-danger-fg)]'
    }
  },
  defaultVariants: {
    state: 'default'
  }
});

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ');
}

export interface TextareaProps
  extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'children'>,
    VariantProps<typeof textareaVariants> {
  error?: string | string[];
  hint?: React.ReactNode;
  label?: React.ReactNode;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      autoResize = false,
      className,
      error,
      hint,
      id,
      label,
      maxLength,
      onChange,
      required = false,
      rows = 4,
      size = 'md',
      value,
      defaultValue,
      ...props
    },
    ref
  ) => {
    const innerRef = React.useRef<HTMLTextAreaElement | null>(null);
    const [count, setCount] = React.useState(String(value ?? defaultValue ?? '').length);

    const setRefs = React.useCallback(
      (node: HTMLTextAreaElement | null) => {
        innerRef.current = node;
        if (typeof ref === 'function') {
          ref(node);
        } else if (ref) {
          ref.current = node;
        }
      },
      [ref]
    );

    const resize = React.useCallback(() => {
      if (!autoResize || !innerRef.current) return;
      innerRef.current.style.height = 'auto';
      innerRef.current.style.height = `${innerRef.current.scrollHeight}px`;
    }, [autoResize]);

    React.useEffect(() => {
      resize();
    }, [resize, value]);

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setCount(event.currentTarget.value.length);
      resize();
      onChange?.(event);
    };

    const countState = maxLength && count > maxLength ? 'error' : 'default';
    const fieldState = error || countState === 'error' ? 'error' : 'default';

    return (
      <FormField error={error} hint={hint} id={id} label={label} required={required}>
        {({ describedBy, id: fieldId, invalid }) => (
          <>
            <textarea
              ref={setRefs}
              id={fieldId}
              aria-describedby={describedBy}
              aria-invalid={invalid || countState === 'error'}
              className={cx(textareaVariants({ autoResize, size, state: fieldState }), className)}
              defaultValue={defaultValue}
              maxLength={maxLength}
              onChange={handleChange}
              required={required}
              rows={rows}
              value={value}
              {...props}
            />
            {maxLength ? (
              <div className={countVariants({ state: countState })}>
                {count}/{maxLength}
              </div>
            ) : null}
          </>
        )}
      </FormField>
    );
  }
);

Textarea.displayName = 'Textarea';

export { countVariants, textareaVariants };
