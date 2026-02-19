import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Button } from "./button";
import { Dialog } from "./dialog";

const meta: Meta<typeof Dialog> = {
  title: "Components/Dialog",
  component: Dialog,
  parameters: { layout: "centered" },
};

export default meta;

type Story = StoryObj<typeof Dialog>;

// ============================================
// Default
// ============================================

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Dialog</Button>
        <Dialog open={open} onClose={setOpen}>
          <Dialog.Header>
            <Dialog.Title>Dialog Title</Dialog.Title>
            <Dialog.Close />
          </Dialog.Header>
          <div className="px-6 py-4">
            <Dialog.Description>
              This is the dialog description. It provides context about the
              dialog&apos;s purpose.
            </Dialog.Description>
          </div>
          <Dialog.Footer>
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setOpen(false)}>Confirm</Button>
          </Dialog.Footer>
        </Dialog>
      </>
    );
  },
  args: {},
};

// ============================================
// Sizes
// ============================================

const SIZES = ["sm", "md", "lg", "xl", "full"] as const;

export const AllSizes: Story = {
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
          <Dialog
            key={size}
            open={openSize === size}
            onClose={() => setOpenSize(null)}
            size={size}
          >
            <Dialog.Header>
              <Dialog.Title>Size: {size}</Dialog.Title>
              <Dialog.Close />
            </Dialog.Header>
            <div className="px-6 py-4">
              <Dialog.Description>
                This dialog uses the <strong>{size}</strong> size variant.
              </Dialog.Description>
            </div>
            <Dialog.Footer>
              <Button onClick={() => setOpenSize(null)}>Close</Button>
            </Dialog.Footer>
          </Dialog>
        ))}
      </div>
    );
  },
  args: {},
};

// ============================================
// Destructive / Confirmation
// ============================================

export const Destructive: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button variant="destructive" onClick={() => setOpen(true)}>
          Delete Item
        </Button>
        <Dialog open={open} onClose={setOpen} size="sm">
          <Dialog.Header>
            <Dialog.Title>Delete Item</Dialog.Title>
            <Dialog.Close />
          </Dialog.Header>
          <div className="px-6 py-4">
            <Dialog.Description>
              Are you sure you want to delete this item? This action cannot be
              undone.
            </Dialog.Description>
          </div>
          <Dialog.Footer>
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={() => setOpen(false)}>
              Delete
            </Button>
          </Dialog.Footer>
        </Dialog>
      </>
    );
  },
  args: {},
};

// ============================================
// Custom Content (no header/footer)
// ============================================

export const CustomContent: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button variant="secondary" onClick={() => setOpen(true)}>
          Open Custom
        </Button>
        <Dialog open={open} onClose={setOpen} size="md">
          <div className="p-8 text-center">
            <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-green-100">
              <svg
                className="size-6 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <Dialog.Title className="mb-2">Success!</Dialog.Title>
            <Dialog.Description className="mb-6">
              Your changes have been saved successfully.
            </Dialog.Description>
            <Button onClick={() => setOpen(false)}>Done</Button>
          </div>
        </Dialog>
      </>
    );
  },
  args: {},
};
