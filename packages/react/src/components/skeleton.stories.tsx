import type { Meta, StoryObj } from "@storybook/react";
import { Skeleton } from "./skeleton";

const meta: Meta<typeof Skeleton> = {
  title: "Loading/Skeleton",
  component: Skeleton,
  argTypes: {
    variant: { control: "select", options: ["text", "circular", "rectangular", "rounded"] },
    width: { control: "text" },
    height: { control: "text" },
    lines: { control: "number" },
  },
};

export default meta;

type Story = StoryObj<typeof Skeleton>;

export const Rounded: Story = {
  args: { variant: "rounded", width: "100%", height: 48 },
};

export const Text: Story = {
  args: { variant: "text", width: "100%" },
};

export const MultilineText: Story = {
  args: { variant: "text", lines: 3, width: "100%" },
};

export const MultilineTextFiveLines: Story = {
  args: { variant: "text", lines: 5, width: "100%" },
};

export const Circular: Story = {
  args: { variant: "circular", width: 48, height: 48 },
};

export const Rectangular: Story = {
  args: { variant: "rectangular", width: "100%", height: 200 },
};

export const CustomDimensions: Story = {
  args: { variant: "rounded", width: 200, height: 120 },
};

export const CardSkeleton: Story = {
  render: () => (
    <div className="flex flex-col gap-3 p-4 border border-gray-200 rounded-lg w-64">
      <Skeleton variant="rectangular" height={160} />
      <Skeleton variant="text" lines={2} />
      <Skeleton variant="rounded" height={36} />
    </div>
  ),
};

export const AvatarWithText: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Skeleton variant="circular" width={40} height={40} />
      <div className="flex-1">
        <Skeleton variant="text" width="60%" />
        <div className="mt-1">
          <Skeleton variant="text" width="40%" />
        </div>
      </div>
    </div>
  ),
};
