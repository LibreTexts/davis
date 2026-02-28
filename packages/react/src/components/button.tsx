import clsx from "clsx";
import {
  forwardRef,
  type ButtonHTMLAttributes,
  type AnchorHTMLAttributes,
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

void (null as unknown as ButtonHTMLAttributes<HTMLButtonElement>);
void (null as unknown as AnchorHTMLAttributes<HTMLAnchorElement>);

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
    fullWidth = false,
    className,
    icon,
    iconPosition = "left",
    iconClassName,
    children,
    ...props
  }: ButtonProps<C>,
  ref: React.Ref<Element>
) {
  const Component = as || "button";
  const isDisabled = disabled || loading;

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

  return (
    <Component
      ref={ref as React.LegacyRef<HTMLButtonElement>}
      disabled={Component === "button" ? isDisabled : undefined}
      aria-disabled={isDisabled}
      aria-busy={loading}
      className={clsx(
        button({ variant, size, fullWidth }),
        loading && "cursor-wait",
        isDisabled && "pointer-events-none",
        className
      )}
      {...props}
    >
      {spinnerElement}
      {iconPosition === "left" && iconElement}
      {children}
      {iconPosition === "right" && iconElement}
    </Component>
  );
}) as <C extends ElementType = "button">(
  props: ButtonProps<C> & { ref?: React.Ref<Element> }
) => React.ReactElement;

(Button as { displayName?: string }).displayName = "Button";
