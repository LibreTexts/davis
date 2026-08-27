import { describe, expect, it, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import type { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "../data-table";

type Item = { id: number; name: string; value: number };

const data: Item[] = [
  { id: 1, name: "Alpha", value: 30 },
  { id: 2, name: "Bravo", value: 10 },
  { id: 3, name: "Charlie", value: 20 },
];

const columns: ColumnDef<Item>[] = [
  { accessorKey: "name", header: "Name" },
  { accessorKey: "value", header: "Value" },
];

describe("DataTable", () => {
  it("renders headers and rows", () => {
    render(<DataTable<Item> data={data} columns={columns} />);
    expect(screen.getByText("Name")).toBeInTheDocument();
    expect(screen.getByText("Alpha")).toBeInTheDocument();
    expect(screen.getByText("Bravo")).toBeInTheDocument();
    expect(screen.getByText("Charlie")).toBeInTheDocument();
  });

  it("renders an empty state when data is empty", () => {
    render(<DataTable<Item> data={[]} columns={columns} />);
    expect(screen.getByText("No records found")).toBeInTheDocument();
  });

  it("renders a loading state when loading", () => {
    render(<DataTable<Item> data={[]} columns={columns} loading />);
    expect(screen.getByText("Loading…")).toBeInTheDocument();
  });

  it("updates aria-sort when a sortable header is clicked", () => {
    render(<DataTable<Item> data={data} columns={columns} enableSorting />);
    const nameHeader = screen.getByRole("columnheader", { name: /name/i });
    expect(nameHeader).toHaveAttribute("aria-sort", "none");
    fireEvent.click(nameHeader);
    // String columns default to ascending-first in TanStack Table
    expect(nameHeader).toHaveAttribute("aria-sort", "ascending");
    fireEvent.click(nameHeader);
    expect(nameHeader).toHaveAttribute("aria-sort", "descending");
  });

  it("exposes the table instance via onTableReady", () => {
    const handler = vi.fn();
    render(
      <DataTable<Item> data={data} columns={columns} onTableReady={handler} />
    );
    expect(handler).toHaveBeenCalledTimes(1);
    const table = handler.mock.calls[0]![0];
    expect(table.getRowModel().rows).toHaveLength(3);
  });

  it("fires onRowClick with the row original when a row is clicked", () => {
    const onRowClick = vi.fn();
    render(
      <DataTable<Item> data={data} columns={columns} onRowClick={onRowClick} />
    );
    fireEvent.click(screen.getByText("Alpha"));
    expect(onRowClick).toHaveBeenCalled();
    expect(onRowClick.mock.calls[0]![0]).toEqual(data[0]);
  });

  it("renders pagination controls when enabled", () => {
    render(
      <DataTable<Item>
        data={data}
        columns={columns}
        enablePagination
        pageSize={2}
      />
    );
    expect(screen.getByRole("navigation", { name: "Pagination" })).toBeInTheDocument();
    expect(screen.getByLabelText("Next page")).toBeInTheDocument();
  });
});

// The summary and page label split their numbers across <strong> elements, so
// assert on the container's normalized text rather than on fragments.
const summaryText = () => normalize(screen.getByRole("status").textContent);
const pageLabelText = () =>
  normalize(
    screen.getByRole("navigation", { name: "Pagination" }).querySelector("span")
      ?.textContent
  );

const normalize = (value: string | null | undefined) =>
  (value ?? "").replace(/\s+/g, " ").trim();

const manyRows = (count: number, offset = 0): Item[] =>
  Array.from({ length: count }, (_, i) => ({
    id: offset + i + 1,
    name: `Row ${offset + i + 1}`,
    value: offset + i + 1,
  }));

describe("DataTable pagination summary", () => {
  it("reports the dataset total under manualPagination when rowCount is supplied", () => {
    // The server sends one page of 25; the dataset holds 500.
    render(
      <DataTable<Item>
        data={manyRows(25, 50)}
        columns={columns}
        enablePagination
        pageSize={25}
        tableOptions={{
          manualPagination: true,
          rowCount: 500,
          pageCount: 20,
          initialState: { pagination: { pageIndex: 2, pageSize: 25 } },
        }}
      />
    );
    expect(summaryText()).toBe("Showing 51–75 of 500");
    expect(pageLabelText()).toBe("Page 3 of 20");
  });

  it("omits the total under manualPagination when rowCount is unknown", () => {
    render(
      <DataTable<Item>
        data={manyRows(25, 50)}
        columns={columns}
        enablePagination
        pageSize={25}
        tableOptions={{
          manualPagination: true,
          pageCount: -1,
          initialState: { pagination: { pageIndex: 2, pageSize: 25 } },
        }}
      />
    );
    expect(summaryText()).toBe("Showing 51–75");
    expect(summaryText()).not.toContain("of");
    expect(pageLabelText()).toBe("Page 3");
    // A negative page count means setPageIndex(pageCount - 1) has no valid target.
    expect(screen.getByLabelText("Last page")).toHaveAttribute("aria-disabled", "true");
  });

  it("keeps client-side totals across page changes", () => {
    render(
      <DataTable<Item>
        data={manyRows(50)}
        columns={columns}
        enablePagination
        pageSize={10}
      />
    );
    expect(summaryText()).toBe("Showing 1–10 of 50");
    fireEvent.click(screen.getByLabelText("Next page"));
    expect(summaryText()).toBe("Showing 11–20 of 50");
    expect(pageLabelText()).toBe("Page 2 of 5");
  });

  it("reports the filtered total, not the raw data length", () => {
    render(
      <DataTable<Item>
        data={manyRows(50)}
        columns={columns}
        enablePagination
        pageSize={10}
        enableGlobalFilter
        toolbar
      />
    );
    expect(summaryText()).toBe("Showing 1–10 of 50");
    // "Row 4" plus "Row 40"…"Row 49" — 11 of the 50 rows.
    fireEvent.change(screen.getByLabelText("Search"), { target: { value: "Row 4" } });
    expect(summaryText()).toBe("Showing 1–10 of 11");
  });

  it("shows no results when a manually paginated page is empty", () => {
    render(
      <DataTable<Item>
        data={[]}
        columns={columns}
        enablePagination
        pageSize={25}
        tableOptions={{ manualPagination: true, rowCount: 0, pageCount: 0 }}
      />
    );
    expect(summaryText()).toBe("No results");
  });
});
