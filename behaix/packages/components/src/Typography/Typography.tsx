import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ');
}

const headingVariants = cva('m-0 text-[var(--color-neutral-800)]', {
  variants: {
    level: {
      h1: 'text-[var(--text-3xl)] font-[var(--font-semibold)] leading-[var(--leading-tight)]',
      h2: 'text-[var(--text-2xl)] font-[var(--font-semibold)] leading-[var(--leading-tight)]',
      h3: 'text-[var(--text-xl)] font-[var(--font-semibold)] leading-[var(--leading-tight)]',
      h4: 'text-[var(--text-lg)] font-[var(--font-semibold)] leading-[var(--leading-tight)]'
    }
  },
  defaultVariants: {
    level: 'h2'
  }
});

const textVariants = cva('m-0 text-[var(--color-neutral-700)]', {
  variants: {
    size: {
      xs: 'text-[var(--text-xs)]',
      sm: 'text-[var(--text-sm)]',
      base: 'text-[var(--text-base)]',
      md: 'text-[var(--text-md)]',
      lg: 'text-[var(--text-lg)]'
    },
    weight: {
      regular: 'font-[var(--font-regular)]',
      medium: 'font-[var(--font-medium)]',
      semibold: 'font-[var(--font-semibold)]'
    },
    leading: {
      tight: 'leading-[var(--leading-tight)]',
      normal: 'leading-[var(--leading-normal)]',
      relaxed: 'leading-[var(--leading-relaxed)]'
    },
    tone: {
      default: 'text-[var(--color-neutral-700)]',
      muted: 'text-[var(--color-neutral-600)]',
      subtle: 'text-[var(--color-neutral-500)]',
      danger: 'text-[var(--color-danger-fg)]',
      success: 'text-[var(--color-success-fg)]'
    }
  },
  defaultVariants: {
    size: 'base',
    weight: 'regular',
    leading: 'normal',
    tone: 'default'
  }
});

const labelVariants = cva(
  'm-0 inline-flex text-[var(--text-sm)] font-[var(--font-medium)] leading-[var(--leading-tight)] text-[var(--color-neutral-800)]'
);

const codeVariants = cva(
  'rounded-[var(--radius-sm)] border border-[var(--color-neutral-300)] bg-[var(--color-neutral-100)] px-1.5 py-0.5 font-[var(--font-mono)] text-[var(--text-sm)] leading-[var(--leading-tight)] text-[var(--color-neutral-800)]'
);

export interface HeadingProps
  extends Omit<React.HTMLAttributes<HTMLHeadingElement>, 'children'>,
    VariantProps<typeof headingVariants> {
  children: React.ReactNode;
  asChild?: boolean;
}

export const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ asChild = false, children, className, level = 'h2', ...props }, ref) => {
    const Comp = asChild ? Slot : level ?? 'h2';

    return (
      <Comp ref={ref} className={cx(headingVariants({ level }), className)} {...props}>
        {children}
      </Comp>
    );
  }
);

Heading.displayName = 'Heading';

export interface TextProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof textVariants> {
  asChild?: boolean;
}

export const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  ({ asChild = false, children, className, leading, size, tone, weight, ...props }, ref) => {
    const Comp = asChild ? Slot : 'p';

    return (
      <Comp ref={ref} className={cx(textVariants({ leading, size, tone, weight }), className)} {...props}>
        {children}
      </Comp>
    );
  }
);

Text.displayName = 'Text';

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  asChild?: boolean;
}

export const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ asChild = false, children, className, ...props }, ref) => {
    const Comp = asChild ? Slot : 'label';

    return (
      <Comp ref={ref} className={cx(labelVariants(), className)} {...props}>
        {children}
      </Comp>
    );
  }
);

Label.displayName = 'Label';

export interface CodeProps extends React.HTMLAttributes<HTMLElement> {
  asChild?: boolean;
}

export const Code = React.forwardRef<HTMLElement, CodeProps>(
  ({ asChild = false, children, className, ...props }, ref) => {
    const Comp = asChild ? Slot : 'code';

    return (
      <Comp ref={ref} className={cx(codeVariants(), className)} {...props}>
        {children}
      </Comp>
    );
  }
);

Code.displayName = 'Code';

export { codeVariants, headingVariants, labelVariants, textVariants };
