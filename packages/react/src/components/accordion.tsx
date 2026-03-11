"use client";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import clsx from "clsx";
import { type ReactNode, createContext, useContext } from "react";
import { accordion as accordionVariants } from "@libretexts/davis-core";

export type AccordionVariant = "default" | "flush" | "bordered";
export type AccordionSize = "sm" | "md" | "lg";

type AccordionContextValue = {
  variant: AccordionVariant;
  size: AccordionSize;
};

const AccordionContext = createContext<AccordionContextValue>({
  variant: "default",
  size: "md",
});

function useAccordionContext() {
  return useContext(AccordionContext);
}

export type AccordionProps = {
  children: ReactNode;
  className?: string;
  variant?: AccordionVariant;
  size?: AccordionSize;
};

export function Accordion({
  children,
  className,
  variant = "default",
  size = "md",
}: AccordionProps) {
  const { root } = accordionVariants({ variant, size });
  return (
    <AccordionContext.Provider value={{ variant, size }}>
      <div className={clsx(root(), className)}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
}

Accordion.displayName = "Accordion";

export type AccordionItemProps = {
  children: ReactNode;
  className?: string;
  defaultOpen?: boolean;
};

function AccordionItem({
  children,
  className,
  defaultOpen = false,
}: AccordionItemProps) {
  const { variant, size } = useAccordionContext();
  const { item } = accordionVariants({ variant, size });
  return (
    <Disclosure as="div" defaultOpen={defaultOpen} className={clsx(item(), className)}>
      {children}
    </Disclosure>
  );
}

AccordionItem.displayName = "Accordion.Item";

export type AccordionTriggerProps = {
  children: ReactNode;
  className?: string;
};

function AccordionTrigger({ children, className }: AccordionTriggerProps) {
  const { variant, size } = useAccordionContext();
  const { trigger, icon } = accordionVariants({ variant, size });
  return (
    <DisclosureButton className={clsx(trigger(), className)}>
      <span>{children}</span>
      <ChevronDownIcon className={icon()} aria-hidden="true" />
    </DisclosureButton>
  );
}

AccordionTrigger.displayName = "Accordion.Trigger";

export type AccordionPanelProps = {
  children: ReactNode;
  className?: string;
};

function AccordionPanelItem({ children, className }: AccordionPanelProps) {
  const { variant, size } = useAccordionContext();
  const { panel } = accordionVariants({ variant, size });
  return (
    <DisclosurePanel className={clsx(panel(), className)}>
      {children}
    </DisclosurePanel>
  );
}

AccordionPanelItem.displayName = "Accordion.Panel";

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className={className}
    >
      <path
        fillRule="evenodd"
        d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

Accordion.Item = AccordionItem;
Accordion.Trigger = AccordionTrigger;
Accordion.Panel = AccordionPanelItem;
