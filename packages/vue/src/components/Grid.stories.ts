import type { Meta, StoryObj } from "@storybook/vue3";
import Grid from "./Grid.vue";

const meta: Meta<typeof Grid> = {
  title: "Layout/Grid",
  component: Grid,
  argTypes: {
    cols: { control: "select", options: [1, 2, 3, 4, 6, 12] },
    gap: { control: "select", options: ["none", "xs", "sm", "md", "lg", "xl", "2xl"] },
  },
};

export default meta;

type Story = StoryObj<typeof Grid>;

const sixItems = `
  <div class="bg-primary/20 rounded p-4 text-sm text-center">Item 1</div>
  <div class="bg-primary/20 rounded p-4 text-sm text-center">Item 2</div>
  <div class="bg-primary/20 rounded p-4 text-sm text-center">Item 3</div>
  <div class="bg-primary/20 rounded p-4 text-sm text-center">Item 4</div>
  <div class="bg-primary/20 rounded p-4 text-sm text-center">Item 5</div>
  <div class="bg-primary/20 rounded p-4 text-sm text-center">Item 6</div>
`;

const twelveItems = Array.from({ length: 12 }, (_, i) =>
  `<div class="bg-primary/20 rounded p-4 text-sm text-center">${i + 1}</div>`
).join("\n  ");

export const OneColumn: Story = {
  render: () => ({
    components: { Grid },
    template: `<Grid :cols="1">${sixItems}</Grid>`,
  }),
  args: {},
};

export const TwoColumns: Story = {
  render: () => ({
    components: { Grid },
    template: `<Grid :cols="2">${sixItems}</Grid>`,
  }),
  args: {},
};

export const ThreeColumns: Story = {
  render: () => ({
    components: { Grid },
    template: `<Grid :cols="3">${sixItems}</Grid>`,
  }),
  args: {},
};

export const FourColumns: Story = {
  render: () => ({
    components: { Grid },
    template: `<Grid :cols="4">${sixItems}</Grid>`,
  }),
  args: {},
};

export const SixColumns: Story = {
  render: () => ({
    components: { Grid },
    template: `<Grid :cols="6">${twelveItems}</Grid>`,
  }),
  args: {},
};

export const TwelveColumns: Story = {
  render: () => ({
    components: { Grid },
    template: `<Grid :cols="12">${twelveItems}</Grid>`,
  }),
  args: {},
};

export const GapNone: Story = {
  render: () => ({
    components: { Grid },
    template: `<Grid :cols="3" gap="none">${sixItems}</Grid>`,
  }),
  args: {},
};

export const GapSm: Story = {
  render: () => ({
    components: { Grid },
    template: `<Grid :cols="3" gap="sm">${sixItems}</Grid>`,
  }),
  args: {},
};

export const GapLg: Story = {
  render: () => ({
    components: { Grid },
    template: `<Grid :cols="3" gap="lg">${sixItems}</Grid>`,
  }),
  args: {},
};

export const ResponsiveViaClassName: Story = {
  render: () => ({
    components: { Grid },
    template: `<Grid :cols="1" class="md:grid-cols-3">${sixItems}</Grid>`,
  }),
  args: {},
};
