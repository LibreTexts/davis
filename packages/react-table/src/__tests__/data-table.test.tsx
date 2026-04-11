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
