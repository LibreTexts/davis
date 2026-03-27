import type { Meta, StoryObj } from "@storybook/vue3";
import { ref } from "vue";
import RadioGroup from "./RadioGroup.vue";
import Radio from "./Radio.vue";

const meta: Meta<typeof RadioGroup> = {
  title: "Components/RadioGroup",
  component: RadioGroup,
  args: {
    name: "plan",
    label: "Select a plan",
  },
  argTypes: {
    orientation: { control: "select", options: ["vertical", "horizontal"] },
  },
};

export default meta;

type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  render: (args) => ({
    components: { RadioGroup, Radio },
    setup() {
      const value = ref<string | undefined>(undefined);
      return { args, value };
    },
    template: `
      <RadioGroup v-bind="args" v-model="value">
        <Radio value="starter" label="Starter" description="Best for personal use" />
        <Radio value="pro" label="Pro" description="Best for small teams" />
        <Radio value="enterprise" label="Enterprise" description="Best for large organizations" />
      </RadioGroup>
    `,
  }),
  args: {},
};

export const Horizontal: Story = {
  render: (args) => ({
    components: { RadioGroup, Radio },
    setup() {
      const value = ref<string | undefined>(undefined);
      return { args, value };
    },
    template: `
      <RadioGroup v-bind="args" v-model="value">
        <Radio value="small" label="Small" />
        <Radio value="medium" label="Medium" />
        <Radio value="large" label="Large" />
      </RadioGroup>
    `,
  }),
  args: { orientation: "horizontal" },
};

export const WithDefaultValue: Story = {
  render: (args) => ({
    components: { RadioGroup, Radio },
    setup() {
      const value = ref("pro");
      return { args, value };
    },
    template: `
      <RadioGroup v-bind="args" v-model="value">
        <Radio value="starter" label="Starter" />
        <Radio value="pro" label="Pro" />
        <Radio value="enterprise" label="Enterprise" />
      </RadioGroup>
    `,
  }),
  args: {},
};

export const WithHelperText: Story = {
  render: (args) => ({
    components: { RadioGroup, Radio },
    setup() {
      const value = ref<string | undefined>(undefined);
      return { args, value };
    },
    template: `
      <RadioGroup v-bind="args" v-model="value">
        <Radio value="monthly" label="Monthly billing" />
        <Radio value="annual" label="Annual billing" description="Save 20%" />
      </RadioGroup>
    `,
  }),
  args: { helperText: "You can change your plan at any time." },
};

export const WithError: Story = {
  render: (args) => ({
    components: { RadioGroup, Radio },
    setup() {
      const value = ref<string | undefined>(undefined);
      return { args, value };
    },
    template: `
      <RadioGroup v-bind="args" v-model="value">
        <Radio value="starter" label="Starter" :error="true" />
        <Radio value="pro" label="Pro" :error="true" />
        <Radio value="enterprise" label="Enterprise" :error="true" />
      </RadioGroup>
    `,
  }),
  args: { error: true, errorMessage: "Please select a plan to continue." },
};

export const Required: Story = {
  render: (args) => ({
    components: { RadioGroup, Radio },
    setup() {
      const value = ref<string | undefined>(undefined);
      return { args, value };
    },
    template: `
      <RadioGroup v-bind="args" v-model="value">
        <Radio value="yes" label="Yes" />
        <Radio value="no" label="No" />
      </RadioGroup>
    `,
  }),
  args: { required: true },
};

export const Disabled: Story = {
  render: (args) => ({
    components: { RadioGroup, Radio },
    setup() {
      const value = ref("pro");
      return { args, value };
    },
    template: `
      <RadioGroup v-bind="args" v-model="value">
        <Radio value="starter" label="Starter" />
        <Radio value="pro" label="Pro" />
        <Radio value="enterprise" label="Enterprise" />
      </RadioGroup>
    `,
  }),
  args: { disabled: true },
};

export const WithDisabledOption: Story = {
  render: (args) => ({
    components: { RadioGroup, Radio },
    setup() {
      const value = ref<string | undefined>(undefined);
      return { args, value };
    },
    template: `
      <RadioGroup v-bind="args" v-model="value">
        <Radio value="starter" label="Starter" />
        <Radio value="pro" label="Pro" :disabled="true" description="Currently unavailable" />
        <Radio value="enterprise" label="Enterprise" />
      </RadioGroup>
    `,
  }),
  args: {},
};
