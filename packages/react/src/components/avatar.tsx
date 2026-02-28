import clsx from "clsx";
import { useState, type ReactNode, type ImgHTMLAttributes } from "react";
import { avatar as avatarVariants, avatarGroup as avatarGroupVariants } from "@libretexts/davis-core";

export type AvatarSize = "xs" | "sm" | "md" | "lg" | "xl";

export type AvatarProps = {
  src?: string;
  alt?: string;
  name?: string;
  initials?: string;
  icon?: ReactNode;
  size?: AvatarSize;
  className?: string;
  imgProps?: Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "alt">;
};

export type AvatarGroupProps = {
  children: ReactNode;
  max?: number;
  size?: AvatarSize;
  className?: string;
};

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "";
  const first = parts[0] ?? "";
  const last = parts[parts.length - 1] ?? "";
  if (parts.length === 1) {
    return first.slice(0, 2).toUpperCase();
  }
  return ((first[0] ?? "") + (last[0] ?? "")).toUpperCase();
}

function UserIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function Avatar({
  src,
  alt,
  name,
  initials,
  icon,
  size = "md",
  className,
  imgProps,
}: AvatarProps) {
  const [imageError, setImageError] = useState(false);
  const styles = avatarVariants({ size });

  const showImage = src && !imageError;
  const displayInitials = initials ?? (name ? getInitials(name) : undefined);

  return (
    <span className={clsx(styles.root(), className)} role="img" aria-label={alt ?? name}>
      {showImage ? (
        <img
          src={src}
          alt={alt ?? name ?? "Avatar"}
          className={styles.image()}
          onError={() => setImageError(true)}
          {...imgProps}
        />
      ) : (
        <span className={styles.fallback()}>
          {icon ? (
            <span className="flex items-center justify-center w-1/2 h-1/2">
              {icon}
            </span>
          ) : displayInitials ? (
            displayInitials
          ) : (
            <UserIcon className="w-1/2 h-1/2" />
          )}
        </span>
      )}
    </span>
  );
}

Avatar.displayName = "Avatar";

export function AvatarGroup({
  children,
  max,
  size = "md",
  className,
}: AvatarGroupProps) {
  const styles = avatarGroupVariants({ size });
  const avatarStyles = avatarVariants({ size });

  const childArray = Array.isArray(children) ? children : [children];
  const visibleAvatars = max !== undefined ? childArray.slice(0, max) : childArray;
  const overflowCount = max !== undefined ? childArray.length - max : 0;

  return (
    <div className={clsx(styles, className)} role="group" aria-label="Avatar group">
      {visibleAvatars.map((child, index) => (
        <div key={index} className="ring-2 ring-white rounded-full">
          {child}
        </div>
      ))}

      {overflowCount > 0 && (
        <span
          className={clsx(
            avatarStyles.root(),
            "ring-2 ring-white bg-gray-300 text-gray-700"
          )}
          aria-label={`${overflowCount} more users`}
        >
          +{overflowCount}
        </span>
      )}
    </div>
  );
}

AvatarGroup.displayName = "AvatarGroup";
