"use client";

import {
  Listbox as HeadlessListbox,
  ListboxButton,
  ListboxLabel,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/react";
import clsx from "clsx";
import { type ReactNode, type ReactElement, createContext, useContext } from "react";
import { listbox as listboxVariants, type ListboxSize } from "@libretexts/davis-core";

// ─── Context ──────────────────────────────────────────────────────────────────

const ListboxMultipleContext = createContext<boolean>(false);

// ─── Types ────────────────────────────────────────────────────────────────────

export type ListboxProps<T = string> = {
  value: T | null;
  onChange: (value: T) => void;
  disabled?: boolean;
  multiple?: boolean;
  name?: string;
  by?: keyof T & string | ((a: T, b: T) => boolean);
  children: ReactNode;
  className?: string;
  [key: string]: unknown;
};

export type ListboxLabelProps = {
  children: ReactNode;
  className?: string;
};

export type ListboxButtonProps<T = string> = {
  displayValue?: (value: T | null) => string;
  placeholder?: string;
  size?: ListboxSize;
  disabled?: boolean;
  className?: string;
  "aria-label"?: string;
};

export type ListboxOptionsProps = {
  children: ReactNode;
  className?: string;
  static?: boolean;
};

type OptionRenderBag = { selected: boolean; active: boolean; disabled: boolean; focus: boolean; selectedOption: boolean };

export type ListboxOptionProps<T = string> = {
  value: T;
  children: ReactNode | ((bag: OptionRenderBag) => ReactElement);
  disabled?: boolean;
  className?: string;
};

// ─── Sub-components ───────────────────────────────────────────────────────────

function ListboxLabelComponent({ children, className }: ListboxLabelProps) {
  const { label } = listboxVariants();
  return (
    <ListboxLabel className={clsx(label(), className)}>
      {children}
    </ListboxLabel>
  );
}
ListboxLabelComponent.displayName = "Listbox.Label";

function ListboxButtonComponent<T = string>({
  displayValue,
  placeholder,
  size,
  disabled,
  className,
  "aria-label": ariaLabel,
}: ListboxButtonProps<T>) {
  const { buttonWrap, button, chevron } = listboxVariants({ size });
  return (
    <div className={buttonWrap()}>
      <ListboxButton
        className={clsx(button(), className)}
        {...(disabled !== undefined ? { disabled } : {})}
        {...(ariaLabel !== undefined ? { "aria-label": ariaLabel } : {})}
      >
        {({ value }: { value: T | null }) => {
          const isEmpty = value == null || (Array.isArray(value) && (value as unknown[]).length === 0);
          return (
          <>
            <span className="block truncate">
              {!isEmpty ? (
                displayValue ? displayValue(value as T) : String(value)
              ) : (
                <span className="text-neutral-500">{placeholder ?? "Select\u2026"}</span>
              )}
            </span>
            <span className={chevron()} aria-hidden="true">
              <ChevronUpDownIcon />
            </span>
          </>
          );
        }}
      </ListboxButton>
    </div>
  );
}
ListboxButtonComponent.displayName = "Listbox.Button";

function ListboxOptionsComponent({ children, className, static: isStatic }: ListboxOptionsProps) {
  const { options } = listboxVariants();
  return (
    <ListboxOptions
      transition
      anchor={{ to: "bottom start", gap: 4 }}
      className={clsx(options(), className)}
      {...(isStatic !== undefined ? { static: isStatic } : {})}
    >
      {children}
    </ListboxOptions>
  );
}
ListboxOptionsComponent.displayName = "Listbox.Options";

function ListboxOptionComponent<T = string>({
  value,
  children,
  disabled,
  className,
}: ListboxOptionProps<T>) {
  const { option } = listboxVariants();
  const isMultiple = useContext(ListboxMultipleContext);
  return (
    <ListboxOption
      value={value}
      {...(disabled !== undefined ? { disabled } : {})}
      className={clsx(option(), className)}
    >
      {typeof children === "function"
        ? children
        : ({ selected }: { selected: boolean }) => (
            <span className="flex items-center justify-between gap-x-2">
              <span className="block truncate">{children}</span>
              {isMultiple && (
                <span className="size-4 shrink-0" aria-hidden="true">
                  {selected && <CheckIcon />}
                </span>
              )}
            </span>
          )}
    </ListboxOption>
  );
}
ListboxOptionComponent.displayName = "Listbox.Option";

// ─── Root ─────────────────────────────────────────────────────────────────────

function ListboxRoot<T = string>({
  value,
  onChange,
  disabled,
  multiple,
  name,
  by,
  children,
  className,
  ...props
}: ListboxProps<T>) {
  const { root } = listboxVariants();
  return (
    <ListboxMultipleContext.Provider value={!!multiple}>
      <HeadlessListbox
        value={value as T}
        onChange={onChange}
        {...(disabled !== undefined ? { disabled } : {})}
        {...(multiple !== undefined ? { multiple } : {})}
        {...(name !== undefined ? { name } : {})}
        {...(by !== undefined ? { by } : {})}
        {...props}
      >
        <div className={clsx(root(), className)}>{children}</div>
      </HeadlessListbox>
    </ListboxMultipleContext.Provider>
  );
}

// ─── Compound assembly ────────────────────────────────────────────────────────

export const Listbox = Object.assign(ListboxRoot, {
  Label: ListboxLabelComponent,
  Button: ListboxButtonComponent,
  Options: ListboxOptionsComponent,
  Option: ListboxOptionComponent,
});

// ─── Icons ────────────────────────────────────────────────────────────────────

function ChevronUpDownIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5" aria-hidden="true">
      <path fillRule="evenodd" d="M10 3a.75.75 0 0 1 .55.24l3.25 3.5a.75.75 0 1 1-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 0 1-1.1-1.02l3.25-3.5A.75.75 0 0 1 10 3Zm-3.76 9.2a.75.75 0 0 1 1.06.04l2.7 2.908 2.7-2.908a.75.75 0 1 1 1.1 1.02l-3.25 3.5a.75.75 0 0 1-1.1 0l-3.25-3.5a.75.75 0 0 1 .04-1.06Z" clipRule="evenodd" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg fill="none" viewBox="0 0 14 14" className="size-3.5" aria-hidden="true">
      <path d="M3 8L6 11L11 3.5" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
