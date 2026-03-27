import type { Meta, StoryObj } from "@storybook/vue3";
import SkipLink from "./SkipLink.vue";

const meta: Meta<typeof SkipLink> = {
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
};

export default meta;
type Story = StoryObj<typeof SkipLink>;

export const Default: Story = {
  render: () => ({
    components: { SkipLink },
    template: `
      <div>
        <SkipLink />
        <nav class="border-b border-gray-200 p-4 mb-4">
          <span class="font-semibold text-gray-700">Site Navigation</span>
          <span class="ml-4 text-sm text-gray-500">(Press Tab to reveal the skip link)</span>
        </nav>
        <main id="main-content" class="p-4">
          <h1 class="text-xl font-bold mb-2">Main Content</h1>
          <p class="text-gray-600">The skip link jumps focus here.</p>
        </main>
      </div>
    `,
  }),
  args: {},
};

export const CustomTarget: Story = {
  render: () => ({
    components: { SkipLink },
    template: `
      <div>
        <SkipLink target-id="search-results">Skip to search results</SkipLink>
        <nav class="border-b border-gray-200 p-4 mb-4">
          <span class="font-semibold text-gray-700">Filter Panel</span>
          <span class="ml-4 text-sm text-gray-500">(Press Tab to reveal the skip link)</span>
        </nav>
        <div id="search-results" tabindex="-1" class="p-4 border rounded-md">
          <h2 class="text-lg font-semibold mb-2">Search Results</h2>
          <p class="text-gray-600">Results would appear here.</p>
        </div>
      </div>
    `,
  }),
  args: {},
};
