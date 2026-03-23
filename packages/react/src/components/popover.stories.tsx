import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";
import { Popover } from "./popover";
import { Input } from "./input";

const meta: Meta = {
  title: "Components/Popover",
  parameters: { layout: "centered" },
};

export default meta;

type Story = StoryObj;

// ============================================
// Default
// ============================================

export const Default: Story = {
  render: () => (
    <Popover>
      <Popover.Button>
        <Button variant="outline">Open Popover</Button>
      </Popover.Button>
      <Popover.Panel>
        <p className="text-sm text-gray-700">
          This is a popover with rich content. Unlike tooltips, popovers support
          interactive elements.
        </p>
      </Popover.Panel>
    </Popover>
  ),
};

// ============================================
// With Form
// ============================================

export const WithForm: Story = {
  render: () => (
    <Popover>
      <Popover.Button>
        <Button>Date Range</Button>
      </Popover.Button>
      <Popover.Panel className="w-72">
        <p className="text-sm font-medium text-gray-900 mb-3">Select date range</p>
        <div className="flex flex-col gap-3">
          <Input name="startDate" label="Start date" type="date" />
          <Input name="endDate" label="End date" type="date" />
          <Button size="sm" className="w-full">Apply</Button>
        </div>
      </Popover.Panel>
    </Popover>
  ),
};

// ============================================
// With List
// ============================================

export const WithList: Story = {
  render: () => (
    <Popover>
      <Popover.Button>
        <Button variant="outline">Actions</Button>
      </Popover.Button>
      <Popover.Panel className="w-48 p-2">
        <ul className="flex flex-col gap-0.5">
          {["Edit", "Duplicate", "Archive", "Delete"].map((action) => (
            <li key={action}>
              <button
                className="w-full text-left px-3 py-2 text-sm text-gray-700 rounded-md hover:bg-gray-100 transition-colors"
              >
                {action}
              </button>
            </li>
          ))}
        </ul>
      </Popover.Panel>
    </Popover>
  ),
};

// ============================================
// Placements
// ============================================

export const Placements: Story = {
  render: () => (
    <div className="flex gap-4 items-center justify-center p-24">
      {(["top", "bottom", "left", "right"] as const).map((placement) => (
        <Popover key={placement}>
          <Popover.Button>
            <Button variant="outline" size="sm">{placement}</Button>
          </Popover.Button>
          <Popover.Panel placement={placement}>
            <p className="text-sm text-gray-700 whitespace-nowrap">
              Placement: {placement}
            </p>
          </Popover.Panel>
        </Popover>
      ))}
    </div>
  ),
};
