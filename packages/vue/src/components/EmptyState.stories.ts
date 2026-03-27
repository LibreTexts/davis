import type { Meta, StoryObj } from "@storybook/vue3";
import EmptyState from "./EmptyState.vue";
import Button from "./Button.vue";

const meta: Meta<typeof EmptyState> = {
  title: "Components/EmptyState",
  component: EmptyState,
  parameters: { layout: "padded" },
};
export default meta;
type Story = StoryObj<typeof EmptyState>;

export const Default: Story = {
  args: {
    title: "No results found",
    description: "Try adjusting your search or filter to find what you're looking for.",
  },
};

export const WithAction: Story = {
  render: () => ({
    components: { EmptyState, Button },
    template: `
      <EmptyState
        title="No documents yet"
        description="Get started by creating your first document."
      >
        <template #action>
          <Button variant="primary">Create Document</Button>
        </template>
      </EmptyState>
    `,
  }),
  args: {},
};

export const WithCustomIcon: Story = {
  render: () => ({
    components: { EmptyState, Button },
    template: `
      <EmptyState title="No notifications" description="You're all caught up!">
        <template #icon>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M5.25 9a6.75 6.75 0 0 1 13.5 0v.75c0 2.123.8 4.057 2.1 5.52a.75.75 0 0 1-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 1 1-7.48 0 24.585 24.585 0 0 1-4.831-1.244.75.75 0 0 1-.298-1.205A8.217 8.217 0 0 0 5.25 9.75V9Z" clip-rule="evenodd" />
          </svg>
        </template>
      </EmptyState>
    `,
  }),
  args: {},
};
