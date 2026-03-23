import type { Meta, StoryObj } from "@storybook/react";
import { Container } from "./container";

const meta: Meta<typeof Container> = {
  title: "Layout/Container",
  component: Container,
  args: {
    children: (
      <div className="bg-primary/10 p-4 rounded text-sm text-center">
        Container content
      </div>
    ),
  },
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg", "xl", "2xl", "prose"] },
    centered: { control: "boolean" },
    padded: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof Container>;

export const Default: Story = {};

export const Small: Story = {
  args: { size: "sm" },
};

export const Medium: Story = {
  args: { size: "md" },
};

export const Large: Story = {
  args: { size: "lg" },
};

export const ExtraLarge: Story = {
  args: { size: "xl" },
};

export const TwoExtraLarge: Story = {
  args: { size: "2xl" },
};

export const Prose: Story = {
  args: {
    size: "prose",
    children: (
      <p className="text-sm">
        A prose container limits line length for comfortable reading. This is useful for
        article content or any long-form text where readability is important.
      </p>
    ),
  },
};

export const Unpadded: Story = {
  args: { padded: false },
};

export const Uncentered: Story = {
  args: { centered: false },
};

export const AsMain: Story = {
  args: { as: "main", size: "lg" },
};

export const AsSection: Story = {
  args: { as: "section", size: "md" },
};
