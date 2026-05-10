import * as React from 'react';
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';
import { Button } from '../Button';

export interface PaginationProps extends Omit<React.HTMLAttributes<HTMLElement>, 'onChange'> {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  siblingCount?: number;
}

const generatePages = (currentPage: number, totalPages: number, siblingCount: number) => {
  const totalPageNumbers = siblingCount * 2 + 5; // sibling * 2 + first + last + current + 2 ellipsis

  if (totalPageNumbers >= totalPages) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
  const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);

  const shouldShowLeftEllipsis = leftSiblingIndex > 2;
  const shouldShowRightEllipsis = rightSiblingIndex < totalPages - 1;

  if (!shouldShowLeftEllipsis && shouldShowRightEllipsis) {
    const leftItemCount = 3 + 2 * siblingCount;
    const leftRange = Array.from({ length: leftItemCount }, (_, i) => i + 1);
    return [...leftRange, '...', totalPages];
  }

  if (shouldShowLeftEllipsis && !shouldShowRightEllipsis) {
    const rightItemCount = 3 + 2 * siblingCount;
    const rightRange = Array.from({ length: rightItemCount }, (_, i) => totalPages - rightItemCount + i + 1);
    return [1, '...', ...rightRange];
  }

  if (shouldShowLeftEllipsis && shouldShowRightEllipsis) {
    const middleRange = Array.from(
      { length: rightSiblingIndex - leftSiblingIndex + 1 },
      (_, i) => leftSiblingIndex + i
    );
    return [1, '...', ...middleRange, '...', totalPages];
  }

  return [];
};

export const Pagination = React.forwardRef<HTMLElement, PaginationProps>(
  ({ totalPages, currentPage, onPageChange, siblingCount = 1, className, ...props }, ref) => {
    const pages = generatePages(currentPage, totalPages, siblingCount);

    if (currentPage === 0 || pages.length < 1) {
      return null;
    }

    return (
      <nav
        ref={ref}
        role="navigation"
        aria-label="Pagination Navigation"
        className={['flex items-center justify-center gap-1', className].filter(Boolean).join(' ')}
        {...props}
      >
        <Button
          variant="ghost"
          size="sm"
          isIconOnly
          aria-label="Previous page"
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
        >
          <ChevronLeft size={16} aria-hidden="true" />
        </Button>

        <ul className="flex items-center gap-1">
          {pages.map((page, index) => {
            if (page === '...') {
              return (
                <li key={`ellipsis-${index}`} className="flex h-8 w-8 items-center justify-center text-[var(--color-neutral-500)]">
                  <MoreHorizontal size={16} aria-hidden="true" />
                </li>
              );
            }

            const pageNumber = page as number;
            const isCurrent = pageNumber === currentPage;

            return (
              <li key={index}>
                <Button
                  variant={isCurrent ? 'primary' : 'ghost'}
                  size="sm"
                  aria-label={`Page ${pageNumber}`}
                  aria-current={isCurrent ? 'page' : undefined}
                  onClick={() => onPageChange(pageNumber)}
                  className="w-8"
                >
                  {pageNumber}
                </Button>
              </li>
            );
          })}
        </ul>

        <Button
          variant="ghost"
          size="sm"
          isIconOnly
          aria-label="Next page"
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
        >
          <ChevronRight size={16} aria-hidden="true" />
        </Button>
      </nav>
    );
  }
);
Pagination.displayName = 'Pagination';
