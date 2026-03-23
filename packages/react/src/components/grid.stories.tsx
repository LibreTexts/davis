import type { Meta, StoryObj } from "@storybook/react";
import { Grid } from "./grid";

const GridItem = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-primary/20 rounded p-4 text-sm text-center">{children}</div>
);

const items = Array.from({ length: 6 }).map((_, i) => (
  <GridItem key={i}>Item {i + 1}</GridItem>
));

const meta: Meta<typeof Grid> = {
  title: "Layout/Grid",
  component: Grid,
  args: {
    children: items,
  },
  argTypes: {
    cols: { control: "select", options: [1, 2, 3, 4, 6, 12] },
    gap: { control: "select", options: ["none", "xs", "sm", "md", "lg", "xl", "2xl"] },
  },
};

export default meta;

type Story = StoryObj<typeof Grid>;

export const OneColumn: Story = {
  args: { cols: 1 },
};

export const TwoColumns: Story = {
  args: { cols: 2 },
};

export const ThreeColumns: Story = {
  args: { cols: 3 },
};

export const FourColumns: Story = {
  args: { cols: 4 },
};

export const SixColumns: Story = {
  args: { cols: 6, children: Array.from({ length: 12 }).map((_, i) => <GridItem key={i}>Item {i + 1}</GridItem>) },
};

export const TwelveColumns: Story = {
  args: {
    cols: 12,
    children: Array.from({ length: 12 }).map((_, i) => <GridItem key={i}>{i + 1}</GridItem>),
  },
};

export const GapNone: Story = {
  args: { cols: 3, gap: "none" },
};

export const GapSm: Story = {
  args: { cols: 3, gap: "sm" },
};

export const GapLg: Story = {
  args: { cols: 3, gap: "lg" },
};

export const ResponsiveViaClassName: Story = {
  args: {
    cols: 1,
    className: "md:grid-cols-3",
  },
};
