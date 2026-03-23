import clsx from "clsx";
import { forwardRef, type HTMLAttributes } from "react";
import { divider } from "@libretexts/davis-core";

export type DividerProps = {
  orientation?: "horizontal" | "vertical";
  label?: string;
  className?: string;
} & Omit<HTMLAttributes<HTMLElement>, "children">;

export const Divider = forwardRef<HTMLElement, DividerProps>(
  ({ orientation = "horizontal", label, className, ...props }, ref) => {
    const { root, line, label: labelClass } = divider({ orientation });

    if (label) {
      return (
        <div
          ref={ref as React.Ref<HTMLDivElement>}
          role="separator"
          aria-orientation={orientation}
          className={clsx(root(), className)}
          {...props}
        >
          <span aria-hidden="true" className={line()} />
          <span className={labelClass()}>{label}</span>
          <span aria-hidden="true" className={line()} />
        </div>
      );
    }

    if (orientation === "vertical") {
      return (
        <div
          ref={ref as React.Ref<HTMLDivElement>}
          role="separator"
          aria-orientation="vertical"
          className={clsx(root(), className)}
          {...props}
        >
          <span className={line()} />
        </div>
      );
    }

    return (
      <hr
        ref={ref as React.Ref<HTMLHRElement>}
        role="separator"
        className={clsx("border-gray-200 w-full", className)}
        {...props}
      />
    );
  }
);

Divider.displayName = "Divider";
