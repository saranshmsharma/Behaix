import * as React from 'react';
import {
  AlertCircle,
  ArrowRight,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Download,
  Info,
  Loader2,
  Menu,
  MoreHorizontal,
  Plus,
  Search,
  Settings,
  Trash2,
  User,
  X,
  type LucideIcon
} from 'lucide-react';
import { cva, type VariantProps } from 'class-variance-authority';

const iconMap = {
  alertCircle: AlertCircle,
  arrowRight: ArrowRight,
  check: Check,
  chevronDown: ChevronDown,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  chevronUp: ChevronUp,
  download: Download,
  info: Info,
  loader: Loader2,
  menu: Menu,
  moreHorizontal: MoreHorizontal,
  plus: Plus,
  search: Search,
  settings: Settings,
  trash: Trash2,
  user: User,
  x: X
} satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof iconMap;

const iconVariants = cva('inline-block shrink-0', {
  variants: {
    size: {
      sm: 'size-4',
      md: 'size-5',
      lg: 'size-6'
    },
    color: {
      inherit: 'text-current',
      primary: 'text-[var(--color-primary)]',
      muted: 'text-[var(--color-neutral-600)]',
      success: 'text-[var(--color-success-fg)]',
      warning: 'text-[var(--color-warning-fg)]',
      danger: 'text-[var(--color-danger-fg)]',
      info: 'text-[var(--color-info-fg)]'
    }
  },
  defaultVariants: {
    size: 'md',
    color: 'inherit'
  }
});

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ');
}

export interface IconProps
  extends Omit<React.SVGAttributes<SVGSVGElement>, 'color'>,
    VariantProps<typeof iconVariants> {
  name: IconName;
  label?: string;
}

export const Icon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, color = 'inherit', label, name, size = 'md', strokeWidth = 1.75, ...props }, ref) => {
    const LucideIcon = iconMap[name];

    return (
      <LucideIcon
        ref={ref}
        aria-hidden={label ? undefined : true}
        aria-label={label}
        className={cx(iconVariants({ color, size }), className)}
        focusable="false"
        role={label ? 'img' : undefined}
        strokeWidth={strokeWidth}
        {...props}
      />
    );
  }
);

Icon.displayName = 'Icon';

export { iconMap, iconVariants };
