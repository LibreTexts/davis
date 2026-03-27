import type { Meta, StoryObj } from "@storybook/vue3";
import Tooltip from "./Tooltip.vue";
import Button from "./Button.vue";

const meta: Meta<typeof Tooltip> = {
  title: "Components/Tooltip",
  component: Tooltip,
  parameters: { layout: "centered" },
  argTypes: {
    placement: { control: "select", options: ["top", "bottom", "left", "right"] },
    delay: { control: "number" },
    disabled: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  render: () => ({
    components: { Tooltip, Button },
    template: `
      <Tooltip content="This is a tooltip">
        <Button>Hover me</Button>
      </Tooltip>
    `,
  }),
};

export const AllPlacements: Story = {
  render: () => ({
    components: { Tooltip, Button },
    template: `
      <div class="flex flex-wrap gap-4 p-16">
        <Tooltip content="Top tooltip" placement="top">
          <Button>Top</Button>
        </Tooltip>
        <Tooltip content="Bottom tooltip" placement="bottom">
          <Button>Bottom</Button>
        </Tooltip>
        <Tooltip content="Left tooltip" placement="left">
          <Button>Left</Button>
        </Tooltip>
        <Tooltip content="Right tooltip" placement="right">
          <Button>Right</Button>
        </Tooltip>
      </div>
    `,
  }),
};

export const WithDelay: Story = {
  render: () => ({
    components: { Tooltip, Button },
    template: `
      <Tooltip content="This tooltip has a delay" :delay="500">
        <Button>Hover (500ms delay)</Button>
      </Tooltip>
    `,
  }),
};
