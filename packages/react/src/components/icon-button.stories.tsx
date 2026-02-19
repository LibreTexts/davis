import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { IconButton } from "./icon-button";

const PlusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

const TrashIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
    <polyline points="3 6 5 6 21 6" />
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
  </svg>
);

const EditIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
  </svg>
);

const SettingsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const meta: Meta<typeof IconButton> = {
  title: "Components/IconButton",
  component: IconButton,
  args: {
    icon: <PlusIcon />,
    "aria-label": "Add item",
  },
  argTypes: {
    variant: { control: "select", options: ["primary", "secondary", "tertiary", "destructive", "ghost", "outline"] },
    size: { control: "select", options: ["sm", "md", "lg"] },
    tooltipPosition: { control: "select", options: ["top", "bottom", "left", "right"] },
  },
};

export default meta;

type Story = StoryObj<typeof IconButton>;

export const Default: Story = {};

export const WithTooltip: Story = {
  args: { tooltip: "Click to add a new item" },
};

export const Primary: Story = {
  args: { variant: "primary" },
};

export const Secondary: Story = {
  args: { variant: "secondary" },
};

export const Destructive: Story = {
  args: { icon: <TrashIcon />, "aria-label": "Delete item", variant: "destructive", tooltip: "Delete this item" },
};

export const Ghost: Story = {
  args: { variant: "ghost" },
};

export const Outline: Story = {
  args: { variant: "outline" },
};

export const SmallSize: Story = {
  args: { size: "sm" },
};

export const MediumSize: Story = {
  args: { size: "md" },
};

export const LargeSize: Story = {
  args: { size: "lg" },
};

export const TooltipTop: Story = {
  args: { tooltip: "Tooltip on top", tooltipPosition: "top" },
};

export const TooltipBottom: Story = {
  args: { tooltip: "Tooltip on bottom", tooltipPosition: "bottom" },
};

export const TooltipLeft: Story = {
  args: { tooltip: "Tooltip on left", tooltipPosition: "left" },
  decorators: [
    (Story) => (
      <div className="ml-32">
        <Story />
      </div>
    ),
  ],
};

export const TooltipRight: Story = {
  args: { tooltip: "Tooltip on right", tooltipPosition: "right" },
};

export const Loading: Story = {
  render: () => {
    const [loading, setLoading] = useState(false);
    const handleClick = () => {
      setLoading(true);
      setTimeout(() => setLoading(false), 2000);
    };
    return (
      <IconButton
        icon={<PlusIcon />}
        aria-label="Add item"
        loading={loading}
        onClick={handleClick}
        tooltip="Click to load"
      />
    );
  },
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <IconButton icon={<PlusIcon />} aria-label="Primary" variant="primary" tooltip="Primary" />
      <IconButton icon={<EditIcon />} aria-label="Secondary" variant="secondary" tooltip="Secondary" />
      <IconButton icon={<SettingsIcon />} aria-label="Tertiary" variant="tertiary" tooltip="Tertiary" />
      <IconButton icon={<TrashIcon />} aria-label="Destructive" variant="destructive" tooltip="Destructive" />
      <IconButton icon={<PlusIcon />} aria-label="Ghost" variant="ghost" tooltip="Ghost" />
      <IconButton icon={<EditIcon />} aria-label="Outline" variant="outline" tooltip="Outline" />
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <IconButton icon={<PlusIcon />} aria-label="Small" size="sm" variant="primary" tooltip="Small" />
      <IconButton icon={<PlusIcon />} aria-label="Medium" size="md" variant="primary" tooltip="Medium" />
      <IconButton icon={<PlusIcon />} aria-label="Large" size="lg" variant="primary" tooltip="Large" />
    </div>
  ),
};

export const ToolbarExample: Story = {
  render: () => (
    <div className="flex items-center gap-1 p-2 border rounded-lg bg-gray-50">
      <IconButton icon={<EditIcon />} aria-label="Edit" tooltip="Edit" />
      <IconButton icon={<SettingsIcon />} aria-label="Settings" tooltip="Settings" />
      <div className="w-px h-6 bg-gray-300 mx-1" />
      <IconButton icon={<TrashIcon />} aria-label="Delete" variant="ghost" tooltip="Delete" />
    </div>
  ),
};
