<script setup lang="ts" generic="TData extends import('@tanstack/vue-table').RowData">
import { computed, onMounted, ref, watch } from "vue";
import { dataTable } from "@libretexts/davis-core";
import {
  FlexRender,
  type ColumnDef,
  type Row,
  type Table,
} from "@tanstack/vue-table";
import { useVirtualizer } from "@tanstack/vue-virtual";
import { useDavisDataTable } from "../use-davis-data-table";
import { selectionColumn, expansionColumn } from "../columns";
import type { DataTableProps, DataTableToolbarConfig } from "../types";

const props = withDefaults(defineProps<DataTableProps<TData>>(), {
  enableSorting: false,
  enableMultiSort: false,
  enablePagination: false,
  pageSize: 10,
  pageSizeOptions: () => [10, 25, 50, 100],
  enableRowSelection: false,
  enableExpansion: false,
  enableGlobalFilter: false,
  enableColumnFilters: false,
  enableColumnResizing: false,
  enableColumnVisibility: false,
  enableVirtualization: false,
  estimateRowSize: 48,
  overscan: 10,
  density: "comfortable",
  striped: true,
  stickyHeader: false,
  bordered: true,
  toolbar: false,
  loading: false,
});

const emit = defineEmits<{
  (e: "row-click", row: TData, mouseEvent: MouseEvent): void;
  (e: "table-ready", table: Table<TData>): void;
}>();

// Slots can be used to render expanded sub-rows and a custom empty state.
defineSlots<{
  "sub-row"?: (props: { row: Row<TData> }) => unknown;
  empty?: () => unknown;
}>();

// Compose columns with optional selection + expansion helpers.
const columns = computed<ColumnDef<TData, any>[]>(() => {
  const cols: ColumnDef<TData, any>[] = [];
  if (props.enableRowSelection) cols.push(selectionColumn<TData>());
  if (props.enableExpansion) cols.push(expansionColumn<TData>());
  return cols.concat(props.columns);
});

const needsFiltering = computed(
  () => !!(props.enableGlobalFilter || props.enableColumnFilters)
);

const table = useDavisDataTable<TData>({
  get data() {
    return props.data;
  },
  get columns() {
    return columns.value;
  },
  enableDavisSorting: props.enableSorting,
  enableDavisPagination: props.enablePagination,
  enableDavisFiltering: needsFiltering.value,
  enableDavisExpansion: props.enableExpansion,
  enableDavisFaceting: props.enableColumnFilters,
  enableSorting: props.enableSorting,
  enableMultiSort: props.enableMultiSort,
  enableRowSelection: props.enableRowSelection as
    | boolean
    | ((row: Row<TData>) => boolean),
  enableColumnResizing: props.enableColumnResizing,
  columnResizeMode: props.enableColumnResizing ? "onChange" : undefined,
  getRowCanExpand: props.enableExpansion
    ? props.getRowCanExpand ?? (() => true)
    : undefined,
  initialState:
    props.enablePagination && props.pageSize
      ? { pagination: { pageIndex: 0, pageSize: props.pageSize } }
      : {},
  ...(props.tableOptions as object),
} as any);

onMounted(() => emit("table-ready", table));

const slots = computed(() =>
  dataTable({
    density: props.density,
    striped: props.striped,
    stickyHeader: props.stickyHeader,
    bordered: props.bordered,
  })
);

const toolbarConfig = computed<DataTableToolbarConfig | null>(() => {
  if (!props.toolbar) return null;
  if (props.toolbar === true) {
    return {
      globalSearch: props.enableGlobalFilter,
      columnVisibility: props.enableColumnVisibility,
    };
  }
  return props.toolbar;
});

const visibleColumnCount = computed(() => table.getVisibleLeafColumns().length);
const rows = computed(() => table.getRowModel().rows);
const showEmpty = computed(() => !props.loading && rows.value.length === 0);

// Global filter value binding.
const globalFilterValue = ref<string>("");
watch(globalFilterValue, (v) => table.setGlobalFilter(v));

// Virtualization setup.
const parentRef = ref<HTMLDivElement | null>(null);
const virtualizerOptions = computed(() => ({
  count: rows.value.length,
  getScrollElement: () => parentRef.value,
  estimateSize: () => props.estimateRowSize,
  overscan: props.overscan,
}));
const virtualizer = computed(() =>
  props.enableVirtualization ? useVirtualizer(virtualizerOptions) : null
);

const hideableColumns = computed(() =>
  table.getAllLeafColumns().filter((c) => c.getCanHide())
);

const firstRow = computed(() => {
  if (!props.enablePagination) return 0;
  const { pageIndex, pageSize } = table.getState().pagination;
  const total = table.getFilteredRowModel().rows.length;
  return total === 0 ? 0 : pageIndex * pageSize + 1;
});
const lastRow = computed(() => {
  if (!props.enablePagination) return 0;
  const { pageIndex, pageSize } = table.getState().pagination;
  const total = table.getFilteredRowModel().rows.length;
  return Math.min((pageIndex + 1) * pageSize, total);
});
const totalFiltered = computed(() => table.getFilteredRowModel().rows.length);
const pageCount = computed(() => table.getPageCount());
const currentPageIndex = computed(() => table.getState().pagination.pageIndex);
</script>

<template>
  <div
    :class="slots.wrapper()"
    role="region"
    :aria-label="caption"
  >
    <!-- Toolbar -->
    <div v-if="toolbarConfig" :class="slots.toolbar()">
      <div :class="slots.toolbarStart()">
        <div v-if="toolbarConfig.globalSearch" :class="slots.globalSearch()">
          <input
            type="search"
            :placeholder="toolbarConfig.globalSearchPlaceholder ?? 'Search…'"
            :value="globalFilterValue"
            aria-label="Search"
            class="w-full rounded-md border border-gray-200 px-3 py-1.5 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
            @input="(e: Event) => (globalFilterValue = (e.target as HTMLInputElement).value)"
          />
        </div>
      </div>
      <div :class="slots.toolbarEnd()">
        <details v-if="toolbarConfig.columnVisibility && hideableColumns.length > 0" class="relative">
          <summary
            class="cursor-pointer select-none rounded-md border border-gray-200 bg-white px-3 py-1.5 text-sm hover:bg-gray-50"
          >
            Columns
          </summary>
          <div
            class="absolute right-0 z-20 mt-1 min-w-[12rem] rounded-md border border-gray-200 bg-white p-2 shadow-lg"
          >
            <label
              v-for="col in hideableColumns"
              :key="col.id"
              class="flex cursor-pointer items-center gap-2 rounded px-2 py-1 text-sm hover:bg-gray-50"
            >
              <input
                type="checkbox"
                :checked="col.getIsVisible()"
                @change="(e: Event) => col.toggleVisibility((e.target as HTMLInputElement).checked)"
              />
              <span>{{ String(col.columnDef.header ?? col.id) }}</span>
            </label>
          </div>
        </details>
      </div>
    </div>

    <!-- Virtualized body -->
    <div
      v-if="enableVirtualization"
      ref="parentRef"
      class="w-full overflow-auto"
      :style="{ maxHeight: maxHeight ?? '600px' }"
    >
      <table :class="slots.table()">
        <caption v-if="caption" class="sr-only">{{ caption }}</caption>
        <thead :class="slots.header()">
          <tr
            v-for="headerGroup in table.getHeaderGroups()"
            :key="headerGroup.id"
            :class="slots.headerRow()"
          >
            <th
              v-for="header in headerGroup.headers"
              :key="header.id"
              :colSpan="header.colSpan"
              :class="[
                slots.headerCell(),
                enableSorting && header.column.getCanSort() && slots.headerCellSortable(),
              ]"
              :aria-sort="
                enableSorting && header.column.getCanSort()
                  ? header.column.getIsSorted() === 'asc'
                    ? 'ascending'
                    : header.column.getIsSorted() === 'desc'
                      ? 'descending'
                      : 'none'
                  : undefined
              "
              :style="{ width: header.getSize() + 'px' }"
              @click="enableSorting && header.column.getCanSort() ? header.column.getToggleSortingHandler()?.($event) : undefined"
            >
              <div :class="slots.headerCellContent()">
                <FlexRender
                  v-if="!header.isPlaceholder"
                  :render="header.column.columnDef.header"
                  :props="header.getContext()"
                />
              </div>
            </th>
          </tr>
        </thead>
        <tbody :class="slots.body()">
          <tr v-if="virtualizer?.value.getVirtualItems()[0]?.start" aria-hidden="true">
            <td :style="{ height: virtualizer?.value.getVirtualItems()[0]?.start + 'px' }" />
          </tr>
          <tr
            v-for="vRow in virtualizer?.value.getVirtualItems() ?? []"
            :key="rows[vRow.index]?.id"
            :class="[
              slots.row(),
              rows[vRow.index]?.getIsSelected() && slots.rowSelected(),
            ]"
            @click="(e: MouseEvent) => { const r = rows[vRow.index]; if (r) emit('row-click', r.original, e); }"
          >
            <td
              v-for="cell in rows[vRow.index]?.getVisibleCells() ?? []"
              :key="cell.id"
              :class="slots.cell()"
            >
              <FlexRender :render="cell.column.columnDef.cell" :props="cell.getContext()" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Non-virtualized body -->
    <div
      v-else
      :class="['w-full', maxHeight && 'overflow-auto']"
      :style="maxHeight ? { maxHeight } : undefined"
    >
      <table :class="slots.table()">
        <caption v-if="caption" class="sr-only">{{ caption }}</caption>
        <thead :class="slots.header()">
          <tr
            v-for="headerGroup in table.getHeaderGroups()"
            :key="headerGroup.id"
            :class="slots.headerRow()"
          >
            <th
              v-for="header in headerGroup.headers"
              :key="header.id"
              :colSpan="header.colSpan"
              :class="[
                slots.headerCell(),
                enableSorting && header.column.getCanSort() && slots.headerCellSortable(),
              ]"
              :aria-sort="
                enableSorting && header.column.getCanSort()
                  ? header.column.getIsSorted() === 'asc'
                    ? 'ascending'
                    : header.column.getIsSorted() === 'desc'
                      ? 'descending'
                      : 'none'
                  : undefined
              "
              :style="{ width: header.getSize() + 'px', position: 'relative' }"
              :tabindex="enableSorting && header.column.getCanSort() ? 0 : undefined"
              @click="enableSorting && header.column.getCanSort() ? header.column.getToggleSortingHandler()?.($event) : undefined"
              @keydown.enter.prevent="enableSorting && header.column.getCanSort() ? header.column.getToggleSortingHandler()?.($event) : undefined"
              @keydown.space.prevent="enableSorting && header.column.getCanSort() ? header.column.getToggleSortingHandler()?.($event) : undefined"
            >
              <div :class="slots.headerCellContent()">
                <FlexRender
                  v-if="!header.isPlaceholder"
                  :render="header.column.columnDef.header"
                  :props="header.getContext()"
                />
                <svg
                  v-if="enableSorting && header.column.getCanSort()"
                  :class="[
                    slots.sortIcon(),
                    header.column.getIsSorted() && slots.sortIconActive(),
                  ]"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path v-if="header.column.getIsSorted() === 'asc'" d="M8 4l4 5H4z" />
                  <path v-else-if="header.column.getIsSorted() === 'desc'" d="M8 12l-4-5h8z" />
                  <path v-else d="M8 3l3 4H5zm0 10l-3-4h6z" opacity="0.6" />
                </svg>
              </div>
              <div
                v-if="enableColumnResizing && header.column.getCanResize()"
                :class="slots.resizer()"
                role="separator"
                aria-orientation="vertical"
                aria-label="Resize column"
                @mousedown="header.getResizeHandler()?.($event)"
                @touchstart="header.getResizeHandler()?.($event)"
              />
            </th>
          </tr>
        </thead>
        <tbody :class="slots.body()">
          <tr v-if="loading">
            <td :colSpan="visibleColumnCount" :class="slots.loadingCell()">Loading…</td>
          </tr>
          <tr v-else-if="showEmpty">
            <td :colSpan="visibleColumnCount" :class="slots.empty()">
              <slot name="empty">No records found</slot>
            </td>
          </tr>
          <template v-else v-for="row in rows" :key="row.id">
            <tr
              :class="[
                slots.row(),
                row.getIsSelected() && slots.rowSelected(),
                slots.rowInteractive(),
              ]"
              :aria-selected="row.getIsSelected() || undefined"
              @click="(e: MouseEvent) => emit('row-click', row.original, e)"
            >
              <td
                v-for="cell in row.getVisibleCells()"
                :key="cell.id"
                :class="slots.cell()"
                :style="{ width: cell.column.getSize() + 'px' }"
              >
                <FlexRender :render="cell.column.columnDef.cell" :props="cell.getContext()" />
              </td>
            </tr>
            <tr v-if="row.getIsExpanded() && $slots['sub-row']" :class="slots.expandedRow()">
              <td :colSpan="visibleColumnCount" :class="slots.expandedCell()">
                <slot name="sub-row" :row="row" />
              </td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>

    <!-- Pagination -->
    <div v-if="enablePagination" :class="slots.pagination()">
      <div :class="slots.paginationInfo()">
        <template v-if="totalFiltered === 0">No results</template>
        <template v-else>
          Showing <strong>{{ firstRow }}</strong
          >–<strong>{{ lastRow }}</strong> of <strong>{{ totalFiltered }}</strong>
        </template>
      </div>
      <div :class="slots.paginationControls()">
        <label class="flex items-center gap-2 text-sm">
          <span>Rows per page</span>
          <select
            :class="slots.pageSizeSelect()"
            :value="table.getState().pagination.pageSize"
            aria-label="Rows per page"
            @change="(e: Event) => table.setPageSize(Number((e.target as HTMLSelectElement).value))"
          >
            <option v-for="size in pageSizeOptions" :key="size" :value="size">
              {{ size }}
            </option>
          </select>
        </label>
        <nav aria-label="Pagination" class="flex items-center gap-1">
          <button
            type="button"
            class="rounded border border-gray-200 px-2 py-1 text-sm disabled:opacity-50"
            :disabled="!table.getCanPreviousPage()"
            aria-label="First page"
            @click="table.setPageIndex(0)"
          >
            «
          </button>
          <button
            type="button"
            class="rounded border border-gray-200 px-2 py-1 text-sm disabled:opacity-50"
            :disabled="!table.getCanPreviousPage()"
            aria-label="Previous page"
            @click="table.previousPage()"
          >
            ‹
          </button>
          <span class="px-2 text-sm tabular-nums">
            Page <strong>{{ currentPageIndex + 1 }}</strong> of
            <strong>{{ Math.max(pageCount, 1) }}</strong>
          </span>
          <button
            type="button"
            class="rounded border border-gray-200 px-2 py-1 text-sm disabled:opacity-50"
            :disabled="!table.getCanNextPage()"
            aria-label="Next page"
            @click="table.nextPage()"
          >
            ›
          </button>
          <button
            type="button"
            class="rounded border border-gray-200 px-2 py-1 text-sm disabled:opacity-50"
            :disabled="!table.getCanNextPage()"
            aria-label="Last page"
            @click="table.setPageIndex(pageCount - 1)"
          >
            »
          </button>
        </nav>
      </div>
    </div>
  </div>
</template>
