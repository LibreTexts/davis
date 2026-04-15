import clsx from "clsx";
import { forwardRef, type InputHTMLAttributes, type ReactNode } from "react";
import { input, type InputVariantProps } from "@libretexts/davis-core";

export type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "size"> &
  InputVariantProps & {
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
      variant = "default",
      size,
      helperText,
      errorMessage,
      ...props
    },
    ref
  ) => {
    const showError = error && errorMessage;
    const showHelper = !showError && helperText;

    const styles = input({
      variant: error ? "error" : variant,
      size,
      hasLeftIcon: !!leftIcon,
      hasRightIcon: !!rightIcon,
      hasLabel: !!label,
    });

    return (
      <div className={clsx(styles.root(), className)}>
        <label
          htmlFor={name}
          className={clsx(styles.label(), labelClassName)}
        >
          {label}
          {required && <span className={styles.required()}>*</span>}
        </label>
        <div className={styles.inputWrapper()}>
          <div className={styles.iconWrapper()}>
            {leftIcon && (
              <div className={styles.leftIcon()}>{leftIcon}</div>
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
              className={clsx(styles.field(), inputClassName)}
              {...props}
            />
            {rightIcon && (
              <div className={styles.rightIcon()}>{rightIcon}</div>
            )}
          </div>
        </div>
        {showError && (
          <p id={`${name}-error`} className={styles.errorMessage()}>
            {errorMessage}
          </p>
        )}
        {showHelper && (
          <p id={`${name}-helper`} className={styles.helperText()}>
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
