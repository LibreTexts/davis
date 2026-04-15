import type { Meta, StoryObj } from "@storybook/vue3";
import Menu from "./Menu.vue";
import MenuButton from "./MenuButton.vue";
import MenuItems from "./MenuItems.vue";
import MenuItem from "./MenuItem.vue";
import MenuDivider from "./MenuDivider.vue";
import MenuLabel from "./MenuLabel.vue";

const meta: Meta<typeof Menu> = {
  title: "Components/Menu",
  component: Menu,
  parameters: { layout: "centered" },
};

export default meta;

type Story = StoryObj<typeof Menu>;

export const Default: Story = {
  render: () => ({
    components: { Menu, MenuButton, MenuItems, MenuItem, MenuDivider, MenuLabel },
    template: `
      <Menu>
        <MenuButton>Options</MenuButton>
        <MenuItems>
          <MenuItem @click="() => console.log('Edit')">Edit</MenuItem>
          <MenuItem @click="() => console.log('Duplicate')">Duplicate</MenuItem>
          <MenuDivider />
          <MenuItem @click="() => console.log('Archive')">Archive</MenuItem>
          <MenuItem variant="danger" @click="() => console.log('Delete')">Delete</MenuItem>
        </MenuItems>
      </Menu>
    `,
  }),
};

export const WithLabels: Story = {
  render: () => ({
    components: { Menu, MenuButton, MenuItems, MenuItem, MenuDivider, MenuLabel },
    template: `
      <Menu>
        <MenuButton>Account</MenuButton>
        <MenuItems>
          <MenuLabel>Signed in as john@example.com</MenuLabel>
          <MenuDivider />
          <MenuItem>Profile</MenuItem>
          <MenuItem>Settings</MenuItem>
          <MenuItem>Billing</MenuItem>
          <MenuDivider />
          <MenuItem>Sign out</MenuItem>
        </MenuItems>
      </Menu>
    `,
  }),
};

export const WithShortcuts: Story = {
  render: () => ({
    components: { Menu, MenuButton, MenuItems, MenuItem, MenuDivider },
    template: `
      <Menu>
        <MenuButton>Edit</MenuButton>
        <MenuItems>
          <MenuItem shortcut="⌘Z">Undo</MenuItem>
          <MenuItem shortcut="⇧⌘Z">Redo</MenuItem>
          <MenuDivider />
          <MenuItem shortcut="⌘X">Cut</MenuItem>
          <MenuItem shortcut="⌘C">Copy</MenuItem>
          <MenuItem shortcut="⌘V">Paste</MenuItem>
        </MenuItems>
      </Menu>
    `,
  }),
};

export const LongList: Story = {
  render: () => ({
    components: { Menu, MenuButton, MenuItems, MenuItem },
    template: `
      <Menu>
        <MenuButton>Select Item</MenuButton>
        <MenuItems>
          <MenuItem v-for="i in 20" :key="i">Item {{ i }}</MenuItem>
        </MenuItems>
      </Menu>
    `,
  }),
};

export const WithDisabledItems: Story = {
  render: () => ({
    components: { Menu, MenuButton, MenuItems, MenuItem, MenuDivider },
    template: `
      <Menu>
        <MenuButton>Actions</MenuButton>
        <MenuItems>
          <MenuItem>Available action</MenuItem>
          <MenuItem :disabled="true">Disabled action</MenuItem>
          <MenuDivider />
          <MenuItem>Another action</MenuItem>
        </MenuItems>
      </Menu>
    `,
  }),
};
