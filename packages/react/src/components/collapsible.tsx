"use client";

import { Button as HeadlessButton } from "@headlessui/react";
import { collapsible } from "@libretexts/davis-core";
import {
  createContext, forwardRef, useContext, useId, useState,
  type ComponentPropsWithoutRef,
} from "react";

type CollapsibleContextValue = {
  open: boolean;
  disabled: boolean;
  contentId: string;
  toggle: () => void;
};

const CollapsibleContext = createContext<CollapsibleContextValue | null>(null);

function useCollapsible() {
  const context = useContext(CollapsibleContext);
  if (!context) throw new Error("Collapsible components must be used within Collapsible.");
  return context;
}

export type CollapsibleProps = ComponentPropsWithoutRef<"div"> & {
  /** Controlled expansion. Leave undefined to use defaultOpen. */
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  disabled?: boolean;
};

// Headless UI's Disclosure exposes defaultOpen, but not controlled open state.
// Use its native button primitive with a shared controlled/uncontrolled state.
const CollapsibleRoot = forwardRef<HTMLDivElement, CollapsibleProps>(function Collapsible({
  open: controlledOpen, defaultOpen = false, onOpenChange, disabled = false,
  className, children, ...props
}, ref) {
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const open = controlledOpen ?? internalOpen;
  const contentId = `davis-collapsible-${useId()}`;
  const toggle = () => {
    if (disabled) return;
    if (controlledOpen === undefined) setInternalOpen(!open);
    onOpenChange?.(!open);
  };

  return (
    <CollapsibleContext.Provider value={{ open, disabled, contentId, toggle }}>
      <div {...props} ref={ref} data-state={open ? "open" : "closed"}
        data-disabled={disabled || undefined} className={collapsible().root({ className })}>
        {children}
      </div>
    </CollapsibleContext.Provider>
  );
});

export type CollapsibleTriggerProps = ComponentPropsWithoutRef<"button">;

export const CollapsibleTrigger = forwardRef<HTMLButtonElement, CollapsibleTriggerProps>(
  function CollapsibleTrigger({ className, disabled = false, autoFocus = false, onClick, type = "button", ...props }, ref) {
    const context = useCollapsible();
    return (
      <HeadlessButton {...props} ref={ref} type={type} autoFocus={autoFocus}
        disabled={context.disabled || disabled} aria-expanded={context.open}
        aria-controls={context.contentId} data-state={context.open ? "open" : "closed"}
        className={collapsible().trigger({ className })}
        onClick={(event) => {
          onClick?.(event);
          if (!event.defaultPrevented) context.toggle();
        }} />
    );
  },
);

export type CollapsibleContentProps = Omit<ComponentPropsWithoutRef<"div">, "id"> & {
  /** Keep children mounted while closed to preserve nested UI state. */
  forceMount?: boolean;
};

export const CollapsibleContent = forwardRef<HTMLDivElement, CollapsibleContentProps>(
  function CollapsibleContent({ className, forceMount = false, hidden, children, ...props }, ref) {
    const { open, contentId } = useCollapsible();
    // Keep the panel shell in the DOM so aria-controls always has a target.
    return (
      <div {...props} ref={ref} id={contentId} hidden={!open || hidden}
        data-state={open ? "open" : "closed"} className={collapsible().content({ className })}>
        {(open || forceMount) && children}
      </div>
    );
  },
);

export const Collapsible = Object.assign(CollapsibleRoot, {
  Trigger: CollapsibleTrigger,
  Content: CollapsibleContent,
});
