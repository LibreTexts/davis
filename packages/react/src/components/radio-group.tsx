"use client";

import {
  RadioGroup as HeadlessRadioGroup,
  Radio as HeadlessRadio,
  Label,
  Field,
} from "@headlessui/react";
import { radioOptionButton } from "@libretexts/davis-core";
import clsx from "clsx";
import { type ReactNode } from "react";

export type RadioOption = {
  label: string;
  value: string;
  disabled?: boolean;
};

export type RadioGroupProps = {
  name: string;
  label?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  required?: boolean;
  error?: boolean;
  className?: string;
  labelClassName?: string;
  orientation?: "vertical" | "horizontal";
  helperText?: string;
  errorMessage?: string;
  /** Convenience prop: renders pre-styled button-style radio tiles. Use children for custom radio options. */
  options?: RadioOption[];
  children?: ReactNode;
};

function RadioOptionButton({ value, label, disabled = false }: RadioOption) {
  return (
    <HeadlessRadio
      value={value}
      disabled={disabled}
      className={radioOptionButton()}
    >
      {label}
    </HeadlessRadio>
  );
}

export function RadioGroup({
  name,
  label,
  value,
  defaultValue,
  onChange,
  disabled = false,
  required = false,
  error = false,
  className,
  labelClassName,
  orientation = "vertical",
  helperText,
  errorMessage,
  options,
  children,
}: RadioGroupProps) {
  const showError = error && errorMessage;
  const showHelper = !showError && helperText;

  return (
    <Field className={className} disabled={disabled}>
      {label && (
        <Label
          className={clsx(
            "block text-base/6 font-medium text-gray-700 mb-2",
            error && "text-danger",
            disabled && "opacity-50",
            labelClassName
          )}
        >
          {label}
          {required && <span className="text-danger ml-0.5">*</span>}
        </Label>
      )}
      <HeadlessRadioGroup
        name={name}
        {...(value !== undefined ? { value } : {})}
        {...(defaultValue !== undefined ? { defaultValue } : {})}
        {...(onChange !== undefined ? { onChange } : {})}
        disabled={disabled}
        className={clsx(
          "flex",
          orientation === "vertical" ? "flex-col gap-y-3" : "flex-row gap-x-6 flex-wrap",
          disabled && "opacity-50 cursor-not-allowed"
        )}
        aria-invalid={error ? "true" : undefined}
        aria-describedby={
          showError ? `${name}-error` : showHelper ? `${name}-helper` : undefined
        }
      >
        {options?.map((opt) => (
          <RadioOptionButton key={opt.value} {...opt} />
        ))}
        {children}
      </HeadlessRadioGroup>
      {showError && (
        <p id={`${name}-error`} className="mt-2 text-sm text-danger">
          {errorMessage}
        </p>
      )}
      {showHelper && (
        <p id={`${name}-helper`} className="mt-2 text-sm text-gray-500">
          {helperText}
        </p>
      )}
    </Field>
  );
}

RadioGroup.displayName = "RadioGroup";
