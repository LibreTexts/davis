import {
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
  type ReactNode,
} from "react";

type Politeness = "polite" | "assertive";

type AnnounceFunction = (message: string, politeness?: Politeness) => void;

const LiveAnnouncerContext = createContext<AnnounceFunction | null>(null);

export type LiveAnnouncerProviderProps = {
  children: ReactNode;
};

/**
 * Provides an `announce()` function via `useAnnounce()` that triggers
 * screen reader announcements through a shared aria-live region.
 *
 * Render once near the root of your app:
 * ```tsx
 * <LiveAnnouncerProvider>
 *   <App />
 * </LiveAnnouncerProvider>
 * ```
 */
export function LiveAnnouncerProvider({ children }: LiveAnnouncerProviderProps) {
  const [politeMessage, setPoliteMessage] = useState("");
  const [assertiveMessage, setAssertiveMessage] = useState("");
  const clearTimerRef = useRef<ReturnType<typeof setTimeout>>();

  const announce: AnnounceFunction = useCallback((message, politeness = "polite") => {
    // Clear previous message first so the same message can be re-announced
    if (politeness === "assertive") {
      setAssertiveMessage("");
    } else {
      setPoliteMessage("");
    }

    // Clear any pending timer
    if (clearTimerRef.current) {
      clearTimeout(clearTimerRef.current);
    }

    // Set the new message after a microtask to ensure the clear took effect
    requestAnimationFrame(() => {
      if (politeness === "assertive") {
        setAssertiveMessage(message);
      } else {
        setPoliteMessage(message);
      }
    });

    // Auto-clear after a reasonable delay so old announcements don't linger
    clearTimerRef.current = setTimeout(() => {
      setPoliteMessage("");
      setAssertiveMessage("");
    }, 7000);
  }, []);

  return (
    <LiveAnnouncerContext.Provider value={announce}>
      {children}
      <div
        style={{
          position: "absolute",
          width: "1px",
          height: "1px",
          padding: 0,
          margin: "-1px",
          overflow: "hidden",
          clip: "rect(0, 0, 0, 0)",
          whiteSpace: "nowrap",
          border: 0,
        }}
      >
        <div role="status" aria-live="polite" aria-atomic="true">
          {politeMessage}
        </div>
        <div role="alert" aria-live="assertive" aria-atomic="true">
          {assertiveMessage}
        </div>
      </div>
    </LiveAnnouncerContext.Provider>
  );
}

LiveAnnouncerProvider.displayName = "LiveAnnouncerProvider";

/**
 * Returns an `announce(message, politeness?)` function for triggering
 * screen reader announcements.
 *
 * Must be used within a `<LiveAnnouncerProvider>`.
 *
 * @example
 * ```tsx
 * const announce = useAnnounce();
 * announce("3 results found"); // polite (default)
 * announce("Error: invalid email", "assertive"); // interrupts
 * ```
 */
export function useAnnounce(): AnnounceFunction {
  const announce = useContext(LiveAnnouncerContext);
  if (!announce) {
    throw new Error("useAnnounce must be used within a <LiveAnnouncerProvider>");
  }
  return announce;
}
