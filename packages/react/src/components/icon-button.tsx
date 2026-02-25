import clsx from "clsx";
import {
  forwardRef,
  type ButtonHTMLAttributes,
  type ReactNode,
  useState,
} from "react";
import { iconButton } from "./variants";

type IconButtonVariant = "primary" | "secondary" | "tertiary" | "destructive" | "ghost" | "outline";
type IconButtonSize = "sm" | "md" | "lg";

export type IconButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> & {
  icon: ReactNode;
  "aria-label": string;
  variant?: IconButtonVariant;
  size?: IconButtonSize;
  loading?: boolean;
  tooltip?: string;
  tooltipPosition?: "top" | "bottom" | "left" | "right";
  iconClassName?: string;
};

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

const iconSizeClasses: Record<IconButtonSize, string> = {
  sm: "h-4 w-4",
  md: "h-5 w-5",
  lg: "h-6 w-6",
};

const tooltipPositionClasses: Record<string, string> = {
  top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
  bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
  left: "right-full top-1/2 -translate-y-1/2 mr-2",
  right: "left-full top-1/2 -translate-y-1/2 ml-2",
};

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      icon,
      "aria-label": ariaLabel,
      variant = "ghost",
      size = "md",
      loading = false,
      disabled = false,
      tooltip,
      tooltipPosition = "top",
      iconClassName,
      className,
      ...props
    },
    ref
  ) => {
    const [showTooltip, setShowTooltip] = useState(false);
    const isDisabled = disabled || loading;
    const hasTooltip = Boolean(tooltip);

    return (
      <div className="relative inline-flex">
        <button
          ref={ref}
          type="button"
          disabled={isDisabled}
          aria-label={ariaLabel}
          aria-busy={loading}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          onFocus={() => setShowTooltip(true)}
          onBlur={() => setShowTooltip(false)}
          className={clsx(
            iconButton({ variant, size }),
            loading && "cursor-wait",
            className
          )}
          {...props}
        >
          {loading ? (
            <Spinner className={iconSizeClasses[size]} />
          ) : (
            <span className={clsx("flex shrink-0", iconSizeClasses[size], iconClassName)}>
              {icon}
            </span>
          )}
        </button>

        {hasTooltip && showTooltip && !isDisabled && (
          <div
            role="tooltip"
            className={clsx(
              "absolute z-50 px-2 py-1 text-xs font-medium text-white bg-gray-900 rounded shadow-lg whitespace-nowrap pointer-events-none",
              tooltipPositionClasses[tooltipPosition]
            )}
          >
            {tooltip}
            <div
              className={clsx(
                "absolute w-2 h-2 bg-gray-900 transform rotate-45",
                tooltipPosition === "top" && "top-full left-1/2 -translate-x-1/2 -mt-1",
                tooltipPosition === "bottom" && "bottom-full left-1/2 -translate-x-1/2 -mb-1",
                tooltipPosition === "left" && "left-full top-1/2 -translate-y-1/2 -ml-1",
                tooltipPosition === "right" && "right-full top-1/2 -translate-y-1/2 -mr-1"
              )}
            />
          </div>
        )}
      </div>
    );
  }
);

IconButton.displayName = "IconButton";
