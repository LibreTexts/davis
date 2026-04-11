"use client";

import { useId, type ReactNode } from "react";
import clsx from "clsx";
import type { RowData, Table } from "@tanstack/react-table";
import { Input, Menu, Checkbox } from "@libretexts/davis-react";
import { getDataTableSlots } from "./primitives";

export interface DataTableToolbarProps<TData extends RowData> {
  table: Table<TData>;
  globalSearch?: boolean | undefined;
  globalSearchPlaceholder?: string | undefined;
  columnVisibility?: boolean | undefined;
  start?: ReactNode | undefined;
  end?: ReactNode | undefined;
  className?: string | undefined;
}

export function DataTableToolbar<TData extends RowData>({
  table,
  globalSearch,
  globalSearchPlaceholder = "Search…",
  columnVisibility,
  start,
  end,
  className,
}: DataTableToolbarProps<TData>) {
  const s = getDataTableSlots();
  return (
    <div className={clsx(s.toolbar(), className)}>
      <div className={s.toolbarStart()}>
        {globalSearch ? (
          <GlobalSearch<TData> table={table} placeholder={globalSearchPlaceholder} />
        ) : null}
        {start}
      </div>
      <div className={s.toolbarEnd()}>
        {end}
        {columnVisibility ? <ColumnVisibilityMenu<TData> table={table} /> : null}
      </div>
    </div>
  );
}

export interface GlobalSearchProps<TData extends RowData> {
  table: Table<TData>;
  placeholder?: string | undefined;
  className?: string | undefined;
}

export function GlobalSearch<TData extends RowData>({
  table,
  placeholder = "Search…",
  className,
}: GlobalSearchProps<TData>) {
  const s = getDataTableSlots();
  const id = useId();
  const value = (table.getState().globalFilter as string | undefined) ?? "";
  return (
    <div className={clsx(s.globalSearch(), className)}>
      <Input
        name={`davis-datatable-search-${id}`}
        label="Search"
        labelClassName="sr-only"
        type="search"
        placeholder={placeholder}
        value={value}
        onChange={(event) => table.setGlobalFilter(event.target.value)}
      />
    </div>
  );
}

export interface ColumnVisibilityMenuProps<TData extends RowData> {
  table: Table<TData>;
  label?: string | undefined;
}

export function ColumnVisibilityMenu<TData extends RowData>({
  table,
  label = "Columns",
}: ColumnVisibilityMenuProps<TData>) {
  const hideableColumns = table.getAllLeafColumns().filter((c) => c.getCanHide());
  if (hideableColumns.length === 0) return null;
  return (
    <Menu>
      <Menu.Button>{label}</Menu.Button>
      <Menu.Items>
        {hideableColumns.map((column) => {
          const header = (column.columnDef.header as string) ?? column.id;
          return (
            <Menu.Item key={column.id}>
              <label className="flex items-center gap-2 px-3 py-1.5 text-sm cursor-pointer">
                <Checkbox
                  name={`davis-datatable-visibility-${column.id}`}
                  checked={column.getIsVisible()}
                  onChange={(value) => column.toggleVisibility(value)}
                  aria-label={`Toggle column ${String(header)}`}
                />
                <span>{String(header)}</span>
              </label>
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
}

export interface ColumnFilterProps<TData extends RowData, TValue = unknown> {
  column: import("@tanstack/react-table").Column<TData, TValue>;
  placeholder?: string | undefined;
}

export function ColumnFilter<TData extends RowData, TValue = unknown>({
  column,
  placeholder = "Filter…",
}: ColumnFilterProps<TData, TValue>) {
  const value = (column.getFilterValue() as string | undefined) ?? "";
  return (
    <Input
      name={`davis-datatable-filter-${column.id}`}
      label={`Filter ${column.id}`}
      labelClassName="sr-only"
      placeholder={placeholder}
      value={value}
      onChange={(e) => column.setFilterValue(e.target.value)}
    />
  );
}
