import { h } from "vue";
import type { ColumnDef, RowData } from "@tanstack/vue-table";
import { dataTable } from "@libretexts/davis-core";

const slots = dataTable();

/**
 * Pre-built selection column with a select-all checkbox. Prepend to your
 * `columns` array when using `enableRowSelection`.
 */
export function selectionColumn<TData extends RowData>(): ColumnDef<TData, unknown> {
  return {
    id: "__davis_select",
    enableSorting: false,
    enableHiding: false,
    size: 40,
    header: ({ table }) =>
      h(
        "div",
        { class: `${slots.checkboxCell()} flex items-center justify-center` },
        [
          h("input", {
            type: "checkbox",
            "aria-label": "Select all rows",
            checked: table.getIsAllPageRowsSelected(),
            indeterminate: table.getIsSomePageRowsSelected(),
            onChange: (e: Event) =>
              table.toggleAllPageRowsSelected((e.target as HTMLInputElement).checked),
          }),
        ]
      ),
    cell: ({ row }) =>
      h(
        "div",
        {
          class: `${slots.checkboxCell()} flex items-center justify-center`,
          onClick: (e: MouseEvent) => e.stopPropagation(),
        },
        [
          h("input", {
            type: "checkbox",
            "aria-label": `Select row ${row.index + 1}`,
            checked: row.getIsSelected(),
            disabled: !row.getCanSelect(),
            onChange: (e: Event) =>
              row.toggleSelected((e.target as HTMLInputElement).checked),
          }),
        ]
      ),
  };
}

/**
 * Pre-built expansion column with a chevron toggle.
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
      return h(
        "div",
        { class: slots.expandCell(), onClick: (e: MouseEvent) => e.stopPropagation() },
        [
          h(
            "button",
            {
              type: "button",
              class: slots.expandButton(),
              "aria-label": expanded ? "Collapse row" : "Expand row",
              "aria-expanded": expanded,
              onClick: () => row.toggleExpanded(),
            },
            [
              h(
                "svg",
                {
                  viewBox: "0 0 16 16",
                  width: 14,
                  height: 14,
                  fill: "currentColor",
                  "aria-hidden": "true",
                  style: {
                    transform: expanded ? "rotate(90deg)" : "rotate(0deg)",
                    transition: "transform 150ms ease",
                  },
                },
                [h("path", { d: "M5 3l6 5-6 5z" })]
              ),
            ]
          ),
        ]
      );
    },
  };
}
