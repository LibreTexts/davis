import type { Meta, StoryObj } from "@storybook/react";
import { RadioGroup } from "./radio-group";
import { Radio } from "./radio";

const meta: Meta<typeof RadioGroup> = {
  title: "Components/RadioGroup",
  component: RadioGroup,
  args: {
    name: "plan",
    label: "Select a plan",
  },
  argTypes: {
    orientation: { control: "select", options: ["vertical", "horizontal"] },
  },
};

export default meta;

type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  render: (args) => (
    <RadioGroup {...args}>
      <Radio value="starter" label="Starter" description="Best for personal use" />
      <Radio value="pro" label="Pro" description="Best for small teams" />
      <Radio value="enterprise" label="Enterprise" description="Best for large organizations" />
    </RadioGroup>
  ),
};

export const Horizontal: Story = {
  args: { orientation: "horizontal" },
  render: (args) => (
    <RadioGroup {...args}>
      <Radio value="small" label="Small" />
      <Radio value="medium" label="Medium" />
      <Radio value="large" label="Large" />
    </RadioGroup>
  ),
};

export const WithDefaultValue: Story = {
  args: { defaultValue: "pro" },
  render: (args) => (
    <RadioGroup {...args}>
      <Radio value="starter" label="Starter" />
      <Radio value="pro" label="Pro" />
      <Radio value="enterprise" label="Enterprise" />
    </RadioGroup>
  ),
};

export const WithHelperText: Story = {
  args: { helperText: "You can change your plan at any time." },
  render: (args) => (
    <RadioGroup {...args}>
      <Radio value="monthly" label="Monthly billing" />
      <Radio value="annual" label="Annual billing" description="Save 20%" />
    </RadioGroup>
  ),
};

export const WithError: Story = {
  args: { error: true, errorMessage: "Please select a plan to continue." },
  render: (args) => (
    <RadioGroup {...args}>
      <Radio value="starter" label="Starter" error />
      <Radio value="pro" label="Pro" error />
      <Radio value="enterprise" label="Enterprise" error />
    </RadioGroup>
  ),
};

export const Required: Story = {
  args: { required: true },
  render: (args) => (
    <RadioGroup {...args}>
      <Radio value="yes" label="Yes" />
      <Radio value="no" label="No" />
    </RadioGroup>
  ),
};

export const Disabled: Story = {
  args: { disabled: true, defaultValue: "pro" },
  render: (args) => (
    <RadioGroup {...args}>
      <Radio value="starter" label="Starter" />
      <Radio value="pro" label="Pro" />
      <Radio value="enterprise" label="Enterprise" />
    </RadioGroup>
  ),
};

export const WithDisabledOption: Story = {
  render: (args) => (
    <RadioGroup {...args}>
      <Radio value="starter" label="Starter" />
      <Radio value="pro" label="Pro" disabled description="Currently unavailable" />
      <Radio value="enterprise" label="Enterprise" />
    </RadioGroup>
  ),
};

export const WithOptions: Story = {
  args: {
    orientation: "horizontal",
    options: [
      { value: "monthly", label: "Monthly" },
      { value: "annual", label: "Annual" },
      { value: "enterprise", label: "Enterprise" },
    ],
  },
  render: (args) => <RadioGroup {...args} />,
};

export const WithOptionsDisabledItem: Story = {
  args: {
    orientation: "horizontal",
    options: [
      { value: "monthly", label: "Monthly" },
      { value: "annual", label: "Annual", disabled: true },
      { value: "enterprise", label: "Enterprise" },
    ],
  },
  render: (args) => <RadioGroup {...args} />,
};
