"use client";

import clsx from "clsx";
import { useCallback, useEffect, useState } from "react";
import type {
  Notification,
  NotificationPosition,
  NotificationVariant,
} from "../context/notification-context";
import { notification as notificationVariants } from "@libretexts/davis-core";

const POSITION_CLASSES: Record<NotificationPosition, string> = {
  "top-right":    "top-4 right-4 flex-col items-end",
  "top-center":   "top-4 left-1/2 -translate-x-1/2 flex-col items-center",
  "top-left":     "top-4 left-4 flex-col items-start",
  "bottom-right": "bottom-4 right-4 flex-col-reverse items-end",
  "bottom-center":"bottom-4 left-1/2 -translate-x-1/2 flex-col-reverse items-center",
  "bottom-left":  "bottom-4 left-4 flex-col-reverse items-start",
};

function CheckCircleIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className} aria-hidden="true">
      <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clipRule="evenodd" />
    </svg>
  );
}

function XCircleIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className} aria-hidden="true">
      <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM8.28 7.22a.75.75 0 0 0-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 1 0 1.06 1.06L10 11.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L11.06 10l1.72-1.72a.75.75 0 0 0-1.06-1.06L10 8.94 8.28 7.22Z" clipRule="evenodd" />
    </svg>
  );
}

function ExclamationTriangleIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className} aria-hidden="true">
      <path fillRule="evenodd" d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495ZM10 5a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 10 5Zm0 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" clipRule="evenodd" />
    </svg>
  );
}

function InformationCircleIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className} aria-hidden="true">
      <path fillRule="evenodd" d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-7-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9 9a.75.75 0 0 0 0 1.5h.253a.25.25 0 0 1 .244.304l-.459 2.066A1.75 1.75 0 0 0 10.747 15H11a.75.75 0 0 0 0-1.5h-.253a.25.25 0 0 1-.244-.304l.459-2.066A1.75 1.75 0 0 0 9.253 9H9Z" clipRule="evenodd" />
    </svg>
  );
}

function XMarkIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className} aria-hidden="true">
      <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
    </svg>
  );
}

const VARIANT_ICONS: Record<NotificationVariant, (p: { className?: string }) => React.JSX.Element> = {
  success: CheckCircleIcon,
  error:   XCircleIcon,
  warning: ExclamationTriangleIcon,
  info:    InformationCircleIcon,
};

type ToastProps = {
  notification: Notification;
  onRemove: (id: string) => void;
};

export function Toast({ notification, onRemove }: ToastProps) {
  const [mounted, setMounted] = useState(false);
  const [closing, setClosing] = useState(false);

  const styles = notificationVariants({ variant: notification.variant });

  useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (notification.duration <= 0) return;
    const timer = setTimeout(() => setClosing(true), notification.duration);
    return () => clearTimeout(timer);
  }, [notification.duration]);

  useEffect(() => {
    if (!closing) return;
    const timer = setTimeout(() => onRemove(notification.id), 300);
    return () => clearTimeout(timer);
  }, [closing, notification.id, onRemove]);

  const handleDismiss = useCallback(() => setClosing(true), []);

  const visible = mounted && !closing;
  const NotifIcon = VARIANT_ICONS[notification.variant];
  const action = notification.action;

  return (
    <div
      role="status"
      className={clsx(
        styles.container(),
        "transition-all duration-300 ease-in-out",
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-2 pointer-events-none"
      )}
    >
      <div className={styles.body()}>
        <NotifIcon className={styles.icon()} />
        <div className={styles.content()}>
          {notification.title && (
            <p className={styles.title()}>{notification.title}</p>
          )}
          <p className={clsx(styles.message(), notification.title && "mt-0.5")}>
            {notification.message}
          </p>
          {action && (
            <div className={styles.action()}>
              <button
                type="button"
                onClick={() => {
                  action.onClick();
                  handleDismiss();
                }}
                className="text-sm font-medium text-primary hover:underline focus:outline-none focus:underline"
              >
                {action.label}
              </button>
            </div>
          )}
        </div>
        <button
          type="button"
          onClick={handleDismiss}
          aria-label="Dismiss notification"
          className={styles.closeBtn()}
        >
          <XMarkIcon className="size-4" />
        </button>
      </div>
    </div>
  );
}

Toast.displayName = "Toast";

export type ToastContainerProps = {
  notifications: Notification[];
  onRemove: (id: string) => void;
  position: NotificationPosition;
};

export function ToastContainer({
  notifications,
  onRemove,
  position,
}: ToastContainerProps) {
  return (
    <div
      aria-live="polite"
      aria-atomic="false"
      className={clsx(
        "fixed z-[9999] flex gap-3 pointer-events-none",
        POSITION_CLASSES[position]
      )}
    >
      {notifications.map((n) => (
        <Toast key={n.id} notification={n} onRemove={onRemove} />
      ))}
    </div>
  );
}

ToastContainer.displayName = "ToastContainer";
