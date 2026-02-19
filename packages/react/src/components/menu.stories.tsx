import type { Meta, StoryObj } from "@storybook/react";
import { Menu } from "./menu";

const EditIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
  </svg>
);

const DuplicateIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
  </svg>
);

const ArchiveIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
    <polyline points="21 8 21 21 3 21 3 8" />
    <rect x="1" y="3" width="22" height="5" />
    <line x1="10" y1="12" x2="14" y2="12" />
  </svg>
);

const TrashIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
    <polyline points="3 6 5 6 21 6" />
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
  </svg>
);

const MoveIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
    <polyline points="5 9 2 12 5 15" />
    <polyline points="9 5 12 2 15 5" />
    <polyline points="15 19 12 22 9 19" />
    <polyline points="19 9 22 12 19 15" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <line x1="12" y1="2" x2="12" y2="22" />
  </svg>
);

const meta: Meta<typeof Menu> = {
  title: "Components/Menu",
  component: Menu,
  decorators: [
    (Story) => (
      <div className="p-8 min-h-[300px]">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Menu>;

export const Default: Story = {
  render: () => (
    <Menu>
      <Menu.Button>Options</Menu.Button>
      <Menu.Items>
        <Menu.Item onClick={() => console.log("Edit clicked")}>Edit</Menu.Item>
        <Menu.Item onClick={() => console.log("Duplicate clicked")}>Duplicate</Menu.Item>
        <Menu.Item onClick={() => console.log("Archive clicked")}>Archive</Menu.Item>
      </Menu.Items>
    </Menu>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <Menu>
      <Menu.Button>Actions</Menu.Button>
      <Menu.Items>
        <Menu.Item icon={<EditIcon />} onClick={() => {}}>Edit</Menu.Item>
        <Menu.Item icon={<DuplicateIcon />} onClick={() => {}}>Duplicate</Menu.Item>
        <Menu.Item icon={<ArchiveIcon />} onClick={() => {}}>Archive</Menu.Item>
        <Menu.Divider />
        <Menu.Item icon={<TrashIcon />} variant="danger" onClick={() => {}}>Delete</Menu.Item>
      </Menu.Items>
    </Menu>
  ),
};

export const WithDividers: Story = {
  render: () => (
    <Menu>
      <Menu.Button>File</Menu.Button>
      <Menu.Items>
        <Menu.Item onClick={() => {}}>New</Menu.Item>
        <Menu.Item onClick={() => {}}>Open</Menu.Item>
        <Menu.Item onClick={() => {}}>Save</Menu.Item>
        <Menu.Divider />
        <Menu.Item onClick={() => {}}>Export</Menu.Item>
        <Menu.Item onClick={() => {}}>Print</Menu.Item>
        <Menu.Divider />
        <Menu.Item onClick={() => {}}>Close</Menu.Item>
      </Menu.Items>
    </Menu>
  ),
};

export const WithDisabledItems: Story = {
  render: () => (
    <Menu>
      <Menu.Button>Edit</Menu.Button>
      <Menu.Items>
        <Menu.Item onClick={() => {}}>Undo</Menu.Item>
        <Menu.Item onClick={() => {}} disabled>Redo</Menu.Item>
        <Menu.Divider />
        <Menu.Item onClick={() => {}}>Cut</Menu.Item>
        <Menu.Item onClick={() => {}}>Copy</Menu.Item>
        <Menu.Item onClick={() => {}} disabled>Paste</Menu.Item>
      </Menu.Items>
    </Menu>
  ),
};

export const WithShortcuts: Story = {
  render: () => (
    <Menu>
      <Menu.Button>Edit</Menu.Button>
      <Menu.Items width="md">
        <Menu.Item onClick={() => {}} shortcut="⌘Z">Undo</Menu.Item>
        <Menu.Item onClick={() => {}} shortcut="⇧⌘Z">Redo</Menu.Item>
        <Menu.Divider />
        <Menu.Item onClick={() => {}} shortcut="⌘X">Cut</Menu.Item>
        <Menu.Item onClick={() => {}} shortcut="⌘C">Copy</Menu.Item>
        <Menu.Item onClick={() => {}} shortcut="⌘V">Paste</Menu.Item>
        <Menu.Divider />
        <Menu.Item onClick={() => {}} shortcut="⌘A">Select All</Menu.Item>
      </Menu.Items>
    </Menu>
  ),
};

export const WithLabels: Story = {
  render: () => (
    <Menu>
      <Menu.Button>Account</Menu.Button>
      <Menu.Items width="md">
        <Menu.Label>Signed in as</Menu.Label>
        <Menu.Item onClick={() => {}}>user@example.com</Menu.Item>
        <Menu.Divider />
        <Menu.Label>Settings</Menu.Label>
        <Menu.Item onClick={() => {}}>Profile</Menu.Item>
        <Menu.Item onClick={() => {}}>Preferences</Menu.Item>
        <Menu.Divider />
        <Menu.Item variant="danger" onClick={() => {}}>Sign out</Menu.Item>
      </Menu.Items>
    </Menu>
  ),
};

export const AlignRight: Story = {
  render: () => (
    <div className="flex justify-end">
      <Menu>
        <Menu.Button>Options</Menu.Button>
        <Menu.Items align="right">
          <Menu.Item onClick={() => {}}>Edit</Menu.Item>
          <Menu.Item onClick={() => {}}>Duplicate</Menu.Item>
          <Menu.Item onClick={() => {}}>Archive</Menu.Item>
        </Menu.Items>
      </Menu>
    </div>
  ),
};

export const DangerItems: Story = {
  render: () => (
    <Menu>
      <Menu.Button>Danger Zone</Menu.Button>
      <Menu.Items>
        <Menu.Item onClick={() => {}}>Safe Action</Menu.Item>
        <Menu.Divider />
        <Menu.Item variant="danger" onClick={() => {}}>Delete</Menu.Item>
        <Menu.Item variant="danger" onClick={() => {}}>Remove permanently</Menu.Item>
      </Menu.Items>
    </Menu>
  ),
};

export const FullExample: Story = {
  render: () => (
    <Menu>
      <Menu.Button>More Actions</Menu.Button>
      <Menu.Items width="md">
        <Menu.Label>Document</Menu.Label>
        <Menu.Item icon={<EditIcon />} shortcut="⌘E" onClick={() => {}}>Edit</Menu.Item>
        <Menu.Item icon={<DuplicateIcon />} shortcut="⌘D" onClick={() => {}}>Duplicate</Menu.Item>
        <Menu.Item icon={<MoveIcon />} onClick={() => {}}>Move to...</Menu.Item>
        <Menu.Divider />
        <Menu.Label>Organization</Menu.Label>
        <Menu.Item icon={<ArchiveIcon />} onClick={() => {}}>Archive</Menu.Item>
        <Menu.Item icon={<ArchiveIcon />} disabled onClick={() => {}}>Restore (disabled)</Menu.Item>
        <Menu.Divider />
        <Menu.Item icon={<TrashIcon />} variant="danger" shortcut="⌘⌫" onClick={() => {}}>Delete</Menu.Item>
      </Menu.Items>
    </Menu>
  ),
};
