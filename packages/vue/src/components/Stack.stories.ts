import type { Meta, StoryObj } from "@storybook/vue3";
import Stack from "./Stack.vue";

const meta: Meta<typeof Stack> = {
  title: "Layout/Stack",
  component: Stack,
  parameters: { layout: "padded" },
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

const threeItems = `
  <div class="bg-primary/20 rounded p-3 text-sm">Item 1</div>
  <div class="bg-primary/20 rounded p-3 text-sm">Item 2</div>
  <div class="bg-primary/20 rounded p-3 text-sm">Item 3</div>
`;

const eightItems = Array.from({ length: 8 }, (_, i) =>
  `<div class="bg-primary/20 rounded p-3 text-sm">Item ${i + 1}</div>`
).join("\n  ");

export const Vertical: Story = {
  render: () => ({
    components: { Stack },
    template: `<Stack direction="vertical" gap="md">${threeItems}</Stack>`,
  }),
  args: {},
};

export const Horizontal: Story = {
  render: () => ({
    components: { Stack },
    template: `<Stack direction="horizontal" gap="md">${threeItems}</Stack>`,
  }),
  args: {},
};

export const GapNone: Story = {
  render: () => ({
    components: { Stack },
    template: `<Stack gap="none">${threeItems}</Stack>`,
  }),
  args: {},
};

export const GapXs: Story = {
  render: () => ({
    components: { Stack },
    template: `<Stack gap="xs">${threeItems}</Stack>`,
  }),
  args: {},
};

export const GapSm: Story = {
  render: () => ({
    components: { Stack },
    template: `<Stack gap="sm">${threeItems}</Stack>`,
  }),
  args: {},
};

export const GapMd: Story = {
  render: () => ({
    components: { Stack },
    template: `<Stack gap="md">${threeItems}</Stack>`,
  }),
  args: {},
};

export const GapLg: Story = {
  render: () => ({
    components: { Stack },
    template: `<Stack gap="lg">${threeItems}</Stack>`,
  }),
  args: {},
};

export const GapXl: Story = {
  render: () => ({
    components: { Stack },
    template: `<Stack gap="xl">${threeItems}</Stack>`,
  }),
  args: {},
};

export const Gap2xl: Story = {
  render: () => ({
    components: { Stack },
    template: `<Stack gap="2xl">${threeItems}</Stack>`,
  }),
  args: {},
};

export const AlignCenter: Story = {
  render: () => ({
    components: { Stack },
    template: `<Stack direction="horizontal" align="center">${threeItems}</Stack>`,
  }),
  args: {},
};

export const JustifyBetween: Story = {
  render: () => ({
    components: { Stack },
    template: `<Stack direction="horizontal" justify="between">${threeItems}</Stack>`,
  }),
  args: {},
};

export const Wrapped: Story = {
  render: () => ({
    components: { Stack },
    template: `<Stack direction="horizontal" :wrap="true" gap="sm">${eightItems}</Stack>`,
  }),
  args: {},
};

export const AsNav: Story = {
  render: () => ({
    components: { Stack },
    template: `<Stack as="nav" direction="horizontal" gap="sm">${threeItems}</Stack>`,
  }),
  args: {},
};
