import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Alert } from "./alert";

const meta: Meta<typeof Alert> = {
  title: "Components/Alert",
  component: Alert,
  parameters: { layout: "padded" },
  args: {
    message: "This is an alert message.",
  },
  argTypes: {
    variant:     { control: "select", options: ["info", "success", "warning", "error"] },
    title:       { control: "text" },
    message:     { control: "text" },
    showIcon:    { control: "boolean" },
    dismissible: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  args: {
    variant: "info",
    message: "A new version of the application is available.",
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4 max-w-xl">
      <Alert variant="info"    message="Your subscription renews on March 1, 2026." />
      <Alert variant="success" message="Your profile has been updated successfully." />
      <Alert variant="warning" message="You are running low on storage space (90% used)." />
      <Alert variant="error"   message="We could not process your payment. Please try again." />
    </div>
  ),
  args: {},
};

export const WithTitle: Story = {
  render: () => (
    <div className="flex flex-col gap-4 max-w-xl">
      <Alert variant="info"    title="Update available"   message="Version 3.2 is ready to install." />
      <Alert variant="success" title="Upload complete"    message="report-2026.pdf was uploaded successfully." />
      <Alert variant="warning" title="Session expiring"   message="You will be signed out in 5 minutes due to inactivity." />
      <Alert variant="error"   title="Payment failed"     message="Card ending in 4242 was declined." />
    </div>
  ),
  args: {},
};

export const Dismissible: Story = {
  render: () => {
    const [visible, setVisible] = useState(true);
    if (!visible) return <></>;
    return (
      <Alert
        variant="warning"
        title="Browser out of date"
        message="Some features may not work correctly. Please update your browser."
        dismissible
        onDismiss={() => setVisible(false)}
      />
    );
  },
  args: {},
};

export const WithAction: Story = {
  render: () => (
    <div className="flex flex-col gap-4 max-w-xl">
      <Alert
        variant="error"
        title="Payment failed"
        message="We couldn't charge your card ending in 4242."
        action={{ label: "Update payment method", onClick: () => console.log("Update payment") }}
      />
      <Alert
        variant="info"
        message="A new version of the app is available."
        action={{ label: "Update now", onClick: () => console.log("Update") }}
      />
    </div>
  ),
  args: {},
};

function StarIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className} aria-hidden="true">
      <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z" clipRule="evenodd" />
    </svg>
  );
}

export const CustomIcon: Story = {
  render: () => (
    <Alert
      variant="info"
      title="Pro feature"
      message="Upgrade to Pro to unlock unlimited projects."
      icon={<StarIcon className="size-5 text-primary" />}
      action={{ label: "Upgrade now", onClick: () => console.log("Upgrade") }}
      className="max-w-xl"
    />
  ),
  args: {},
};

export const NoIcon: Story = {
  render: () => (
    <div className="flex flex-col gap-4 max-w-xl">
      <Alert variant="info"    showIcon={false} message="Icon-free informational alert." />
      <Alert variant="success" showIcon={false} message="Icon-free success alert." />
    </div>
  ),
  args: {},
};

