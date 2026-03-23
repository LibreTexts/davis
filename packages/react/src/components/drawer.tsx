"use client";

import {
  Dialog as HeadlessDialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle as HeadlessDialogTitle,
} from "@headlessui/react";
import clsx from "clsx";
import { type ReactNode, createContext, useContext } from "react";
import { drawer as drawerVariants } from "@libretexts/davis-core";
import { useDavisContext } from "../context/davis-context";

type DrawerContextValue = {
  onClose: () => void;
};

const DrawerContext = createContext<DrawerContextValue | null>(null);

function useDrawerContext() {
  const ctx = useContext(DrawerContext);
  if (!ctx) {
    throw new Error("Drawer subcomponents must be used within a Drawer");
  }
  return ctx;
}

export type DrawerSide = "left" | "right";
export type DrawerSize = "sm" | "md" | "lg" | "full";

export type DrawerProps = {
  open: boolean;
  onClose: (value: boolean) => void;
  children: ReactNode;
  side?: DrawerSide;
  size?: DrawerSize;
  className?: string;
};

export type DrawerHeaderProps = {
  children: ReactNode;
  className?: string;
};

export type DrawerTitleProps = {
  children: ReactNode;
  className?: string;
};

export type DrawerBodyProps = {
  children: ReactNode;
  className?: string;
};

export type DrawerFooterProps = {
  children: ReactNode;
  className?: string;
};

export type DrawerCloseProps = {
  className?: string;
  "aria-label"?: string;
};

export function Drawer({
  open,
  onClose,
  children,
  side = "right",
  size = "md",
  className,
}: DrawerProps) {
  const { standalone } = useDavisContext();

  const drawerContent = (
    <HeadlessDialog open={open} onClose={onClose} className="relative z-50">
      <DialogBackdrop
        transition
        className={clsx(
          "fixed inset-0 bg-black/50",
          "transition duration-300 ease-out",
          "data-[closed]:opacity-0",
          "data-[enter]:opacity-100"
        )}
      />
      <div className="fixed inset-0 overflow-hidden">
        <div
          className={clsx(
            "absolute inset-y-0 flex max-w-full",
            side === "right" ? "right-0" : "left-0"
          )}
        >
          <DialogPanel
            transition
            className={clsx(
              "transition duration-300 ease-out",
              side === "right"
                ? "data-[closed]:translate-x-full data-[enter]:translate-x-0"
                : "data-[closed]:-translate-x-full data-[enter]:translate-x-0",
              drawerVariants({ side, size }),
              className
            )}
          >
            {children}
          </DialogPanel>
        </div>
      </div>
    </HeadlessDialog>
  );

  return (
    <DrawerContext.Provider value={{ onClose: () => onClose(false) }}>
      {standalone ? (
        <div className="davis">{drawerContent}</div>
      ) : (
        drawerContent
      )}
    </DrawerContext.Provider>
  );
}

Drawer.displayName = "Drawer";

function DrawerHeader({ children, className }: DrawerHeaderProps) {
  return (
    <div
      className={clsx(
        "flex items-center justify-between px-6 py-4 border-b border-gray-200 shrink-0",
        className
      )}
    >
      {children}
    </div>
  );
}

DrawerHeader.displayName = "Drawer.Header";

function DrawerTitle({ children, className }: DrawerTitleProps) {
  return (
    <HeadlessDialogTitle
      className={clsx("text-lg font-semibold text-gray-900", className)}
    >
      {children}
    </HeadlessDialogTitle>
  );
}

DrawerTitle.displayName = "Drawer.Title";

function DrawerBody({ children, className }: DrawerBodyProps) {
  return (
    <div className={clsx("flex-1 overflow-y-auto px-6 py-4", className)}>
      {children}
    </div>
  );
}

DrawerBody.displayName = "Drawer.Body";

function DrawerFooter({ children, className }: DrawerFooterProps) {
  return (
    <div
      className={clsx(
        "flex items-center justify-end gap-3 px-6 py-4 border-t border-gray-200 shrink-0",
        className
      )}
    >
      {children}
    </div>
  );
}

DrawerFooter.displayName = "Drawer.Footer";

function DrawerClose({
  className,
  "aria-label": ariaLabel = "Close drawer",
}: DrawerCloseProps) {
  const { onClose } = useDrawerContext();
  return (
    <button
      type="button"
      onClick={onClose}
      aria-label={ariaLabel}
      className={clsx(
        "rounded-md p-1 text-gray-400 hover:text-gray-500 hover:bg-gray-100",
        "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
        "transition-colors duration-150",
        className
      )}
    >
      <XMarkIcon className="size-5" aria-hidden="true" />
    </button>
  );
}

DrawerClose.displayName = "Drawer.Close";

function XMarkIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
    </svg>
  );
}

Drawer.Header = DrawerHeader;
Drawer.Title = DrawerTitle;
Drawer.Body = DrawerBody;
Drawer.Footer = DrawerFooter;
Drawer.Close = DrawerClose;
