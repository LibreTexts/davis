"use client";

import { useEffect, useMemo, useRef, type ReactNode } from "react";
import clsx from "clsx";
import {
  flexRender,
  type ColumnDef,
  type Row,
  type RowData,
  type Table,
} from "@tanstack/react-table";
import { useDavisTable } from "./use-davis-table";
import {
  DataTableBody,
  DataTableCell,
  DataTableElement,
  DataTableEmpty,
  DataTableHeader,
  DataTableHeaderCell,
  DataTableHeaderRow,
  DataTableRoot,
  DataTableRow,
  getDataTableSlots,
} from "./primitives";
import { DataTableToolbar } from "./toolbar";
import { DataTablePagination } from "./pagination";
import { VirtualizedBody } from "./virtualized-body";
import { expansionColumn, selectionColumn } from "./columns";
import type { DataTableProps, DataTableToolbarConfig } from "./types";

/**
 * High-level, batteries-optional DataTable built on @tanstack/react-table.
 *
 * Every feature is opt-in — drop in `data` + `columns` for a plain table, or
 * flip feature flags (`enableSorting`, `enablePagination`, …) to layer in
 * sorting, pagination, selection, expansion, search, column visibility,
 * filtering, resizing, or virtualization.
 *
 * For advanced use cases you can either:
 *  - pass `onTableReady` to receive the TanStack `Table` instance, or
 *  - import the low-level primitives + `useDavisTable` hook and compose them
 *    directly.
 */
export function DataTable<TData extends RowData>({
  data,
  columns: userColumns,
  enableSorting,
  enableMultiSort,
  enablePagination,
  pageSize,
  pageSizeOptions,
  enableRowSelection,
  enableExpansion,
  getRowCanExpand,
  renderSubRow,
  enableGlobalFilter,
  enableColumnFilters,
  enableColumnResizing,
  enableColumnVisibility,
  enableVirtualization,
  estimateRowSize,
  overscan,
  maxHeight,
  density = "comfortable",
  striped = true,
  stickyHeader,
  bordered = true,
  toolbar,
  loading,
  emptyState,
  onRowClick,
  onTableReady,
  tableOptions,
  className,
  classNames: classNameOverrides,
  caption,
  "aria-label": ariaLabel,
}: DataTableProps<TData>) {
  // Compose columns: optional selection + expansion prepended.
  const columns = useMemo<ColumnDef<TData, any>[]>(() => {
    const cols: ColumnDef<TData, any>[] = [];
    if (enableRowSelection) cols.push(selectionColumn<TData>());
    if (enableExpansion) cols.push(expansionColumn<TData>());
    return cols.concat(userColumns);
  }, [userColumns, enableRowSelection, enableExpansion]);

  const needsFiltering = Boolean(enableGlobalFilter || enableColumnFilters);

  const table = useDavisTable<TData>({
    data,
    columns,
    enableDavisSorting: enableSorting,
    enableDavisPagination: enablePagination,
    enableDavisFiltering: needsFiltering,
    enableDavisExpansion: enableExpansion,
    enableDavisFaceting: enableColumnFilters,
    ...(enableSorting !== undefined ? { enableSorting } : {}),
    ...(enableMultiSort !== undefined ? { enableMultiSort } : {}),
    ...(enableRowSelection !== undefined
      ? { enableRowSelection: enableRowSelection as boolean | ((row: Row<TData>) => boolean) }
      : {}),
    ...(enableColumnResizing !== undefined ? { enableColumnResizing } : {}),
    ...(enableColumnResizing ? { columnResizeMode: "onChange" as const } : {}),
    ...(enableExpansion
      ? { getRowCanExpand: getRowCanExpand ?? (() => true) }
      : {}),
    ...(enablePagination && pageSize
      ? { initialState: { pagination: { pageIndex: 0, pageSize } } }
      : {}),
    ...tableOptions,
  });

  // Escape hatch — give consumers the instance.
  const reportedRef = useRef(false);
  useEffect(() => {
    if (reportedRef.current) return;
    reportedRef.current = true;
    onTableReady?.(table);
  }, [table, onTableReady]);

  const slots = getDataTableSlots({ density, striped, stickyHeader, bordered });

  // Resolve toolbar config.
  const toolbarConfig: DataTableToolbarConfig | null = useMemo(() => {
    if (!toolbar) return null;
    if (toolbar === true) {
      return {
        globalSearch: enableGlobalFilter,
        columnVisibility: enableColumnVisibility,
      };
    }
    return toolbar;
  }, [toolbar, enableGlobalFilter, enableColumnVisibility]);

  const visibleColumnCount = table.getVisibleLeafColumns().length;
  const rows = table.getRowModel().rows;
  const showEmpty = !loading && rows.length === 0;

  return (
    <DataTableRoot
      slots={slots}
      className={clsx(className, classNameOverrides?.wrapper)}
      role="region"
      aria-label={ariaLabel ?? caption}
    >
      {toolbarConfig ? (
        <DataTableToolbar
          table={table}
          {...(toolbarConfig.globalSearch !== undefined
            ? { globalSearch: toolbarConfig.globalSearch }
            : {})}
          {...(toolbarConfig.globalSearchPlaceholder !== undefined
            ? { globalSearchPlaceholder: toolbarConfig.globalSearchPlaceholder }
            : {})}
          {...(toolbarConfig.columnVisibility !== undefined
            ? { columnVisibility: toolbarConfig.columnVisibility }
            : {})}
          {...(toolbarConfig.start !== undefined ? { start: toolbarConfig.start } : {})}
          {...(toolbarConfig.end !== undefined ? { end: toolbarConfig.end } : {})}
          {...(classNameOverrides?.toolbar !== undefined
            ? { className: classNameOverrides.toolbar }
            : {})}
        />
      ) : null}

      {enableVirtualization ? (
        <VirtualizedBody
          table={table}
          slots={slots}
          {...(estimateRowSize !== undefined ? { estimateRowSize } : {})}
          {...(overscan !== undefined ? { overscan } : {})}
          {...(maxHeight !== undefined ? { maxHeight } : {})}
          {...(onRowClick !== undefined ? { onRowClick } : {})}
          {...(renderSubRow !== undefined ? { renderSubRow } : {})}
        />
      ) : (
        <div
          className={clsx("w-full", maxHeight && "overflow-auto")}
          style={maxHeight ? { maxHeight } : undefined}
        >
          <DataTableElement
            slots={slots}
            caption={caption}
            className={classNameOverrides?.table}
          >
            <DataTableHeader slots={slots} className={classNameOverrides?.header}>
              {table.getHeaderGroups().map((headerGroup) => (
                <DataTableHeaderRow
                  key={headerGroup.id}
                  slots={slots}
                  className={classNameOverrides?.headerRow}
                >
                  {headerGroup.headers.map((header) => {
                    const canSort = header.column.getCanSort() && !!enableSorting;
                    const sortDir = header.column.getIsSorted();
                    const canResize = header.column.getCanResize() && !!enableColumnResizing;
                    return (
                      <DataTableHeaderCell
                        key={header.id}
                        slots={slots}
                        colSpan={header.colSpan}
                        style={{ width: header.getSize() }}
                        sortable={canSort}
                        sortDirection={sortDir}
                        onSortToggle={header.column.getToggleSortingHandler() ?? undefined}
                        className={classNameOverrides?.headerCell}
                        resizeHandle={
                          canResize ? (
                            <div
                              role="separator"
                              aria-orientation="vertical"
                              aria-label="Resize column"
                              onMouseDown={header.getResizeHandler()}
                              onTouchStart={header.getResizeHandler()}
                              className={slots.resizer()}
                            />
                          ) : null
                        }
                      >
                        {header.isPlaceholder
                          ? null
                          : flexRender(header.column.columnDef.header, header.getContext())}
                      </DataTableHeaderCell>
                    );
                  })}
                </DataTableHeaderRow>
              ))}
            </DataTableHeader>

            <DataTableBody slots={slots} className={classNameOverrides?.body}>
              {loading ? (
                <tr>
                  <td colSpan={visibleColumnCount} className={slots.loadingCell()}>
                    Loading…
                  </td>
                </tr>
              ) : showEmpty ? (
                <DataTableEmpty slots={slots} colSpan={visibleColumnCount}>
                  {emptyState}
                </DataTableEmpty>
              ) : (
                rows.map((row) => (
                  <DataTableRowWithExpansion<TData>
                    key={row.id}
                    row={row}
                    slots={slots}
                    visibleColumnCount={visibleColumnCount}
                    {...(onRowClick !== undefined ? { onRowClick } : {})}
                    {...(renderSubRow !== undefined ? { renderSubRow } : {})}
                    {...(classNameOverrides?.row !== undefined
                      ? { rowClassName: classNameOverrides.row }
                      : {})}
                    {...(classNameOverrides?.cell !== undefined
                      ? { cellClassName: classNameOverrides.cell }
                      : {})}
                  />
                ))
              )}
            </DataTableBody>
          </DataTableElement>
        </div>
      )}

      {enablePagination ? (
        <DataTablePagination
          table={table}
          {...(pageSizeOptions !== undefined ? { pageSizeOptions } : {})}
          {...(classNameOverrides?.pagination !== undefined
            ? { className: classNameOverrides.pagination }
            : {})}
        />
      ) : null}
    </DataTableRoot>
  );
}

function DataTableRowWithExpansion<TData extends RowData>({
  row,
  slots,
  visibleColumnCount,
  onRowClick,
  renderSubRow,
  rowClassName,
  cellClassName,
}: {
  row: Row<TData>;
  slots: ReturnType<typeof getDataTableSlots>;
  visibleColumnCount: number;
  onRowClick?: (row: TData, event: React.MouseEvent<HTMLTableRowElement>) => void;
  renderSubRow?: (row: Row<TData>) => ReactNode;
  rowClassName?: string | undefined;
  cellClassName?: string | undefined;
}) {
  const expanded = row.getIsExpanded();
  return (
    <>
      <DataTableRow
        slots={slots}
        interactive={!!onRowClick}
        selected={row.getIsSelected()}
        onClick={onRowClick ? (event) => onRowClick(row.original, event) : undefined}
        className={rowClassName}
      >
        {row.getVisibleCells().map((cell) => (
          <DataTableCell
            key={cell.id}
            slots={slots}
            style={{ width: cell.column.getSize() }}
            className={cellClassName}
          >
            {flexRender(cell.column.columnDef.cell, cell.getContext())}
          </DataTableCell>
        ))}
      </DataTableRow>
      {expanded && renderSubRow ? (
        <tr className={slots.expandedRow()}>
          <td colSpan={visibleColumnCount} className={slots.expandedCell()}>
            {renderSubRow(row)}
          </td>
        </tr>
      ) : null}
    </>
  );
}

export type { DataTableProps };
export type { Table };
