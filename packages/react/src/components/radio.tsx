"use client";

import { Radio as HeadlessRadio } from "@headlessui/react";
import clsx from "clsx";

type RadioVariants = {
  variant?: "default" | "error";
  size?: "sm" | "md" | "lg";
};

export type RadioProps = RadioVariants & {
  value: string;
  label?: string;
  className?: string;
  labelClassName?: string;
  disabled?: boolean;
  error?: boolean;
  /** Description text displayed below the label */
  description?: string;
};

export function Radio({
  value,
  label,
  className,
  labelClassName,
  disabled = false,
  error = false,
  size = "md",
  description,
}: RadioProps) {
  const sizeClasses = {
    sm: "size-3.5",
    md: "size-4",
    lg: "size-5",
  };

  const dotSize = {
    sm: "size-1.5",
    md: "size-2",
    lg: "size-2.5",
  };

  return (
    <HeadlessRadio
      value={value}
      disabled={disabled}
      className={clsx(
        "group flex gap-x-3 cursor-pointer",
        "data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50",
        className
      )}
    >
      <div className="flex shrink-0 items-center h-6">
        <div
          className={clsx(
            "grid grid-cols-1 place-items-center",
            sizeClasses[size]
          )}
        >
          <span
            className={clsx(
              "col-start-1 row-start-1 rounded-full border border-gray-300 bg-white",
              "group-data-[checked]:border-primary group-data-[checked]:bg-primary",
              "group-data-[disabled]:border-gray-300 group-data-[disabled]:bg-gray-100",
              sizeClasses[size],
              error && "border-red-500 bg-red-100"
            )}
          />
          {/* Inner dot for selected state */}
          <span
            className={clsx(
              "col-start-1 row-start-1 rounded-full bg-white",
              "opacity-0 group-data-[checked]:opacity-100",
              "group-data-[disabled]:bg-gray-400",
              dotSize[size]
            )}
          />
        </div>
      </div>
      {(label || description) && (
        <div className="text-sm/6">
          {label && (
            <span
              className={clsx(
                "font-medium text-gray-700",
                error && "text-red-600",
                "group-data-[disabled]:opacity-50",
                labelClassName
              )}
            >
              {label}
            </span>
          )}
          {description && (
            <p
              className={clsx(
                "text-gray-500",
                "group-data-[disabled]:opacity-50"
              )}
            >
              {description}
            </p>
          )}
        </div>
      )}
    </HeadlessRadio>
  );
}

Radio.displayName = "Radio";
