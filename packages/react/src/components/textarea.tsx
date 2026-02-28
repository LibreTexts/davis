import clsx from "clsx";
import {
  forwardRef,
  type TextareaHTMLAttributes,
  useEffect,
  useRef,
  useCallback,
} from "react";
import { textarea } from "@libretexts/davis-core";

type TextareaVariants = {
  variant?: "default" | "error";
  size?: "sm" | "md" | "lg";
};

export type TextareaProps = Omit<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  "size"
> &
  TextareaVariants & {
    name: string;
    label: string;
    className?: string;
    labelClassName?: string;
    textareaClassName?: string;
    error?: boolean;
    required?: boolean;
    helperText?: string;
    errorMessage?: string;
    autoResize?: boolean;
    showCharacterCount?: boolean;
    rows?: number;
  };

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      className,
      label,
      name,
      labelClassName,
      textareaClassName,
      error,
      required,
      variant,
      size,
      helperText,
      errorMessage,
      autoResize = false,
      showCharacterCount = false,
      rows = 4,
      maxLength,
      defaultValue,
      onChange,
      ...props
    },
    ref
  ) => {
    const showError = error && errorMessage;
    const showHelper = !showError && helperText;
    const internalRef = useRef<HTMLTextAreaElement>(null);
    const textareaRef = (ref as React.RefObject<HTMLTextAreaElement>) || internalRef;

    const adjustHeight = useCallback(() => {
      const element = textareaRef.current;
      if (element && autoResize) {
        element.style.height = "auto";
        element.style.height = `${element.scrollHeight}px`;
      }
    }, [autoResize, textareaRef]);

    useEffect(() => {
      if (autoResize) {
        adjustHeight();
      }
    }, [autoResize, adjustHeight, defaultValue]);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      if (autoResize) {
        adjustHeight();
      }
      onChange?.(e);
    };

    const currentLength = textareaRef.current?.value.length ??
      (typeof defaultValue === "string" ? defaultValue.length : 0);

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
          <textarea
            ref={textareaRef}
            id={name}
            name={name}
            rows={rows}
            maxLength={maxLength}
            defaultValue={defaultValue}
            aria-invalid={error ? "true" : undefined}
            aria-describedby={
              showError
                ? `${name}-error`
                : showHelper
                ? `${name}-helper`
                : undefined
            }
            placeholder={props.placeholder || label}
            onChange={handleChange}
            className={clsx(
              textarea({
                variant: error ? "error" : variant,
                size,
                autoResize,
              }),
              textareaClassName
            )}
            {...props}
          />
        </div>
        <div className="flex justify-between mt-1.5">
          <div>
            {showError && (
              <p id={`${name}-error`} className="text-sm text-danger">
                {errorMessage}
              </p>
            )}
            {showHelper && (
              <p id={`${name}-helper`} className="text-sm text-gray-500">
                {helperText}
              </p>
            )}
          </div>
          {showCharacterCount && maxLength && (
            <p className="text-sm text-gray-500">
              {currentLength}/{maxLength}
            </p>
          )}
        </div>
      </div>
    );
  }
);

Textarea.displayName = "Textarea";
