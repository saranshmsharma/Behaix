import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const skeletonVariants = cva('block bg-[var(--color-neutral-200)]', {
  variants: {
    variant: {
      text: 'h-[1em] w-full rounded-[var(--radius-sm)]',
      circle: 'rounded-[var(--radius-full)]',
      rect: 'rounded-[var(--radius-md)]'
    },
    animate: {
      true: 'animate-pulse motion-reduce:animate-none',
      false: ''
    }
  },
  defaultVariants: {
    variant: 'text',
    animate: true
  }
});

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ');
}

export interface SkeletonProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof skeletonVariants> {
  height?: React.CSSProperties['height'];
  width?: React.CSSProperties['width'];
}

export const Skeleton = React.forwardRef<HTMLSpanElement, SkeletonProps>(
  ({ animate = true, className, height, style, variant = 'text', width, ...props }, ref) => (
    <span
      ref={ref}
      aria-hidden="true"
      className={cx(skeletonVariants({ animate, variant }), className)}
      style={{ width, height, ...style }}
      {...props}
    />
  )
);

Skeleton.displayName = 'Skeleton';

export { skeletonVariants };
