import type { Meta, StoryObj } from "@storybook/vue3";
import Table from "./Table.vue";
import TableHead from "./TableHead.vue";
import TableBody from "./TableBody.vue";
import TableRow from "./TableRow.vue";
import TableCell from "./TableCell.vue";
import TableHeaderCell from "./TableHeaderCell.vue";

const meta: Meta<typeof Table> = {
  title: "Components/Table",
  component: Table,
  parameters: { layout: "padded" },
};
export default meta;
type Story = StoryObj<typeof Table>;

const USERS = [
  { name: "Alice Johnson", email: "alice@example.com", role: "Admin", status: "Active" },
  { name: "Bob Smith", email: "bob@example.com", role: "Editor", status: "Active" },
  { name: "Carol White", email: "carol@example.com", role: "Viewer", status: "Inactive" },
  { name: "David Brown", email: "david@example.com", role: "Editor", status: "Active" },
];

export const Default: Story = {
  render: () => ({
    components: { Table, TableHead, TableBody, TableRow, TableCell, TableHeaderCell },
    setup() { return { USERS }; },
    template: `
      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Email</TableHeaderCell>
            <TableHeaderCell>Role</TableHeaderCell>
            <TableHeaderCell>Status</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow v-for="user in USERS" :key="user.email">
            <TableCell>{{ user.name }}</TableCell>
            <TableCell>{{ user.email }}</TableCell>
            <TableCell>{{ user.role }}</TableCell>
            <TableCell>{{ user.status }}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    `,
  }),
  args: {},
};

export const WithCaption: Story = {
  render: () => ({
    components: { Table, TableHead, TableBody, TableRow, TableCell, TableHeaderCell },
    setup() { return { USERS }; },
    template: `
      <Table caption="User Management Table">
        <TableHead>
          <TableRow>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Role</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow v-for="user in USERS" :key="user.email">
            <TableCell>{{ user.name }}</TableCell>
            <TableCell>{{ user.role }}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    `,
  }),
  args: {},
};

export const WithAlignment: Story = {
  render: () => ({
    components: { Table, TableHead, TableBody, TableRow, TableCell, TableHeaderCell },
    template: `
      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell align="left">Product</TableHeaderCell>
            <TableHeaderCell align="center">Qty</TableHeaderCell>
            <TableHeaderCell align="right">Price</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell align="left">Widget A</TableCell>
            <TableCell align="center">5</TableCell>
            <TableCell align="right">$25.00</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="left">Widget B</TableCell>
            <TableCell align="center">12</TableCell>
            <TableCell align="right">$15.50</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    `,
  }),
  args: {},
};
