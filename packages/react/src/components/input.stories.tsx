import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./input";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  args: {
    name: "email",
    label: "Email",
    placeholder: "you@example.com",
  },
  argTypes: {
    variant: { control: "select", options: ["default", "error"] },
    size: { control: "select", options: ["sm", "md", "lg"] },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {};

export const WithHelperText: Story = {
  args: { helperText: "We'll never share your email with anyone." },
};

export const WithError: Story = {
  args: { error: true, errorMessage: "Please enter a valid email address." },
};

export const Required: Story = {
  args: { required: true },
};

export const WithLeftIcon: Story = {
  args: { leftIcon: "📧" },
};

export const WithRightIcon: Story = {
  args: { rightIcon: "✅" },
};

export const WithBothIcons: Story = {
  args: {
    leftIcon: "🔒",
    rightIcon: "👁️",
    label: "Password",
    name: "password",
    type: "password",
  },
};

export const SmallSize: Story = {
  args: { size: "sm" },
};

export const LargeSize: Story = {
  args: { size: "lg" },
};

export const Disabled: Story = {
  args: { disabled: true, value: "Cannot edit this" },
};
