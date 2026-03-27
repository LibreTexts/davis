import type { Meta, StoryObj } from "@storybook/vue3";
import { ref } from "vue";
import NumberInput from "./NumberInput.vue";

const meta: Meta<typeof NumberInput> = {
  title: "Forms/NumberInput",
  component: NumberInput,
  parameters: { layout: "padded" },
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg"] },
  },
};
export default meta;
type Story = StoryObj<typeof NumberInput>;

export const Default: Story = {
  render: () => ({
    components: { NumberInput },
    setup() {
      const value = ref(5);
      return { value };
    },
    template: `<NumberInput name="quantity" label="Quantity" v-model="value" :min="0" :max="100" />`,
  }),
  args: {},
};

export const WithConstraints: Story = {
  render: () => ({
    components: { NumberInput },
    setup() {
      const value = ref(50);
      return { value };
    },
    template: `<NumberInput name="score" label="Score (0–100)" v-model="value" :min="0" :max="100" :step="5" helper-text="Must be between 0 and 100 in steps of 5" />`,
  }),
  args: {},
};

export const WithError: Story = {
  render: () => ({
    components: { NumberInput },
    setup() {
      const value = ref(-5);
      return { value };
    },
    template: `<NumberInput name="amount" label="Amount" v-model="value" :min="0" :error="true" error-message="Value must be positive" />`,
  }),
  args: {},
};

export const Sizes: Story = {
  render: () => ({
    components: { NumberInput },
    setup() {
      const sm = ref(1);
      const md = ref(5);
      const lg = ref(10);
      return { sm, md, lg };
    },
    template: `
      <div class="flex flex-col gap-4 max-w-xs">
        <NumberInput name="sm" label="Small" v-model="sm" size="sm" />
        <NumberInput name="md" label="Medium" v-model="md" size="md" />
        <NumberInput name="lg" label="Large" v-model="lg" size="lg" />
      </div>
    `,
  }),
  args: {},
};
