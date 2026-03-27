import type { Meta, StoryObj } from "@storybook/vue3";
import Divider from "./Divider.vue";

const meta: Meta<typeof Divider> = {
  title: "Layout/Divider",
  component: Divider,
  argTypes: {
    orientation: { control: "select", options: ["horizontal", "vertical"] },
    label: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<typeof Divider>;

export const Horizontal: Story = {
  args: { orientation: "horizontal" },
  decorators: [
    () => ({
      template: `<div class="p-8"><p class="text-sm mb-4">Above the divider</p><story /><p class="text-sm mt-4">Below the divider</p></div>`,
    }),
  ],
};

export const HorizontalWithLabel: Story = {
  args: { orientation: "horizontal", label: "Or continue with" },
  decorators: [
    () => ({
      template: `<div class="p-8"><story /></div>`,
    }),
  ],
};

export const HorizontalWithSectionLabel: Story = {
  args: { orientation: "horizontal", label: "Section divider" },
};

export const Vertical: Story = {
  args: { orientation: "vertical" },
  decorators: [
    () => ({
      template: `<div class="flex items-center gap-4 p-8 h-16"><span class="text-sm">Left</span><story /><span class="text-sm">Right</span></div>`,
    }),
  ],
};
