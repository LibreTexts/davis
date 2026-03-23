import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Button } from "./button";
import { Drawer } from "./drawer";
import { Input } from "./input";
import { Select } from "./select";

const meta: Meta<typeof Drawer> = {
  title: "Components/Drawer",
  component: Drawer,
  parameters: { layout: "centered" },
};

export default meta;

type Story = StoryObj<typeof Drawer>;

// ============================================
// Default (right side, md)
// ============================================

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Drawer</Button>
        <Drawer open={open} onClose={setOpen}>
          <Drawer.Header>
            <Drawer.Title>Drawer Title</Drawer.Title>
            <Drawer.Close />
          </Drawer.Header>
          <Drawer.Body>
            <p className="text-sm text-gray-600">
              Drawer content goes here. This slides in from the right side of the screen.
            </p>
          </Drawer.Body>
          <Drawer.Footer>
            <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
            <Button onClick={() => setOpen(false)}>Save</Button>
          </Drawer.Footer>
        </Drawer>
      </>
    );
  },
  args: {},
};

// ============================================
// Left Side
// ============================================

export const LeftSide: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Left Drawer</Button>
        <Drawer open={open} onClose={setOpen} side="left">
          <Drawer.Header>
            <Drawer.Title>Left Drawer</Drawer.Title>
            <Drawer.Close />
          </Drawer.Header>
          <Drawer.Body>
            <p className="text-sm text-gray-600">
              This drawer slides in from the left side.
            </p>
          </Drawer.Body>
          <Drawer.Footer>
            <Button onClick={() => setOpen(false)}>Close</Button>
          </Drawer.Footer>
        </Drawer>
      </>
    );
  },
  args: {},
};

// ============================================
// Sizes
// ============================================

const SIZES = ["sm", "md", "lg", "full"] as const;

export const Sizes: Story = {
  render: () => {
    const [openSize, setOpenSize] = useState<string | null>(null);
    return (
      <div className="flex flex-wrap gap-3">
        {SIZES.map((size) => (
          <Button key={size} variant="outline" onClick={() => setOpenSize(size)}>
            {size.toUpperCase()}
          </Button>
        ))}
        {SIZES.map((size) => (
          <Drawer
            key={size}
            open={openSize === size}
            onClose={() => setOpenSize(null)}
            size={size}
          >
            <Drawer.Header>
              <Drawer.Title>Size: {size}</Drawer.Title>
              <Drawer.Close />
            </Drawer.Header>
            <Drawer.Body>
              <p className="text-sm text-gray-600">
                This drawer uses the <strong>{size}</strong> size variant.
              </p>
            </Drawer.Body>
            <Drawer.Footer>
              <Button onClick={() => setOpenSize(null)}>Close</Button>
            </Drawer.Footer>
          </Drawer>
        ))}
      </div>
    );
  },
  args: {},
};

// ============================================
// With Form (filter panel)
// ============================================

export const WithForm: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button variant="outline" onClick={() => setOpen(true)}>Filters</Button>
        <Drawer open={open} onClose={setOpen} size="sm">
          <Drawer.Header>
            <Drawer.Title>Filter Results</Drawer.Title>
            <Drawer.Close />
          </Drawer.Header>
          <Drawer.Body>
            <div className="flex flex-col gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Search
                </label>
                <Input placeholder="Search..." />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Status
                </label>
                <Select
                  options={[
                    { value: "all", label: "All" },
                    { value: "active", label: "Active" },
                    { value: "inactive", label: "Inactive" },
                  ]}
                />
              </div>
            </div>
          </Drawer.Body>
          <Drawer.Footer>
            <Button variant="outline" onClick={() => setOpen(false)}>Reset</Button>
            <Button onClick={() => setOpen(false)}>Apply Filters</Button>
          </Drawer.Footer>
        </Drawer>
      </>
    );
  },
  args: {},
};
