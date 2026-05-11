"use client";

import clsx from "clsx";
import { type ReactNode, createContext, useContext, useRef } from "react";
import { comment as commentVariants } from "@libretexts/davis-core";
import { Avatar, type AvatarProps } from "./avatar";

export type CommentVariant = "default" | "highlighted";
export type CommentPadding = "none" | "sm" | "md" | "lg";

export type CommentProps = {
  children: ReactNode;
  variant?: CommentVariant;
  padding?: CommentPadding;
  className?: string;
  "aria-label"?: string;
};

export type CommentHeaderProps = {
  avatar?: AvatarProps;
  name?: string;
  children?: ReactNode;
  className?: string;
};

export type CommentBodyProps = {
  children: ReactNode;
  className?: string;
};

type CommentStyles = ReturnType<typeof commentVariants>;

type CommentContextValue = {
  styles: CommentStyles;
  hasAvatar: React.MutableRefObject<boolean>;
};

const CommentContext = createContext<CommentContextValue | null>(null);

function useCommentContext(): CommentContextValue {
  const ctx = useContext(CommentContext);
  if (!ctx) {
    throw new Error("Comment subcomponents must be used within a <Comment>");
  }
  return ctx;
}

export function Comment({
  children,
  variant = "default",
  padding = "md",
  className,
  "aria-label": ariaLabel,
}: CommentProps) {
  const styles = commentVariants({ variant, padding });
  const hasAvatar = useRef(false);
  hasAvatar.current = false;

  return (
    <CommentContext.Provider value={{ styles, hasAvatar }}>
      <article aria-label={ariaLabel} className={clsx(styles.root(), className)}>
        {children}
      </article>
    </CommentContext.Provider>
  );
}

Comment.displayName = "Comment";

function CommentHeader({ avatar, name, children, className }: CommentHeaderProps) {
  const { styles, hasAvatar } = useCommentContext();

  if (avatar != null) {
    hasAvatar.current = true;
  }

  return (
    <div className={clsx(styles.header(), className)}>
      {avatar != null && (
        <div className={styles.avatar()}>
          <Avatar size="sm" {...avatar} />
        </div>
      )}
      <div className={styles.headerContent()}>
        <div className={styles.nameRow()}>
          {name != null && <span className={styles.name()}>{name}</span>}
          {children != null && (
            <div className={styles.metadata()}>{children}</div>
          )}
        </div>
      </div>
    </div>
  );
}

CommentHeader.displayName = "Comment.Header";

function CommentBody({ children, className }: CommentBodyProps) {
  const { styles, hasAvatar } = useCommentContext();
  return (
    <div className={clsx(styles.body(), hasAvatar.current && "ml-11", className)}>
      {children}
    </div>
  );
}

CommentBody.displayName = "Comment.Body";

Comment.Header = CommentHeader;
Comment.Body = CommentBody;
