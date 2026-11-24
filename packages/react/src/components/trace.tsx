"use client";

import { trace, type TraceStatus } from "@libretexts/davis-core";
import { forwardRef, type ComponentPropsWithoutRef } from "react";
import {
  Collapsible, CollapsibleContent, CollapsibleTrigger,
  type CollapsibleContentProps, type CollapsibleTriggerProps,
} from "./collapsible";

export type { TraceStatus } from "@libretexts/davis-core";
export type TraceProps = ComponentPropsWithoutRef<"div">;
export type TraceLineProps = ComponentPropsWithoutRef<"span"> & { status?: TraceStatus };
export type TraceIconProps = ComponentPropsWithoutRef<"span">;
export type TraceTitleProps = ComponentPropsWithoutRef<"span">;
export type TraceDescriptionProps = ComponentPropsWithoutRef<"span">;
export type { CollapsibleProps as TraceCollapsibleProps } from "./collapsible";
export type TraceCollapsibleTriggerProps = CollapsibleTriggerProps;
export type TraceCollapsibleContentProps = CollapsibleContentProps;

const TraceRoot = forwardRef<HTMLDivElement, TraceProps>(function Trace({ className, ...props }, ref) {
  return <div {...props} ref={ref} className={trace().root({ className })} />;
});

export const TraceLine = forwardRef<HTMLSpanElement, TraceLineProps>(
  function TraceLine({ className, status, ...props }, ref) {
    return <span {...props} ref={ref} data-status={status} className={trace({ status }).line({ className })} />;
  },
);

export const TraceIcon = forwardRef<HTMLSpanElement, TraceIconProps>(function TraceIcon({ className, ...props }, ref) {
  return <span {...props} ref={ref} aria-hidden="true" className={trace().icon({ className })} />;
});

export const TraceTitle = forwardRef<HTMLSpanElement, TraceTitleProps>(function TraceTitle({ className, ...props }, ref) {
  return <span {...props} ref={ref} className={trace().title({ className })} />;
});

export const TraceDescription = forwardRef<HTMLSpanElement, TraceDescriptionProps>(function TraceDescription({ className, ...props }, ref) {
  return <span {...props} ref={ref} className={trace().description({ className })} />;
});

export const TraceCollapsible = Collapsible;

export const TraceCollapsibleTrigger = forwardRef<HTMLButtonElement, TraceCollapsibleTriggerProps>(
  function TraceCollapsibleTrigger({ className, children, ...props }, ref) {
    return (
      <CollapsibleTrigger {...props} ref={ref} className={trace().trigger({ className })}>
        {children}
        <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" stroke="currentColor"
          strokeWidth="1.5" className={trace().chevron()}>
          <path d="m7.5 5 5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </CollapsibleTrigger>
    );
  },
);

export const TraceCollapsibleContent = forwardRef<HTMLDivElement, TraceCollapsibleContentProps>(
  function TraceCollapsibleContent({ className, ...props }, ref) {
    return <CollapsibleContent {...props} ref={ref} className={trace().content({ className })} />;
  },
);

export const Trace = Object.assign(TraceRoot, {
  Line: TraceLine,
  Icon: TraceIcon,
  Title: TraceTitle,
  Description: TraceDescription,
  Collapsible: TraceCollapsible,
  Trigger: TraceCollapsibleTrigger,
  Content: TraceCollapsibleContent,
});
