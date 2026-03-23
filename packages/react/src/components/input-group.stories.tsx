import type { Meta, StoryObj } from "@storybook/react";
import { InputGroup } from "./input-group";
import { Input } from "./input";

const meta: Meta<typeof InputGroup> = {
  title: "Forms/InputGroup",
  component: InputGroup,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof InputGroup>;

export const WithPrefix: Story = {
  render: () => (
    <InputGroup prefix="$">
      <Input name="amount" label="Amount" placeholder="0.00" />
    </InputGroup>
  ),
};

export const WithSuffix: Story = {
  render: () => (
    <InputGroup suffix=".com">
      <Input name="domain" label="Domain" placeholder="yoursite" />
    </InputGroup>
  ),
};

export const WithBoth: Story = {
  render: () => (
    <InputGroup prefix="https://" suffix="/path">
      <Input name="url" label="URL" placeholder="example" />
    </InputGroup>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <InputGroup prefix="$" size="sm">
        <Input name="sm-amount" label="Small" placeholder="0.00" />
      </InputGroup>
      <InputGroup prefix="$" size="md">
        <Input name="md-amount" label="Medium" placeholder="0.00" />
      </InputGroup>
      <InputGroup prefix="$" size="lg">
        <Input name="lg-amount" label="Large" placeholder="0.00" />
      </InputGroup>
    </div>
  ),
};
