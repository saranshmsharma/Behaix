import * as React from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';
import { Check, ChevronDown, Loader2, Search } from 'lucide-react';
import { cva, type VariantProps } from 'class-variance-authority';
import { FormField } from '../FormField';

export interface SelectOption {
  disabled?: boolean;
  label: string;
  value: string;
}

export interface SelectGroup {
  label?: string;
  options: SelectOption[];
}

const triggerVariants = cva(
  [
    'flex w-full items-center justify-between gap-2 rounded-[var(--radius-md)] border bg-[var(--color-surface-overlay)] text-[var(--color-neutral-800)] shadow-[var(--shadow-sm)]',
    'transition-[border-color,box-shadow,background-color] duration-[var(--duration-base)] ease-[var(--ease-default)]',
    'focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20 disabled:cursor-not-allowed disabled:opacity-60 motion-reduce:transition-none',
    '[&>span]:truncate'
  ],
  {
    variants: {
      size: {
        sm: 'h-8 px-2 text-[var(--text-sm)]',
        md: 'h-10 px-3 text-[var(--text-base)]',
        lg: 'h-12 px-4 text-[var(--text-md)]'
      },
      state: {
        default: 'border-[var(--color-neutral-300)] focus:border-[var(--color-primary)]',
        error: 'border-[var(--color-danger-border)] focus:border-[var(--color-danger)] focus:ring-[var(--color-danger)]/20'
      }
    },
    defaultVariants: {
      size: 'md',
      state: 'default'
    }
  }
);

const contentVariants = cva(
  'z-50 max-h-72 min-w-[var(--radix-select-trigger-width)] overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-neutral-300)] bg-[var(--color-surface-overlay)] text-[var(--color-neutral-800)] shadow-[var(--shadow-lg)]'
);

const itemVariants = cva(
  [
    'relative flex cursor-default select-none items-center rounded-[var(--radius-sm)] py-2 pl-8 pr-3 text-[var(--text-sm)] outline-none',
    'focus:bg-[var(--color-neutral-100)] data-[disabled]:pointer-events-none data-[disabled]:opacity-50'
  ]
);

const groupLabelVariants = cva('px-3 py-2 text-[var(--text-xs)] font-[var(--font-semibold)] text-[var(--color-neutral-500)]');
const searchShellVariants = cva('flex items-center gap-2 border-b border-[var(--color-neutral-300)] px-3 py-2 text-[var(--color-neutral-600)]');

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ');
}

function normalizeGroups(options: SelectOption[] | SelectGroup[]) {
  const first = options[0] as SelectGroup | SelectOption | undefined;
  if (first && 'options' in first) return options as SelectGroup[];
  return [{ options: options as SelectOption[] }];
}

export interface SelectProps
  extends Omit<SelectPrimitive.SelectProps, 'children'>,
    VariantProps<typeof triggerVariants> {
  error?: string | string[];
  hint?: React.ReactNode;
  isLoading?: boolean;
  label?: React.ReactNode;
  options: SelectOption[] | SelectGroup[];
  placeholder?: string;
  required?: boolean;
  searchPlaceholder?: string;
  searchable?: boolean;
}

export const Select = React.forwardRef<HTMLButtonElement, SelectProps>(
  (
    {
      disabled = false,
      error,
      hint,
      isLoading = false,
      label,
      options,
      placeholder = 'Select an option',
      required = false,
      searchPlaceholder = 'Search options',
      searchable = false,
      size = 'md',
      ...props
    },
    ref
  ) => {
    const [query, setQuery] = React.useState('');
    const groups = normalizeGroups(options).map((group) => ({
      ...group,
      options: group.options.filter((option) => option.label.toLowerCase().includes(query.toLowerCase()))
    }));
    const state = error ? 'error' : 'default';

    return (
      <FormField error={error} hint={hint} label={label} required={required}>
        {({ describedBy, id, invalid }) => (
          <SelectPrimitive.Root disabled={disabled || isLoading} {...props}>
            <SelectPrimitive.Trigger
              ref={ref}
              id={id}
              aria-describedby={describedBy}
              aria-invalid={invalid}
              className={triggerVariants({ size, state })}
            >
              <SelectPrimitive.Value placeholder={placeholder} />
              <SelectPrimitive.Icon asChild>
                {isLoading ? (
                  <Loader2 aria-hidden="true" className="size-4 animate-spin motion-reduce:animate-none" />
                ) : (
                  <ChevronDown aria-hidden="true" className="size-4" />
                )}
              </SelectPrimitive.Icon>
            </SelectPrimitive.Trigger>
            <SelectPrimitive.Portal>
              <SelectPrimitive.Content className={contentVariants()} position="popper" sideOffset={4}>
                {searchable ? (
                  <div className={searchShellVariants()}>
                    <Search aria-hidden="true" className="size-4" />
                    <input
                      aria-label={searchPlaceholder}
                      className="min-w-0 flex-1 border-0 bg-transparent p-0 text-[var(--text-sm)] text-[var(--color-neutral-800)] outline-none placeholder:text-[var(--color-neutral-500)]"
                      placeholder={searchPlaceholder}
                      value={query}
                      onChange={(event) => setQuery(event.currentTarget.value)}
                    />
                  </div>
                ) : null}
                <SelectPrimitive.Viewport className="p-1">
                  {groups.map((group, groupIndex) => (
                    <SelectPrimitive.Group key={group.label ?? groupIndex}>
                      {group.label ? <SelectPrimitive.Label className={groupLabelVariants()}>{group.label}</SelectPrimitive.Label> : null}
                      {group.options.map((option) => (
                        <SelectPrimitive.Item
                          key={option.value}
                          className={itemVariants()}
                          disabled={option.disabled}
                          value={option.value}
                        >
                          <SelectPrimitive.ItemIndicator className="absolute left-2 inline-flex items-center">
                            <Check aria-hidden="true" className="size-4" />
                          </SelectPrimitive.ItemIndicator>
                          <SelectPrimitive.ItemText>{option.label}</SelectPrimitive.ItemText>
                        </SelectPrimitive.Item>
                      ))}
                    </SelectPrimitive.Group>
                  ))}
                </SelectPrimitive.Viewport>
              </SelectPrimitive.Content>
            </SelectPrimitive.Portal>
          </SelectPrimitive.Root>
        )}
      </FormField>
    );
  }
);

Select.displayName = 'Select';

export { contentVariants, groupLabelVariants, itemVariants, searchShellVariants, triggerVariants };
