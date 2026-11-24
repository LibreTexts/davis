import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Collapsible } from "./collapsible";
import { Button } from "./button";

const meta: Meta<typeof Collapsible> = {
  title: "Components/Collapsible",
  component: Collapsible,
  parameters: { layout: "padded" },
};
export default meta;
type Story = StoryObj<typeof Collapsible>;

export const Default: Story = {
  render: (args) => (
    <Collapsible {...args}>
      <Collapsible.Trigger>View details</Collapsible.Trigger>
      <Collapsible.Content className="mt-3">Additional details about this action.</Collapsible.Content>
    </Collapsible>
  ),
};

export const InitiallyOpen: Story = { ...Default, args: { defaultOpen: true } };
export const Disabled: Story = { ...Default, args: { disabled: true } };

function ControlledExample() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col gap-4">
      <Button variant="outline" onClick={() => setOpen(!open)}>Toggle from outside</Button>
      <Collapsible open={open} onOpenChange={setOpen}>
        <Collapsible.Trigger>Task details</Collapsible.Trigger>
        <Collapsible.Content className="mt-3">The parent controls this panel.</Collapsible.Content>
      </Collapsible>
    </div>
  );
}
export const Controlled: Story = { render: () => <ControlledExample /> };
