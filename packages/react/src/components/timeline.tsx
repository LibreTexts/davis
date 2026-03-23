"use client";

import clsx from "clsx";
import { type ReactNode } from "react";
import { timeline as timelineVariants } from "@libretexts/davis-core";

export type TimelineStatus = "complete" | "current" | "pending";

export type TimelineItemProps = {
  title: ReactNode;
  description?: ReactNode;
  timestamp?: string;
  icon?: ReactNode;
  status?: TimelineStatus;
  className?: string;
};

export type TimelineProps = {
  children: ReactNode;
  className?: string;
};

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" className={className}>
      <path fillRule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
    </svg>
  );
}

function DotIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" className={className}>
      <circle cx="8" cy="8" r="3" />
    </svg>
  );
}

function TimelineItem({
  title,
  description,
  timestamp,
  icon,
  status = "pending",
  className,
}: TimelineItemProps) {
  const styles = timelineVariants({ status });

  const defaultIcon =
    status === "complete" ? (
      <CheckIcon className="size-4" />
    ) : (
      <DotIcon className="size-4" />
    );

  return (
    <li className={clsx(styles.item(), className)}>
      <div className={styles.connector()} aria-hidden="true" />
      <div className={styles.indicator()} aria-hidden="true">
        {icon !== undefined ? icon : defaultIcon}
      </div>
      <div className={styles.content()}>
        <p className={styles.title()}>{title}</p>
        {description !== undefined && (
          <p className={styles.description()}>{description}</p>
        )}
        {timestamp !== undefined && (
          <time className={styles.timestamp()}>{timestamp}</time>
        )}
      </div>
    </li>
  );
}

TimelineItem.displayName = "Timeline.Item";

function TimelineRoot({ children, className }: TimelineProps) {
  return (
    <ol role="list" className={clsx(timelineVariants().root(), className)}>
      {children}
    </ol>
  );
}

TimelineRoot.displayName = "Timeline";
TimelineRoot.Item = TimelineItem;

export { TimelineRoot as Timeline };
