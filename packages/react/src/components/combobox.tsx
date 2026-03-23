"use client";

import {
  Combobox as HeadlessCombobox,
  ComboboxInput,
  ComboboxButton,
  ComboboxOptions,
  ComboboxOption,
} from "@headlessui/react";
import clsx from "clsx";
import { type ReactNode, createContext } from "react";
import { combobox as comboboxVariants } from "@libretexts/davis-core";

export type ComboboxOption = {
  value: string;
  label: string;
  disabled?: boolean;
};

const ComboboxContext = createContext<Record<string, never>>({});

export type ComboboxProps = {
  value: string | null;
  onChange: (value: string | null) => void;
  disabled?: boolean;
  children: ReactNode;
  className?: string;
};

export function Combobox({ value, onChange, disabled, children, className }: ComboboxProps) {
  const { root } = comboboxVariants();
  return (
    <ComboboxContext.Provider value={{}}>
      <HeadlessCombobox value={value} onChange={onChange} {...(disabled !== undefined ? { disabled } : {})}>
        <div className={clsx(root(), className)}>{children}</div>
      </HeadlessCombobox>
    </ComboboxContext.Provider>
  );
}
Combobox.displayName = "Combobox";

export type ComboboxInputProps = {
  placeholder?: string;
  displayValue?: (value: string | null) => string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
};

function ComboboxInputComponent({ placeholder, displayValue, onChange, className }: ComboboxInputProps) {
  const { inputWrap, button } = comboboxVariants();
  return (
    <div className={inputWrap()}>
      <ComboboxInput
        className={clsx(
          "block w-full rounded-md border border-gray-400 bg-white text-gray-900",
          "py-2 pl-3 pr-10",
          "placeholder:text-gray-400",
          "focus:outline-2 focus:-outline-offset-2 focus:outline-primary focus:border-primary",
          "disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-100",
          "transition-colors duration-200",
          className
        )}
        placeholder={placeholder}
        displayValue={(displayValue ?? ((v) => (v as string | null) ?? "")) as (item: unknown) => string}
        {...(onChange !== undefined ? { onChange } : {})}
      />
      <ComboboxButton className={button()}>
        <ChevronUpDownIcon />
      </ComboboxButton>
    </div>
  );
}
ComboboxInputComponent.displayName = "Combobox.Input";

export type ComboboxOptionsProps = {
  children: ReactNode;
  className?: string;
};

function ComboboxOptionsComponent({ children, className }: ComboboxOptionsProps) {
  const { options } = comboboxVariants();
  return (
    <ComboboxOptions className={clsx(options(), className)}>
      {children}
    </ComboboxOptions>
  );
}
ComboboxOptionsComponent.displayName = "Combobox.Options";

export type ComboboxOptionItemProps = {
  value: string;
  children: ReactNode;
  disabled?: boolean;
  className?: string;
};

function ComboboxOptionComponent({ value, children, disabled, className }: ComboboxOptionItemProps) {
  const { option } = comboboxVariants();
  return (
    <ComboboxOption
      value={value}
      {...(disabled !== undefined ? { disabled } : {})}
      className={clsx(option(), className)}
    >
      {children}
    </ComboboxOption>
  );
}
ComboboxOptionComponent.displayName = "Combobox.Option";

export type ComboboxEmptyProps = { children?: ReactNode; className?: string };
function ComboboxEmpty({ children = "No results found.", className }: ComboboxEmptyProps) {
  const { noResults } = comboboxVariants();
  return <p className={clsx(noResults(), className)}>{children}</p>;
}
ComboboxEmpty.displayName = "Combobox.Empty";

Combobox.Input = ComboboxInputComponent;
Combobox.Options = ComboboxOptionsComponent;
Combobox.Option = ComboboxOptionComponent;
Combobox.Empty = ComboboxEmpty;

function ChevronUpDownIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5" aria-hidden="true">
      <path fillRule="evenodd" d="M10 3a.75.75 0 0 1 .55.24l3.25 3.5a.75.75 0 1 1-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 0 1-1.1-1.02l3.25-3.5A.75.75 0 0 1 10 3Zm-3.76 9.2a.75.75 0 0 1 1.06.04l2.7 2.908 2.7-2.908a.75.75 0 1 1 1.1 1.02l-3.25 3.5a.75.75 0 0 1-1.1 0l-3.25-3.5a.75.75 0 0 1 .04-1.06Z" clipRule="evenodd" />
    </svg>
  );
}
