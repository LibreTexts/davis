import type { Meta, StoryObj } from "@storybook/react";
import { Stepper } from "./stepper";

const meta: Meta<typeof Stepper> = {
  title: "Navigation/Stepper",
  component: Stepper,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Stepper>;

const STEPS = [
  { label: "Account Details", description: "Name and email" },
  { label: "Personal Info", description: "Address and phone" },
  { label: "Review", description: "Confirm your details" },
  { label: "Complete", description: "All done!" },
];

export const FirstStep: Story = {
  render: () => <Stepper steps={STEPS} currentStep={0} />,
};

export const MiddleStep: Story = {
  render: () => <Stepper steps={STEPS} currentStep={2} />,
};

export const LastStep: Story = {
  render: () => <Stepper steps={STEPS} currentStep={3} />,
};

export const Vertical: Story = {
  render: () => (
    <div className="w-64">
      <Stepper steps={STEPS} currentStep={1} orientation="vertical" />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <Stepper steps={STEPS.slice(0, 3)} currentStep={1} size="sm" />
      <Stepper steps={STEPS.slice(0, 3)} currentStep={1} size="md" />
      <Stepper steps={STEPS.slice(0, 3)} currentStep={1} size="lg" />
    </div>
  ),
};

export const SimpleSteps: Story = {
  render: () => (
    <Stepper
      steps={[
        { label: "Cart" },
        { label: "Shipping" },
        { label: "Payment" },
        { label: "Confirm" },
      ]}
      currentStep={1}
    />
  ),
};
