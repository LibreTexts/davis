import clsx from "clsx";
import { type ReactNode } from "react";
import { alert as alertVariants } from "@libretexts/davis-core";

export type AlertVariant = "info" | "success" | "warning" | "error";

export type AlertAction = {
  label: string;
  onClick: () => void;
};

export type AlertHeadingElement = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";

export type AlertProps = {
  variant?: AlertVariant;
  title?: string;
  asHeading?: AlertHeadingElement;
  message: string;
  icon?: ReactNode;
  showIcon?: boolean;
  dismissible?: boolean;
  onDismiss?: () => void;
  action?: AlertAction;
  className?: string;
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

type IconComponent = (props: { className?: string }) => React.JSX.Element;

const VARIANT_ICONS: Record<AlertVariant, IconComponent> = {
  info:    InformationCircleIcon,
  success: CheckCircleIcon,
  warning: ExclamationTriangleIcon,
  error:   XCircleIcon,
};

const ACTION_TEXT_CLASSES: Record<AlertVariant, string> = {
  info:    "text-primary",
  success: "text-success",
  warning: "text-warning",
  error:   "text-danger",
};

export function Alert({
  variant = "info",
  title,
  asHeading: TitleTag = "h2",
  message,
  icon,
  showIcon = true,
  dismissible = false,
  onDismiss,
  action,
  className,
}: AlertProps) {
  const styles = alertVariants({ variant });
  const DefaultIcon = VARIANT_ICONS[variant];

  const iconElement = showIcon
    ? (icon !== undefined
        ? <span className={styles.icon()}>{icon}</span>
        : <DefaultIcon className={styles.icon()} />)
    : null;

  return (
    <div role="alert" className={clsx(styles.container(), className)}>
      {iconElement}

      <div className={styles.body()}>
        {title && <TitleTag className={styles.title()}>{title}</TitleTag>}
        <p className={styles.message()}>{message}</p>

        {action && (
          <div className={styles.action()}>
            <button
              type="button"
              onClick={action.onClick}
              className={clsx(
                "text-sm font-medium hover:underline",
                "focus:outline-none focus:underline",
                ACTION_TEXT_CLASSES[variant]
              )}
            >
              {action.label}
            </button>
          </div>
        )}
      </div>

      {dismissible && (
        <button
          type="button"
          aria-label="Dismiss"
          {...(onDismiss !== undefined ? { onClick: onDismiss } : {})}
          className={styles.closeBtn()}
        >
          <XMarkIcon className="size-4" />
        </button>
      )}
    </div>
  );
}

Alert.displayName = "Alert";
