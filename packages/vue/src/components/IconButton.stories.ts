import type { Meta, StoryObj } from "@storybook/vue3";
import IconButton from "./IconButton.vue";

const meta: Meta<typeof IconButton> = {
  title: "Components/IconButton",
  component: IconButton,
  parameters: { layout: "padded" },
  argTypes: {
    variant: { control: "select", options: ["primary", "secondary", "tertiary", "destructive", "ghost", "outline"] },
    size: { control: "select", options: ["sm", "md", "lg"] },
  },
};
export default meta;
type Story = StoryObj<typeof IconButton>;


export const Default: Story = {
  render: () => ({
    components: { IconButton },
    template: `
      <IconButton aria-label="Search" tooltip="Search">
        <template #icon>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z" clip-rule="evenodd" />
          </svg>
        </template>
      </IconButton>
    `,
  }),
  args: {},
};

export const AllVariants: Story = {
  render: () => ({
    components: { IconButton },
    template: `
      <div class="flex flex-wrap gap-3 items-center">
        <IconButton v-for="v in ['primary', 'secondary', 'tertiary', 'destructive', 'ghost', 'outline']" :key="v" :variant="v" :aria-label="v" :tooltip="v">
          <template #icon>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z" clip-rule="evenodd" />
            </svg>
          </template>
        </IconButton>
      </div>
    `,
  }),
  args: {},
};

export const Loading: Story = {
  render: () => ({
    components: { IconButton },
    template: `
      <IconButton aria-label="Loading" :loading="true">
        <template #icon>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z" clip-rule="evenodd" />
          </svg>
        </template>
      </IconButton>
    `,
  }),
  args: {},
};
