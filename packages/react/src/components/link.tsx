import { link, type LinkVariantProps } from "@libretexts/davis-core";
import clsx from "clsx";
import { forwardRef, type AnchorHTMLAttributes, type ReactNode } from "react";

export type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & LinkVariantProps & {
  /** Link content */
  children: ReactNode;
  /** URL to navigate to */
  href: string;
  /** Mark as external link (opens in new tab, shows icon) */
  external?: boolean;
  /** Show external link icon (only when external is true) */
  showExternalIcon?: boolean;
  /** Icon to display before the text */
  icon?: ReactNode;
  /** Additional class names */
  className?: string;
};

// External link icon
function ExternalLinkIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      children,
      href,
      variant = "default",
      underline = "hover",
      size = "md",
      external = false,
      showExternalIcon = true,
      icon,
      className,
      disabled = false,
      ...props
    },
    ref
  ) => {
    // Auto-detect external links
    const isExternal =
      external ||
      href.startsWith("http://") ||
      href.startsWith("https://") ||
      href.startsWith("//");

    // External link props
    const externalProps = isExternal
      ? {
          target: "_blank",
          rel: "noopener noreferrer",
        }
      : {};

    if (disabled) {
      return (
        <span
          className={clsx(link({ size, disabled: true }), className)}
          aria-disabled="true"
        >
          {icon && <span className="shrink-0 w-4 h-4">{icon}</span>}
          {children}
        </span>
      );
    }

    return (
      <a
        ref={ref}
        href={href}
        className={clsx(link({ variant, underline, size }), className)}
        {...externalProps}
        {...props}
      >
        {icon && <span className="shrink-0 w-4 h-4">{icon}</span>}
        {children}
        {isExternal && showExternalIcon && (
          <ExternalLinkIcon className="shrink-0 w-3.5 h-3.5 ml-0.5" />
        )}
        {isExternal && (
          <span className="sr-only"> (opens in new tab)</span>
        )}
      </a>
    );
  }
);

Link.displayName = "Link";
