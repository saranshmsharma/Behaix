import * as React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import { cva, type VariantProps } from 'class-variance-authority';
import { Button } from '../Button';

const modalContentVariants = cva(
  [
    'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-[var(--color-neutral-300)] bg-[var(--color-surface-overlay)] p-6 shadow-lg duration-[var(--duration-base)] ease-[var(--ease-default)]',
    'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]'
  ],
  {
    variants: {
      size: {
        sm: 'sm:max-w-sm sm:rounded-xl',
        md: 'sm:max-w-md sm:rounded-xl',
        lg: 'sm:max-w-lg sm:rounded-xl',
        fullscreen: 'h-screen max-w-none border-none p-0 sm:max-w-none sm:rounded-none'
      }
    },
    defaultVariants: {
      size: 'md'
    }
  }
);

export interface ModalProps extends VariantProps<typeof modalContentVariants> {
  isOpen?: boolean;
  onClose?: () => void;
  closeOnOverlay?: boolean;
  closeOnEsc?: boolean;
  children?: React.ReactNode;
}

export function Modal({
  isOpen,
  onClose,
  closeOnOverlay = true,
  closeOnEsc = true,
  size,
  children
}: ModalProps) {
  return (
    <DialogPrimitive.Root open={isOpen} onOpenChange={(open) => !open && onClose?.()}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay
          className="fixed inset-0 z-50 bg-[var(--color-neutral-950)]/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
          onClick={(e) => {
            if (!closeOnOverlay) {
              e.preventDefault();
            }
          }}
        />
        <DialogPrimitive.Content
          className={modalContentVariants({ size })}
          onEscapeKeyDown={(e) => {
            if (!closeOnEsc) {
              e.preventDefault();
            }
          }}
          onInteractOutside={(e) => {
            if (!closeOnOverlay) {
              e.preventDefault();
            }
          }}
        >
          {children}
          <DialogPrimitive.Close asChild>
            <Button
              variant="ghost"
              size="sm"
              isIconOnly
              aria-label="Close modal"
              className="absolute right-4 top-4 rounded-sm text-foreground-muted opacity-70 hover:opacity-100 disabled:pointer-events-none data-[state=open]:bg-[var(--color-neutral-100)] data-[state=open]:text-foreground-muted"
            >
              <X aria-hidden="true" size={16} />
            </Button>
          </DialogPrimitive.Close>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}

export function ModalHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={['flex flex-col space-y-1.5 text-center sm:text-left', className].filter(Boolean).join(' ')}
      {...props}
    />
  );
}

export function ModalBody({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={['flex-1', className].filter(Boolean).join(' ')} {...props} />
  );
}

export function ModalFooter({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={['flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2', className].filter(Boolean).join(' ')}
      {...props}
    />
  );
}

export const ModalTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={['text-lg font-semibold leading-tight tracking-tight text-foreground', className].filter(Boolean).join(' ')}
    {...props}
  />
));
ModalTitle.displayName = DialogPrimitive.Title.displayName;

export const ModalDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={['text-sm text-foreground-muted', className].filter(Boolean).join(' ')}
    {...props}
  />
));
ModalDescription.displayName = DialogPrimitive.Description.displayName;
