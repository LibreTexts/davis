import { type ReactNode } from "react";
import { skipLink as skipLinkVariants } from "@libretexts/davis-core";
import clsx from "clsx";

export type SkipLinkProps = {
  /** ID of the target element to skip to (default: "main-content") */
  targetId?: string;
  /** Link text (default: "Skip to main content") */
  children?: ReactNode;
  /** Additional class names */
  className?: string;
};

export function SkipLink({
  targetId = "main-content",
  children = "Skip to main content",
  className,
}: SkipLinkProps) {
  return (
    <a href={`#${targetId}`} className={clsx(skipLinkVariants(), className)}>
      {children}
    </a>
  );
}

SkipLink.displayName = "SkipLink";
