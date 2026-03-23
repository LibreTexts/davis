import type { Meta, StoryObj } from "@storybook/react";
import { FormSection } from "./form-section";
import { Input } from "./input";
import { Checkbox } from "./checkbox";

const meta: Meta<typeof FormSection> = {
  title: "Forms/FormSection",
  component: FormSection,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof FormSection>;

export const Default: Story = {
  render: () => (
    <FormSection title="Personal Information">
      <Input name="first-name" label="First name" />
      <Input name="last-name" label="Last name" />
      <Input name="email" label="Email address" type="email" />
    </FormSection>
  ),
};

export const WithDescription: Story = {
  render: () => (
    <FormSection
      title="Notification Preferences"
      description="Choose how and when you'd like to be notified."
    >
      <Checkbox name="email-notif" label="Email notifications" />
      <Checkbox name="sms-notif" label="SMS notifications" />
    </FormSection>
  ),
};

export const MultipleGroups: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <FormSection title="Personal Information">
        <Input name="name" label="Full name" />
        <Input name="email" label="Email" type="email" />
      </FormSection>
      <FormSection title="Address" description="Your billing or shipping address.">
        <Input name="street" label="Street address" />
        <Input name="city" label="City" />
      </FormSection>
    </div>
  ),
};
