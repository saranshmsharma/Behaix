import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '../Button';
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from '../Tooltip';

const sidebarVariants = cva(
  'group relative flex flex-col transition-all duration-300 ease-in-out',
  {
    variants: {
      variant: {
        default: 'border-r border-border-subtle bg-surface',
        floating: 'm-6 h-[calc(100vh-3rem)] rounded-2xl border border-border-subtle bg-surface shadow-xl',
        inset: 'bg-surface-raised p-3'
      },
      isCollapsed: {
        true: 'w-[72px]',
        false: 'w-[280px]'
      }
    },
    defaultVariants: {
      variant: 'default',
      isCollapsed: false
    }
  }
);

interface SidebarContextValue {
  isCollapsed: boolean;
  setIsCollapsed: (value: boolean) => void;
  variant: 'default' | 'floating' | 'inset';
}

const SidebarContext = React.createContext<SidebarContextValue | undefined>(undefined);

export function useSidebar() {
  const context = React.useContext(SidebarContext);
  if (!context) {
    throw new Error('useSidebar must be used within a SidebarProvider');
  }
  return context;
}

export interface SidebarProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof sidebarVariants> {
  defaultCollapsed?: boolean;
}

export const Sidebar = React.forwardRef<HTMLDivElement, SidebarProps>(
  ({ defaultCollapsed = false, variant = 'default', className, children, ...props }, ref) => {
    const [isCollapsed, setIsCollapsed] = React.useState(defaultCollapsed);

    return (
      <SidebarContext.Provider value={{ isCollapsed, setIsCollapsed, variant: variant || 'default' }}>
        <TooltipProvider>
          <aside
            ref={ref}
            className={sidebarVariants({ variant, isCollapsed, className })}
            {...props}
          >
            {children}
          </aside>
        </TooltipProvider>
      </SidebarContext.Provider>
    );
  }
);
Sidebar.displayName = 'Sidebar';

export const SidebarHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  const { isCollapsed } = useSidebar();
  return (
    <div 
      className={[
        'flex h-20 items-center transition-all duration-300 overflow-hidden',
        isCollapsed ? 'justify-center px-0' : 'px-6',
        className
      ].filter(Boolean).join(' ')} 
      {...props} 
    />
  );
};

export const SidebarBrand = ({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  const { isCollapsed } = useSidebar();
  return (
    <div className={[
      'flex items-center transition-all duration-300',
      isCollapsed ? 'justify-center w-full' : 'gap-3',
      className
    ].filter(Boolean).join(' ')} {...props}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child.type === 'span' && isCollapsed) {
          return null;
        }
        return child;
      })}
    </div>
  );
};

export const SidebarContent = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  const { isCollapsed } = useSidebar();
  return (
    <div 
      className={[
        'flex-1 overflow-y-auto py-4 transition-all duration-300',
        isCollapsed ? 'px-2' : 'px-4',
        className
      ].filter(Boolean).join(' ')} 
      {...props} 
    />
  );
};

export const SidebarFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  const { isCollapsed } = useSidebar();
  return (
    <div 
      className={[
        'mt-auto border-t border-border-subtle transition-all duration-300 overflow-hidden',
        isCollapsed ? 'p-2 flex justify-center' : 'p-6',
        className
      ].filter(Boolean).join(' ')} 
      {...props} 
    />
  );
};

const sidebarItemVariants = cva(
  'flex items-center gap-3 rounded-xl transition-all duration-200 hover:bg-surface-hover active:scale-[0.98] overflow-hidden whitespace-nowrap',
  {
    variants: {
      isActive: {
        true: 'bg-primary text-primary-fg shadow-md shadow-primary/20 hover:bg-primary/90',
        false: 'text-foreground-muted hover:text-foreground'
      },
      isCollapsed: {
        true: 'h-10 w-10 justify-center px-0',
        false: 'w-full px-4 py-2.5'
      }
    },
    defaultVariants: {
      isActive: false,
      isCollapsed: false
    }
  }
);

interface SidebarItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof sidebarItemVariants> {
  icon?: React.ReactNode;
  label: string;
}

export const SidebarItem = ({ icon, label, isActive, className, ...props }: SidebarItemProps) => {
  const { isCollapsed } = useSidebar();

  const content = (
    <button className={sidebarItemVariants({ isActive, isCollapsed, className })} {...props}>
      {icon && <span className="flex-shrink-0 flex items-center justify-center">{icon}</span>}
      {!isCollapsed && <span className="truncate text-sm font-medium">{label}</span>}
    </button>
  );

  if (isCollapsed) {
    return (
      <Tooltip delayDuration={0}>
        <TooltipTrigger asChild>
          <div className="flex justify-center w-full mb-2">{content}</div>
        </TooltipTrigger>
        <TooltipContent side="right" sideOffset={12}>{label}</TooltipContent>
      </Tooltip>
    );
  }

  return <div className="w-full mb-1">{content}</div>;
};

export const SidebarToggle = ({ className, ...props }: React.ComponentProps<typeof Button>) => {
  const { isCollapsed, setIsCollapsed, variant } = useSidebar();

  const toggleClasses = [
    'absolute z-20 h-7 w-7 rounded-full border border-border-subtle bg-surface shadow-md transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center',
    variant === 'floating' ? '-right-3.5 top-24' : '-right-3.5 top-32',
    className
  ].filter(Boolean).join(' ');

  return (
    <Button
      variant="ghost"
      size="sm"
      isIconOnly
      onClick={() => setIsCollapsed(!isCollapsed)}
      className={toggleClasses}
      {...props}
    >
      {isCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
    </Button>
  );
};
