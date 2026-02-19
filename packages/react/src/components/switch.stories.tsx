import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Switch } from "./switch";

const meta: Meta<typeof Switch> = {
  title: "Components/Switch",
  component: Switch,
  args: {
    label: "Enable notifications",
  },
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg"] },
    labelPosition: { control: "select", options: ["left", "right"] },
  },
  render: (args) => {
    const [checked, setChecked] = useState(args.checked ?? false);
    return <Switch {...args} checked={checked} onChange={setChecked} />;
  },
};

export default meta;

type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: { checked: false },
};

export const Checked: Story = {
  args: { checked: true },
};

export const WithDescription: Story = {
  args: {
    checked: false,
    label: "Enable notifications",
    description: "Get notified when someone mentions you.",
  },
};

export const LabelLeft: Story = {
  args: { checked: false, labelPosition: "left" },
};

export const SmallSize: Story = {
  args: { checked: false, size: "sm" },
};

export const LargeSize: Story = {
  args: { checked: false, size: "lg" },
};

export const DisabledOff: Story = {
  args: { checked: false, disabled: true },
};

export const DisabledOn: Story = {
  args: { checked: true, disabled: true },
};

export const NoLabel: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    return <Switch checked={checked} onChange={setChecked} />;
  },
  args: {},
};
