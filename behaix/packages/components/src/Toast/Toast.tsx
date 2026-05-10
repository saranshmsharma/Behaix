import * as React from 'react';
import { AlertCircle, Check, Info, TriangleAlert, X } from 'lucide-react';
import { cva, type VariantProps } from 'class-variance-authority';

type ToastPosition = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
type ToastVariant = 'default' | 'success' | 'warning' | 'danger';

export interface ToastOptions {
  action?: React.ReactNode;
  description?: React.ReactNode;
  duration?: number;
  id?: string;
  onDismiss?: () => void;
  title: React.ReactNode;
  variant?: ToastVariant;
}

interface ToastRecord extends ToastOptions {
  id: string;
}

interface ToastContextValue {
  dismissToast: (id: string) => void;
  showToast: (toast: ToastOptions) => string;
}

const ToastContext = React.createContext<ToastContextValue | null>(null);

const toastVariants = cva(
  'pointer-events-auto grid w-full max-w-sm grid-cols-[auto_1fr_auto] gap-3 rounded-[var(--radius-lg)] border bg-[var(--color-surface-overlay)] p-4 text-[var(--color-neutral-800)] shadow-[var(--shadow-lg)]',
  {
    variants: {
      variant: {
        default: 'border-[var(--color-neutral-300)]',
        success: 'border-[var(--color-success-border)] bg-[var(--color-success-bg)] text-[var(--color-success-fg)]',
        warning: 'border-[var(--color-warning-border)] bg-[var(--color-warning-bg)] text-[var(--color-warning-fg)]',
        danger: 'border-[var(--color-danger-border)] bg-[var(--color-danger-bg)] text-[var(--color-danger-fg)]'
      }
    },
    defaultVariants: {
      variant: 'default'
    }
  }
);

const viewportVariants = cva('fixed z-50 grid w-full max-w-sm gap-3 p-4 pointer-events-none', {
  variants: {
    position: {
      'top-right': 'right-0 top-0',
      'top-left': 'left-0 top-0',
      'bottom-right': 'bottom-0 right-0',
      'bottom-left': 'bottom-0 left-0'
    }
  },
  defaultVariants: {
    position: 'top-right'
  }
});

const titleVariants = cva('text-[var(--text-base)] font-[var(--font-semibold)] leading-[var(--leading-tight)]');
const descriptionVariants = cva('mt-1 text-[var(--text-sm)] leading-[var(--leading-normal)] opacity-90');
const closeVariants = cva(
  'rounded-[var(--radius-sm)] p-1 opacity-70 transition-opacity hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]'
);

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ');
}

function getToastIcon(variant: ToastVariant) {
  if (variant === 'success') return <Check aria-hidden="true" className="size-5" />;
  if (variant === 'warning') return <TriangleAlert aria-hidden="true" className="size-5" />;
  if (variant === 'danger') return <AlertCircle aria-hidden="true" className="size-5" />;
  return <Info aria-hidden="true" className="size-5" />;
}

export interface ToastProviderProps {
  children: React.ReactNode;
  position?: ToastPosition;
}

export function ToastProvider({ children, position = 'top-right' }: ToastProviderProps) {
  const [toasts, setToasts] = React.useState<ToastRecord[]>([]);

  const dismissToast = React.useCallback((id: string) => {
    setToasts((current) => {
      const toast = current.find((item) => item.id === id);
      toast?.onDismiss?.();
      return current.filter((item) => item.id !== id);
    });
  }, []);

  const showToast = React.useCallback(
    (toast: ToastOptions) => {
      const id = toast.id ?? `toast-${Date.now()}-${Math.random().toString(16).slice(2)}`;
      setToasts((current) => [...current, { ...toast, id }]);
      window.setTimeout(() => dismissToast(id), toast.duration ?? 5000);
      return id;
    },
    [dismissToast]
  );

  return (
    <ToastContext.Provider value={{ dismissToast, showToast }}>
      {children}
      <div aria-live="polite" aria-relevant="additions text" className={viewportVariants({ position })}>
        {toasts.map((toast) => (
          <ToastItem key={toast.id} toast={toast} onDismiss={() => dismissToast(toast.id)} />
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = React.useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider.');
  }
  return context;
}

export interface ToastItemProps extends VariantProps<typeof toastVariants> {
  onDismiss: () => void;
  toast: ToastRecord;
}

export function ToastItem({ onDismiss, toast }: ToastItemProps) {
  const variant = toast.variant ?? 'default';

  return (
    <div className={toastVariants({ variant })} role="status">
      <div className="pt-0.5">{getToastIcon(variant)}</div>
      <div>
        <div className={titleVariants()}>{toast.title}</div>
        {toast.description ? <div className={descriptionVariants()}>{toast.description}</div> : null}
        {toast.action ? <div className="mt-3">{toast.action}</div> : null}
      </div>
      <button aria-label="Dismiss notification" className={closeVariants()} type="button" onClick={onDismiss}>
        <X aria-hidden="true" className="size-4" />
      </button>
    </div>
  );
}

export { closeVariants, descriptionVariants, titleVariants, toastVariants, viewportVariants };
