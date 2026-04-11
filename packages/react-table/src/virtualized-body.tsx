"use client";

import { useRef, type ReactNode } from "react";
import type { Row, RowData, Table } from "@tanstack/react-table";
import { useVirtualizer } from "@tanstack/react-virtual";
import { flexRender } from "@tanstack/react-table";
import {
  DataTableBody,
  DataTableCell,
  DataTableRow,
  getDataTableSlots,
} from "./primitives";

export interface VirtualizedBodyProps<TData extends RowData> {
  table: Table<TData>;
  estimateRowSize?: number | undefined;
  overscan?: number | undefined;
  maxHeight?: string | undefined;
  onRowClick?: (row: TData, event: React.MouseEvent<HTMLTableRowElement>) => void;
  renderSubRow?: (row: Row<TData>) => ReactNode;
  slots?: ReturnType<typeof getDataTableSlots> | undefined;
}

/**
 * Virtualized scroll container + <tbody> that only renders rows inside the
 * viewport. Must be rendered *outside* the `<table>` in the DOM — it provides
 * its own scrolling div and positions rows absolutely. Use only when the row
 * count is high enough (≥ ~100 rows) for virtualization to be worth it.
 */
export function VirtualizedBody<TData extends RowData>({
  table,
  estimateRowSize = 48,
  overscan = 10,
  maxHeight = "600px",
  onRowClick,
  renderSubRow,
  slots,
}: VirtualizedBodyProps<TData>) {
  const s = slots ?? getDataTableSlots();
  const parentRef = useRef<HTMLDivElement>(null);
  const { rows } = table.getRowModel();

  const virtualizer = useVirtualizer({
    count: rows.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => estimateRowSize,
    overscan,
  });

  const virtualItems = virtualizer.getVirtualItems();
  const totalSize = virtualizer.getTotalSize();
  const paddingTop = virtualItems.length > 0 ? virtualItems[0]!.start : 0;
  const paddingBottom =
    virtualItems.length > 0 ? totalSize - virtualItems[virtualItems.length - 1]!.end : 0;

  return (
    <div
      ref={parentRef}
      className="w-full overflow-auto"
      style={{ maxHeight }}
      data-davis-datatable-virtual-scroll=""
    >
      <table className={s.table()}>
        <DataTableBody slots={s}>
          {paddingTop > 0 ? (
            <tr aria-hidden="true">
              <td style={{ height: paddingTop }} />
            </tr>
          ) : null}
          {virtualItems.map((virtualRow) => {
            const row = rows[virtualRow.index]!;
            return (
              <DataTableRow
                key={row.id}
                slots={s}
                interactive={!!onRowClick}
                selected={row.getIsSelected()}
                onClick={(event) => onRowClick?.(row.original, event)}
                data-index={virtualRow.index}
                ref={virtualizer.measureElement as unknown as React.Ref<HTMLTableRowElement>}
              >
                {row.getVisibleCells().map((cell) => (
                  <DataTableCell key={cell.id} slots={s}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </DataTableCell>
                ))}
              </DataTableRow>
            );
          })}
          {paddingBottom > 0 ? (
            <tr aria-hidden="true">
              <td style={{ height: paddingBottom }} />
            </tr>
          ) : null}
          {/* Expanded detail rows are skipped in virtualized mode for simplicity. */}
          {renderSubRow && rows.some((r) => r.getIsExpanded()) ? null : null}
        </DataTableBody>
      </table>
    </div>
  );
}
