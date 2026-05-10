import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ');
}

const headingVariants = cva('m-0 text-foreground', {
  variants: {
    level: {
      h1: 'text-3xl font-bold leading-tight tracking-tight',
      h2: 'text-2xl font-bold leading-tight tracking-tight',
      h3: 'text-xl font-semibold leading-tight',
      h4: 'text-lg font-semibold leading-tight'
    }
  },
  defaultVariants: {
    level: 'h2'
  }
});

const textVariants = cva('m-0 text-[var(--color-foreground)]', {
  variants: {
    size: {
      '2xs': 'text-2xs',
      xs: 'text-xs',
      sm: 'text-sm',
      base: 'text-base',
      md: 'text-md',
      lg: 'text-lg'
    },
    weight: {
      regular: 'font-regular',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold'
    },
    leading: {
      tight: 'leading-tight',
      normal: 'leading-normal',
      relaxed: 'leading-relaxed'
    },
    tone: {
      default: 'text-foreground',
      muted: 'text-foreground-muted',
      subtle: 'text-[var(--color-neutral-500)]',
      danger: 'text-danger-fg',
      success: 'text-success-fg'
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
  'm-0 inline-flex text-sm font-medium leading-tight text-foreground'
);

const codeVariants = cva(
  'rounded-[var(--radius-sm)] border border-[var(--color-neutral-300)] bg-[var(--color-neutral-100)] px-1.5 py-0.5 font-mono text-sm leading-tight text-foreground'
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
