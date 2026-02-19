import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Checkbox } from "./checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
  args: {
    name: "terms",
    label: "I agree to the terms and conditions",
  },
  argTypes: {
    variant: { control: "select", options: ["default", "error"] },
    size: { control: "select", options: ["sm", "md", "lg"] },
  },
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {};

export const DefaultChecked: Story = {
  args: { defaultChecked: true },
};

export const WithDescription: Story = {
  args: {
    label: "Marketing emails",
    description: "Receive emails about new products, features, and more.",
  },
};

const ITEMS = ["Option A", "Option B", "Option C"];

export const Indeterminate: Story = {
  render: () => {
    const [checked, setChecked] = useState([false, false, false]);

    const allChecked = checked.every(Boolean);
    const someChecked = checked.some(Boolean);
    const isIndeterminate = someChecked && !allChecked;

    return (
      <div className="flex flex-col gap-2">
        <Checkbox
          name="select-all"
          label="Select all"
          checked={allChecked}
          indeterminate={isIndeterminate}
          onChange={(val) => setChecked(checked.map(() => val))}
        />
        <div className="ml-7 flex flex-col gap-2">
          {ITEMS.map((item, i) => (
            <Checkbox
              key={item}
              name={`item-${i}`}
              label={item}
              checked={checked[i]}
              onChange={(val) => {
                const next = [...checked];
                next[i] = val;
                setChecked(next);
              }}
            />
          ))}
        </div>
      </div>
    );
  },
  args: {},
};

export const WithError: Story = {
  args: { error: true, label: "I agree to the terms and conditions" },
};

export const Required: Story = {
  args: { required: true },
};

export const DisabledUnchecked: Story = {
  args: { disabled: true },
};

export const DisabledChecked: Story = {
  args: { disabled: true, defaultChecked: true },
};

export const SmallSize: Story = {
  args: { size: "sm" },
};

export const LargeSize: Story = {
  args: { size: "lg" },
};

export const WithoutLabel: Story = {
  args: { label: undefined },
};
