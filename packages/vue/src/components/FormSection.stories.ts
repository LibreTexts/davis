import type { Meta, StoryObj } from "@storybook/vue3";
import { ref } from "vue";
import FormSection from "./FormSection.vue";
import Input from "./Input.vue";
import Checkbox from "./Checkbox.vue";

const meta: Meta<typeof FormSection> = {
  title: "Forms/FormSection",
  component: FormSection,
  parameters: { layout: "padded" },
};
export default meta;
type Story = StoryObj<typeof FormSection>;

export const Default: Story = {
  render: () => ({
    components: { FormSection, Input },
    template: `
      <FormSection title="Personal Information">
        <div class="flex flex-col gap-4">
          <Input name="first-name" label="First name" placeholder="John" />
          <Input name="last-name" label="Last name" placeholder="Doe" />
          <Input name="email" label="Email" type="email" placeholder="john@example.com" />
        </div>
      </FormSection>
    `,
  }),
  args: {},
};

export const WithDescription: Story = {
  render: () => ({
    components: { FormSection, Checkbox },
    setup() {
      const emailNotif = ref(false);
      const smsNotif = ref(true);
      return { emailNotif, smsNotif };
    },
    template: `
      <FormSection title="Notification Preferences" description="Choose how and when you'd like to be notified.">
        <div class="flex flex-col gap-3">
          <Checkbox v-model="emailNotif" name="email-notif" label="Email notifications" />
          <Checkbox v-model="smsNotif" name="sms-notif" label="SMS notifications" />
        </div>
      </FormSection>
    `,
  }),
  args: {},
};

export const MultipleGroups: Story = {
  render: () => ({
    components: { FormSection, Input },
    template: `
      <div class="flex flex-col gap-6">
        <FormSection title="Personal Information">
          <div class="flex flex-col gap-4">
            <Input name="name" label="Full name" />
            <Input name="email" label="Email" type="email" />
          </div>
        </FormSection>
        <FormSection title="Address" description="Your billing or shipping address.">
          <div class="flex flex-col gap-4">
            <Input name="street" label="Street address" />
            <Input name="city" label="City" />
          </div>
        </FormSection>
      </div>
    `,
  }),
  args: {},
};
