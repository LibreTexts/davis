import { useState, useCallback, type ReactNode } from "react";
import {
  NotificationContext,
  type AddNotificationInput,
  type Notification,
  type NotificationPosition,
} from "../context/notification-context";
import { ToastContainer } from "../components/notification";

export type NotificationsProviderProps = {
  children: ReactNode;
  /** Position of the toast stack. Default: "top-right" */
  position?: NotificationPosition;
};

const DEFAULT_DURATION = 5000;

export function NotificationsProvider({
  children,
  position = "top-right",
}: NotificationsProviderProps) {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const addNotification = useCallback(
    (input: AddNotificationInput): string => {
      const id = crypto.randomUUID();
      const notification: Notification = {
        id,
        message: input.message,
        variant: input.variant,
        duration: input.duration ?? DEFAULT_DURATION,
        ...(input.title !== undefined ? { title: input.title } : {}),
        ...(input.action !== undefined ? { action: input.action } : {}),
      };
      setNotifications((prev) => [...prev, notification]);
      return id;
    },
    []
  );

  // Called after the Toast's exit animation completes (300ms)
  const removeNotification = useCallback((id: string) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  }, []);

  const removeAllNotifications = useCallback(() => {
    setNotifications([]);
  }, []);

  return (
    <NotificationContext.Provider
      value={{
        notifications,
        addNotification,
        removeNotification,
        removeAllNotifications,
      }}
    >
      {children}
      <ToastContainer
        notifications={notifications}
        onRemove={removeNotification}
        position={position}
      />
    </NotificationContext.Provider>
  );
}
