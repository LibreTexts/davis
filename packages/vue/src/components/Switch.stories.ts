import type { Meta, StoryObj } from "@storybook/vue3";
import { ref } from "vue";
import Switch from "./Switch.vue";

const meta: Meta<typeof Switch> = {
  title: "Components/Switch",
  component: Switch,
  parameters: { layout: "centered" },
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg"] },
    labelPosition: { control: "select", options: ["left", "right"] },
    disabled: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  render: () => ({
    components: { Switch },
    setup() {
      const enabled = ref(false);
      return { enabled };
    },
    template: '<Switch v-model="enabled" label="Enable notifications" />',
  }),
};

export const WithDescription: Story = {
  render: () => ({
    components: { Switch },
    setup() {
      const enabled = ref(true);
      return { enabled };
    },
    template: `
      <Switch
        v-model="enabled"
        label="Dark mode"
        description="Switch to dark theme for better viewing at night."
      />
    `,
  }),
};

export const AllSizes: Story = {
  render: () => ({
    components: { Switch },
    setup() {
      const sm = ref(false);
      const md = ref(true);
      const lg = ref(false);
      return { sm, md, lg };
    },
    template: `
      <div class="flex flex-col gap-6">
        <Switch v-model="sm" size="sm" label="Small" />
        <Switch v-model="md" size="md" label="Medium" />
        <Switch v-model="lg" size="lg" label="Large" />
      </div>
    `,
  }),
};

export const LabelPositions: Story = {
  render: () => ({
    components: { Switch },
    setup() {
      const left = ref(true);
      const right = ref(true);
      return { left, right };
    },
    template: `
      <div class="flex flex-col gap-6">
        <Switch v-model="left" label="Label on left" label-position="left" />
        <Switch v-model="right" label="Label on right" label-position="right" />
      </div>
    `,
  }),
};
