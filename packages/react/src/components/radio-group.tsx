import {
  RadioGroup as HeadlessRadioGroup,
  Label,
  Field,
} from "@headlessui/react";
import clsx from "clsx";
import { type ReactNode } from "react";

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
  /** Layout direction for radio options */
  orientation?: "vertical" | "horizontal";
  /** Helper text displayed below the radio group */
  helperText?: string;
  /** Error message displayed below the radio group */
  errorMessage?: string;
  children: ReactNode;
};

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
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
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
