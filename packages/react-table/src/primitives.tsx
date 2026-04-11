"use client";

import {
  forwardRef,
  type HTMLAttributes,
  type ReactNode,
  type TdHTMLAttributes,
  type ThHTMLAttributes,
} from "react";
import clsx from "clsx";
import { dataTable } from "@libretexts/davis-core";
import type { DataTableDensity } from "./types";

// The slot-functions are cached on first call for cheap identity stability
// inside consuming components.
export type DataTableSlotOptions = {
  density?: DataTableDensity | undefined;
  striped?: boolean | undefined;
  stickyHeader?: boolean | undefined;
  bordered?: boolean | undefined;
};

/** Returns the Davis dataTable slot functions. Thin passthrough for convenience. */
export function getDataTableSlots(options: DataTableSlotOptions = {}) {
  return dataTable({
    density: options.density ?? "comfortable",
    striped: options.striped ?? false,
    stickyHeader: options.stickyHeader ?? false,
    bordered: options.bordered ?? false,
  });
}

// ─── Wrapper / scroll container ──────────────────────────────────────────────

export interface DataTableRootProps extends HTMLAttributes<HTMLDivElement> {
  maxHeight?: string | undefined;
  slots?: ReturnType<typeof getDataTableSlots> | undefined;
}

export const DataTableRoot = forwardRef<HTMLDivElement, DataTableRootProps>(
  function DataTableRoot({ className, style, maxHeight, slots, children, ...rest }, ref) {
    const s = slots ?? getDataTableSlots();
    return (
      <div
        ref={ref}
        className={clsx(s.wrapper(), className)}
        style={maxHeight ? { ...style, maxHeight } : style}
        {...rest}
      >
        {children}
      </div>
    );
  }
);
DataTableRoot.displayName = "DataTableRoot";

// ─── <table> ────────────────────────────────────────────────────────────────

export interface DataTableElementProps extends HTMLAttributes<HTMLTableElement> {
  slots?: ReturnType<typeof getDataTableSlots> | undefined;
  caption?: string | undefined;
}

export const DataTableElement = forwardRef<HTMLTableElement, DataTableElementProps>(
  function DataTableElement({ className, slots, caption, children, ...rest }, ref) {
    const s = slots ?? getDataTableSlots();
    return (
      <table ref={ref} className={clsx(s.table(), className)} {...rest}>
        {caption ? <caption className="sr-only">{caption}</caption> : null}
        {children}
      </table>
    );
  }
);
DataTableElement.displayName = "DataTableElement";

// ─── <thead> ────────────────────────────────────────────────────────────────

export interface DataTableHeaderProps extends HTMLAttributes<HTMLTableSectionElement> {
  slots?: ReturnType<typeof getDataTableSlots> | undefined;
}

export const DataTableHeader = forwardRef<HTMLTableSectionElement, DataTableHeaderProps>(
  function DataTableHeader({ className, slots, children, ...rest }, ref) {
    const s = slots ?? getDataTableSlots();
    return (
      <thead ref={ref} className={clsx(s.header(), className)} {...rest}>
        {children}
      </thead>
    );
  }
);
DataTableHeader.displayName = "DataTableHeader";

export interface DataTableHeaderRowProps extends HTMLAttributes<HTMLTableRowElement> {
  slots?: ReturnType<typeof getDataTableSlots> | undefined;
}

export const DataTableHeaderRow = forwardRef<HTMLTableRowElement, DataTableHeaderRowProps>(
  function DataTableHeaderRow({ className, slots, children, ...rest }, ref) {
    const s = slots ?? getDataTableSlots();
    return (
      <tr ref={ref} className={clsx(s.headerRow(), className)} {...rest}>
        {children}
      </tr>
    );
  }
);
DataTableHeaderRow.displayName = "DataTableHeaderRow";

export interface DataTableHeaderCellProps extends ThHTMLAttributes<HTMLTableCellElement> {
  sortable?: boolean | undefined;
  sortDirection?: "asc" | "desc" | false | undefined;
  onSortToggle?: ((event: unknown) => void) | undefined;
  /** Rendered as an absolutely-positioned drag handle on the right edge. */
  resizeHandle?: ReactNode | undefined;
  slots?: ReturnType<typeof getDataTableSlots> | undefined;
}

export const DataTableHeaderCell = forwardRef<HTMLTableCellElement, DataTableHeaderCellProps>(
  function DataTableHeaderCell(
    {
      className,
      sortable = false,
      sortDirection = false,
      onSortToggle,
      onClick,
      onKeyDown,
      resizeHandle,
      slots,
      children,
      ...rest
    },
    ref
  ) {
    const s = slots ?? getDataTableSlots();
    const ariaSort: ThHTMLAttributes<HTMLTableCellElement>["aria-sort"] = sortable
      ? sortDirection === "asc"
        ? "ascending"
        : sortDirection === "desc"
          ? "descending"
          : "none"
      : undefined;

    const handleKeyDown = (event: React.KeyboardEvent<HTMLTableCellElement>) => {
      onKeyDown?.(event);
      if (!sortable || event.defaultPrevented) return;
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        onSortToggle?.(event);
      }
    };

    return (
      <th
        ref={ref}
        scope="col"
        aria-sort={ariaSort}
        tabIndex={sortable ? 0 : undefined}
        className={clsx(s.headerCell(), sortable && s.headerCellSortable(), className)}
        onClick={(event) => {
          onClick?.(event);
          if (sortable && !event.defaultPrevented) onSortToggle?.(event as unknown);
        }}
        onKeyDown={handleKeyDown}
        {...rest}
      >
        <div className={s.headerCellContent()}>
          {children}
          {sortable ? <SortIndicator direction={sortDirection} slots={s} /> : null}
        </div>
        {resizeHandle}
      </th>
    );
  }
);
DataTableHeaderCell.displayName = "DataTableHeaderCell";

function SortIndicator({
  direction,
  slots,
}: {
  direction: "asc" | "desc" | false;
  slots: ReturnType<typeof getDataTableSlots>;
}) {
  const active = direction !== false;
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      className={clsx(slots.sortIcon(), active && slots.sortIconActive())}
      fill="currentColor"
    >
      {direction === "asc" ? (
        <path d="M8 4l4 5H4z" />
      ) : direction === "desc" ? (
        <path d="M8 12l-4-5h8z" />
      ) : (
        <path d="M8 3l3 4H5zm0 10l-3-4h6z" opacity="0.6" />
      )}
    </svg>
  );
}

// ─── <tbody> ────────────────────────────────────────────────────────────────

export interface DataTableBodyProps extends HTMLAttributes<HTMLTableSectionElement> {
  slots?: ReturnType<typeof getDataTableSlots> | undefined;
}

export const DataTableBody = forwardRef<HTMLTableSectionElement, DataTableBodyProps>(
  function DataTableBody({ className, slots, children, ...rest }, ref) {
    const s = slots ?? getDataTableSlots();
    return (
      <tbody ref={ref} className={clsx(s.body(), className)} {...rest}>
        {children}
      </tbody>
    );
  }
);
DataTableBody.displayName = "DataTableBody";

export interface DataTableRowProps extends HTMLAttributes<HTMLTableRowElement> {
  interactive?: boolean | undefined;
  selected?: boolean | undefined;
  slots?: ReturnType<typeof getDataTableSlots> | undefined;
}

export const DataTableRow = forwardRef<HTMLTableRowElement, DataTableRowProps>(
  function DataTableRow(
    { className, interactive, selected, slots, children, ...rest },
    ref
  ) {
    const s = slots ?? getDataTableSlots();
    return (
      <tr
        ref={ref}
        aria-selected={selected || undefined}
        className={clsx(
          s.row(),
          interactive && s.rowInteractive(),
          selected && s.rowSelected(),
          className
        )}
        {...rest}
      >
        {children}
      </tr>
    );
  }
);
DataTableRow.displayName = "DataTableRow";

export interface DataTableCellProps extends TdHTMLAttributes<HTMLTableCellElement> {
  slots?: ReturnType<typeof getDataTableSlots> | undefined;
}

export const DataTableCell = forwardRef<HTMLTableCellElement, DataTableCellProps>(
  function DataTableCell({ className, slots, children, ...rest }, ref) {
    const s = slots ?? getDataTableSlots();
    return (
      <td ref={ref} className={clsx(s.cell(), className)} {...rest}>
        {children}
      </td>
    );
  }
);
DataTableCell.displayName = "DataTableCell";

// ─── Empty state ────────────────────────────────────────────────────────────

export interface DataTableEmptyProps {
  colSpan: number;
  children?: ReactNode | undefined;
  slots?: ReturnType<typeof getDataTableSlots> | undefined;
}

export function DataTableEmpty({ colSpan, children, slots }: DataTableEmptyProps) {
  const s = slots ?? getDataTableSlots();
  return (
    <tr>
      <td colSpan={colSpan} className={s.empty()}>
        {children ?? "No records found"}
      </td>
    </tr>
  );
}
