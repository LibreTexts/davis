import type { Meta, StoryObj } from "@storybook/react";
import { Table } from "./table";
import { Badge } from "./badge";
import { Button } from "./button";
import { EmptyState } from "./empty-state";

const meta: Meta = {
  title: "Components/Table",
  parameters: { layout: "padded" },
};

export default meta;

type Story = StoryObj;

const SAMPLE_DATA = [
  { id: 1, name: "Alice Johnson",    role: "Engineer",  status: "active",   joined: "2023-01-15" },
  { id: 2, name: "Bob Smith",        role: "Designer",  status: "active",   joined: "2022-08-20" },
  { id: 3, name: "Carol White",      role: "Manager",   status: "inactive", joined: "2021-03-10" },
  { id: 4, name: "David Brown",      role: "Engineer",  status: "active",   joined: "2023-06-01" },
];

// ============================================
// Default
// ============================================

export const Default: Story = {
  render: () => (
    <Table>
      <Table.Head>
        <Table.Row>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Role</Table.HeaderCell>
          <Table.HeaderCell>Status</Table.HeaderCell>
          <Table.HeaderCell>Joined</Table.HeaderCell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        {SAMPLE_DATA.map((row) => (
          <Table.Row key={row.id}>
            <Table.Cell>{row.name}</Table.Cell>
            <Table.Cell>{row.role}</Table.Cell>
            <Table.Cell>
              <Badge variant={row.status === "active" ? "success" : "default"} label={row.status} />
            </Table.Cell>
            <Table.Cell>{row.joined}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  ),
};

// ============================================
// With Sort Indicators (visual only)
// ============================================

export const WithSorting: Story = {
  render: () => (
    <Table caption="Team members sorted by name">
      <Table.Head>
        <Table.Row>
          <Table.HeaderCell>
            <button className="flex items-center gap-1 hover:text-primary transition-colors">
              Name
              <svg className="size-4" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                <path d="M8 3L4 9h8L8 3zm0 10l4-6H4l4 6z" />
              </svg>
            </button>
          </Table.HeaderCell>
          <Table.HeaderCell>Role</Table.HeaderCell>
          <Table.HeaderCell>Status</Table.HeaderCell>
          <Table.HeaderCell align="right">Joined</Table.HeaderCell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        {SAMPLE_DATA.map((row) => (
          <Table.Row key={row.id}>
            <Table.Cell>{row.name}</Table.Cell>
            <Table.Cell>{row.role}</Table.Cell>
            <Table.Cell>
              <Badge variant={row.status === "active" ? "success" : "default"} label={row.status} />
            </Table.Cell>
            <Table.Cell align="right">{row.joined}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  ),
};

// ============================================
// With Actions
// ============================================

export const WithActions: Story = {
  render: () => (
    <Table>
      <Table.Head>
        <Table.Row>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Role</Table.HeaderCell>
          <Table.HeaderCell>Status</Table.HeaderCell>
          <Table.HeaderCell align="right">Actions</Table.HeaderCell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        {SAMPLE_DATA.map((row) => (
          <Table.Row key={row.id}>
            <Table.Cell>{row.name}</Table.Cell>
            <Table.Cell>{row.role}</Table.Cell>
            <Table.Cell>
              <Badge variant={row.status === "active" ? "success" : "default"} label={row.status} />
            </Table.Cell>
            <Table.Cell align="right">
              <div className="flex justify-end gap-2">
                <Button size="sm" variant="outline">Edit</Button>
                <Button size="sm" variant="destructive">Delete</Button>
              </div>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  ),
};

// ============================================
// Empty State
// ============================================

export const EmptyStateStory: Story = {
  name: "Empty State",
  render: () => (
    <Table>
      <Table.Head>
        <Table.Row>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Role</Table.HeaderCell>
          <Table.HeaderCell>Status</Table.HeaderCell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        <Table.Row>
          <Table.Cell colSpan={3} className="py-12">
            <EmptyState
              title="No team members"
              description="Get started by adding your first team member."
            />
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  ),
};
