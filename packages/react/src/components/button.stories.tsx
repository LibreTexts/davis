import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Button } from "./button";

const PlusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const TrashIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
    <polyline points="3 6 5 6 21 6" />
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
  </svg>
);

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  args: {
    children: "Button",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "tertiary", "destructive", "ghost", "outline"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    iconPosition: {
      control: "select",
      options: ["left", "right"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: { variant: "primary", children: "Primary Button" },
};

export const Secondary: Story = {
  args: { variant: "secondary", children: "Secondary Button" },
};

export const Tertiary: Story = {
  args: { variant: "tertiary", children: "Tertiary Button" },
};

export const Destructive: Story = {
  args: { variant: "destructive", children: "Delete", icon: <TrashIcon /> },
};

export const Ghost: Story = {
  args: { variant: "ghost", children: "Ghost Button" },
};

export const Outline: Story = {
  args: { variant: "outline", children: "Outline Button" },
};

export const SmallSize: Story = {
  args: { size: "sm", children: "Small Button" },
};

export const MediumSize: Story = {
  args: { size: "md", children: "Medium Button" },
};

export const LargeSize: Story = {
  args: { size: "lg", children: "Large Button" },
};

export const WithIconLeft: Story = {
  args: { icon: <PlusIcon />, children: "Add Item" },
};

export const WithIconRight: Story = {
  args: { icon: <ArrowRightIcon />, iconPosition: "right", children: "Continue" },
};

export const IconOnly: Story = {
  args: { icon: <PlusIcon />, children: undefined, "aria-label": "Add item" },
};

export const Loading: Story = {
  render: () => {
    const [loading, setLoading] = useState(false);
    const handleClick = () => {
      setLoading(true);
      setTimeout(() => setLoading(false), 2000);
    };
    return (
      <Button loading={loading} onClick={handleClick}>
        {loading ? "Saving..." : "Save Changes"}
      </Button>
    );
  },
};

export const Disabled: Story = {
  args: { disabled: true, children: "Disabled" },
};

export const FullWidth: Story = {
  args: { fullWidth: true, children: "Full Width Button" },
};

export const AsLink: Story = {
  args: {
    as: "a",
    href: "https://libretexts.org",
    target: "_blank",
    children: "Visit LibreTexts",
    icon: <ArrowRightIcon />,
    iconPosition: "right",
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="tertiary">Tertiary</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="outline">Outline</Button>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
};
