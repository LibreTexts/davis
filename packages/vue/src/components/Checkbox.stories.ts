import type { Meta, StoryObj } from "@storybook/vue3";
import { ref } from "vue";
import Checkbox from "./Checkbox.vue";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
  parameters: { layout: "centered" },
  args: {
    name: "terms",
    label: "I agree to the terms and conditions",
  },
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg"] },
    disabled: { control: "boolean" },
    error: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  render: (args) => ({
    components: { Checkbox },
    setup() {
      const checked = ref(false);
      return { args, checked };
    },
    template: `<Checkbox v-bind="args" v-model="checked" />`,
  }),
  args: {},
};

export const DefaultChecked: Story = {
  render: (args) => ({
    components: { Checkbox },
    setup() {
      const checked = ref(true);
      return { args, checked };
    },
    template: `<Checkbox v-bind="args" v-model="checked" />`,
  }),
  args: {},
};

export const WithDescription: Story = {
  args: {
    label: "Marketing emails",
    description: "Receive emails about new products, features, and more.",
  },
  render: (args) => ({
    components: { Checkbox },
    setup() {
      const checked = ref(false);
      return { args, checked };
    },
    template: `<Checkbox v-bind="args" v-model="checked" />`,
  }),
};

export const Indeterminate: Story = {
  render: () => ({
    components: { Checkbox },
    setup() {
      const items = ref([false, false, false]);
      const labels = ["Option A", "Option B", "Option C"];
      const allChecked = () => items.value.every(Boolean);
      const someChecked = () => items.value.some(Boolean);
      const isIndeterminate = () => someChecked() && !allChecked();
      function toggleAll(val: boolean) { items.value = items.value.map(() => val); }
      function toggleItem(i: number, val: boolean) {
        const next = [...items.value];
        next[i] = val;
        items.value = next;
      }
      return { items, labels, allChecked, isIndeterminate, toggleAll, toggleItem };
    },
    template: `
      <div class="flex flex-col gap-2">
        <Checkbox
          name="select-all"
          label="Select all"
          :model-value="allChecked()"
          :indeterminate="isIndeterminate()"
          @update:model-value="toggleAll($event)"
        />
        <div class="ml-7 flex flex-col gap-2">
          <Checkbox
            v-for="(label, i) in labels"
            :key="label"
            :name="\`item-\${i}\`"
            :label="label"
            :model-value="items[i]"
            @update:model-value="toggleItem(i, $event)"
          />
        </div>
      </div>
    `,
  }),
  args: {},
};

export const WithError: Story = {
  args: { error: true },
  render: (args) => ({
    components: { Checkbox },
    setup() {
      const checked = ref(false);
      return { args, checked };
    },
    template: `<Checkbox v-bind="args" v-model="checked" />`,
  }),
};

export const Required: Story = {
  args: { required: true },
  render: (args) => ({
    components: { Checkbox },
    setup() {
      const checked = ref(false);
      return { args, checked };
    },
    template: `<Checkbox v-bind="args" v-model="checked" />`,
  }),
};

export const DisabledUnchecked: Story = {
  args: { disabled: true },
  render: (args) => ({
    components: { Checkbox },
    setup() {
      return { args };
    },
    template: `<Checkbox v-bind="args" />`,
  }),
};

export const DisabledChecked: Story = {
  args: { disabled: true },
  render: (args) => ({
    components: { Checkbox },
    setup() {
      const checked = ref(true);
      return { args, checked };
    },
    template: `<Checkbox v-bind="args" v-model="checked" />`,
  }),
};

export const SmallSize: Story = {
  args: { size: "sm" },
  render: (args) => ({
    components: { Checkbox },
    setup() {
      const checked = ref(false);
      return { args, checked };
    },
    template: `<Checkbox v-bind="args" v-model="checked" />`,
  }),
};

export const LargeSize: Story = {
  args: { size: "lg" },
  render: (args) => ({
    components: { Checkbox },
    setup() {
      const checked = ref(false);
      return { args, checked };
    },
    template: `<Checkbox v-bind="args" v-model="checked" />`,
  }),
};

export const WithoutLabel: Story = {
  render: () => ({
    components: { Checkbox },
    template: `<Checkbox v-bind="args" v-model="checked" />`,
  }),
  args: {},
};
