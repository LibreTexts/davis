import type { Meta, StoryObj } from "@storybook/vue3";
import Heading from "./Heading.vue";

const meta: Meta<typeof Heading> = {
  title: "Typography/Heading",
  component: Heading,
  parameters: { layout: "padded" },
  argTypes: {
    level: { control: "select", options: [1, 2, 3, 4, 5, 6] },
    color: { control: "select", options: ["default", "muted", "primary", "inherit"] },
    align: { control: "select", options: ["left", "center", "right"] },
  },
};
export default meta;
type Story = StoryObj<typeof Heading>;

export const Default: Story = {
  args: { level: 1 },
  render: (args) => ({
    components: { Heading },
    setup() { return { args }; },
    template: `<Heading v-bind="args">Page Title</Heading>`,
  }),
};

export const AllLevels: Story = {
  render: () => ({
    components: { Heading },
    template: `
      <div class="flex flex-col gap-3">
        <Heading :level="1">Heading Level 1</Heading>
        <Heading :level="2">Heading Level 2</Heading>
        <Heading :level="3">Heading Level 3</Heading>
        <Heading :level="4">Heading Level 4</Heading>
        <Heading :level="5">Heading Level 5</Heading>
        <Heading :level="6">Heading Level 6</Heading>
      </div>
    `,
  }),
  args: {},
};

export const Colors: Story = {
  render: () => ({
    components: { Heading },
    template: `
      <div class="flex flex-col gap-3">
        <Heading :level="2" color="default">Default color</Heading>
        <Heading :level="2" color="muted">Muted color</Heading>
        <Heading :level="2" color="primary">Primary color</Heading>
      </div>
    `,
  }),
  args: {},
};

export const SemanticVsVisualLevel: Story = {
  name: "Semantic vs Visual Level",
  render: () => ({
    components: { Heading },
    template: `
      <div class="flex flex-col gap-3">
        <Heading as="h2" :level="1">h2 tag, level-1 size</Heading>
        <Heading as="h3" :level="2">h3 tag, level-2 size</Heading>
      </div>
    `,
  }),
  args: {},
};

export const Aligned: Story = {
  render: () => ({
    components: { Heading },
    template: `
      <div class="flex flex-col gap-3">
        <Heading :level="3" align="left">Left aligned</Heading>
        <Heading :level="3" align="center">Center aligned</Heading>
        <Heading :level="3" align="right">Right aligned</Heading>
      </div>
    `,
  }),
  args: {},
};
