import type { Meta, StoryObj } from "@storybook/vue3";
import { ref } from "vue";
import Select from "./Select.vue";

const meta: Meta<typeof Select> = {
  title: "Components/Select",
  component: Select,
  parameters: { layout: "padded" },
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg"] },
    error: { control: "boolean" },
    required: { control: "boolean" },
    disabled: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof Select>;

const countryOptions = [
  { value: "us", label: "United States" },
  { value: "ca", label: "Canada" },
  { value: "mx", label: "Mexico" },
  { value: "uk", label: "United Kingdom" },
  { value: "de", label: "Germany" },
  { value: "fr", label: "France" },
];

export const Default: Story = {
  render: () => ({
    components: { Select },
    setup() {
      const value = ref("");
      return { value, countryOptions };
    },
    template: `
      <div class="max-w-sm">
        <Select
          v-model="value"
          name="country"
          label="Country"
          placeholder="Select a country"
          :options="countryOptions"
        />
      </div>
    `,
  }),
};

export const WithHelperText: Story = {
  render: () => ({
    components: { Select },
    setup() {
      const value = ref("");
      return { value, countryOptions };
    },
    template: `
      <div class="max-w-sm">
        <Select
          v-model="value"
          name="country"
          label="Country"
          placeholder="Select a country"
          :options="countryOptions"
          helper-text="Select your country of residence."
        />
      </div>
    `,
  }),
};

export const WithError: Story = {
  render: () => ({
    components: { Select },
    setup() {
      const value = ref("");
      return { value, countryOptions };
    },
    template: `
      <div class="max-w-sm">
        <Select
          v-model="value"
          name="country"
          label="Country"
          placeholder="Select a country"
          :options="countryOptions"
          :error="true"
          error-message="Please select a country."
        />
      </div>
    `,
  }),
};

export const Required: Story = {
  render: () => ({
    components: { Select },
    setup() {
      const value = ref("");
      return { value, countryOptions };
    },
    template: `
      <div class="max-w-sm">
        <Select
          v-model="value"
          name="country"
          label="Country"
          placeholder="Select a country"
          :options="countryOptions"
          :required="true"
        />
      </div>
    `,
  }),
};
