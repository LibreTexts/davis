import clsx from "clsx";
import { type ReactNode } from "react";
import { inputGroup as inputGroupVariants } from "@libretexts/davis-core";

export type InputGroupSize = "sm" | "md" | "lg";

export type InputGroupProps = {
  prefix?: ReactNode;
  suffix?: ReactNode;
  children: ReactNode;
  size?: InputGroupSize;
  className?: string;
};

export function InputGroup({ prefix, suffix, children, size = "md", className }: InputGroupProps) {
  const { root, addon, prefix: prefixClass, suffix: suffixClass, inputSlot, inputFirst, inputLast } = inputGroupVariants({ size });
  return (
    <div className={clsx(root(), "items-end", className)}>
      {prefix && (
        <span className={clsx(addon(), prefixClass())}>{prefix}</span>
      )}
      <div className={clsx(inputSlot(), prefix && inputFirst(), suffix && inputLast())}>
        {children}
      </div>
      {suffix && (
        <span className={clsx(addon(), suffixClass())}>{suffix}</span>
      )}
    </div>
  );
}

InputGroup.displayName = "InputGroup";
