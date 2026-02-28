import type { Meta, StoryObj } from "@storybook/react";
import { SkipLink } from "./skip-link";

const meta = {
  title: "Utilities/SkipLink",
  component: SkipLink,
  parameters: {
    docs: {
      description: {
        component:
          'A "Skip to main content" link that is visually hidden until focused via keyboard. ' +
          "Essential for keyboard users to bypass repeated navigation. " +
          "Press Tab on any story to reveal the skip link.",
      },
    },
  },
} satisfies Meta<typeof SkipLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [
    (Story) => (
      <div>
        <Story />
        <nav className="border-b border-gray-200 p-4 mb-4">
          <span className="font-semibold text-gray-700">Site Navigation</span>
          <span className="ml-4 text-sm text-gray-500">(Press Tab to reveal the skip link)</span>
        </nav>
        <main id="main-content" className="p-4">
          <h1 className="text-xl font-bold mb-2">Main Content</h1>
          <p className="text-gray-600">The skip link jumps focus here.</p>
        </main>
      </div>
    ),
  ],
};

export const CustomTarget: Story = {
  args: {
    targetId: "search-results",
    children: "Skip to search results",
  },
  decorators: [
    (Story) => (
      <div>
        <Story />
        <nav className="border-b border-gray-200 p-4 mb-4">
          <span className="font-semibold text-gray-700">Filter Panel</span>
          <span className="ml-4 text-sm text-gray-500">(Press Tab to reveal the skip link)</span>
        </nav>
        <div id="search-results" tabIndex={-1} className="p-4 border rounded-md">
          <h2 className="text-lg font-semibold mb-2">Search Results</h2>
          <p className="text-gray-600">Results would appear here.</p>
        </div>
      </div>
    ),
  ],
};
