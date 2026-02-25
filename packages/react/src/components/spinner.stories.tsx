import type { Meta, StoryObj } from "@storybook/react";
import { Spinner } from "./spinner";

const meta: Meta<typeof Spinner> = {
  title: "Components/Spinner",
  component: Spinner,
  argTypes: {
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    color: {
      control: "select",
      options: ["primary", "secondary", "white", "current", "success", "warning", "danger"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
  args: {},
};

export const Primary: Story = {
  args: {
    color: "primary",
  },
};

export const Secondary: Story = {
  args: {
    color: "secondary",
  },
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Spinner size="xs" />
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
      <Spinner size="xl" />
    </div>
  ),
};

export const ExtraSmall: Story = {
  args: {
    size: "xs",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
  },
};

export const Medium: Story = {
  args: {
    size: "md",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
  },
};

export const ExtraLarge: Story = {
  args: {
    size: "xl",
  },
};

export const AllColors: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Spinner color="primary" />
      <Spinner color="secondary" />
      <Spinner color="success" />
      <Spinner color="warning" />
      <Spinner color="danger" />
    </div>
  ),
};

export const WhiteOnDark: Story = {
  render: () => (
    <div className="bg-gray-800 p-6 rounded-lg inline-block">
      <Spinner color="white" size="lg" />
    </div>
  ),
};

export const Success: Story = {
  args: {
    color: "success",
  },
};

export const Warning: Story = {
  args: {
    color: "warning",
  },
};

export const Danger: Story = {
  args: {
    color: "danger",
  },
};

export const WithText: Story = {
  args: {
    text: "Loading...",
  },
};

export const LoadingButton: Story = {
  render: () => (
    <button
      type="button"
      disabled
      className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-md opacity-75 cursor-wait"
    >
      <Spinner size="sm" color="white" text="Saving..." />
    </button>
  ),
};

export const LoadingCard: Story = {
  render: () => (
    <div className="flex flex-col items-center justify-center p-8 bg-white rounded-lg shadow-sm border border-gray-200 w-64">
      <Spinner size="lg" text="Loading data..." />
    </div>
  ),
};

export const FullPageLoader: Story = {
  render: () => (
    <div className="flex flex-col items-center justify-center h-64 bg-gray-50 rounded-lg">
      <Spinner size="xl" text="Please wait..." />
    </div>
  ),
};
