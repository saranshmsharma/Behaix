import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const navbarVariants = cva(
  'sticky top-0 z-40 flex h-16 w-full items-center px-6 transition-all duration-300',
  {
    variants: {
      variant: {
        default: 'border-b border-border-subtle bg-surface',
        glass: 'border-b border-border-subtle bg-surface/80 backdrop-blur-md',
        floating: 'mx-6 my-4 w-[calc(100%-3rem)] rounded-xl border border-border-subtle bg-surface/90 shadow-lg backdrop-blur-md'
      },
      isFixed: {
        true: 'fixed top-0 left-0 right-0',
        false: 'relative'
      }
    },
    defaultVariants: {
      variant: 'glass',
      isFixed: false
    }
  }
);

export interface NavbarProps extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof navbarVariants> {}

export const Navbar = React.forwardRef<HTMLElement, NavbarProps>(
  ({ variant, isFixed, className, children, ...props }, ref) => (
    <header
      ref={ref}
      className={navbarVariants({ variant, isFixed, className })}
      {...props}
    >
      {children}
    </header>
  )
);
Navbar.displayName = 'Navbar';

export const NavbarSection = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={['flex h-full items-center gap-6', className].filter(Boolean).join(' ')} {...props} />
);

export const NavbarBrand = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={['flex items-center gap-3 font-bold text-lg text-foreground tracking-tight', className].filter(Boolean).join(' ')} {...props} />
);

const navbarLinkVariants = cva(
  'relative flex h-full items-center px-2 text-sm font-medium transition-colors hover:text-foreground',
  {
    variants: {
      isActive: {
        true: 'text-foreground after:absolute after:-bottom-[1px] after:left-0 after:h-0.5 after:w-full after:bg-primary after:shadow-[0_1px_4px_rgba(var(--primary-rgb),0.4)]',
        false: 'text-foreground-muted'
      }
    },
    defaultVariants: {
      isActive: false
    }
  }
);

interface NavbarLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement>, VariantProps<typeof navbarLinkVariants> {}

export const NavbarLink = ({ isActive, className, ...props }: NavbarLinkProps) => (
  <a className={navbarLinkVariants({ isActive, className })} {...props} />
);
