import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import { axe } from "vitest-axe";
import type { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "../data-table";

type Item = { id: number; name: string; value: number };

const data: Item[] = [
  { id: 1, name: "Alpha", value: 30 },
  { id: 2, name: "Bravo", value: 10 },
];

const columns: ColumnDef<Item>[] = [
  { accessorKey: "name", header: "Name" },
  { accessorKey: "value", header: "Value" },
];

describe("DataTable a11y", () => {
  it("has no axe violations in its basic form", async () => {
    const { container } = render(
      <DataTable<Item> data={data} columns={columns} caption="Sample data" />
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it("has no axe violations when sorting, selection, and pagination are enabled", async () => {
    const { container } = render(
      <DataTable<Item>
        data={data}
        columns={columns}
        caption="Sample data"
        enableSorting
        enableRowSelection
        enablePagination
        pageSize={10}
      />
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it("sets aria-sort on sortable header cells", () => {
    const { getByRole } = render(
      <DataTable<Item> data={data} columns={columns} enableSorting />
    );
    const valueHeader = getByRole("columnheader", { name: /value/i });
    expect(valueHeader).toHaveAttribute("aria-sort", "none");
  });
});
