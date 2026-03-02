"use client";

import { createContext, useContext } from "react";

export type DavisContextType = {
  standalone: boolean;
};

export const DavisContext = createContext<DavisContextType>({
  standalone: false,
});

export function useDavisContext(): DavisContextType {
  return useContext(DavisContext);
}
