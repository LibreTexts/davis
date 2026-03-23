import type { Meta, StoryObj } from "@storybook/react";
import { Breadcrumb } from "./breadcrumb";

const meta: Meta<typeof Breadcrumb> = {
  title: "Navigation/Breadcrumb",
  component: Breadcrumb,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Breadcrumb>;

export const Default: Story = {
  render: () => (
    <Breadcrumb>
      <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="/docs">Documentation</Breadcrumb.Item>
      <Breadcrumb.Item isCurrent>Components</Breadcrumb.Item>
    </Breadcrumb>
  ),
};

export const Short: Story = {
  render: () => (
    <Breadcrumb>
      <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
      <Breadcrumb.Item isCurrent>Settings</Breadcrumb.Item>
    </Breadcrumb>
  ),
};

export const Deep: Story = {
  render: () => (
    <Breadcrumb>
      <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="/products">Products</Breadcrumb.Item>
      <Breadcrumb.Item href="/products/electronics">Electronics</Breadcrumb.Item>
      <Breadcrumb.Item href="/products/electronics/phones">Phones</Breadcrumb.Item>
      <Breadcrumb.Item isCurrent>iPhone 15</Breadcrumb.Item>
    </Breadcrumb>
  ),
};
