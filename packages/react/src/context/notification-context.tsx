"use client";

import { createContext, useContext } from "react";

export type NotificationVariant = "success" | "error" | "warning" | "info";

export type NotificationPosition =
  | "top-right"
  | "top-center"
  | "top-left"
  | "bottom-right"
  | "bottom-center"
  | "bottom-left";

export type NotificationAction = {
  label: string;
  onClick: () => void;
};

export type Notification = {
  id: string;
  message: string;
  title?: string;
  variant: NotificationVariant;
  /** Duration in ms. 0 = persistent (no auto-dismiss). */
  duration: number;
  action?: NotificationAction;
};

/** Input for addNotification — id is generated internally; duration defaults to 5000ms. */
export type AddNotificationInput = Omit<Notification, "id" | "duration"> & {
  duration?: number;
};

export type NotificationContextType = {
  notifications: Notification[];
  /** Add a notification. Returns the generated id. */
  addNotification: (notification: AddNotificationInput) => string;
  removeNotification: (id: string) => void;
  removeAllNotifications: () => void;
};

export const NotificationContext = createContext<
  NotificationContextType | undefined
>(undefined);

export function useNotifications(): NotificationContextType {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error(
      "useNotifications must be used within a NotificationsProvider"
    );
  }
  return context;
}
