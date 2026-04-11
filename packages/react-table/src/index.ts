// High-level component
export { DataTable } from "./data-table";

// Hook
export { useDavisTable } from "./use-davis-table";
export type { UseDavisTableOptions } from "./use-davis-table";

// Primitives (escape hatch for custom layouts)
export {
  DataTableRoot,
  DataTableElement,
  DataTableHeader,
  DataTableHeaderRow,
  DataTableHeaderCell,
  DataTableBody,
  DataTableRow,
  DataTableCell,
  DataTableEmpty,
  getDataTableSlots,
} from "./primitives";
export type {
  DataTableRootProps,
  DataTableElementProps,
  DataTableHeaderProps,
  DataTableHeaderRowProps,
  DataTableHeaderCellProps,
  DataTableBodyProps,
  DataTableRowProps,
  DataTableCellProps,
  DataTableEmptyProps,
  DataTableSlotOptions,
} from "./primitives";

// Feature modules
export { DataTableToolbar, GlobalSearch, ColumnVisibilityMenu, ColumnFilter } from "./toolbar";
export type {
  DataTableToolbarProps,
  GlobalSearchProps,
  ColumnVisibilityMenuProps,
  ColumnFilterProps,
} from "./toolbar";

export { DataTablePagination } from "./pagination";
export type { DataTablePaginationProps } from "./pagination";

export { VirtualizedBody } from "./virtualized-body";
export type { VirtualizedBodyProps } from "./virtualized-body";

export { selectionColumn, expansionColumn } from "./columns";

// Props and types
export type {
  DataTableProps,
  DataTableDensity,
  DataTableToolbarConfig,
  DataTableClassNames,
} from "./types";

// TanStack re-exports for convenience
export { flexRender, createColumnHelper } from "@tanstack/react-table";
export type {
  ColumnDef,
  Table,
  Row,
  Cell,
  Header,
  HeaderGroup,
  Column,
  ColumnFiltersState,
  SortingState,
  RowSelectionState,
  ExpandedState,
  VisibilityState,
  PaginationState,
  TableOptions,
  RowData,
} from "@tanstack/react-table";
