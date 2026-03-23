import clsx from "clsx";
import { forwardRef, type HTMLAttributes } from "react";
import { progress } from "@libretexts/davis-core";

export type ProgressVariant = "default" | "success" | "warning" | "danger";
export type ProgressSize = "sm" | "md" | "lg";

export type ProgressProps = {
  value?: number;
  variant?: ProgressVariant;
  size?: ProgressSize;
  label?: string;
  showValue?: boolean;
  className?: string;
} & Omit<HTMLAttributes<HTMLDivElement>, "children">;

export const Progress = forwardRef<HTMLDivElement, ProgressProps>(
  (
    {
      value,
      variant,
      size,
      label,
      showValue = false,
      className,
      ...props
    },
    ref
  ) => {
    const isIndeterminate = value === undefined;
    const clampedValue = isIndeterminate ? 0 : Math.min(100, Math.max(0, value));
    const { root, bar } = progress({ variant, size, indeterminate: isIndeterminate });

    return (
      <div ref={ref} className={clsx("w-full", className)} {...props}>
        {(label || showValue) && (
          <div className="flex justify-between items-center mb-1">
            {label && <span className="text-sm text-gray-700">{label}</span>}
            {showValue && !isIndeterminate && (
              <span className="text-sm text-gray-500">{clampedValue}%</span>
            )}
          </div>
        )}
        <div
          role="progressbar"
          aria-valuenow={isIndeterminate ? undefined : clampedValue}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={label}
          className={root()}
        >
          <div
            className={bar()}
            style={isIndeterminate ? undefined : { width: `${clampedValue}%` }}
          />
        </div>
      </div>
    );
  }
);

Progress.displayName = "Progress";
