import type { Meta, StoryObj } from "@storybook/vue3";
import { ref } from "vue";
import Badge from "./Badge.vue";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  parameters: { layout: "padded" },
  args: {
    label: "Badge",
  },
  argTypes: {
    variant: { control: "select", options: ["default", "primary", "success", "warning", "danger"] },
    size: { control: "select", options: ["sm", "md", "lg"] },
    dot: { control: "boolean" },
    removable: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    label: "Badge",
    variant: "default",
    size: "md",
    dot: false,
  },
};

export const AllVariants: Story = {
  render: () => ({
    components: { Badge },
    template: `
      <div class="flex flex-wrap gap-3 items-center">
        <Badge label="Default" variant="default" />
        <Badge label="Primary" variant="primary" />
        <Badge label="Success" variant="success" />
        <Badge label="Warning" variant="warning" />
        <Badge label="Danger"  variant="danger"  />
      </div>
    `,
  }),
  args: {},
};

export const Sizes: Story = {
  render: () => ({
    components: { Badge },
    template: `
      <div class="flex flex-wrap gap-3 items-center">
        <Badge variant="primary" size="sm" label="Small" />
        <Badge variant="primary" size="md" label="Medium" />
        <Badge variant="primary" size="lg" label="Large" />
      </div>
    `,
  }),
  args: {},
};

export const WithDot: Story = {
  render: () => ({
    components: { Badge },
    template: `
      <div class="flex flex-wrap gap-3 items-center">
        <Badge variant="success" label="Active"   :dot="true" />
        <Badge variant="warning" label="Pending"  :dot="true" />
        <Badge variant="default" label="Inactive" :dot="true" />
        <Badge variant="danger"  label="Error"    :dot="true" />
      </div>
    `,
  }),
  args: {},
};

const INITIAL_TAGS = ["Vue", "TypeScript", "Tailwind", "Storybook", "Vite"];

export const Removable: Story = {
  render: () => ({
    components: { Badge },
    setup() {
      const tags = ref([...INITIAL_TAGS]);
      function remove(tag: string) {
        tags.value = tags.value.filter((t) => t !== tag);
      }
      return { tags, remove };
    },
    template: `
      <div class="flex flex-wrap gap-2">
        <Badge
          v-for="tag in tags"
          :key="tag"
          variant="primary"
          :label="tag"
          :removable="true"
          @remove="remove(tag)"
        />
        <span v-if="tags.length === 0" class="text-sm text-gray-500">
          All tags removed
        </span>
      </div>
    `,
  }),
  args: {},
};

export const WithIcon: Story = {
  render: () => ({
    components: { Badge },
    template: `
      <div class="flex flex-wrap gap-3 items-center">
        <Badge variant="warning" label="Featured">
          <template #icon>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-3" aria-hidden="true">
              <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z" clip-rule="evenodd" />
            </svg>
          </template>
        </Badge>
        <Badge variant="success" label="Verified">
          <template #icon>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-3" aria-hidden="true">
              <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" />
            </svg>
          </template>
        </Badge>
        <Badge variant="primary" label="New">
          <template #icon>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-3" aria-hidden="true">
              <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z" clip-rule="evenodd" />
            </svg>
          </template>
        </Badge>
      </div>
    `,
  }),
  args: {},
};
