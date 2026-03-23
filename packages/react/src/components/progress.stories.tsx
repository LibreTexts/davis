import type { Meta, StoryObj } from "@storybook/react";
import { useState, useEffect } from "react";
import { Progress } from "./progress";

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
  render: () => <Progress label="Loading content..." />,
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
  render: () => {
    const [value, setValue] = useState(0);
    useEffect(() => {
      const id = setInterval(() => {
        setValue((v) => {
          if (v >= 100) {
            clearInterval(id);
            return 100;
          }
          return v + 2;
        });
      }, 100);
      return () => clearInterval(id);
    }, []);
    return <Progress value={value} label="Processing..." showValue />;
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <Progress value={75} variant="default" label="Default" />
      <Progress value={75} variant="success" label="Success" />
      <Progress value={75} variant="warning" label="Warning" />
      <Progress value={75} variant="danger" label="Danger" />
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <Progress value={60} size="sm" label="Small" />
      <Progress value={60} size="md" label="Medium" />
      <Progress value={60} size="lg" label="Large" />
    </div>
  ),
};
