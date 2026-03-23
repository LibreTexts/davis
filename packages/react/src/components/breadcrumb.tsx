import clsx from "clsx";
import { type ReactNode, createContext } from "react";
import { breadcrumb as breadcrumbVariants } from "@libretexts/davis-core";

const BreadcrumbContext = createContext<Record<string, never>>({});

export type BreadcrumbProps = {
  children: ReactNode;
  className?: string;
  "aria-label"?: string;
};

export function Breadcrumb({ children, className, "aria-label": ariaLabel = "Breadcrumb" }: BreadcrumbProps) {
  const { root, list } = breadcrumbVariants();
  return (
    <BreadcrumbContext.Provider value={{}}>
      <nav aria-label={ariaLabel} className={clsx(root(), className)}>
        <ol className={list()}>
          {children}
        </ol>
      </nav>
    </BreadcrumbContext.Provider>
  );
}
Breadcrumb.displayName = "Breadcrumb";

export type BreadcrumbItemProps = {
  children: ReactNode;
  href?: string;
  isCurrent?: boolean;
  className?: string;
};

function BreadcrumbItemComponent({ children, href, isCurrent = false, className }: BreadcrumbItemProps) {
  const { item, link, current, separator } = breadcrumbVariants();
  return (
    <li className={clsx(item(), className)}>
      {isCurrent ? (
        <span aria-current="page" className={current()}>
          {children}
        </span>
      ) : href ? (
        <a href={href} className={link()}>
          {children}
        </a>
      ) : (
        <span className={link()}>{children}</span>
      )}
      {!isCurrent && (
        <span className={separator()} aria-hidden="true">
          <ChevronRightIcon />
        </span>
      )}
    </li>
  );
}
BreadcrumbItemComponent.displayName = "Breadcrumb.Item";
Breadcrumb.Item = BreadcrumbItemComponent;

function ChevronRightIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-4" aria-hidden="true">
      <path fillRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
    </svg>
  );
}
