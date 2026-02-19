import clsx from "clsx";
import { forwardRef, type SelectHTMLAttributes, useEffect } from "react";
import { select } from "./variants";

type SelectVariants = {
  variant?: "default" | "error";
  size?: "sm" | "md" | "lg";
};

export type SelectOption = {
  value: string;
  label: string;
};

export type SelectProps = Omit<SelectHTMLAttributes<HTMLSelectElement>, "size" | "value"> &
  SelectVariants & {
    name: string;
    label: string;
    options: SelectOption[];
    className?: string;
    labelClassName?: string;
    selectClassName?: string;
    placeholder: string;
    error?: boolean;
    required?: boolean;
    helperText?: string;
    errorMessage?: string;
  };

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      className,
      label,
      name,
      options,
      labelClassName,
      selectClassName,
      placeholder,
      error,
      required,
      variant,
      size,
      helperText,
      errorMessage,
      defaultValue,
      onChange,
      ...props
    },
    ref
  ) => {
    const showError = error && errorMessage;
    const showHelper = !showError && helperText;
    const effectiveDefaultValue = defaultValue ?? "";

    useEffect(() => {
      console.log(effectiveDefaultValue || null);
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      const selectedValue = e.target.value;
      console.log(selectedValue || null);
      onChange?.(e);
    };

    return (
      <div className={clsx(className)}>
        <label
          htmlFor={name}
          className={clsx(
            "block text-base/6 font-medium text-gray-700",
            labelClassName
          )}
        >
          {label}
          {required && <span className="text-danger ml-0.5">*</span>}
        </label>
        <div className="mt-1.5 relative">
          <select
            ref={ref}
            id={name}
            name={name}
            aria-invalid={error ? "true" : undefined}
            aria-describedby={
              showError ? `${name}-error` : showHelper ? `${name}-helper` : undefined
            }
            defaultValue={effectiveDefaultValue}
            onChange={handleChange}
            className={clsx(
              select({ variant: error ? "error" : variant, size }),
              selectClassName
            )}
            {...props}
          >
            <option value="" disabled>
              {placeholder}
            </option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <svg
              className="h-4 w-4 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        {showError && (
          <p id={`${name}-error`} className="mt-1.5 text-sm text-danger">
            {errorMessage}
          </p>
        )}
        {showHelper && (
          <p id={`${name}-helper`} className="mt-1.5 text-sm text-gray-500">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Select.displayName = "Select";
