import type { Meta, StoryObj } from "@storybook/vue3";
import Text from "./Text.vue";

const meta: Meta<typeof Text> = {
  title: "Typography/Text",
  component: Text,
  parameters: { layout: "padded" },
  argTypes: {
    size: { control: "select", options: ["xs", "sm", "base", "lg", "xl", "2xl"] },
    weight: { control: "select", options: ["normal", "medium", "semibold", "bold"] },
    color: { control: "select", options: ["default", "muted", "primary", "danger", "success", "warning", "inherit"] },
    align: { control: "select", options: ["left", "center", "right"] },
  },
};
export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: { size: "base" },
  render: (args) => ({
    components: { Text },
    setup() { return { args }; },
    template: `<Text v-bind="args">The quick brown fox jumps over the lazy dog.</Text>`,
  }),
};

export const AllSizes: Story = {
  render: () => ({
    components: { Text },
    template: `
      <div class="flex flex-col gap-2">
        <Text size="xs">Extra Small (xs)</Text>
        <Text size="sm">Small (sm)</Text>
        <Text size="base">Base (base)</Text>
        <Text size="lg">Large (lg)</Text>
        <Text size="xl">Extra Large (xl)</Text>
        <Text size="2xl">2XL (2xl)</Text>
      </div>
    `,
  }),
  args: {},
};

export const AllWeights: Story = {
  render: () => ({
    components: { Text },
    template: `
      <div class="flex flex-col gap-2">
        <Text weight="normal">Normal weight</Text>
        <Text weight="medium">Medium weight</Text>
        <Text weight="semibold">Semibold weight</Text>
        <Text weight="bold">Bold weight</Text>
      </div>
    `,
  }),
  args: {},
};

export const Colors: Story = {
  render: () => ({
    components: { Text },
    template: `
      <div class="flex flex-col gap-2">
        <Text color="default">Default</Text>
        <Text color="muted">Muted</Text>
        <Text color="primary">Primary</Text>
        <Text color="success">Success</Text>
        <Text color="warning">Warning</Text>
        <Text color="danger">Danger</Text>
      </div>
    `,
  }),
  args: {},
};

export const AsBlock: Story = {
  render: () => ({
    components: { Text },
    template: `
      <Text as="p" size="base">
        This is a paragraph of text rendered as a block element. It supports all
        the same size, weight, and color variants as inline text.
      </Text>
    `,
  }),
  args: {},
};

export const Truncated: Story = {
  render: () => ({
    components: { Text },
    template: `
      <div class="w-48">
        <Text :truncate="true">This is a very long text that will be truncated</Text>
      </div>
    `,
  }),
  args: {},
};
