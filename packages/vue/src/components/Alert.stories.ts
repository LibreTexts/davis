import type { Meta, StoryObj } from "@storybook/vue3";
import Alert from "./Alert.vue";

const meta: Meta<typeof Alert> = {
  title: "Components/Alert",
  component: Alert,
  parameters: { layout: "padded" },
  argTypes: {
    variant: { control: "select", options: ["info", "success", "warning", "error"] },
    showIcon: { control: "boolean" },
    dismissible: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  args: {
    variant: "info",
    message: "This is an informational alert message.",
    showIcon: true,
  },
};

export const AllVariants: Story = {
  render: () => ({
    components: { Alert },
    template: `
      <div class="flex flex-col gap-4 max-w-xl">
        <Alert variant="info" message="This is an info alert." />
        <Alert variant="success" message="This is a success alert." />
        <Alert variant="warning" message="This is a warning alert." />
        <Alert variant="error" message="This is an error alert." />
      </div>
    `,
  }),
};

export const WithTitle: Story = {
  args: {
    variant: "success",
    title: "Success!",
    message: "Your changes have been saved successfully.",
  },
};

export const Dismissible: Story = {
  render: () => ({
    components: { Alert },
    template: `
      <Alert
        variant="warning"
        title="Warning"
        message="This alert can be dismissed."
        :dismissible="true"
        @dismiss="() => console.log('Dismissed')"
      />
    `,
  }),
};
