import type { Meta, StoryObj } from "@storybook/vue3";
import Input from "./Input.vue";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  parameters: { layout: "padded" },
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg"] },
    error: { control: "boolean" },
    required: { control: "boolean" },
    disabled: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  render: (args) => ({
    components: { Input },
    setup() {
      return { args };
    },
    template: '<div class="max-w-sm"><Input v-bind="args" /></div>',
  }),
  args: {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
  },
};

export const WithHelperText: Story = {
  render: () => ({
    components: { Input },
    template: `
      <div class="max-w-sm">
        <Input
          name="email"
          label="Email"
          placeholder="you@example.com"
          helper-text="We'll never share your email."
        />
      </div>
    `,
  }),
};

export const WithError: Story = {
  render: () => ({
    components: { Input },
    template: `
      <div class="max-w-sm">
        <Input
          name="email"
          label="Email"
          placeholder="you@example.com"
          :error="true"
          error-message="Please enter a valid email address."
        />
      </div>
    `,
  }),
};

export const Required: Story = {
  render: () => ({
    components: { Input },
    template: `
      <div class="max-w-sm">
        <Input
          name="name"
          label="Full Name"
          :required="true"
        />
      </div>
    `,
  }),
};

export const Disabled: Story = {
  render: () => ({
    components: { Input },
    template: `
      <div class="max-w-sm">
        <Input
          name="email"
          label="Email"
          model-value="disabled@example.com"
          :disabled="true"
        />
      </div>
    `,
  }),
};
