import * as React from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { cva, type VariantProps } from 'class-variance-authority';

const contentVariants = cva(
  'z-50 max-w-60 rounded-[var(--radius-md)] border border-[var(--color-neutral-300)] bg-[var(--color-neutral-950)] px-3 py-2 text-[var(--text-sm)] leading-[var(--leading-normal)] text-[var(--color-neutral-50)] shadow-[var(--shadow-lg)]'
);

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ');
}

export interface TooltipProps extends VariantProps<typeof contentVariants> {
  children: React.ReactNode;
  content: React.ReactNode;
  delay?: number;
  disabled?: boolean;
  side?: TooltipPrimitive.TooltipContentProps['side'];
}

export function Tooltip({ children, content, delay = 400, disabled = false, side = 'top' }: TooltipProps) {
  if (disabled) return <>{children}</>;

  return (
    <TooltipPrimitive.Provider delayDuration={delay}>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
        <TooltipPrimitive.Portal>
          <TooltipPrimitive.Content className={cx(contentVariants())} side={side} sideOffset={6}>
            {content}
            <TooltipPrimitive.Arrow className="fill-[var(--color-neutral-950)]" />
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
}

export { contentVariants as tooltipContentVariants };
