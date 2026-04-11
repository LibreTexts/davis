import {
  getCoreRowModel,
  getExpandedRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useVueTable,
} from "@tanstack/vue-table";
import type { RowData, Table, TableOptions } from "@tanstack/vue-table";

export type UseDavisDataTableOptions<TData extends RowData> = Omit<
  TableOptions<TData>,
  "getCoreRowModel"
> & {
  enableDavisSorting?: boolean;
  enableDavisPagination?: boolean;
  enableDavisFiltering?: boolean;
  enableDavisExpansion?: boolean;
  enableDavisFaceting?: boolean;
};

/**
 * Thin wrapper around {@link useVueTable} that wires up the TanStack row
 * models commonly needed by Davis DataTables. Mirrors the React `useDavisTable`
 * hook's API.
 */
export function useDavisDataTable<TData extends RowData>(
  options: UseDavisDataTableOptions<TData>
): Table<TData> {
  const {
    enableDavisSorting,
    enableDavisPagination,
    enableDavisFiltering,
    enableDavisExpansion,
    enableDavisFaceting,
    ...rest
  } = options;

  return useVueTable<TData>({
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
