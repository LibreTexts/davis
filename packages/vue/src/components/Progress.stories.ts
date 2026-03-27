import type { Meta, StoryObj } from "@storybook/vue3";
import { ref, onMounted, onUnmounted } from "vue";
import Progress from "./Progress.vue";

const meta: Meta<typeof Progress> = {
  title: "Loading/Progress",
  component: Progress,
  args: {
    value: 50,
    label: "Loading...",
  },
  argTypes: {
    value: { control: "range", min: 0, max: 100, step: 1 },
    variant: { control: "select", options: ["default", "success", "warning", "danger"] },
    size: { control: "select", options: ["sm", "md", "lg"] },
    showValue: { control: "boolean" },
  },
};
export default meta;
type Story = StoryObj<typeof Progress>;

export const Default: Story = {
  args: { value: 50 },
};

export const Empty: Story = {
  args: { value: 0 },
};

export const Quarter: Story = {
  args: { value: 25 },
};

export const ThreeQuarters: Story = {
  args: { value: 75 },
};

export const Complete: Story = {
  args: { value: 100, variant: "success" },
};

export const Indeterminate: Story = {
  render: () => ({
    components: { Progress },
    template: `<Progress label="Loading content..." />`,
  }),
  args: {},
};

export const VariantSuccess: Story = {
  args: { value: 80, variant: "success" },
};

export const VariantWarning: Story = {
  args: { value: 60, variant: "warning" },
};

export const VariantDanger: Story = {
  args: { value: 40, variant: "danger" },
};

export const SizeSmall: Story = {
  args: { value: 50, size: "sm" },
};

export const SizeMedium: Story = {
  args: { value: 50, size: "md" },
};

export const SizeLarge: Story = {
  args: { value: 50, size: "lg" },
};

export const WithValue: Story = {
  args: { value: 66, showValue: true, label: "Uploading file" },
};

export const Animated: Story = {
  render: () => ({
    components: { Progress },
    setup() {
      const value = ref(0);
      let intervalId: ReturnType<typeof setInterval> | undefined;
      onMounted(() => {
        intervalId = setInterval(() => {
          if (value.value >= 100) {
            clearInterval(intervalId);
          } else {
            value.value = Math.min(100, value.value + 2);
          }
        }, 100);
      });
      onUnmounted(() => clearInterval(intervalId));
      return { value };
    },
    template: `<Progress :value="value" label="Processing..." :show-value="true" />`,
  }),
  args: {},
};

export const AllVariants: Story = {
  render: () => ({
    components: { Progress },
    template: `
      <div class="flex flex-col gap-4 w-80">
        <Progress :value="75" variant="default" label="Default" />
        <Progress :value="75" variant="success" label="Success" />
        <Progress :value="75" variant="warning" label="Warning" />
        <Progress :value="75" variant="danger" label="Danger" />
      </div>
    `,
  }),
  args: {},
};

export const AllSizes: Story = {
  render: () => ({
    components: { Progress },
    template: `
      <div class="flex flex-col gap-4 w-80">
        <Progress :value="60" size="sm" label="Small" />
        <Progress :value="60" size="md" label="Medium" />
        <Progress :value="60" size="lg" label="Large" />
      </div>
    `,
  }),
  args: {},
};
