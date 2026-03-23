import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { NumberInput } from "./number-input";

const meta: Meta<typeof NumberInput> = {
  title: "Forms/NumberInput",
  component: NumberInput,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof NumberInput>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState(0);
    return <NumberInput name="quantity" label="Quantity" value={value} onChange={setValue} />;
  },
};

export const WithConstraints: Story = {
  render: () => {
    const [value, setValue] = useState(5);
    return (
      <NumberInput
        name="rating"
        label="Rating (1–10)"
        value={value}
        onChange={setValue}
        min={1}
        max={10}
        step={1}
      />
    );
  },
};

export const WithStep: Story = {
  render: () => {
    const [value, setValue] = useState(0);
    return (
      <NumberInput
        name="price"
        label="Price"
        value={value}
        onChange={setValue}
        min={0}
        step={0.25}
      />
    );
  },
};

export const WithError: Story = {
  render: () => {
    const [value, setValue] = useState(-1);
    return (
      <NumberInput
        name="age"
        label="Age"
        value={value}
        onChange={setValue}
        min={0}
        error
        errorMessage="Age must be 0 or greater"
      />
    );
  },
};

export const Sizes: Story = {
  render: () => {
    const [sm, setSm] = useState(0);
    const [md, setMd] = useState(0);
    const [lg, setLg] = useState(0);
    return (
      <div className="flex flex-col gap-4">
        <NumberInput name="sm" label="Small" value={sm} onChange={setSm} size="sm" />
        <NumberInput name="md" label="Medium" value={md} onChange={setMd} size="md" />
        <NumberInput name="lg" label="Large" value={lg} onChange={setLg} size="lg" />
      </div>
    );
  },
};

export const Disabled: Story = {
  render: () => (
    <NumberInput name="qty" label="Quantity (disabled)" value={3} onChange={() => {}} disabled />
  ),
};
