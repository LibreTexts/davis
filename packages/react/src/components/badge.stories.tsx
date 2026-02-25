import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Badge } from "./badge";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  parameters: { layout: "padded" },
  args: {
    label: "Badge",
  },
  argTypes: {
    variant: { control: "select", options: ["default", "primary", "success", "warning", "danger"] },
    size:    { control: "select", options: ["sm", "md", "lg"] },
    dot:     { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof Badge>;

// ============================================
// Default (fully controllable)
// ============================================

export const Default: Story = {
  args: {
    variant: "default",
    label:   "Badge",
    size:    "md",
  },
};

// ============================================
// All Variants
// ============================================

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3 items-center">
      <Badge variant="default" label="Default" />
      <Badge variant="primary" label="Primary" />
      <Badge variant="success" label="Success" />
      <Badge variant="warning" label="Warning" />
      <Badge variant="danger"  label="Danger"  />
    </div>
  ),
  args: {},
};

// ============================================
// Sizes
// ============================================

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3 items-center">
      <Badge variant="primary" size="sm" label="Small" />
      <Badge variant="primary" size="md" label="Medium" />
      <Badge variant="primary" size="lg" label="Large" />
    </div>
  ),
  args: {},
};

// ============================================
// With Dot
// ============================================

export const WithDot: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3 items-center">
      <Badge variant="success" label="Active"   dot />
      <Badge variant="warning" label="Pending"  dot />
      <Badge variant="default" label="Inactive" dot />
      <Badge variant="danger"  label="Error"    dot />
    </div>
  ),
  args: {},
};

// ============================================
// Removable
// ============================================

const INITIAL_TAGS = ["React", "TypeScript", "Tailwind", "Storybook", "Vite"];

export const Removable: Story = {
  render: () => {
    const [tags, setTags] = useState(INITIAL_TAGS);
    return (
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Badge
            key={tag}
            variant="primary"
            label={tag}
            onRemove={() => setTags((prev) => prev.filter((t) => t !== tag))}
          />
        ))}
        {tags.length === 0 && (
          <span className="text-sm text-gray-500">All tags removed</span>
        )}
      </div>
    );
  },
  args: {},
};

// ============================================
// With Icon
// ============================================

function StarIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className} aria-hidden="true">
      <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z" clipRule="evenodd" />
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className} aria-hidden="true">
      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
    </svg>
  );
}

export const WithIcon: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3 items-center">
      <Badge variant="warning" label="Featured"  icon={<StarIcon  className="size-3" />} />
      <Badge variant="success" label="Verified"  icon={<CheckIcon className="size-3" />} />
      <Badge variant="primary" label="New"        icon={<StarIcon  className="size-3" />} />
    </div>
  ),
  args: {},
};
