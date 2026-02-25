import clsx from "clsx";
import { type ReactNode } from "react";
import { badge as badgeVariants } from "./variants";

export type BadgeVariant = "default" | "primary" | "success" | "warning" | "danger";
export type BadgeSize = "sm" | "md" | "lg";

export type BadgeProps = {
  label: string;
  variant?: BadgeVariant;
  size?: BadgeSize;
  icon?: ReactNode;
  dot?: boolean;
  onRemove?: () => void;
  removeLabel?: string;
  className?: string;
};

function XMarkIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
    </svg>
  );
}

export function Badge({
  label,
  variant = "default",
  size = "md",
  icon,
  dot = false,
  onRemove,
  removeLabel,
  className,
}: BadgeProps) {
  const styles = badgeVariants({ variant, size });

  return (
    <span className={clsx(styles.root(), className)}>
      {dot && <span aria-hidden="true" className={styles.dot()} />}

      {icon !== undefined && (
        <span className="shrink-0 inline-flex" aria-hidden="true">
          {icon}
        </span>
      )}

      {label}

      {onRemove !== undefined && (
        <button
          type="button"
          aria-label={removeLabel ?? `Remove ${label}`}
          onClick={onRemove}
          className={styles.remove()}
        >
          <XMarkIcon className="size-3" />
        </button>
      )}
    </span>
  );
}

Badge.displayName = "Badge";
