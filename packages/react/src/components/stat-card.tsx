"use client";

import clsx from "clsx";
import { type ReactNode } from "react";
import { statCard as statCardVariants } from "@libretexts/davis-core";

export type StatCardVariant = "default" | "success" | "warning" | "danger";

export type StatCardTrend = {
  direction: "up" | "down" | "neutral";
  value: string;
  label?: string;
};

export type StatCardProps = {
  label: string;
  value: string | number;
  trend?: StatCardTrend;
  icon?: ReactNode;
  variant?: StatCardVariant;
  className?: string;
};

function ArrowUpIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" className={className}>
      <path fillRule="evenodd" d="M8 14a.75.75 0 0 1-.75-.75V4.56L3.03 7.78a.75.75 0 0 1-1.06-1.06l4.5-4.5a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1-1.06 1.06L8.75 4.56v8.69A.75.75 0 0 1 8 14Z" clipRule="evenodd" />
    </svg>
  );
}

function ArrowDownIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" className={className}>
      <path fillRule="evenodd" d="M8 2a.75.75 0 0 1 .75.75v8.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 0 1 1.06-1.06L7.25 11.44V2.75A.75.75 0 0 1 8 2Z" clipRule="evenodd" />
    </svg>
  );
}

function MinusIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" className={className}>
      <path fillRule="evenodd" d="M2 8a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 8Z" clipRule="evenodd" />
    </svg>
  );
}

export function StatCard({
  label,
  value,
  trend,
  icon,
  variant = "default",
  className,
}: StatCardProps) {
  const styles = statCardVariants({
    variant,
    trendDirection: trend?.direction,
  });

  return (
    <div className={clsx(styles.root(), className)}>
      <div className={styles.header()}>
        <div className={styles.body()}>
          <p className={styles.label()}>{label}</p>
          <p className={styles.value()}>{value}</p>
          {trend !== undefined && (
            <div className={styles.trend()}>
              {trend.direction === "up" && <ArrowUpIcon className="size-4 shrink-0" />}
              {trend.direction === "down" && <ArrowDownIcon className="size-4 shrink-0" />}
              {trend.direction === "neutral" && <MinusIcon className="size-4 shrink-0" />}
              <span>{trend.value}</span>
              {trend.label !== undefined && (
                <span className={styles.trendLabel()}>{trend.label}</span>
              )}
            </div>
          )}
        </div>
        {icon !== undefined && (
          <div className={styles.icon()} aria-hidden="true">
            {icon}
          </div>
        )}
      </div>
    </div>
  );
}

StatCard.displayName = "StatCard";
