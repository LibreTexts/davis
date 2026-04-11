"use client";

import type { RowData, Table } from "@tanstack/react-table";
import clsx from "clsx";
import { Button } from "@libretexts/davis-react";
import { getDataTableSlots } from "./primitives";

export interface DataTablePaginationProps<TData extends RowData> {
  table: Table<TData>;
  pageSizeOptions?: number[] | undefined;
  className?: string | undefined;
}

export function DataTablePagination<TData extends RowData>({
  table,
  pageSizeOptions = [10, 25, 50, 100],
  className,
}: DataTablePaginationProps<TData>) {
  const s = getDataTableSlots();
  const { pageIndex, pageSize } = table.getState().pagination;
  const pageCount = table.getPageCount();
  const totalRows = table.getFilteredRowModel().rows.length;
  const firstRow = totalRows === 0 ? 0 : pageIndex * pageSize + 1;
  const lastRow = Math.min((pageIndex + 1) * pageSize, totalRows);

  return (
    <div className={clsx(s.pagination(), className)}>
      <div className={s.paginationInfo()}>
        {totalRows === 0 ? (
          "No results"
        ) : (
          <>
            Showing <strong>{firstRow}</strong>–<strong>{lastRow}</strong> of{" "}
            <strong>{totalRows}</strong>
          </>
        )}
      </div>
      <div className={s.paginationControls()}>
        <label className="flex items-center gap-2 text-sm">
          <span>Rows per page</span>
          <select
            className={s.pageSizeSelect()}
            value={pageSize}
            onChange={(event) => table.setPageSize(Number(event.target.value))}
            aria-label="Rows per page"
          >
            {pageSizeOptions.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </label>
        <nav aria-label="Pagination" className="flex items-center gap-1">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.setPageIndex(0)}
            softDisabled={!table.getCanPreviousPage()}
            aria-label="First page"
          >
            «
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            softDisabled={!table.getCanPreviousPage()}
            aria-label="Previous page"
          >
            ‹
          </Button>
          <span className="px-2 text-sm tabular-nums">
            Page <strong>{pageIndex + 1}</strong> of <strong>{Math.max(pageCount, 1)}</strong>
          </span>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            softDisabled={!table.getCanNextPage()}
            aria-label="Next page"
          >
            ›
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.setPageIndex(pageCount - 1)}
            softDisabled={!table.getCanNextPage()}
            aria-label="Last page"
          >
            »
          </Button>
        </nav>
      </div>
    </div>
  );
}
