"use client";

import { Button as HeadlessButton } from "@headlessui/react";
import clsx from "clsx";
import {
  forwardRef,
  type ElementType,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from "react";
import { button } from "@libretexts/davis-core";

type ButtonVariant = "primary" | "secondary" | "tertiary" | "destructive" | "warning" | "ghost" | "outline";
type ButtonSize = "sm" | "md" | "lg";
type IconPosition = "left" | "right";

type AsProp<C extends ElementType> = {
  as?: C;
};

type PropsToOmit<C extends ElementType, P> = keyof (AsProp<C> & P);

type PolymorphicComponentProp<
  C extends ElementType,
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  Props = {}
> = React.PropsWithChildren<Props & AsProp<C>> &
  Omit<ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>;

type ButtonBaseProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  disabled?: boolean;
  /**
   * "Soft" disabled: renders `aria-disabled="true"` instead of the native
   * `disabled` attribute so the button stays in the keyboard tab order and is
   * announced by screen readers. Clicks and keyboard activations are
   * suppressed. Prefer this over `disabled` for controls users should still be
   * able to discover (e.g. pagination arrows on the first/last page).
   */
  softDisabled?: boolean;
  fullWidth?: boolean;
  className?: string;
  icon?: ReactNode;
  iconPosition?: IconPosition;
  iconClassName?: string;
};

export type ButtonProps<C extends ElementType = "button"> = PolymorphicComponentProp<
  C,
  ButtonBaseProps
>;

function Spinner({ className }: { className?: string }) {
  return (
    <svg
      className={clsx("animate-spin", className)}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );
}

const iconSizeClasses: Record<ButtonSize, string> = {
  sm: "h-4 w-4",
  md: "h-5 w-5",
  lg: "h-6 w-6",
};

export const Button = forwardRef(function Button<C extends ElementType = "button">(
  {
    as,
    variant = "primary",
    size = "md",
    loading = false,
    disabled = false,
    softDisabled = false,
    fullWidth = false,
    className,
    icon,
    iconPosition = "left",
    iconClassName,
    children,
    onClick,
    ...props
  }: ButtonProps<C>,
  ref: React.Ref<Element>
) {
  const isHardDisabled = disabled || loading;
  const isSoftDisabled = softDisabled && !isHardDisabled;
  const handleClick = isSoftDisabled
    ? (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        event.stopPropagation();
      }
    : (onClick as ((event: React.MouseEvent<HTMLButtonElement>) => void) | undefined);

  const iconElement = icon && !loading && (
    <span
      className={clsx(
        "flex shrink-0",
        iconSizeClasses[size],
        iconClassName,
        children && iconPosition === "left" && "mr-2",
        children && iconPosition === "right" && "ml-2"
      )}
    >
      {icon}
    </span>
  );

  const spinnerElement = loading && (
    <span className={clsx("flex shrink-0", iconSizeClasses[size], children && "mr-2")}>
      <Spinner className={iconSizeClasses[size]} />
    </span>
  );

  const computedClassName = clsx(
    button({ variant, size, fullWidth }),
    loading && "cursor-wait",
    className
  );

  const innerContent = (
    <>
      {spinnerElement}
      {iconPosition === "left" && iconElement}
      {children}
      {iconPosition === "right" && iconElement}
    </>
  );

  if (as) {
    const Component = as as ElementType;
    const handleAsClick =
      isHardDisabled || isSoftDisabled
        ? (event: React.MouseEvent<HTMLElement>) => {
            event.preventDefault();
            event.stopPropagation();
          }
        : (onClick as ((event: React.MouseEvent<HTMLElement>) => void) | undefined);
    return (
      <Component
        ref={ref}
        aria-disabled={isSoftDisabled || isHardDisabled || undefined}
        aria-busy={loading || undefined}
        tabIndex={isHardDisabled ? -1 : undefined}
        onClick={handleAsClick}
        className={computedClassName}
        {...(props as object)}
      >
        {innerContent}
      </Component>
    );
  }

  return (
    <HeadlessButton
      ref={ref as React.Ref<HTMLButtonElement>}
      disabled={isHardDisabled}
      aria-disabled={isSoftDisabled || undefined}
      aria-busy={loading || undefined}
      onClick={handleClick}
      className={computedClassName}
      {...(props as object)}
    >
      {innerContent}
    </HeadlessButton>
  );
}) as <C extends ElementType = "button">(
  props: ButtonProps<C> & { ref?: React.Ref<Element> }
) => React.ReactElement;

(Button as { displayName?: string }).displayName = "Button";
