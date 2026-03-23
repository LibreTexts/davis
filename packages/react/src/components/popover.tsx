"use client";

import {
  Popover as HeadlessPopover,
  PopoverButton as HeadlessPopoverButton,
  PopoverPanel as HeadlessPopoverPanel,
} from "@headlessui/react";
import clsx from "clsx";
import { type ReactNode } from "react";
import { popover as popoverVariants } from "@libretexts/davis-core";
import { useDavisContext } from "../context/davis-context";

export type PopoverPlacement = "top" | "bottom" | "left" | "right";

export type PopoverProps = {
  children: ReactNode;
  className?: string;
};

export type PopoverButtonProps = {
  children: ReactNode;
  className?: string;
};

export type PopoverPanelProps = {
  children: ReactNode;
  placement?: PopoverPlacement;
  className?: string;
};

function PopoverRoot({ children, className }: PopoverProps) {
  const { standalone } = useDavisContext();
  const content = (
    <HeadlessPopover className={clsx("relative inline-block", className)}>
      {children}
    </HeadlessPopover>
  );
  return standalone ? <div className="davis">{content}</div> : content;
}

PopoverRoot.displayName = "Popover";

function PopoverButton({ children, className }: PopoverButtonProps) {
  return (
    <HeadlessPopoverButton
      className={clsx(
        "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md",
        className
      )}
    >
      {children}
    </HeadlessPopoverButton>
  );
}

PopoverButton.displayName = "Popover.Button";

function PopoverPanel({ children, placement = "bottom", className }: PopoverPanelProps) {
  return (
    <HeadlessPopoverPanel
      transition
      className={clsx(
        "transition duration-150 ease-out",
        "data-[closed]:opacity-0 data-[closed]:scale-95",
        "data-[enter]:opacity-100 data-[enter]:scale-100",
        popoverVariants({ side: placement }),
        className
      )}
    >
      {children}
    </HeadlessPopoverPanel>
  );
}

PopoverPanel.displayName = "Popover.Panel";

PopoverRoot.Button = PopoverButton;
PopoverRoot.Panel = PopoverPanel;

export { PopoverRoot as Popover };
