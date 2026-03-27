import type { Meta, StoryObj } from "@storybook/vue3";
import Stepper from "./Stepper.vue";

const STEPS = [
  { label: "Account Details", description: "Name and email" },
  { label: "Personal Info", description: "Address and phone" },
  { label: "Review", description: "Confirm your details" },
  { label: "Complete", description: "All done!" },
];

const meta: Meta<typeof Stepper> = {
  title: "Navigation/Stepper",
  component: Stepper,
  parameters: { layout: "padded" },
  argTypes: {
    orientation: { control: "select", options: ["horizontal", "vertical"] },
    size: { control: "select", options: ["sm", "md", "lg"] },
    currentStep: { control: "range", min: 0, max: 3 },
  },
};
export default meta;
type Story = StoryObj<typeof Stepper>;

export const FirstStep: Story = {
  args: {
    steps: STEPS,
    currentStep: 0,
  },
};

export const MiddleStep: Story = {
  args: {
    steps: STEPS,
    currentStep: 2,
  },
};

export const LastStep: Story = {
  args: {
    steps: STEPS,
    currentStep: 3,
  },
};

export const Vertical: Story = {
  render: () => ({
    components: { Stepper },
    template: `<div class="w-64"><Stepper :steps="steps" :current-step="1" orientation="vertical" /></div>`,
    setup() {
      return { steps: STEPS };
    },
  }),
  args: {},
};

export const Sizes: Story = {
  render: () => ({
    components: { Stepper },
    template: `
      <div class="flex flex-col gap-8">
        <Stepper :steps="steps" :current-step="1" size="sm" />
        <Stepper :steps="steps" :current-step="1" size="md" />
        <Stepper :steps="steps" :current-step="1" size="lg" />
      </div>
    `,
    setup() {
      return { steps: STEPS.slice(0, 3) };
    },
  }),
  args: {},
};

export const SimpleSteps: Story = {
  args: {
    steps: [
      { label: "Cart" },
      { label: "Shipping" },
      { label: "Payment" },
      { label: "Confirm" },
    ],
    currentStep: 1,
  },
};
