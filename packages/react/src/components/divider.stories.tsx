import type { Meta, StoryObj } from "@storybook/react";
import { Divider } from "./divider";

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
    (Story) => (
      <div className="p-8">
        <p className="text-sm mb-4">Above the divider</p>
        <Story />
        <p className="text-sm mt-4">Below the divider</p>
      </div>
    ),
  ],
};

export const HorizontalWithLabel: Story = {
  args: { orientation: "horizontal", label: "Or continue with" },
  decorators: [
    (Story) => (
      <div className="p-8">
        <Story />
      </div>
    ),
  ],
};

export const HorizontalWithSectionLabel: Story = {
  args: { orientation: "horizontal", label: "Section divider" },
};

export const Vertical: Story = {
  args: { orientation: "vertical" },
  decorators: [
    (Story) => (
      <div className="flex items-center gap-4 p-8 h-16">
        <span className="text-sm">Left</span>
        <Story />
        <span className="text-sm">Right</span>
      </div>
    ),
  ],
};
