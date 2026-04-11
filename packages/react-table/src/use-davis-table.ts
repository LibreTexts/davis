"use client";

import {
  getCoreRowModel,
  getExpandedRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import type {
  RowData,
  Table,
  TableOptions,
} from "@tanstack/react-table";

export type UseDavisTableOptions<TData extends RowData> = Omit<
  TableOptions<TData>,
  "getCoreRowModel"
> & {
  /** Wire `getSortedRowModel` automatically. */
  enableDavisSorting?: boolean | undefined;
  /** Wire `getPaginationRowModel` automatically. */
  enableDavisPagination?: boolean | undefined;
  /** Wire `getFilteredRowModel` (required for global filter + column filters) automatically. */
  enableDavisFiltering?: boolean | undefined;
  /** Wire `getExpandedRowModel` automatically. */
  enableDavisExpansion?: boolean | undefined;
  /** Wire `getFacetedRowModel` + unique values (powers per-column filters). */
  enableDavisFaceting?: boolean | undefined;
};

/**
 * Thin wrapper around {@link useReactTable} that wires up the TanStack row
 * models commonly needed by Davis DataTables. Any raw {@link TableOptions}
 * field can still be passed through and will take precedence.
 */
export function useDavisTable<TData extends RowData>(
  options: UseDavisTableOptions<TData>
): Table<TData> {
  const {
    enableDavisSorting,
    enableDavisPagination,
    enableDavisFiltering,
    enableDavisExpansion,
    enableDavisFaceting,
    ...rest
  } = options;

  return useReactTable<TData>({
    getCoreRowModel: getCoreRowModel(),
    ...(enableDavisSorting ? { getSortedRowModel: getSortedRowModel() } : {}),
    ...(enableDavisPagination ? { getPaginationRowModel: getPaginationRowModel() } : {}),
    ...(enableDavisFiltering ? { getFilteredRowModel: getFilteredRowModel() } : {}),
    ...(enableDavisExpansion ? { getExpandedRowModel: getExpandedRowModel() } : {}),
    ...(enableDavisFaceting
      ? {
          getFacetedRowModel: getFacetedRowModel(),
          getFacetedUniqueValues: getFacetedUniqueValues(),
        }
      : {}),
    ...rest,
  } as TableOptions<TData>);
}
