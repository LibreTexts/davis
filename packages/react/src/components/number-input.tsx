import clsx from "clsx";
import { forwardRef, useCallback } from "react";
import { input, numberInput as numberInputVariants } from "@libretexts/davis-core";

export type NumberInputSize = "sm" | "md" | "lg";

export type NumberInputProps = {
  name: string;
  label: string;
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  size?: NumberInputSize;
  disabled?: boolean;
  required?: boolean;
  helperText?: string;
  errorMessage?: string;
  error?: boolean;
  className?: string;
  labelClassName?: string;
};

export const NumberInput = forwardRef<HTMLInputElement, NumberInputProps>(
  (
    {
      name,
      label,
      value,
      onChange,
      min,
      max,
      step = 1,
      size = "md",
      disabled = false,
      required = false,
      helperText,
      errorMessage,
      error,
      className,
      labelClassName,
    },
    ref
  ) => {
    const showError = error && errorMessage;
    const showHelper = !showError && helperText;

    const canDecrement = min === undefined ? true : value - step >= min;
    const canIncrement = max === undefined ? true : value + step <= max;

    const decrement = useCallback(() => {
      if (!disabled && canDecrement) onChange(value - step);
    }, [disabled, canDecrement, value, step, onChange]);

    const increment = useCallback(() => {
      if (!disabled && canIncrement) onChange(value + step);
    }, [disabled, canIncrement, value, step, onChange]);

    const handleKeyDown = useCallback(
      (e: React.KeyboardEvent) => {
        if (e.key === "ArrowUp") { e.preventDefault(); increment(); }
        if (e.key === "ArrowDown") { e.preventDefault(); decrement(); }
      },
      [increment, decrement]
    );

    const { root, stepper, decrement: decrementClass, increment: incrementClass, input: inputClass } = numberInputVariants({ size });

    return (
      <div className={clsx(className)}>
        <label
          htmlFor={name}
          className={clsx("block text-base/6 font-medium text-gray-700", labelClassName)}
        >
          {label}
          {required && <span className="text-danger ml-0.5">*</span>}
        </label>
        <div className="mt-1.5">
          <div className={root()}>
            <button
              type="button"
              onClick={decrement}
              disabled={disabled || !canDecrement}
              aria-label={`Decrease ${label}`}
              className={clsx(stepper(), decrementClass())}
            >
              <MinusIcon />
            </button>
            <input
              ref={ref}
              id={name}
              name={name}
              type="text"
              inputMode="numeric"
              role="spinbutton"
              aria-valuenow={value}
              aria-valuemin={min}
              aria-valuemax={max}
              aria-invalid={error ? "true" : undefined}
              aria-describedby={showError ? `${name}-error` : showHelper ? `${name}-helper` : undefined}
              value={value}
              disabled={disabled}
              onKeyDown={handleKeyDown}
              onChange={(e) => {
                const parsed = parseFloat(e.target.value);
                if (!isNaN(parsed)) onChange(parsed);
              }}
              className={clsx(
                input({ variant: error ? "error" : "default", size }),
                inputClass()
              )}
            />
            <button
              type="button"
              onClick={increment}
              disabled={disabled || !canIncrement}
              aria-label={`Increase ${label}`}
              className={clsx(stepper(), incrementClass())}
            >
              <PlusIcon />
            </button>
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

NumberInput.displayName = "NumberInput";

function MinusIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-4" aria-hidden="true">
      <path fillRule="evenodd" d="M4 10a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H4.75A.75.75 0 0 1 4 10Z" clipRule="evenodd" />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-4" aria-hidden="true">
      <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
    </svg>
  );
}
