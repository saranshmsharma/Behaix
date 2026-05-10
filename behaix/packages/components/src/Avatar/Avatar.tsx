import * as React from 'react';
import { User } from 'lucide-react';
import { cva, type VariantProps } from 'class-variance-authority';

const avatarVariants = cva(
  'relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-[var(--radius-full)] border border-[var(--color-neutral-300)] bg-[var(--color-neutral-100)] font-[var(--font-medium)] text-[var(--color-neutral-700)]',
  {
    variants: {
      size: {
        xs: 'size-6 text-[var(--text-xs)]',
        sm: 'size-8 text-[var(--text-sm)]',
        md: 'size-10 text-[var(--text-base)]',
        lg: 'size-12 text-[var(--text-md)]',
        xl: 'size-16 text-[var(--text-lg)]'
      }
    },
    defaultVariants: {
      size: 'md'
    }
  }
);

const imageVariants = cva('size-full object-cover');
const groupVariants = cva('flex items-center');
const overflowVariants = cva(
  'inline-flex shrink-0 items-center justify-center rounded-[var(--radius-full)] border-2 border-[var(--color-surface)] bg-[var(--color-neutral-200)] font-[var(--font-medium)] text-[var(--color-neutral-700)]',
  {
    variants: {
      size: {
        xs: 'size-6 text-[var(--text-xs)]',
        sm: 'size-8 text-[var(--text-xs)]',
        md: 'size-10 text-[var(--text-sm)]',
        lg: 'size-12 text-[var(--text-base)]',
        xl: 'size-16 text-[var(--text-md)]'
      }
    },
    defaultVariants: {
      size: 'md'
    }
  }
);

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ');
}

function getInitials(name?: string) {
  if (!name) return undefined;
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join('');
}

export interface AvatarProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof avatarVariants> {
  alt?: string;
  fallbackIcon?: React.ReactNode;
  initials?: string;
  name?: string;
  src?: string;
}

export const Avatar = React.forwardRef<HTMLSpanElement, AvatarProps>(
  ({ alt, className, fallbackIcon, initials, name, size = 'md', src, ...props }, ref) => {
    const fallbackText = initials ?? getInitials(name);
    const accessibleName = alt ?? name ?? fallbackText ?? 'Avatar';

    return (
      <span ref={ref} aria-label={accessibleName} className={cx(avatarVariants({ size }), className)} role="img" {...props}>
        {src ? <img alt="" className={imageVariants()} src={src} /> : fallbackText ? fallbackText : fallbackIcon ?? <User aria-hidden="true" className="size-1/2" />}
      </span>
    );
  }
);

Avatar.displayName = 'Avatar';

export interface AvatarGroupProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof avatarVariants> {
  avatars: AvatarProps[];
  max?: number;
}

export const AvatarGroup = React.forwardRef<HTMLDivElement, AvatarGroupProps>(
  ({ avatars, className, max = 4, size = 'md', ...props }, ref) => {
    const visibleAvatars = avatars.slice(0, max);
    const overflow = Math.max(avatars.length - visibleAvatars.length, 0);

    return (
      <div ref={ref} className={cx(groupVariants(), className)} {...props}>
        {visibleAvatars.map((avatar, index) => (
          <Avatar
            key={`${avatar.name ?? avatar.initials ?? avatar.src ?? 'avatar'}-${index}`}
            {...avatar}
            className={cx(index > 0 && '-ml-2 border-2 border-[var(--color-surface)]', avatar.className)}
            size={size}
          />
        ))}
        {overflow > 0 ? (
          <span aria-label={`${overflow} more avatars`} className={cx(overflowVariants({ size }), '-ml-2')}>
            +{overflow}
          </span>
        ) : null}
      </div>
    );
  }
);

AvatarGroup.displayName = 'AvatarGroup';

export { avatarVariants, getInitials, groupVariants, imageVariants, overflowVariants };
