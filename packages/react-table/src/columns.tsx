"use client";

import type { ColumnDef, RowData } from "@tanstack/react-table";
import { Checkbox } from "@libretexts/davis-react";
import clsx from "clsx";
import { dataTable } from "@libretexts/davis-core";

const slots = dataTable();

/**
 * Pre-built selection column with a select-all checkbox in the header and
 * per-row checkboxes. Prepend to your `columns` array when `enableRowSelection`
 * is set.
 */
export function selectionColumn<TData extends RowData>(): ColumnDef<TData, unknown> {
  return {
    id: "__davis_select",
    enableSorting: false,
    enableHiding: false,
    size: 40,
    header: ({ table }) => (
      <div className={clsx(slots.checkboxCell(), "flex items-center justify-center")}>
        <Checkbox
          name="davis-datatable-select-all"
          label="Select all rows"
          labelClassName="sr-only"
          checked={table.getIsAllPageRowsSelected()}
          indeterminate={table.getIsSomePageRowsSelected()}
          onChange={(value) => table.toggleAllPageRowsSelected(value)}
        />
      </div>
    ),
    cell: ({ row }) => (
      <div
        className={clsx(slots.checkboxCell(), "flex items-center justify-center")}
        onClick={(event) => event.stopPropagation()}
      >
        <Checkbox
          name={`davis-datatable-select-${row.id}`}
          label={`Select row ${row.index + 1}`}
          labelClassName="sr-only"
          checked={row.getIsSelected()}
          disabled={!row.getCanSelect()}
          onChange={(value) => row.toggleSelected(value)}
        />
      </div>
    ),
  };
}

/**
 * Pre-built expansion column with a chevron toggle. Prepend to your `columns`
 * array when `enableExpansion` is set.
 */
export function expansionColumn<TData extends RowData>(): ColumnDef<TData, unknown> {
  return {
    id: "__davis_expand",
    enableSorting: false,
    enableHiding: false,
    size: 40,
    header: () => null,
    cell: ({ row }) => {
      if (!row.getCanExpand()) return null;
      const expanded = row.getIsExpanded();
      return (
        <div className={slots.expandCell()} onClick={(e) => e.stopPropagation()}>
          <button
            type="button"
            aria-label={expanded ? "Collapse row" : "Expand row"}
            aria-expanded={expanded}
            className={slots.expandButton()}
            onClick={() => row.toggleExpanded()}
          >
            <svg
              viewBox="0 0 16 16"
              width="14"
              height="14"
              fill="currentColor"
              aria-hidden="true"
              style={{
                transform: expanded ? "rotate(90deg)" : "rotate(0deg)",
                transition: "transform 150ms ease",
              }}
            >
              <path d="M5 3l6 5-6 5z" />
            </svg>
          </button>
        </div>
      );
    },
  };
}
