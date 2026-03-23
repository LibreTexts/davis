import type { Meta, StoryObj } from "@storybook/react";
import { Stack } from "./stack";

const meta: Meta<typeof Stack> = {
  title: "Layout/Stack",
  component: Stack,
  args: {
    children: (
      <>
        <div className="bg-primary/20 rounded p-3 text-sm">Item 1</div>
        <div className="bg-primary/20 rounded p-3 text-sm">Item 2</div>
        <div className="bg-primary/20 rounded p-3 text-sm">Item 3</div>
      </>
    ),
  },
  argTypes: {
    direction: { control: "select", options: ["vertical", "horizontal"] },
    gap: { control: "select", options: ["none", "xs", "sm", "md", "lg", "xl", "2xl"] },
    align: { control: "select", options: ["start", "center", "end", "stretch", "baseline"] },
    justify: { control: "select", options: ["start", "center", "end", "between", "around", "evenly"] },
    wrap: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof Stack>;

export const Vertical: Story = {
  args: { direction: "vertical", gap: "md" },
};

export const Horizontal: Story = {
  args: { direction: "horizontal", gap: "md" },
};

export const GapNone: Story = {
  args: { gap: "none" },
};

export const GapXs: Story = {
  args: { gap: "xs" },
};

export const GapSm: Story = {
  args: { gap: "sm" },
};

export const GapMd: Story = {
  args: { gap: "md" },
};

export const GapLg: Story = {
  args: { gap: "lg" },
};

export const GapXl: Story = {
  args: { gap: "xl" },
};

export const Gap2xl: Story = {
  args: { gap: "2xl" },
};

export const AlignCenter: Story = {
  args: { direction: "horizontal", align: "center" },
};

export const JustifyBetween: Story = {
  args: { direction: "horizontal", justify: "between" },
};

export const Wrapped: Story = {
  args: {
    direction: "horizontal",
    wrap: true,
    gap: "sm",
    children: Array.from({ length: 8 }).map((_, i) => (
      <div key={i} className="bg-primary/20 rounded p-3 text-sm">Item {i + 1}</div>
    )),
  },
};

export const AsNav: Story = {
  args: {
    as: "nav",
    direction: "horizontal",
    gap: "sm",
  },
};
