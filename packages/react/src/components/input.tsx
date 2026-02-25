import clsx from "clsx";
import { forwardRef, type InputHTMLAttributes, type ReactNode } from "react";
import { input } from "./variants";

type InputVariants = {
  variant?: "default" | "error";
  size?: "sm" | "md" | "lg";
};

export type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "size"> &
  InputVariants & {
    name: string;
    label: string;
    className?: string;
    labelClassName?: string;
    inputClassName?: string;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    error?: boolean;
    required?: boolean;
    helperText?: string;
    errorMessage?: string;
  };

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      label,
      name,
      labelClassName,
      inputClassName,
      leftIcon,
      rightIcon,
      error,
      required,
      variant,
      size,
      helperText,
      errorMessage,
      ...props
    },
    ref
  ) => {
    const showError = error && errorMessage;
    const showHelper = !showError && helperText;

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
        <div className="mt-1.5">
          <div className="relative">
            {leftIcon && (
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                {leftIcon}
              </div>
            )}
            <input
              ref={ref}
              id={name}
              name={name}
              aria-invalid={error ? "true" : undefined}
              aria-describedby={
                showError ? `${name}-error` : showHelper ? `${name}-helper` : undefined
              }
              placeholder={props.placeholder || label}
              className={clsx(
                input({ variant: error ? "error" : variant, size }),
                inputClassName,
                leftIcon ? "pl-10" : "pl-3",
                rightIcon ? "pr-10" : "pr-3"
              )}
              {...props}
            />
            {rightIcon && (
              <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                {rightIcon}
              </div>
            )}
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

Input.displayName = "Input";
