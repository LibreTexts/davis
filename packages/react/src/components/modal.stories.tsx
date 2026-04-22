import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Button } from "./button";
import { Input } from "./input";
import { Modal } from "./modal";

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
  parameters: { layout: "centered" },
};

export default meta;

type Story = StoryObj<typeof Modal>;

// ============================================
// Default
// ============================================

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Modal</Button>
        <Modal open={open} onClose={setOpen}>
          <Modal.Header>
            <Modal.Title>Modal Title</Modal.Title>
            <Modal.Close />
          </Modal.Header>
          <div className="px-6 py-4">
            <Modal.Description>
              This is the modal description. It provides context about the
              modal&apos;s purpose.
            </Modal.Description>
          </div>
          <Modal.Footer>
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setOpen(false)}>Confirm</Button>
          </Modal.Footer>
        </Modal>
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
          <Modal
            key={size}
            open={openSize === size}
            onClose={() => setOpenSize(null)}
            size={size}
          >
            <Modal.Header>
              <Modal.Title>Size: {size}</Modal.Title>
              <Modal.Close />
            </Modal.Header>
            <div className="px-6 py-4">
              <Modal.Description>
                This modal uses the <strong>{size}</strong> size variant.
              </Modal.Description>
            </div>
            <Modal.Footer>
              <Button onClick={() => setOpenSize(null)}>Close</Button>
            </Modal.Footer>
          </Modal>
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
        <Modal open={open} onClose={setOpen} size="sm">
          <Modal.Header>
            <Modal.Title>Delete Item</Modal.Title>
            <Modal.Close />
          </Modal.Header>
          <div className="px-6 py-4">
            <Modal.Description>
              Are you sure you want to delete this item? This action cannot be
              undone.
            </Modal.Description>
          </div>
          <Modal.Footer>
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={() => setOpen(false)}>
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  },
  args: {},
};

// ============================================
// With Form Content
// ============================================

export const WithForm: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Edit Profile</Button>
        <Modal open={open} onClose={setOpen} size="md">
          <Modal.Header>
            <Modal.Title>Edit Profile</Modal.Title>
            <Modal.Close />
          </Modal.Header>
          <div className="px-6 py-4 space-y-4">
            <Input name="name" label="Name" defaultValue="Jane Doe" />
            <Input name="email" label="Email" type="email" defaultValue="jane@example.com" />
          </div>
          <Modal.Footer>
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setOpen(false)}>Save Changes</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  },
  args: {},
};

// ============================================
// Large with Scrollable Body
// ============================================

const FOLDERS = [
  { name: "Another Test Folder", projects: ["123", "Ethan AI Test Book1", "HumanitiesTest", "Introduction to California Government and Politics", "NPM Basics (TEST/DEV Project)", "TestingCreateBookOnDev"] },
  { name: "Default", projects: ["A Sample Text", "Introduction to Nanoelectronics"] },
  { name: "My Test Folder", projects: ["Advanced Chemistry", "Biology 101", "Physics Fundamentals", "Calculus II", "Statistics for Engineers"] },
];

export const LargeScrollable: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Edit Pinned Projects</Button>
        <Modal open={open} onClose={setOpen} size="xl">
          <Modal.Header>
            <Modal.Title>Edit Pinned Projects</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="flex justify-between items-start mb-4">
              <p className="text-gray-600 text-sm">
                Drag and drop projects to move them between folders. You can also unpin projects from here.
              </p>
              <Button size="sm">+ Add Folder</Button>
            </div>
            <div className="space-y-6">
              {FOLDERS.map((folder) => (
                <div key={folder.name}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2 font-semibold text-gray-800">
                      <svg xmlns="http://www.w3.org/2000/svg" className="size-4 text-gray-600" fill="currentColor" viewBox="0 0 24 24"><path d="M2 6a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6Z" /></svg>
                      {folder.name}
                    </div>
                    {folder.name !== "Default" && (
                      <button className="bg-red-500 hover:bg-red-600 text-white rounded p-1.5 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                      </button>
                    )}
                  </div>
                  <div className="border border-gray-200 rounded-md overflow-hidden">
                    {folder.projects.map((project, idx) => (
                      <div
                        key={project}
                        className={`flex justify-between items-center px-4 py-2.5 bg-white hover:bg-gray-50 ${idx !== folder.projects.length - 1 ? "border-b border-gray-100" : ""}`}
                      >
                        <span className="text-blue-700 text-sm">{project}</span>
                        <button className="ml-3 shrink-0 bg-red-500 hover:bg-red-600 text-white rounded p-1.5 transition-colors">
                          <svg xmlns="http://www.w3.org/2000/svg" className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" /><path strokeLinecap="round" strokeLinejoin="round" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" /></svg>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => setOpen(false)}>Done</Button>
          </Modal.Footer>
        </Modal>
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
        <Modal open={open} onClose={setOpen} size="md">
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
            <Modal.Title className="mb-2">Success!</Modal.Title>
            <Modal.Description className="mb-6">
              Your changes have been saved successfully.
            </Modal.Description>
            <Button onClick={() => setOpen(false)}>Done</Button>
          </div>
        </Modal>
      </>
    );
  },
  args: {},
};
