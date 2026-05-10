import * as React from 'react';
import { cva } from 'class-variance-authority';
import { Label, Text } from '../Typography';

const fieldVariants = cva('grid gap-1.5');
const messageListVariants = cva('grid gap-1');
const errorVariants = cva('text-[var(--text-sm)] leading-[var(--leading-normal)] text-[var(--color-danger-fg)]');
const hintVariants = cva('text-[var(--text-sm)] leading-[var(--leading-normal)] text-[var(--color-neutral-600)]');

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ');
}

export interface FormFieldRenderProps {
  id: string;
  labelId: string;
  hintId: string | undefined;
  errorId: string | undefined;
  describedBy: string | undefined;
  invalid: boolean;
}

export interface FormFieldProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {
  children?: React.ReactNode | ((props: FormFieldRenderProps) => React.ReactNode);
  error?: string | string[];
  hint?: React.ReactNode;
  id?: string;
  label?: React.ReactNode;
  required?: boolean;
}

export const FormField = React.forwardRef<HTMLDivElement, FormFieldProps>(
  ({ children, className, error, hint, id, label, required = false, ...props }, ref) => {
    const reactId = React.useId();
    const fieldId = id ?? `behaix-field-${reactId}`;
    const labelId = `${fieldId}-label`;
    const hintId = hint ? `${fieldId}-hint` : undefined;
    const errors = Array.isArray(error) ? error : error ? [error] : [];
    const errorId = errors.length > 0 ? `${fieldId}-error` : undefined;
    const describedBy = [hintId, errorId].filter(Boolean).join(' ') || undefined;
    const invalid = errors.length > 0;

    const renderProps: FormFieldRenderProps = {
      id: fieldId,
      labelId,
      hintId,
      errorId,
      describedBy,
      invalid
    };

    return (
      <div ref={ref} className={cx(fieldVariants(), className)} {...props}>
        {label ? (
          <Label id={labelId} htmlFor={fieldId}>
            {label}
            {required ? (
              <span aria-hidden="true" className="ml-1 text-[var(--color-danger-fg)]">
                *
              </span>
            ) : null}
          </Label>
        ) : null}

        {typeof children === 'function' ? children(renderProps) : children}

        {hint ? (
          <Text asChild id={hintId} className={hintVariants()}>
            <p>{hint}</p>
          </Text>
        ) : null}

        {errors.length > 0 ? (
          <div id={errorId} className={messageListVariants()} role="alert">
            {errors.map((message) => (
              <p key={message} className={errorVariants()}>
                {message}
              </p>
            ))}
          </div>
        ) : null}
      </div>
    );
  }
);

FormField.displayName = 'FormField';

export { errorVariants, fieldVariants, hintVariants, messageListVariants };
