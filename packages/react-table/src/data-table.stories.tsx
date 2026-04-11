import type { Meta, StoryObj } from "@storybook/react";
import type { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "./data-table";

type User = {
  id: string;
  name: string;
  email: string;
  role: "Admin" | "Editor" | "Viewer";
  signupDate: string;
};

const sampleUsers: User[] = Array.from({ length: 50 }, (_, i) => ({
  id: `u-${i + 1}`,
  name: `User ${i + 1}`,
  email: `user${i + 1}@example.com`,
  role: (["Admin", "Editor", "Viewer"] as const)[i % 3]!,
  signupDate: new Date(2024, i % 12, (i % 28) + 1).toISOString().slice(0, 10),
}));

const columns: ColumnDef<User>[] = [
  { accessorKey: "name", header: "Name" },
  { accessorKey: "email", header: "Email" },
  { accessorKey: "role", header: "Role" },
  { accessorKey: "signupDate", header: "Signup Date" },
];

const meta: Meta<typeof DataTable<User>> = {
  title: "Components/DataTable",
  component: DataTable,
  parameters: { layout: "padded" },
};
export default meta;

type Story = StoryObj<typeof DataTable<User>>;

export const Basic: Story = {
  args: { data: sampleUsers.slice(0, 5), columns },
};

export const Sorting: Story = {
  args: { data: sampleUsers.slice(0, 10), columns, enableSorting: true },
};

export const Pagination: Story = {
  args: {
    data: sampleUsers,
    columns,
    enablePagination: true,
    pageSize: 10,
  },
};

export const Selection: Story = {
  args: {
    data: sampleUsers.slice(0, 10),
    columns,
    enableRowSelection: true,
  },
};

export const Expansion: Story = {
  args: {
    data: sampleUsers.slice(0, 5),
    columns,
    enableExpansion: true,
    renderSubRow: (row) => (
      <div>
        <strong>Details for {row.original.name}</strong>
        <p>Email: {row.original.email}</p>
      </div>
    ),
  },
};

export const ToolbarSearchAndColumns: Story = {
  args: {
    data: sampleUsers.slice(0, 20),
    columns,
    enableGlobalFilter: true,
    enableColumnVisibility: true,
    toolbar: true,
  },
};

export const Virtualized: Story = {
  args: {
    data: Array.from({ length: 10_000 }, (_, i) => ({
      id: `u-${i}`,
      name: `Row ${i}`,
      email: `row${i}@example.com`,
      role: "Viewer" as const,
      signupDate: "2024-01-01",
    })),
    columns,
    enableVirtualization: true,
    maxHeight: "600px",
    estimateRowSize: 44,
  },
};

export const KitchenSink: Story = {
  args: {
    data: sampleUsers,
    columns,
    enableSorting: true,
    enablePagination: true,
    enableRowSelection: true,
    enableGlobalFilter: true,
    enableColumnVisibility: true,
    enableColumnResizing: true,
    stickyHeader: true,
    striped: true,
    toolbar: true,
    maxHeight: "500px",
  },
};

export const Loading: Story = {
  args: { data: [], columns, loading: true },
};

export const Empty: Story = {
  args: { data: [], columns, emptyState: "No users found." },
};
