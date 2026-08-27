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
  const rowsOnPage = table.getRowModel().rows.length;

  // `getRowCount()` resolves to `options.rowCount` when it is supplied and falls
  // back to the pre-pagination row model otherwise. Reading the filtered row
  // model directly would report the current page's length under
  // `manualPagination`, where `data` only holds one page.
  const totalRows = table.getRowCount();

  // Under manual pagination a consumer may know the page count but not the row
  // count. Report what is knowable rather than inventing a total.
  const totalKnown =
    table.options.manualPagination !== true || table.options.rowCount !== undefined;
  // TanStack uses a negative page count as the "unknown total" sentinel.
  const pageCountKnown = pageCount >= 0;

  const firstRow = rowsOnPage === 0 ? 0 : pageIndex * pageSize + 1;
  const lastRow = totalKnown
    ? Math.min((pageIndex + 1) * pageSize, totalRows)
    : pageIndex * pageSize + rowsOnPage;

  const noResults = rowsOnPage === 0 && (!totalKnown || totalRows === 0);

  return (
    <div className={clsx(s.pagination(), className)}>
      <div className={s.paginationInfo()} role="status">
        {noResults ? (
          "No results"
        ) : totalKnown ? (
          <>
            Showing <strong>{firstRow}</strong>–<strong>{lastRow}</strong> of{" "}
            <strong>{totalRows}</strong>
          </>
        ) : (
          <>
            Showing <strong>{firstRow}</strong>–<strong>{lastRow}</strong>
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
            {pageCountKnown ? (
              <>
                Page <strong>{pageIndex + 1}</strong> of{" "}
                <strong>{Math.max(pageCount, 1)}</strong>
              </>
            ) : (
              <>
                Page <strong>{pageIndex + 1}</strong>
              </>
            )}
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
            softDisabled={!table.getCanNextPage() || !pageCountKnown}
            aria-label="Last page"
          >
            »
          </Button>
        </nav>
      </div>
    </div>
  );
}
