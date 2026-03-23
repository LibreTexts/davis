import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "./text";

const meta: Meta<typeof Text> = {
  title: "Typography/Text",
  component: Text,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    children: "The quick brown fox jumps over the lazy dog.",
  },
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Text size="xs">Extra Small (xs)</Text>
      <Text size="sm">Small (sm)</Text>
      <Text size="base">Base (base)</Text>
      <Text size="lg">Large (lg)</Text>
      <Text size="xl">Extra Large (xl)</Text>
      <Text size="2xl">2XL (2xl)</Text>
    </div>
  ),
};

export const AllWeights: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Text weight="normal">Normal weight</Text>
      <Text weight="medium">Medium weight</Text>
      <Text weight="semibold">Semibold weight</Text>
      <Text weight="bold">Bold weight</Text>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Text color="default">Default</Text>
      <Text color="muted">Muted</Text>
      <Text color="primary">Primary</Text>
      <Text color="success">Success</Text>
      <Text color="warning">Warning</Text>
      <Text color="danger">Danger</Text>
    </div>
  ),
};

export const AsBlock: Story = {
  render: () => (
    <Text as="p" size="base">
      This is a paragraph of text rendered as a block element. It supports all
      the same size, weight, and color variants as inline text.
    </Text>
  ),
};

export const Truncated: Story = {
  render: () => (
    <div className="w-48">
      <Text truncate>This is a very long text that will be truncated</Text>
    </div>
  ),
};
