import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const cardVariants = cva(
  [
    'rounded-lg bg-[var(--color-surface-raised)] text-foreground',
    'transition-[border-color,box-shadow,transform,background-color] duration-[var(--duration-base)] ease-[var(--ease-default)] motion-reduce:transition-none'
  ],
  {
    variants: {
      variant: {
        flat: 'border border-transparent shadow-none',
        outlined: 'border border-border-subtle shadow-none',
        elevated: 'border border-transparent shadow-md'
      },
      isInteractive: {
        true: 'cursor-pointer hover:-translate-y-0.5 hover:border-[var(--color-neutral-400)] hover:shadow-lg focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 focus-within:ring-offset-[var(--color-surface)]',
        false: ''
      }
    },
    defaultVariants: {
      variant: 'outlined',
      isInteractive: false
    }
  }
);

const cardHeaderVariants = cva('grid gap-1.5 p-6 pb-0');
const cardBodyVariants = cva('p-6');
const cardFooterVariants = cva('flex items-center gap-3 border-t border-border-subtle p-6');

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ');
}

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, isInteractive = false, variant = 'outlined', ...props }, ref) => (
    <div ref={ref} className={cx(cardVariants({ isInteractive, variant }), className)} {...props} />
  )
);

Card.displayName = 'Card';

export interface CardSlotProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CardHeader = React.forwardRef<HTMLDivElement, CardSlotProps>(({ className, ...props }, ref) => (
  <div ref={ref} className={cx(cardHeaderVariants(), className)} {...props} />
));

CardHeader.displayName = 'CardHeader';

export const CardBody = React.forwardRef<HTMLDivElement, CardSlotProps>(({ className, ...props }, ref) => (
  <div ref={ref} className={cx(cardBodyVariants(), className)} {...props} />
));

CardBody.displayName = 'CardBody';

export const CardFooter = React.forwardRef<HTMLDivElement, CardSlotProps>(({ className, ...props }, ref) => (
  <div ref={ref} className={cx(cardFooterVariants(), className)} {...props} />
));

CardFooter.displayName = 'CardFooter';

export { cardBodyVariants, cardFooterVariants, cardHeaderVariants, cardVariants };
