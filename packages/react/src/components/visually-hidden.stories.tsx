import type { Meta, StoryObj } from "@storybook/react";
import { VisuallyHidden } from "./visually-hidden";

const meta = {
  title: "Utilities/VisuallyHidden",
  component: VisuallyHidden,
  parameters: {
    docs: {
      description: {
        component:
          "Hides content visually while keeping it accessible to screen readers. " +
          "Use for labels, descriptions, and context that sighted users don't need but assistive technology does.",
      },
    },
  },
} satisfies Meta<typeof VisuallyHidden>;

export default meta;
type Story = StoryObj<typeof VisuallyHidden>;

export const Default: Story = {
  args: {
    children: "This text is only visible to screen readers",
  },
  decorators: [
    (Story) => (
      <div>
        <p>There is hidden text in this container (inspect the DOM or use a screen reader):</p>
        <Story />
      </div>
    ),
  ],
};

export const WithIconButton: Story = {
  args: { children: "Adjust settings" },
  render: () => (
    <button
      type="button"
      className="inline-flex items-center justify-center size-10 rounded-md bg-primary text-white hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="size-5"
        aria-hidden="true"
      >
        <path d="M10 3.75a2 2 0 10-4 0 2 2 0 004 0zM17.25 4.5a.75.75 0 000-1.5h-5.5a.75.75 0 000 1.5h5.5zM5 3.75a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5a.75.75 0 01.75.75zM4.25 17a.75.75 0 000-1.5h-1.5a.75.75 0 000 1.5h1.5zM17.25 17a.75.75 0 000-1.5h-5.5a.75.75 0 000 1.5h5.5zM9 10a.75.75 0 01-.75.75h-5.5a.75.75 0 010-1.5h5.5A.75.75 0 019 10zM17.25 10.75a.75.75 0 000-1.5h-1.5a.75.75 0 000 1.5h1.5zM14 10a2 2 0 10-4 0 2 2 0 004 0zM10 16.25a2 2 0 10-4 0 2 2 0 004 0z" />
      </svg>
      <VisuallyHidden>Adjust settings</VisuallyHidden>
    </button>
  ),
  parameters: {
    docs: {
      description: {
        story: "Provides an accessible name for an icon-only button.",
      },
    },
  },
};

export const FocusableSkipLink: Story = {
  args: { children: "Skip to main content", focusable: true },
  render: () => (
    <div>
      <a
        href="#main"
        className="absolute w-px h-px overflow-hidden whitespace-nowrap border-0 p-0 m-[-1px] [clip:rect(0,0,0,0)] focus:static focus:w-auto focus:h-auto focus:overflow-visible focus:whitespace-normal focus:[clip:auto] focus:m-0"
      >
        Skip to main content
      </a>
      <p>Tab to reveal the hidden skip link above.</p>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "With `focusable={true}`, the element becomes visible when focused. " +
          "Useful for skip links. (Press Tab to see it appear.)",
      },
    },
  },
};
