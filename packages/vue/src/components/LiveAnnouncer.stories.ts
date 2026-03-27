import type { Meta, StoryObj } from "@storybook/vue3";
import { inject, ref } from "vue";
import LiveAnnouncer, { LiveAnnouncerKey } from "./LiveAnnouncer.vue";

const meta: Meta<typeof LiveAnnouncer> = {
  title: "Utilities/LiveAnnouncer",
  component: LiveAnnouncer,
  parameters: {
    docs: {
      description: {
        component:
          "Manages a shared aria-live region for dynamic screen reader announcements. " +
          "Wrap your app with `<LiveAnnouncer>` and use the injected `LiveAnnouncerKey` " +
          "to trigger announcements from any child component.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof LiveAnnouncer>;

export const PoliteAnnouncement: Story = {
  render: () => ({
    components: { LiveAnnouncer },
    setup() {
      const PoliteDemo = {
        setup() {
          const announce = inject(LiveAnnouncerKey)!;
          const count = ref(0);
          function handleSearch() {
            const results = Math.floor(Math.random() * 20) + 1;
            count.value = results;
            announce(`${results} results found`);
          }
          return { count, handleSearch };
        },
        template: `
          <div class="space-y-3">
            <button
              type="button"
              @click="handleSearch"
              class="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Simulate Search
            </button>
            <p v-if="count > 0" class="text-sm text-gray-600">
              Showing {{ count }} results (announced to screen reader)
            </p>
          </div>
        `,
      };
      return { PoliteDemo };
    },
    template: `<LiveAnnouncer><PoliteDemo /></LiveAnnouncer>`,
  }),
  args: {},
};

export const AssertiveAnnouncement: Story = {
  render: () => ({
    components: { LiveAnnouncer },
    setup() {
      const AssertiveDemo = {
        setup() {
          const announce = inject(LiveAnnouncerKey)!;
          const error = ref("");
          function handleValidate() {
            const msg = "Error: email address is required";
            error.value = msg;
            announce(msg, "assertive");
          }
          function handleClear() {
            error.value = "";
            announce("Error cleared", "polite");
          }
          return { error, handleValidate, handleClear };
        },
        template: `
          <div class="space-y-3">
            <div class="flex gap-2">
              <button
                type="button"
                @click="handleValidate"
                class="px-4 py-2 bg-danger text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-danger focus:ring-offset-2"
              >
                Trigger Error
              </button>
              <button
                type="button"
                @click="handleClear"
                class="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              >
                Clear Error
              </button>
            </div>
            <p v-if="error" class="text-sm text-danger font-medium">{{ error }}</p>
          </div>
        `,
      };
      return { AssertiveDemo };
    },
    template: `<LiveAnnouncer><AssertiveDemo /></LiveAnnouncer>`,
  }),
  args: {},
};
