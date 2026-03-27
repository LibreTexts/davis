import type { Meta, StoryObj } from "@storybook/vue3";
import Spinner from "./Spinner.vue";

const meta: Meta<typeof Spinner> = {
  title: "Components/Spinner",
  component: Spinner,
  parameters: { layout: "centered" },
  argTypes: {
    size: { control: "select", options: ["xs", "sm", "md", "lg", "xl"] },
    color: { control: "select", options: ["primary", "secondary", "white", "current", "success", "warning", "danger"] },
  },
};

export default meta;

type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
  args: {
    size: "md",
    color: "primary",
  },
};

export const AllSizes: Story = {
  render: () => ({
    components: { Spinner },
    template: `
      <div class="flex items-center gap-4">
        <Spinner size="xs" />
        <Spinner size="sm" />
        <Spinner size="md" />
        <Spinner size="lg" />
        <Spinner size="xl" />
      </div>
    `,
  }),
};

export const AllColors: Story = {
  render: () => ({
    components: { Spinner },
    template: `
      <div class="flex items-center gap-4">
        <Spinner color="primary" />
        <Spinner color="secondary" />
        <Spinner color="success" />
        <Spinner color="warning" />
        <Spinner color="danger" />
      </div>
    `,
  }),
};

export const WithText: Story = {
  args: {
    text: "Loading...",
    size: "md",
  },
};
