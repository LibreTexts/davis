"use client";

import clsx from "clsx";
import {
  cloneElement,
  useId,
  useRef,
  useState,
  type ReactElement,
  type ReactNode,
} from "react";
import { tooltip as tooltipVariants } from "@libretexts/davis-core";

// ============================================
// Types
// ============================================

export type TooltipPlacement = "top" | "bottom" | "left" | "right";

export type TooltipProps = {
  /** Tooltip content — plain text or any React node. */
  content: ReactNode;
  /** The trigger element. Must be a single React element that accepts HTML attributes. */
  children: ReactElement;
  /** Where the tooltip appears relative to the trigger. Default: "top". */
  placement?: TooltipPlacement;
  /** Delay in milliseconds before the tooltip appears. Default: 0. */
  delay?: number;
  /** When true, the tooltip never shows. */
  disabled?: boolean;
  /** Extra class names applied to the positioning wrapper. */
  className?: string;
};

// ============================================
// Placement classes
// ============================================

const PLACEMENT_CLASSES: Record<TooltipPlacement, string> = {
  top:    "bottom-full left-1/2 -translate-x-1/2 mb-1.5",
  bottom: "top-full left-1/2 -translate-x-1/2 mt-1.5",
  left:   "right-full top-1/2 -translate-y-1/2 mr-1.5",
  right:  "left-full top-1/2 -translate-y-1/2 ml-1.5",
};

// ============================================
// Tooltip
// ============================================

export function Tooltip({
  content,
  children,
  placement = "top",
  delay = 0,
  disabled = false,
  className,
}: TooltipProps) {
  const id = useId();
  const [visible, setVisible] = useState(false);
  const showTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const show = () => {
    if (disabled) return;
    if (showTimeout.current) clearTimeout(showTimeout.current);
    if (delay > 0) {
      showTimeout.current = setTimeout(() => setVisible(true), delay);
    } else {
      setVisible(true);
    }
  };

  const hide = () => {
    if (showTimeout.current) {
      clearTimeout(showTimeout.current);
      showTimeout.current = null;
    }
    setVisible(false);
  };

  const styles = tooltipVariants();

  // Inject aria-describedby onto the trigger so screen readers
  // announce the tooltip text when the element is focused.
  const trigger = cloneElement(
    children as ReactElement<{ "aria-describedby"?: string }>,
    { "aria-describedby": id }
  );

  return (
    <span
      className={clsx("relative inline-flex", className)}
      onMouseEnter={show}
      onMouseLeave={hide}
      onFocus={show}
      onBlur={hide}
    >
      {trigger}
      {/* Always rendered so aria-describedby always resolves to a valid id.
          The `hidden` attribute removes it from both layout and the a11y tree. */}
      <div
        id={id}
        role="tooltip"
        hidden={!visible}
        className={clsx(styles.content(), PLACEMENT_CLASSES[placement])}
      >
        {content}
      </div>
    </span>
  );
}

Tooltip.displayName = "Tooltip";
