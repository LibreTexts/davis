import type { Meta, StoryObj } from "@storybook/react";
import { ToastContainer } from "./notification";
import { NotificationsProvider } from "../providers/notifications-provider";
import { useNotifications } from "../context/notification-context";
import { Button } from "./button";
import type { NotificationPosition, NotificationVariant } from "../context/notification-context";

const meta: Meta<typeof ToastContainer> = {
  title: "Components/Notification",
  component: ToastContainer,
  parameters: { layout: "fullscreen" },
  decorators: [
    (Story) => (
      <NotificationsProvider>
        <div className="p-8">
          <Story />
        </div>
      </NotificationsProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof ToastContainer>;

// ============================================
// Default (fully controllable via Storybook)
// ============================================

type DefaultArgs = {
  buttonLabel: string;
  variant: NotificationVariant;
  message: string;
  title: string;
};

function DefaultDemo({ buttonLabel, variant, message, title }: DefaultArgs) {
  const { addNotification } = useNotifications();
  const buttonVariant =
    variant === "error"   ? "destructive" :
    variant === "success" ? "primary"     :
    variant === "warning" ? "warning"     : "outline";

  return (
    <Button
      variant={buttonVariant}
      onClick={() =>
        addNotification({
          variant,
          message,
          ...(title ? { title } : {}),
        })
      }
    >
      {buttonLabel}
    </Button>
  );
}

export const Default: StoryObj<DefaultArgs> = {
  render: (args) => <DefaultDemo {...args} />,
  args: {
    buttonLabel: "Show notification",
    variant: "success",
    message: "Changes saved successfully.",
    title: "",
  },
  argTypes: {
    buttonLabel: { control: "text",   description: "Label shown on the trigger button" },
    variant:     { control: "select", options: ["success", "error", "warning", "info"] },
    message:     { control: "text",   description: "Notification message body" },
    title:       { control: "text",   description: "Optional notification title (leave empty to omit)" },
  },
};

// ============================================
// Helper component (must be inside provider)
// ============================================

function TriggerButton({
  variant,
  label,
  title,
  message,
  duration,
  hasAction,
}: {
  variant: NotificationVariant;
  label?: string;
  title?: string;
  message: string;
  duration?: number;
  hasAction?: boolean;
}) {
  const { addNotification } = useNotifications();
  return (
    <Button
      variant={
        variant === "error"
          ? "destructive"
          : variant === "success"
          ? "primary"
          : variant === "warning"
          ? "warning"
          : "outline"
      }
      onClick={() =>
        addNotification({
          variant,
          message,
          ...(title !== undefined ? { title } : {}),
          ...(duration !== undefined ? { duration } : {}),
          ...(hasAction
            ? {
                action: {
                  label: "Undo",
                  onClick: () => console.log("Undo clicked"),
                },
              }
            : {}),
        })
      }
    >
      {label ?? variant.charAt(0).toUpperCase() + variant.slice(1)}
    </Button>
  );
}

// ============================================
// All Variants
// ============================================

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <TriggerButton variant="success" label="Success" message="Changes saved successfully." />
      <TriggerButton variant="error"   label="Error"   message="Something went wrong. Please try again." />
      <TriggerButton variant="warning" label="Support" message="Your session will expire in 5 minutes." />
      <TriggerButton variant="info"    label="Info"    message="A new version is available." />
    </div>
  ),
  args: {},
};

// ============================================
// With Title
// ============================================

export const WithTitle: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <TriggerButton
        variant="success"
        title="File uploaded"
        message="report-2026.pdf has been uploaded."
      />
      <TriggerButton
        variant="error"
        title="Upload failed"
        message="The file exceeds the 10 MB limit."
      />
    </div>
  ),
  args: {},
};

// ============================================
// With Action Button
// ============================================

export const WithAction: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <TriggerButton
        variant="success"
        title="Message sent"
        message="Your message was sent."
        hasAction
      />
      <TriggerButton
        variant="error"
        title="Item deleted"
        message="The item has been removed."
        hasAction
      />
    </div>
  ),
  args: {},
};

// ============================================
// Persistent (no auto-dismiss)
// ============================================

export const Persistent: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <TriggerButton
        variant="info"
        title="Maintenance window"
        message="The system will be down for maintenance from 2–4 AM UTC."
        duration={0}
      />
    </div>
  ),
  args: {},
};

// ============================================
// Positions
// ============================================

const POSITIONS: NotificationPosition[] = [
  "top-right",
  "top-center",
  "top-left",
  "bottom-right",
  "bottom-center",
  "bottom-left",
];

function PositionTrigger({ position }: { position: NotificationPosition }) {
  return (
    <NotificationsProvider position={position}>
      <PositionButton position={position} />
    </NotificationsProvider>
  );
}

function PositionButton({ position }: { position: NotificationPosition }) {
  const { addNotification } = useNotifications();
  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() =>
        addNotification({ variant: "info", message: `Position: ${position}` })
      }
    >
      {position}
    </Button>
  );
}

export const AllPositions: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      {POSITIONS.map((pos) => (
        <PositionTrigger key={pos} position={pos} />
      ))}
    </div>
  ),
  args: {},
};
