"use client";

import { Checkbox as HeadlessCheckbox, Field, Label } from "@headlessui/react";
import clsx from "clsx";
import { useState } from "react";

type CheckboxVariants = {
  variant?: "default" | "error";
  size?: "sm" | "md" | "lg";
};

export type CheckboxProps = CheckboxVariants & {
  name: string;
  label?: string;
  className?: string;
  labelClassName?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  indeterminate?: boolean;
  disabled?: boolean;
  required?: boolean;
  error?: boolean;
  onChange?: (checked: boolean) => void;
  description?: string;
};

export function Checkbox({
  name,
  label,
  className,
  labelClassName,
  checked: controlledChecked,
  defaultChecked = false,
  indeterminate = false,
  disabled = false,
  required = false,
  error = false,
  size = "md",
  onChange,
  description,
}: CheckboxProps) {
  const isControlled = controlledChecked !== undefined;
  const [internalChecked, setInternalChecked] = useState(defaultChecked);
  const checked = isControlled ? controlledChecked : internalChecked;

  const handleChange = (value: boolean) => {
    if (!isControlled) {
      setInternalChecked(value);
    }
    onChange?.(value);
  };

  const sizeClasses = {
    sm: "size-3.5",
    md: "size-4",
    lg: "size-5",
  };

  const checkIconSize = {
    sm: "size-2.5",
    md: "size-3",
    lg: "size-3.5",
  };

  return (
    <Field className={clsx("flex gap-x-3", className)} disabled={disabled}>
      <div className="flex shrink-0 items-center h-6">
        <HeadlessCheckbox
          name={name}
          checked={checked}
          indeterminate={indeterminate}
          disabled={disabled}
          onChange={handleChange}
          className={clsx(
            "group grid grid-cols-1 cursor-pointer",
            "data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50",
            sizeClasses[size]
          )}
        >
          <span
            className={clsx(
              "col-start-1 row-start-1 rounded border border-gray-300 bg-white",
              "group-data-[checked]:border-primary group-data-[checked]:bg-primary",
              "group-data-[indeterminate]:border-primary group-data-[indeterminate]:bg-primary",
              "group-data-[disabled]:border-gray-300 group-data-[disabled]:bg-gray-100",
              sizeClasses[size],
              error && "!border-danger !bg-red-50"
            )}
          />
          <svg
            fill="none"
            viewBox="0 0 14 14"
            className={clsx(
              "pointer-events-none col-start-1 row-start-1 self-center justify-self-center stroke-white",
              "group-data-[disabled]:stroke-gray-950/25",
              checkIconSize[size],
              error && "stroke-danger"
            )}
          >
            <path
              d="M3 8L6 11L11 3.5"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="opacity-0 group-data-[checked]:opacity-100 group-data-[indeterminate]:opacity-0"
            />
            <path
              d="M3 7H11"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="opacity-0 group-data-[indeterminate]:opacity-100"
            />
          </svg>
        </HeadlessCheckbox>
      </div>
      {(label || description) && (
        <div className="text-sm/6">
          {label && (
            <Label
              className={clsx(
                "font-medium text-gray-700 cursor-pointer",
                error && "text-danger",
                disabled && "cursor-not-allowed opacity-50",
                labelClassName
              )}
            >
              {label}
              {required && <span className="text-danger ml-0.5">*</span>}
            </Label>
          )}
          {description && (
            <p className={clsx("text-gray-500", disabled && "opacity-50")}>
              {description}
            </p>
          )}
        </div>
      )}
    </Field>
  );
}

Checkbox.displayName = "Checkbox";
