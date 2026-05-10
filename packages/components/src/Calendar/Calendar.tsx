import * as React from 'react';
import { DayPicker } from 'react-day-picker';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { buttonVariants } from '../Button';

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={['p-3 font-sans text-foreground', className].filter(Boolean).join(' ')}
      classNames={{
        months: 'flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0',
        month: 'space-y-4 relative',
        month_caption: 'flex justify-center pt-1 relative items-center mb-4 h-9',
        caption_label: 'text-sm font-medium',
        nav: 'flex items-center',
        button_previous: buttonVariants({
          variant: 'ghost',
          size: 'sm',
          className: 'h-7 w-7 bg-transparent p-0 hover:bg-surface-hover absolute left-1 top-1 z-10',
        }),
        button_next: buttonVariants({
          variant: 'ghost',
          size: 'sm',
          className: 'h-7 w-7 bg-transparent p-0 hover:bg-surface-hover absolute right-1 top-1 z-10',
        }),
        month_grid: 'w-full border-collapse space-y-1',
        weekdays: 'flex',
        weekday: 'text-foreground-muted rounded-md w-9 font-normal text-[0.8rem] text-center',
        week: 'flex w-full mt-2',
        day: 'h-9 w-9 text-center text-sm p-0 relative focus-within:relative focus-within:z-20',
        day_button: [
          'inline-flex h-9 w-9 items-center justify-center rounded-md p-0 font-normal transition-colors',
          'hover:bg-surface-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
          'data-[selected]:!bg-primary data-[selected]:!text-primary-fg data-[selected]:hover:!bg-primary data-[selected]:hover:!text-primary-fg',
          'data-[today]:font-bold data-[today]:text-primary',
          'data-[outside]:text-foreground-muted data-[outside]:opacity-50 data-[disabled]:text-foreground-muted data-[disabled]:opacity-25'
        ].join(' '),
        selected: 'bg-primary text-primary-fg',
        range_middle: 'bg-surface-hover text-foreground',
        ...classNames,
      }}
      components={{
        Chevron: ({ orientation }) => {
          const Icon = orientation === 'left' ? ChevronLeft : ChevronRight;
          return <Icon className="h-4.5 w-4.5" />;
        },
      }}
      {...props}
    />
  );
}
Calendar.displayName = 'Calendar';

export { Calendar };
