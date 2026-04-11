import type { VNode } from "vue";
import type {
  ColumnDef,
  Row,
  RowData,
  Table,
  TableOptions,
} from "@tanstack/vue-table";

export type DataTableDensity = "comfortable" | "compact" | "relaxed";

export interface DataTableToolbarConfig {
  globalSearch?: boolean;
  globalSearchPlaceholder?: string;
  columnVisibility?: boolean;
}

export interface DataTableProps<TData extends RowData = RowData> {
  data: TData[];
  columns: ColumnDef<TData, any>[];

  enableSorting?: boolean;
  enableMultiSort?: boolean;
  enablePagination?: boolean;
  pageSize?: number;
  pageSizeOptions?: number[];
  enableRowSelection?: boolean | ((row: Row<TData>) => boolean);
  enableExpansion?: boolean;
  getRowCanExpand?: (row: Row<TData>) => boolean;
  enableGlobalFilter?: boolean;
  enableColumnFilters?: boolean;
  enableColumnResizing?: boolean;
  enableColumnVisibility?: boolean;

  enableVirtualization?: boolean;
  estimateRowSize?: number;
  overscan?: number;
  maxHeight?: string;

  density?: DataTableDensity;
  striped?: boolean;
  stickyHeader?: boolean;
  bordered?: boolean;
  toolbar?: DataTableToolbarConfig | boolean;

  loading?: boolean;
  caption?: string;

  tableOptions?: Partial<TableOptions<TData>>;
}

export interface DataTableEmits<TData extends RowData = RowData> {
  (event: "row-click", row: TData, mouseEvent: MouseEvent): void;
  (event: "table-ready", table: Table<TData>): void;
}

export type { ColumnDef, Table, Row, RowData } from "@tanstack/vue-table";
export type DataTableRenderSlot<TData extends RowData = RowData> = (row: Row<TData>) => VNode | VNode[] | string;
