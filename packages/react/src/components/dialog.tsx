import {
  Dialog as HeadlessDialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle as HeadlessDialogTitle,
  DialogDescription as HeadlessDialogDescription,
} from "@headlessui/react";
import clsx from "clsx";
import { type ReactNode, createContext, useContext } from "react";
import { dialog as dialogVariants } from "./variants";

// ============================================
// Dialog Context (shared onClose handler)
// ============================================

type DialogContextValue = {
  onClose: () => void;
};

const DialogContext = createContext<DialogContextValue | null>(null);

function useDialogContext() {
  const ctx = useContext(DialogContext);
  if (!ctx) {
    throw new Error("Dialog subcomponents must be used within a Dialog");
  }
  return ctx;
}

// ============================================
// Dialog Root
// ============================================

export type DialogSize = "sm" | "md" | "lg" | "xl" | "full";

export type DialogProps = {
  open: boolean;
  onClose: (value: boolean) => void;
  children: ReactNode;
  size?: DialogSize;
  className?: string;
};

export function Dialog({
  open,
  onClose,
  children,
  size = "md",
  className,
}: DialogProps) {
  return (
    <DialogContext.Provider value={{ onClose: () => onClose(false) }}>
      <HeadlessDialog open={open} onClose={onClose} className="relative z-50">
        {/* Backdrop */}
        <DialogBackdrop
          transition
          className={clsx(
            "fixed inset-0 bg-black/50",
            "transition duration-200 ease-out",
            "data-[closed]:opacity-0",
            "data-[enter]:opacity-100"
          )}
        />
        {/* Scroll container */}
        <div className="fixed inset-0 flex items-center justify-center overflow-y-auto p-4">
          <DialogPanel
            transition
            className={clsx(
              "transition duration-200 ease-out",
              "data-[closed]:opacity-0 data-[closed]:scale-95",
              "data-[enter]:opacity-100 data-[enter]:scale-100",
              dialogVariants({ size }),
              className
            )}
          >
            {children}
          </DialogPanel>
        </div>
      </HeadlessDialog>
    </DialogContext.Provider>
  );
}

Dialog.displayName = "Dialog";

// ============================================
// Dialog Header
// ============================================

export type DialogHeaderProps = {
  children: ReactNode;
  className?: string;
};

function DialogHeader({ children, className }: DialogHeaderProps) {
  return (
    <div
      className={clsx(
        "flex items-center justify-between px-6 py-4 border-b border-gray-200",
        className
      )}
    >
      {children}
    </div>
  );
}

DialogHeader.displayName = "Dialog.Header";

// ============================================
// Dialog Title
// ============================================

export type DialogTitleProps = {
  children: ReactNode;
  className?: string;
};

function DialogTitle({ children, className }: DialogTitleProps) {
  return (
    <HeadlessDialogTitle
      className={clsx("text-lg font-semibold text-gray-900", className)}
    >
      {children}
    </HeadlessDialogTitle>
  );
}

DialogTitle.displayName = "Dialog.Title";

// ============================================
// Dialog Description
// ============================================

export type DialogDescriptionProps = {
  children: ReactNode;
  className?: string;
};

function DialogDescription({ children, className }: DialogDescriptionProps) {
  return (
    <HeadlessDialogDescription
      className={clsx("text-sm text-gray-500", className)}
    >
      {children}
    </HeadlessDialogDescription>
  );
}

DialogDescription.displayName = "Dialog.Description";

// ============================================
// Dialog Footer
// ============================================

export type DialogFooterProps = {
  children: ReactNode;
  className?: string;
};

function DialogFooter({ children, className }: DialogFooterProps) {
  return (
    <div
      className={clsx(
        "flex items-center justify-end gap-3 px-6 py-4 border-t border-gray-200",
        className
      )}
    >
      {children}
    </div>
  );
}

DialogFooter.displayName = "Dialog.Footer";

// ============================================
// Dialog Close Button
// ============================================

export type DialogCloseProps = {
  className?: string;
  "aria-label"?: string;
};

function DialogClose({
  className,
  "aria-label": ariaLabel = "Close dialog",
}: DialogCloseProps) {
  const { onClose } = useDialogContext();
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

DialogClose.displayName = "Dialog.Close";

// ============================================
// X Mark Icon
// ============================================

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

// ============================================
// Attach subcomponents to Dialog
// ============================================

Dialog.Header = DialogHeader;
Dialog.Title = DialogTitle;
Dialog.Description = DialogDescription;
Dialog.Footer = DialogFooter;
Dialog.Close = DialogClose;

