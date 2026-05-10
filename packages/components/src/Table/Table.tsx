import * as React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Checkbox } from '../Checkbox';
import { Spinner } from '../Spinner';

export interface Column<T> {
  key: keyof T | string;
  title: React.ReactNode;
  sortable?: boolean;
  render?: (row: T) => React.ReactNode;
  align?: 'left' | 'center' | 'right';
  width?: string;
}

export interface TableProps<T> extends React.TableHTMLAttributes<HTMLTableElement> {
  columns: Column<T>[];
  data: T[];
  isLoading?: boolean;
  onRowClick?: (row: T) => void;
  emptyState?: React.ReactNode;
  
  // Selection
  selectedRowKeys?: string[];
  onSelectionChange?: (selectedKeys: string[]) => void;
  rowKey?: (row: T) => string;

  // Sorting
  sortColumn?: string;
  sortDirection?: 'asc' | 'desc';
  onSort?: (columnKey: string, direction: 'asc' | 'desc') => void;
}

export function Table<T>({
  columns,
  data,
  isLoading,
  onRowClick,
  emptyState,
  selectedRowKeys,
  onSelectionChange,
  rowKey,
  sortColumn,
  sortDirection,
  onSort,
  className,
  ...props
}: TableProps<T>) {
  const isSelectable = !!onSelectionChange && !!rowKey;
  const allSelected = data.length > 0 && selectedRowKeys?.length === data.length;
  const someSelected = (selectedRowKeys?.length ?? 0) > 0 && (selectedRowKeys?.length ?? 0) < data.length;

  const handleSelectAll = (checked: boolean) => {
    if (!onSelectionChange || !rowKey) return;
    if (checked) {
      onSelectionChange(data.map(rowKey));
    } else {
      onSelectionChange([]);
    }
  };

  const handleSelectRow = (checked: boolean, key: string) => {
    if (!onSelectionChange || !selectedRowKeys) return;
    if (checked) {
      onSelectionChange([...selectedRowKeys, key]);
    } else {
      onSelectionChange(selectedRowKeys.filter((k) => k !== key));
    }
  };

  const handleSort = (key: string) => {
    if (!onSort) return;
    if (sortColumn === key) {
      onSort(key, sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      onSort(key, 'asc');
    }
  };

  return (
    <div className="w-full overflow-auto border rounded-md border-border-subtle bg-surface">
      <table className={['w-full caption-bottom text-sm', className].filter(Boolean).join(' ')} {...props}>
        <thead className="border-b border-border-subtle bg-surface-raised">
          <tr className="transition-colors hover:bg-surface-hover">
            {isSelectable && (
              <th className="w-12 px-4 py-3 text-left align-middle">
                <Checkbox
                  checked={allSelected ? true : someSelected ? 'indeterminate' : false}
                  onCheckedChange={(checked) => handleSelectAll(checked as boolean)}
                  aria-label="Select all"
                />
              </th>
            )}
            {columns.map((col, index) => (
              <th
                key={String(col.key)}
                className={[
                  'h-12 px-4 text-left align-middle font-medium text-foreground-muted',
                  col.align === 'center' && 'text-center',
                  col.align === 'right' && 'text-right',
                  col.width && `w-[${col.width}]`
                ].filter(Boolean).join(' ')}
              >
                {col.sortable ? (
                  <button
                    type="button"
                    onClick={() => handleSort(String(col.key))}
                    className="inline-flex items-center gap-1 hover:text-foreground focus:outline-none focus:ring-2 focus:ring-primary rounded-sm"
                  >
                    {col.title}
                    {sortColumn === col.key && (
                      <span className="text-primary">
                        {sortDirection === 'asc' ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                      </span>
                    )}
                  </button>
                ) : (
                  col.title
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="[&_tr:last-child]:border-0">
          {isLoading ? (
            <tr>
              <td colSpan={columns.length + (isSelectable ? 1 : 0)} className="h-24 text-center">
                <Spinner size="md" className="mx-auto" aria-label="Loading data..." />
              </td>
            </tr>
          ) : data.length === 0 ? (
            <tr>
              <td colSpan={columns.length + (isSelectable ? 1 : 0)} className="h-24 text-center">
                {emptyState || <div className="text-foreground-muted">No data available</div>}
              </td>
            </tr>
          ) : (
            data.map((row, rowIndex) => {
              const rKey = rowKey ? rowKey(row) : String(rowIndex);
              const isSelected = selectedRowKeys?.includes(rKey) ?? false;
              return (
                <tr
                  key={rKey}
                  onClick={() => onRowClick?.(row)}
                  className={[
                    'border-b border-border-subtle transition-colors',
                    onRowClick && 'cursor-pointer hover:bg-surface-hover',
                    isSelected && 'bg-info-bg'
                  ].filter(Boolean).join(' ')}
                  data-state={isSelected ? 'selected' : undefined}
                >
                  {isSelectable && (
                    <td className="px-4 py-3" onClick={(e) => e.stopPropagation()}>
                      <Checkbox
                        checked={isSelected}
                        onCheckedChange={(checked) => handleSelectRow(checked as boolean, rKey)}
                        aria-label={`Select row`}
                      />
                    </td>
                  )}
                  {columns.map((col) => (
                    <td
                      key={String(col.key)}
                      className={[
                        'px-4 py-3 align-middle text-foreground',
                        col.align === 'center' && 'text-center',
                        col.align === 'right' && 'text-right'
                      ].filter(Boolean).join(' ')}
                    >
                      {col.render ? col.render(row) : (row as any)[col.key]}
                    </td>
                  ))}
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
}
