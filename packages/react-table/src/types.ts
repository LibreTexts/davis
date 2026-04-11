import type { ReactNode } from "react";
import type {
  ColumnDef,
  Row,
  RowData,
  Table,
  TableOptions,
} from "@tanstack/react-table";

export type DataTableDensity = "comfortable" | "compact" | "relaxed";

export interface DataTableToolbarConfig {
  /** Render a global search input that filters across all columns. */
  globalSearch?: boolean | undefined;
  /** Placeholder text for the global search input. */
  globalSearchPlaceholder?: string | undefined;
  /** Render a "columns" menu that toggles column visibility. */
  columnVisibility?: boolean | undefined;
  /** Extra content rendered on the leading (start) edge of the toolbar. */
  start?: ReactNode | undefined;
  /** Extra content rendered on the trailing (end) edge of the toolbar. */
  end?: ReactNode | undefined;
}

export interface DataTableClassNames {
  wrapper?: string | undefined;
  toolbar?: string | undefined;
  table?: string | undefined;
  header?: string | undefined;
  headerRow?: string | undefined;
  headerCell?: string | undefined;
  body?: string | undefined;
  row?: string | undefined;
  cell?: string | undefined;
  pagination?: string | undefined;
  empty?: string | undefined;
}

export interface DataTableProps<TData extends RowData> {
  /** The row data. */
  data: TData[];
  /** TanStack Table column definitions. Fully passthrough — any ColumnDef feature is supported. */
  columns: ColumnDef<TData, any>[];

  // ── Optional feature flags (all default to false / off) ────────────────────
  enableSorting?: boolean | undefined;
  enableMultiSort?: boolean | undefined;
  enablePagination?: boolean | undefined;
  pageSize?: number | undefined;
  pageSizeOptions?: number[] | undefined;
  enableRowSelection?: boolean | ((row: Row<TData>) => boolean);
  enableExpansion?: boolean | undefined;
  /** Called to determine whether a given row is expandable. Defaults to always true when enableExpansion is set. */
  getRowCanExpand?: (row: Row<TData>) => boolean;
  /** Rendered inside the expanded detail row. */
  renderSubRow?: (row: Row<TData>) => ReactNode;
  enableGlobalFilter?: boolean | undefined;
  enableColumnFilters?: boolean | undefined;
  enableColumnResizing?: boolean | undefined;
  enableColumnVisibility?: boolean | undefined;

  // ── Virtualization ─────────────────────────────────────────────────────────
  enableVirtualization?: boolean | undefined;
  estimateRowSize?: number | undefined;
  overscan?: number | undefined;
  /** Required for virtualization — e.g. "600px". Also used as a scroll container cap for non-virtualized tables when set. */
  maxHeight?: string | undefined;

  // ── Presentation ───────────────────────────────────────────────────────────
  density?: DataTableDensity | undefined;
  striped?: boolean | undefined;
  stickyHeader?: boolean | undefined;
  bordered?: boolean | undefined;
  toolbar?: DataTableToolbarConfig | boolean | undefined;

  // ── State ──────────────────────────────────────────────────────────────────
  loading?: boolean | undefined;
  /** Rendered when `data` is empty and not loading. Defaults to "No records found". */
  emptyState?: ReactNode | undefined;

  // ── Event handlers ─────────────────────────────────────────────────────────
  onRowClick?: (row: TData, event: React.MouseEvent<HTMLTableRowElement>) => void;
  /** Called once after the TanStack table instance is created. Escape hatch for full control. */
  onTableReady?: (table: Table<TData>) => void;

  // ── Deep escape hatch ──────────────────────────────────────────────────────
  /** Merged into the underlying `useReactTable` call. Takes precedence over derived options. */
  tableOptions?: Partial<TableOptions<TData>> | undefined;

  // ── Styling ────────────────────────────────────────────────────────────────
  className?: string | undefined;
  classNames?: DataTableClassNames | undefined;

  /** Accessible caption for the table. */
  caption?: string | undefined;
  /** ARIA label for the wrapping region. Defaults to caption. */
  "aria-label"?: string;
}
