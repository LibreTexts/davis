import clsx from "clsx";
import { Switch as HeadlessSwitch } from "@headlessui/react";

type SwitchSize = "sm" | "md" | "lg";
type LabelPosition = "left" | "right";

export type SwitchProps = {
  name?: string;
  label?: string;
  description?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  size?: SwitchSize;
  labelPosition?: LabelPosition;
  className?: string;
};

const sizeClasses: Record<SwitchSize, { track: string; thumb: string; thumbTranslate: string }> = {
  sm: {
    track: "h-5 w-9",
    thumb: "h-4 w-4",
    thumbTranslate: "translate-x-4",
  },
  md: {
    track: "h-6 w-11",
    thumb: "h-5 w-5",
    thumbTranslate: "translate-x-5",
  },
  lg: {
    track: "h-7 w-14",
    thumb: "h-6 w-6",
    thumbTranslate: "translate-x-7",
  },
};

export function Switch({
  name,
  label,
  description,
  checked,
  onChange,
  disabled = false,
  size = "md",
  labelPosition = "right",
  className,
}: SwitchProps) {
  const sizes = sizeClasses[size];

  const switchElement = (
    <HeadlessSwitch
      {...(name !== undefined ? { name } : {})}
      checked={checked}
      onChange={onChange}
      disabled={disabled}
      className={clsx(
        "relative inline-flex shrink-0 cursor-pointer rounded-full border-2 border-transparent",
        "transition-colors duration-200 ease-in-out",
        "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
        "disabled:cursor-not-allowed disabled:opacity-50",
        sizes.track,
        checked ? "bg-primary" : "bg-gray-200"
      )}
    >
      <span className="sr-only">{label}</span>
      <span
        aria-hidden="true"
        className={clsx(
          "pointer-events-none inline-block rounded-full bg-white shadow-lg ring-0",
          "transform transition duration-200 ease-in-out",
          sizes.thumb,
          checked ? sizes.thumbTranslate : "translate-x-0"
        )}
      />
    </HeadlessSwitch>
  );

  if (!label) {
    return <div className={className}>{switchElement}</div>;
  }

  const labelContent = (
    <div className={labelPosition === "left" ? "mr-3" : "ml-3"}>
      <span className="text-sm font-medium text-gray-900">{label}</span>
      {description && (
        <p className="text-sm text-gray-500">{description}</p>
      )}
    </div>
  );

  return (
    <div className={clsx("flex items-center", className)}>
      {labelPosition === "left" && labelContent}
      {switchElement}
      {labelPosition === "right" && labelContent}
    </div>
  );
}

Switch.displayName = "Switch";
