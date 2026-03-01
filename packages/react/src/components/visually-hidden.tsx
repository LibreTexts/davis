import { type ElementType, type ReactNode, type HTMLAttributes } from "react";
import { visuallyHidden as visuallyHiddenVariants } from "@libretexts/davis-core";
import clsx from "clsx";

export type VisuallyHiddenProps = HTMLAttributes<HTMLElement> & {
  /** Content hidden visually but available to screen readers */
  children: ReactNode;
  /** HTML element to render (default: "span") */
  as?: ElementType;
  /** When true, element becomes visible on focus (for skip links) */
  focusable?: boolean;
  /** Additional class names */
  className?: string;
};

export function VisuallyHidden({
  children,
  as: Component = "span",
  focusable = false,
  className,
  ...props
}: VisuallyHiddenProps) {
  return (
    <Component
      className={clsx(visuallyHiddenVariants({ focusable }), className)}
      {...props}
    >
      {children}
    </Component>
  );
}

VisuallyHidden.displayName = "VisuallyHidden";
