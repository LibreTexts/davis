import clsx from "clsx";
import type { ReactNode } from "react";
import { DavisContext } from "../context/davis-context";

export type DavisProviderProps = {
  children: ReactNode;
  className?: string;
};

export function DavisProvider({ children, className }: DavisProviderProps) {
  return (
    <DavisContext.Provider value={{ standalone: true }}>
      <div className={clsx("davis", className)}>{children}</div>
    </DavisContext.Provider>
  );
}
