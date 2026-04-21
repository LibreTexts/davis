"use client";

import {
  Dialog as HeadlessDialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle as HeadlessDialogTitle,
  DialogDescription as HeadlessDialogDescription,
} from "@headlessui/react";
import clsx from "clsx";
import { type ReactNode, createContext, useContext } from "react";
import { dialog as dialogVariants } from "@libretexts/davis-core";
import { useDavisContext } from "../context/davis-context";

type ModalContextValue = {
  onClose: () => void;
};

const ModalContext = createContext<ModalContextValue | null>(null);

function useModalContext() {
  const ctx = useContext(ModalContext);
  if (!ctx) {
    throw new Error("Modal subcomponents must be used within a Modal");
  }
  return ctx;
}

export type ModalSize = "sm" | "md" | "lg" | "xl" | "full";

export type ModalProps = {
  open: boolean;
  onClose: (value: boolean) => void;
  children: ReactNode;
  size?: ModalSize;
  className?: string;
};

export function Modal({
  open,
  onClose,
  children,
  size = "md",
  className,
}: ModalProps) {
  const { standalone } = useDavisContext();

  const modalContent = (
    <HeadlessDialog open={open} onClose={onClose} className="relative z-50">
      <DialogBackdrop
        transition
        className={clsx(
          "fixed inset-0 bg-black/50",
          "transition duration-200 ease-out",
          "data-[closed]:opacity-0",
          "data-[enter]:opacity-100"
        )}
      />
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
  );

  return (
    <ModalContext.Provider value={{ onClose: () => onClose(false) }}>
      {standalone ? (
        <div className="davis">{modalContent}</div>
      ) : (
        modalContent
      )}
    </ModalContext.Provider>
  );
}

Modal.displayName = "Modal";

export type ModalHeaderProps = {
  children: ReactNode;
  className?: string;
};

function ModalHeader({ children, className }: ModalHeaderProps) {
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

ModalHeader.displayName = "Modal.Header";

export type ModalTitleProps = {
  children: ReactNode;
  className?: string;
};

function ModalTitle({ children, className }: ModalTitleProps) {
  return (
    <HeadlessDialogTitle
      className={clsx("text-lg font-semibold text-gray-900", className)}
    >
      {children}
    </HeadlessDialogTitle>
  );
}

ModalTitle.displayName = "Modal.Title";

export type ModalDescriptionProps = {
  children: ReactNode;
  className?: string;
};

function ModalDescription({ children, className }: ModalDescriptionProps) {
  return (
    <HeadlessDialogDescription
      className={clsx("text-sm text-gray-500", className)}
    >
      {children}
    </HeadlessDialogDescription>
  );
}

ModalDescription.displayName = "Modal.Description";

export type ModalBodyProps = {
  children: ReactNode;
  className?: string;
};

function ModalBody({ children, className }: ModalBodyProps) {
  return (
    <div className={clsx("flex-1 overflow-y-auto px-6 py-4", className)}>
      {children}
    </div>
  );
}

ModalBody.displayName = "Modal.Body";

export type ModalFooterProps = {
  children: ReactNode;
  className?: string;
};

function ModalFooter({ children, className }: ModalFooterProps) {
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

ModalFooter.displayName = "Modal.Footer";

export type ModalCloseProps = {
  className?: string;
  "aria-label"?: string;
};

function ModalClose({
  className,
  "aria-label": ariaLabel = "Close modal",
}: ModalCloseProps) {
  const { onClose } = useModalContext();
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

ModalClose.displayName = "Modal.Close";

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

Modal.Header = ModalHeader;
Modal.Title = ModalTitle;
Modal.Description = ModalDescription;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;
Modal.Close = ModalClose;
