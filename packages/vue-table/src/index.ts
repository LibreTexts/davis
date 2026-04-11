export { default as DataTable } from "./components/DataTable.vue";
export { useDavisDataTable } from "./use-davis-data-table";
export type { UseDavisDataTableOptions } from "./use-davis-data-table";
export { selectionColumn, expansionColumn } from "./columns";
export type {
  DataTableProps,
  DataTableEmits,
  DataTableToolbarConfig,
  DataTableDensity,
  DataTableRenderSlot,
} from "./types";

// TanStack re-exports
export { FlexRender, createColumnHelper } from "@tanstack/vue-table";
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
} from "@tanstack/vue-table";
