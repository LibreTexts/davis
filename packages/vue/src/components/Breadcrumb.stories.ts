import type { Meta, StoryObj } from "@storybook/vue3";
import Breadcrumb from "./Breadcrumb.vue";
import BreadcrumbItem from "./BreadcrumbItem.vue";

const meta: Meta<typeof Breadcrumb> = {
  title: "Navigation/Breadcrumb",
  component: Breadcrumb,
  parameters: { layout: "padded" },
};
export default meta;
type Story = StoryObj<typeof Breadcrumb>;

export const Default: Story = {
  render: () => ({
    components: { Breadcrumb, BreadcrumbItem },
    template: `
      <Breadcrumb>
        <BreadcrumbItem href="/">Home</BreadcrumbItem>
        <BreadcrumbItem href="/docs">Documentation</BreadcrumbItem>
        <BreadcrumbItem :is-current="true">Components</BreadcrumbItem>
      </Breadcrumb>
    `,
  }),
  args: {},
};

export const Short: Story = {
  render: () => ({
    components: { Breadcrumb, BreadcrumbItem },
    template: `
      <Breadcrumb>
        <BreadcrumbItem href="/">Home</BreadcrumbItem>
        <BreadcrumbItem :is-current="true">Settings</BreadcrumbItem>
      </Breadcrumb>
    `,
  }),
  args: {},
};

export const Deep: Story = {
  render: () => ({
    components: { Breadcrumb, BreadcrumbItem },
    template: `
      <Breadcrumb>
        <BreadcrumbItem href="/">Home</BreadcrumbItem>
        <BreadcrumbItem href="/products">Products</BreadcrumbItem>
        <BreadcrumbItem href="/products/electronics">Electronics</BreadcrumbItem>
        <BreadcrumbItem href="/products/electronics/phones">Phones</BreadcrumbItem>
        <BreadcrumbItem :is-current="true">iPhone 15</BreadcrumbItem>
      </Breadcrumb>
    `,
  }),
  args: {},
};
