import clsx from "clsx";
import { forwardRef, type HTMLAttributes } from "react";
import { skeleton } from "@libretexts/davis-core";

export type SkeletonVariant = "text" | "circular" | "rectangular" | "rounded";

export type SkeletonProps = {
  variant?: SkeletonVariant;
  width?: string | number;
  height?: string | number;
  lines?: number;
  className?: string;
} & Omit<HTMLAttributes<HTMLDivElement>, "children">;

export const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(
  (
    {
      variant = "rounded",
      width,
      height,
      lines,
      className,
      "aria-label": ariaLabel = "Loading...",
      ...props
    },
    ref
  ) => {
    const style: React.CSSProperties = {
      width: typeof width === "number" ? `${width}px` : width,
      height: typeof height === "number" ? `${height}px` : height,
    };

    if (variant === "text" && lines && lines > 1) {
      return (
        <div ref={ref} role="status" aria-label={ariaLabel} className={clsx("flex flex-col gap-2", className)} {...props}>
          {Array.from({ length: lines }).map((_, i) => (
            <div
              key={i}
              className={clsx(
                skeleton({ variant: "text" }),
                i === lines - 1 && "w-3/4"
              )}
            />
          ))}
        </div>
      );
    }

    return (
      <div
        ref={ref}
        role="status"
        aria-label={ariaLabel}
        style={style}
        className={clsx(skeleton({ variant }), className)}
        {...props}
      />
    );
  }
);

Skeleton.displayName = "Skeleton";
