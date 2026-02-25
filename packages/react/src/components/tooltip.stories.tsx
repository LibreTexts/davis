import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip } from "./tooltip";
import { Button } from "./button";
import { IconButton } from "./icon-button";

const meta: Meta<typeof Tooltip> = {
  title: "Components/Tooltip",
  component: Tooltip,
  parameters: { layout: "centered" },
  args: {
    content: "This is a tooltip",
    placement: "top",
    delay: 0,
    disabled: false,
  },
  argTypes: {
    content:   { control: "text" },
    placement: { control: "select", options: ["top", "bottom", "left", "right"] },
    delay:     { control: "number", description: "Show delay in ms" },
    disabled:  { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof Tooltip>;

// ============================================
// Default (fully controllable)
// ============================================

export const Default: Story = {
  render: (args) => (
    <Tooltip {...args}>
      <Button>Hover or focus me</Button>
    </Tooltip>
  ),
};

// ============================================
// All Placements
// ============================================

export const AllPlacements: Story = {
  render: () => (
    <div className="flex gap-8 p-16">
      <Tooltip content="Top tooltip" placement="top">
        <Button>Top</Button>
      </Tooltip>
      <Tooltip content="Bottom tooltip" placement="bottom">
        <Button>Bottom</Button>
      </Tooltip>
      <Tooltip content="Left tooltip" placement="left">
        <Button>Left</Button>
      </Tooltip>
      <Tooltip content="Right tooltip" placement="right">
        <Button>Right</Button>
      </Tooltip>
    </div>
  ),
  args: {},
};

// ============================================
// With Delay
// ============================================

export const WithDelay: Story = {
  render: () => (
    <div className="flex gap-4">
      <Tooltip content="No delay (default)" placement="bottom">
        <Button variant="outline">No delay</Button>
      </Tooltip>
      <Tooltip content="Appears after 300 ms" placement="bottom" delay={300}>
        <Button variant="outline">300 ms delay</Button>
      </Tooltip>
      <Tooltip content="Appears after 800 ms" placement="bottom" delay={800}>
        <Button variant="outline">800 ms delay</Button>
      </Tooltip>
    </div>
  ),
  args: {},
};

// ============================================
// Disabled
// ============================================

export const Disabled: Story = {
  render: () => (
    <Tooltip content="You won't see this" disabled>
      <Button variant="ghost" disabled>Disabled (no tooltip)</Button>
    </Tooltip>
  ),
  args: {},
};

// ============================================
// On Icon Button
// ============================================

function InfoIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className} aria-hidden="true">
      <path fillRule="evenodd" d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-7-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9 9a.75.75 0 0 0 0 1.5h.253a.25.25 0 0 1 .244.304l-.459 2.066A1.75 1.75 0 0 0 10.747 15H11a.75.75 0 0 0 0-1.5h-.253a.25.25 0 0 1-.244-.304l.459-2.066A1.75 1.75 0 0 0 9.253 9H9Z" clipRule="evenodd" />
    </svg>
  );
}

export const OnIconButton: Story = {
  render: () => (
    <div className="flex gap-6">
      <Tooltip content="Edit this item" placement="top">
        <IconButton aria-label="Info" variant="ghost" icon={<InfoIcon className="size-5" />} />
      </Tooltip>
      <Tooltip content="More information about this field" placement="right">
        <IconButton aria-label="Info" variant="outline" icon={<InfoIcon className="size-5" />} />
      </Tooltip>
    </div>
  ),
  args: {},
};

// ============================================
// Rich Content
// ============================================

export const RichContent: Story = {
  render: () => (
    <Tooltip
      content={
        <span>
          <span className="font-semibold block mb-0.5">Keyboard shortcut</span>
          <kbd className="font-mono">⌘ K</kbd>
        </span>
      }
      placement="bottom"
    >
      <Button variant="outline">Rich tooltip</Button>
    </Tooltip>
  ),
  args: {},
};
