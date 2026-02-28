import clsx from "clsx";
import { spinner as spinnerVariants } from "@libretexts/davis-core";

export type SpinnerSize = "xs" | "sm" | "md" | "lg" | "xl";
export type SpinnerColor = "primary" | "secondary" | "white" | "current" | "success" | "warning" | "danger";

export type SpinnerProps = {
  size?: SpinnerSize;
  color?: SpinnerColor;
  text?: string;
  className?: string;
};

export function Spinner({
  size = "md",
  color = "primary",
  text,
  className,
}: SpinnerProps) {
  const spinner = (
    <svg
      className={clsx(spinnerVariants({ size, color }), !text && className)}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      role="status"
      aria-hidden={text ? "true" : undefined}
      aria-label={text ? undefined : "Loading"}
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );

  if (text) {
    return (
      <span className={clsx("inline-flex items-center gap-2", className)}>
        {spinner}
        <span>{text}</span>
      </span>
    );
  }

  return spinner;
}

Spinner.displayName = "Spinner";
