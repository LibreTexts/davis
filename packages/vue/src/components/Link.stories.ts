import type { Meta, StoryObj } from "@storybook/vue3";
import Link from "./Link.vue";

const meta: Meta<typeof Link> = {
  title: "Components/Link",
  component: Link,
  parameters: { layout: "centered" },
  argTypes: {
    variant: { control: "select", options: ["default", "muted", "danger"] },
    underline: { control: "select", options: ["always", "hover", "none"] },
    size: { control: "select", options: ["sm", "md", "lg"] },
    external: { control: "boolean" },
    disabled: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof Link>;

export const Default: Story = {
  render: () => ({
    components: { Link },
    template: '<Link href="#">Click me</Link>',
  }),
};

export const AllVariants: Story = {
  render: () => ({
    components: { Link },
    template: `
      <div class="flex gap-4">
        <Link href="#" variant="default">Default</Link>
        <Link href="#" variant="muted">Muted</Link>
        <Link href="#" variant="danger">Danger</Link>
      </div>
    `,
  }),
};

export const UnderlineStyles: Story = {
  render: () => ({
    components: { Link },
    template: `
      <div class="flex gap-4">
        <Link href="#" underline="always">Always underlined</Link>
        <Link href="#" underline="hover">Underline on hover</Link>
        <Link href="#" underline="none">No underline</Link>
      </div>
    `,
  }),
};

export const Sizes: Story = {
  render: () => ({
    components: { Link },
    template: `
      <div class="flex items-center gap-4">
        <Link href="#" size="sm">Small</Link>
        <Link href="#" size="md">Medium</Link>
        <Link href="#" size="lg">Large</Link>
      </div>
    `,
  }),
};

export const External: Story = {
  render: () => ({
    components: { Link },
    template: '<Link href="https://github.com" :external="true">External link</Link>',
  }),
};

export const Disabled: Story = {
  render: () => ({
    components: { Link },
    template: '<Link href="#" :disabled="true">Disabled link</Link>',
  }),
};
