---
title: DataTable
description: Full-featured, accessible data table built on TanStack Table, with sorting, pagination, selection, expansion, filtering, column visibility, resizing, and optional virtualization
---

# DataTable

DataTable is a type-safe, generic, full-featured table built on top of [`@tanstack/react-table`](https://tanstack.com/table/latest) and [`@tanstack/vue-table`](https://tanstack.com/table/latest). Every feature is **opt-in** — drop in `data` + `columns` for a plain, styled table, then flip flags to layer in sorting, pagination, row selection, row expansion, global search, column filters, column visibility, column resizing, sticky headers, and virtualization as you need them.

Because the underlying TanStack libraries are heavier than Davis's core components, DataTable ships in its own dedicated packages — `@libretexts/davis-react-table` and `@libretexts/davis-vue-table` — so you only pay for the bundle weight when you actually use it.

{% callout type="info" title="Escape hatch" %}
For total control, you can import the `useDavisTable` hook (React) or `useDavisDataTable` composable (Vue) alongside the low-level primitives. You get the raw TanStack `Table` instance and can assemble markup however you like. The high-level `<DataTable />` component also accepts `onTableReady` if you just need a reference to the instance.
{% /callout %}

---

## Installation

{% framework-tabs %}
{% tab framework="react" %}
```bash
npm install @libretexts/davis-react-table
```
{% /tab %}
{% tab framework="vue" %}
```bash
npm install @libretexts/davis-vue-table
```
{% /tab %}
{% /framework-tabs %}

The new packages depend on `@libretexts/davis-core` (styling) and the Davis React/Vue component libraries (for toolbar/pagination primitives). `@tanstack/{react,vue}-table` and `@tanstack/{react,vue}-virtual` are bundled as direct dependencies.

---

## Basic usage

Define your column definitions using TanStack Table's native `ColumnDef` type for full type inference, then pass `data` and `columns` to `<DataTable />`.

{% framework-tabs %}
{% tab framework="react" %}
```tsx
import { DataTable } from '@libretexts/davis-react-table';
import type { ColumnDef } from '@libretexts/davis-react-table';

type User = {
  id: string;
  name: string;
  email: string;
  role: 'Admin' | 'Editor' | 'Viewer';
};

const columns: ColumnDef<User>[] = [
  { accessorKey: 'name', header: 'Name' },
  { accessorKey: 'email', header: 'Email' },
  { accessorKey: 'role', header: 'Role' },
];

export default function UsersTable({ users }: { users: User[] }) {
  return <DataTable<User> data={users} columns={columns} />;
}
```
{% /tab %}
{% tab framework="vue" %}
```vue
<script setup lang="ts">
import { DataTable } from '@libretexts/davis-vue-table';
import type { ColumnDef } from '@libretexts/davis-vue-table';

type User = {
  id: string;
  name: string;
  email: string;
  role: 'Admin' | 'Editor' | 'Viewer';
};

defineProps<{ users: User[] }>();

const columns: ColumnDef<User>[] = [
  { accessorKey: 'name', header: 'Name' },
  { accessorKey: 'email', header: 'Email' },
  { accessorKey: 'role', header: 'Role' },
];
</script>

<template>
  <DataTable :data="users" :columns="columns" />
</template>
```
{% /tab %}
{% /framework-tabs %}

---

## Sorting

Flip the `enableSorting` flag and clickable sortable headers appear. `aria-sort` attributes and keyboard activation (Enter / Space on focused header) come for free.

```tsx
<DataTable<User>
  data={users}
  columns={columns}
  enableSorting
/>
```

You can still disable sorting on individual columns via TanStack's `enableSorting: false` on the column def.

---

## Pagination

```tsx
<DataTable<User>
  data={users}
  columns={columns}
  enablePagination
  pageSize={25}
  pageSizeOptions={[10, 25, 50, 100]}
/>
```

The pagination footer is a `<nav aria-label="Pagination">` landmark with first/prev/next/last buttons and a page-size selector.

---

## Row selection

```tsx
<DataTable<User>
  data={users}
  columns={columns}
  enableRowSelection
  onTableReady={(table) => {
    // Read table.getSelectedRowModel().rows whenever you need the selection
  }}
/>
```

A select-all-checkbox column is prepended automatically. Pass a function to `enableRowSelection` to control per-row selectability.

---

## Row expansion

```tsx
<DataTable<User>
  data={users}
  columns={columns}
  enableExpansion
  renderSubRow={(row) => (
    <div className="p-4">
      <strong>{row.original.name}</strong> — {row.original.email}
    </div>
  )}
/>
```

A chevron toggle column is prepended. Pass `getRowCanExpand` to control which rows are expandable.

---

## Global search, column visibility & filtering

Mount the toolbar by passing `toolbar`. Pair it with `enableGlobalFilter`, `enableColumnVisibility`, and/or `enableColumnFilters` to light up the individual controls.

```tsx
<DataTable<User>
  data={users}
  columns={columns}
  enableGlobalFilter
  enableColumnVisibility
  enableColumnFilters
  toolbar
/>
```

You can also pass an object for finer control:

```tsx
toolbar={{
  globalSearch: true,
  globalSearchPlaceholder: 'Search users…',
  columnVisibility: true,
  start: <CustomBadge />,      // injected on the leading edge
  end: <ExportButton />,       // injected on the trailing edge
}}
```

---

## Column resizing

```tsx
<DataTable<User>
  data={users}
  columns={columns}
  enableColumnResizing
/>
```

Drag the right edge of any resizable header. Use TanStack's `size`, `minSize`, and `maxSize` on column defs to configure per-column constraints.

---

## Sticky header, density & striping

```tsx
<DataTable<User>
  data={users}
  columns={columns}
  stickyHeader
  density="compact"          // "comfortable" | "compact" | "relaxed"
  striped
  maxHeight="480px"
/>
```

`stickyHeader` keeps the `<thead>` visible while the body scrolls inside `maxHeight`.

---

## Virtualization

Enable `enableVirtualization` to render only rows inside the viewport. Required for tables with thousands of rows.

```tsx
<DataTable<Log>
  data={logs}                // 10,000+ rows
  columns={columns}
  enableVirtualization
  estimateRowSize={44}
  maxHeight="600px"
/>
```

Built on `@tanstack/react-virtual` / `@tanstack/vue-virtual`. Note that expanded sub-rows are not rendered in virtualized mode — use row click + a side panel instead.

---

## Loading & empty states

```tsx
<DataTable<User> data={[]} columns={columns} loading />
<DataTable<User>
  data={[]}
  columns={columns}
  emptyState={<p>No users match your filters.</p>}
/>
```

---

## Full control: `onTableReady` and primitives

For advanced customization, grab the TanStack `Table` instance:

```tsx
import { DataTable, type Table } from '@libretexts/davis-react-table';

const tableRef = useRef<Table<User> | null>(null);

<DataTable<User>
  data={users}
  columns={columns}
  onTableReady={(table) => (tableRef.current = table)}
/>
```

Or skip `<DataTable />` entirely and assemble the primitives yourself:

```tsx
import {
  useDavisTable,
  DataTableRoot,
  DataTableElement,
  DataTableHeader,
  DataTableHeaderRow,
  DataTableHeaderCell,
  DataTableBody,
  DataTableRow,
  DataTableCell,
  flexRender,
} from '@libretexts/davis-react-table';

const table = useDavisTable<User>({
  data: users,
  columns,
  enableDavisSorting: true,
});

return (
  <DataTableRoot>
    <DataTableElement>
      <DataTableHeader>
        {table.getHeaderGroups().map((group) => (
          <DataTableHeaderRow key={group.id}>
            {group.headers.map((h) => (
              <DataTableHeaderCell key={h.id} sortable sortDirection={h.column.getIsSorted()}>
                {flexRender(h.column.columnDef.header, h.getContext())}
              </DataTableHeaderCell>
            ))}
          </DataTableHeaderRow>
        ))}
      </DataTableHeader>
      <DataTableBody>
        {table.getRowModel().rows.map((row) => (
          <DataTableRow key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <DataTableCell key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </DataTableCell>
            ))}
          </DataTableRow>
        ))}
      </DataTableBody>
    </DataTableElement>
  </DataTableRoot>
);
```

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `data` | `TData[]` | *required* | The row data |
| `columns` | `ColumnDef<TData>[]` | *required* | TanStack Table column definitions |
| `enableSorting` | `boolean` | `false` | Clickable sortable headers + `aria-sort` |
| `enableMultiSort` | `boolean` | `false` | Hold shift to sort by multiple columns |
| `enablePagination` | `boolean` | `false` | Renders pagination footer |
| `pageSize` | `number` | `10` | Initial page size |
| `pageSizeOptions` | `number[]` | `[10, 25, 50, 100]` | Page-size selector options |
| `enableRowSelection` | `boolean \| (row) => boolean` | `false` | Select-all + per-row checkboxes |
| `enableExpansion` | `boolean` | `false` | Prepends chevron column |
| `getRowCanExpand` | `(row) => boolean` | `() => true` | Per-row expansion gate |
| `renderSubRow` | `(row) => ReactNode` | — | Content for expanded detail rows |
| `enableGlobalFilter` | `boolean` | `false` | Global search input (requires `toolbar`) |
| `enableColumnFilters` | `boolean` | `false` | Per-column filter API + faceted values |
| `enableColumnVisibility` | `boolean` | `false` | "Columns" menu in the toolbar |
| `enableColumnResizing` | `boolean` | `false` | Drag handles on column borders |
| `enableVirtualization` | `boolean` | `false` | Virtualized row rendering |
| `estimateRowSize` | `number` | `48` | Estimated row height for virtualization |
| `overscan` | `number` | `10` | Rows rendered outside viewport |
| `maxHeight` | `string` | — | Caps scroll container height (e.g. `"600px"`) |
| `density` | `"comfortable" \| "compact" \| "relaxed"` | `"comfortable"` | Cell padding preset |
| `striped` | `boolean` | `false` | Zebra-striped rows |
| `stickyHeader` | `boolean` | `false` | Header stays visible while scrolling |
| `bordered` | `boolean` | `false` | Vertical cell borders |
| `toolbar` | `boolean \| DataTableToolbarConfig` | `false` | Mount the toolbar row |
| `loading` | `boolean` | `false` | Shows a loading row |
| `emptyState` | `ReactNode` | `"No records found"` | Content when `data` is empty |
| `caption` | `string` | — | Screen-reader caption; also used as the region `aria-label` |
| `onRowClick` | `(row, event) => void` | — | Fires when a data row is clicked |
| `onTableReady` | `(table) => void` | — | Receives the TanStack `Table` instance once |
| `tableOptions` | `Partial<TableOptions<TData>>` | — | Merged into `useReactTable` / `useVueTable` |
| `className` | `string` | — | Applied to the outer wrapper |
| `classNames` | `DataTableClassNames` | — | Per-slot class overrides |

---

## Exports

### React (`@libretexts/davis-react-table`)

- **Components:** `DataTable`, `DataTableRoot`, `DataTableElement`, `DataTableHeader`, `DataTableHeaderRow`, `DataTableHeaderCell`, `DataTableBody`, `DataTableRow`, `DataTableCell`, `DataTableEmpty`, `DataTableToolbar`, `GlobalSearch`, `ColumnVisibilityMenu`, `ColumnFilter`, `DataTablePagination`, `VirtualizedBody`
- **Hooks:** `useDavisTable`
- **Column helpers:** `selectionColumn()`, `expansionColumn()`
- **Style helpers:** `getDataTableSlots()`
- **Re-exports:** `flexRender`, `createColumnHelper`, plus all TanStack types (`ColumnDef`, `Table`, `Row`, `SortingState`, etc.)

### Vue (`@libretexts/davis-vue-table`)

- **Components:** `DataTable`
- **Composables:** `useDavisDataTable`
- **Column helpers:** `selectionColumn()`, `expansionColumn()`
- **Re-exports:** `FlexRender`, `createColumnHelper`, plus all TanStack types

---

## Accessibility

- The outer wrapper is a `role="region"` with an `aria-label` derived from `caption` so screen-reader users can land on the table as a named landmark.
- Sortable headers receive `aria-sort="ascending" | "descending" | "none"` and are keyboard-focusable; press Enter or Space to toggle sort.
- The selection column header's checkbox is visually hidden but screen-reader accessible via its label.
- The pagination footer is a `<nav aria-label="Pagination">` with labelled buttons (`First page`, `Previous page`, `Next page`, `Last page`) and a labelled `<select>` for page size.
- The column-resize handle uses `role="separator"` with `aria-orientation="vertical"`.
- Selected rows receive `aria-selected="true"`.

---

## Migration from the old `Table`

Davis used to ship a simplistic `Table` component in `@libretexts/davis-react` and `@libretexts/davis-vue`. It has been **removed** in favor of this dedicated, much more capable DataTable.

- If you were using the old `Table` for static/semantic HTML tables, render a plain `<table>` directly with Tailwind utilities — it was a thin wrapper that didn't add much.
- If you need sorting, pagination, selection, filtering, etc., move to this DataTable. Most call sites only need to rewrite column definitions to the TanStack `ColumnDef` shape.
