import type { Meta, StoryObj } from "@storybook/vue3";
import Avatar from "./Avatar.vue";

const meta: Meta<typeof Avatar> = {
  title: "Components/Avatar",
  component: Avatar,
  parameters: { layout: "centered" },
  argTypes: {
    size: { control: "select", options: ["xs", "sm", "md", "lg", "xl"] },
  },
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    alt: "User avatar",
    size: "md",
  },
};

export const AllSizes: Story = {
  render: () => ({
    components: { Avatar },
    template: `
      <div class="flex items-center gap-4">
        <Avatar size="xs" name="John Doe" />
        <Avatar size="sm" name="John Doe" />
        <Avatar size="md" name="John Doe" />
        <Avatar size="lg" name="John Doe" />
        <Avatar size="xl" name="John Doe" />
      </div>
    `,
  }),
};

export const WithInitials: Story = {
  render: () => ({
    components: { Avatar },
    template: `
      <div class="flex items-center gap-4">
        <Avatar name="John Doe" />
        <Avatar name="Jane Smith" />
        <Avatar initials="AB" />
      </div>
    `,
  }),
};

export const WithImage: Story = {
  render: () => ({
    components: { Avatar },
    template: `
      <div class="flex items-center gap-4">
        <Avatar
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt="John Doe"
        />
        <Avatar
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt="Jane Smith"
        />
      </div>
    `,
  }),
};

export const Fallback: Story = {
  render: () => ({
    components: { Avatar },
    template: `
      <div class="flex items-center gap-4">
        <Avatar name="No Image" />
        <Avatar src="/broken-image.jpg" name="Broken Image" />
        <Avatar />
      </div>
    `,
  }),
};
