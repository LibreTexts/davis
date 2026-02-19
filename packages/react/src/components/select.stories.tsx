import type { Meta, StoryObj } from "@storybook/react";
import { Select } from "./select";

const meta: Meta<typeof Select> = {
  title: "Components/Select",
  component: Select,
  args: {
    name: "country",
    label: "Country",
    placeholder: "Select a country",
    options: [
      { value: "us", label: "United States" },
      { value: "ca", label: "Canada" },
      { value: "mx", label: "Mexico" },
      { value: "uk", label: "United Kingdom" },
    ],
  },
  argTypes: {
    variant: { control: "select", options: ["default", "error"] },
    size: { control: "select", options: ["sm", "md", "lg"] },
  },
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: { defaultValue: "ca" },
};

export const WithModifiedPlaceholder: Story = {
  args: { placeholder: "Select an area" },
};

export const WithHelperText: Story = {
  args: { helperText: "Choose your country of residence." },
};

export const WithError: Story = {
  args: { error: true, errorMessage: "Please select a country." },
};

export const Required: Story = {
  args: { required: true },
};

export const SmallSize: Story = {
  args: { size: "sm" },
};

export const LargeSize: Story = {
  args: { size: "lg" },
};

export const Disabled: Story = {
  args: { disabled: true, defaultValue: "us" },
};
