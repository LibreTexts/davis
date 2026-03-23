---
title: List Page Template
description: Searchable, filterable data table with pagination
---

# List Page Template

A searchable, filterable data table with pagination, skeleton loading, and empty state. Suitable for user lists, order history, and any record-browsing interface.

**Key Davis components:** Table, Pagination, Input, Select, EmptyState, Skeleton, Badge, Button

---

## Template

{% framework-tabs %}
{% tab framework="react" %}
```tsx
import { useState } from 'react';
import {
  Stack,
  Heading,
  Text,
  Input,
  Select,
  Table,
  Badge,
  Button,
  Pagination,
  Skeleton,
  EmptyState,
} from '@libretexts/davis-react';

type User = {
  id: number;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive';
};

const SAMPLE_USERS: User[] = [
  { id: 1, name: 'Alice Johnson', email: 'alice@example.com', role: 'Engineer',  status: 'active'   },
  { id: 2, name: 'Bob Smith',     email: 'bob@example.com',   role: 'Designer',  status: 'active'   },
  { id: 3, name: 'Carol White',   email: 'carol@example.com', role: 'Manager',   status: 'inactive' },
  { id: 4, name: 'David Brown',   email: 'david@example.com', role: 'Engineer',  status: 'active'   },
];

export default function ListPageTemplate() {
  const [search, setSearch]       = useState('');
  const [statusFilter, setStatus] = useState('all');
  const [page, setPage]           = useState(1);
  const [loading]                 = useState(false);

  const filtered = SAMPLE_USERS.filter((u) => {
    const matchesSearch = u.name.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === 'all' || u.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <Stack gap="lg">
      {/* Page header */}
      <div className="flex items-center justify-between">
        <Stack gap="xs">
          <Heading level={1}>Team Members</Heading>
          <Text color="muted">{filtered.length} members</Text>
        </Stack>
        <Button>Add Member</Button>
      </div>

      {/* Filters */}
      <div className="flex gap-3">
        <div className="flex-1 max-w-sm">
          <Input
            placeholder="Search members..."
            value={search}
            onChange={(e) => { setSearch(e.target.value); setPage(1); }}
          />
        </div>
        <Select
          options={[
            { value: 'all',      label: 'All statuses' },
            { value: 'active',   label: 'Active' },
            { value: 'inactive', label: 'Inactive' },
          ]}
          value={statusFilter}
          onChange={(e) => { setStatus(e.target.value); setPage(1); }}
          className="w-40"
        />
      </div>

      {/* Table */}
      {loading ? (
        <Stack gap="sm">
          {Array.from({ length: 5 }).map((_, i) => (
            <Skeleton key={i} variant="rectangular" className="h-12" />
          ))}
        </Stack>
      ) : filtered.length === 0 ? (
        <EmptyState
          title="No members found"
          description="Try adjusting your search or filters."
        />
      ) : (
        <>
          <Table>
            <Table.Head>
              <Table.Row>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Email</Table.HeaderCell>
                <Table.HeaderCell>Role</Table.HeaderCell>
                <Table.HeaderCell>Status</Table.HeaderCell>
                <Table.HeaderCell align="right">Actions</Table.HeaderCell>
              </Table.Row>
            </Table.Head>
            <Table.Body>
              {filtered.map((user) => (
                <Table.Row key={user.id}>
                  <Table.Cell>{user.name}</Table.Cell>
                  <Table.Cell>{user.email}</Table.Cell>
                  <Table.Cell>{user.role}</Table.Cell>
                  <Table.Cell>
                    <Badge variant={user.status === 'active' ? 'success' : 'default'}>
                      {user.status}
                    </Badge>
                  </Table.Cell>
                  <Table.Cell align="right">
                    <div className="flex justify-end gap-2">
                      <Button size="sm" variant="outline">Edit</Button>
                      <Button size="sm" variant="destructive">Remove</Button>
                    </div>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
          <Pagination currentPage={page} totalPages={5} onPageChange={setPage} />
        </>
      )}
    </Stack>
  );
}
```
{% /tab %}
{% tab framework="vue" %}
Coming soon
{% /tab %}
{% /framework-tabs %}

---

## Component Responsibilities

| Component | Role in this template |
|---|---|
| `Input` | Search field for filtering by name |
| `Select` | Status filter dropdown |
| `Table` | Semantic data table with header and body rows |
| `Badge` | Status indicator per row |
| `Button` | Row-level actions (Edit, Remove) and page-level Add action |
| `Pagination` | Page navigation below the table |
| `Skeleton` | Loading placeholder while data is fetching |
| `EmptyState` | Shown when no records match the current filters |
