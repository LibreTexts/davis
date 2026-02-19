import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "./textarea";

const meta: Meta<typeof Textarea> = {
  title: "Components/Textarea",
  component: Textarea,
  args: {
    name: "message",
    label: "Message",
    placeholder: "Enter your message...",
  },
  argTypes: {
    variant: { control: "select", options: ["default", "error"] },
    size: { control: "select", options: ["sm", "md", "lg"] },
  },
};

export default meta;

type Story = StoryObj<typeof Textarea>;

export const Default: Story = {};

export const WithDefaultValue: Story = {
  args: { defaultValue: "This is some default text content." },
};

export const WithHelperText: Story = {
  args: { helperText: "Write a brief description of your issue." },
};

export const WithError: Story = {
  args: { error: true, errorMessage: "Message is required." },
};

export const Required: Story = {
  args: { required: true },
};

export const WithCharacterCount: Story = {
  args: {
    maxLength: 200,
    showCharacterCount: true,
    helperText: "Maximum 200 characters allowed.",
  },
};

export const AutoResize: Story = {
  args: {
    autoResize: true,
    rows: 2,
    placeholder: "Start typing and the textarea will grow...",
  },
};

export const SmallSize: Story = {
  args: { size: "sm" },
};

export const LargeSize: Story = {
  args: { size: "lg" },
};

export const Disabled: Story = {
  args: { disabled: true, defaultValue: "This textarea is disabled." },
};

export const CustomRows: Story = {
  args: { rows: 8, helperText: "This textarea has 8 rows." },
};
