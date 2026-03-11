"use client";

import {
  TabGroup,
  TabList,
  Tab as HeadlessTab,
  TabPanels,
  TabPanel as HeadlessTabPanel,
} from "@headlessui/react";
import clsx from "clsx";
import { type ReactNode, createContext, useContext } from "react";
import { tabs as tabsVariants } from "@libretexts/davis-core";

export type TabsVariant = "line" | "pills";
export type TabsSize = "sm" | "md" | "lg";
export type TabsColor = "white" | "primary";

type TabsContextValue = {
  variant: TabsVariant;
  size: TabsSize;
  color: TabsColor;
};

const TabsContext = createContext<TabsContextValue>({
  variant: "line",
  size: "md",
  color: "white",
});

function useTabsContext() {
  return useContext(TabsContext);
}

export type TabsProps = {
  children: ReactNode;
  className?: string;
  variant?: TabsVariant;
  size?: TabsSize;
  /** Selected tab color for the pills variant. Ignored on line variant. */
  color?: TabsColor;
  defaultIndex?: number;
  selectedIndex?: number;
  onChange?: (index: number) => void;
};

export function Tabs({
  children,
  className,
  variant = "line",
  size = "md",
  color = "white",
  defaultIndex,
  selectedIndex,
  onChange,
}: TabsProps) {
  return (
    <TabsContext.Provider value={{ variant, size, color }}>
      <TabGroup
        as="div"
        {...(defaultIndex !== undefined ? { defaultIndex } : {})}
        {...(selectedIndex !== undefined ? { selectedIndex } : {})}
        {...(onChange !== undefined ? { onChange } : {})}
        className={clsx("w-full", className)}
      >
        {children}
      </TabGroup>
    </TabsContext.Provider>
  );
}

Tabs.displayName = "Tabs";

export type TabsListProps = {
  children: ReactNode;
  className?: string;
};

function TabsList({ children, className }: TabsListProps) {
  const { variant, size, color } = useTabsContext();
  const { list } = tabsVariants({ variant, size, color });
  return (
    <TabList className={clsx(list(), className)}>
      {children}
    </TabList>
  );
}

TabsList.displayName = "Tabs.List";

export type TabProps = {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
};

function TabItem({ children, className, disabled }: TabProps) {
  const { variant, size, color } = useTabsContext();
  const { tab } = tabsVariants({ variant, size, color });
  return (
    <HeadlessTab
      {...(disabled !== undefined ? { disabled } : {})}
      className={clsx(tab(), className)}
    >
      {children}
    </HeadlessTab>
  );
}

TabItem.displayName = "Tabs.Tab";

export type TabsPanelsProps = {
  children: ReactNode;
  className?: string;
};

function TabsPanelsContainer({ children, className }: TabsPanelsProps) {
  const { variant, size, color } = useTabsContext();
  const { panels } = tabsVariants({ variant, size, color });
  return (
    <TabPanels className={clsx(panels(), className)}>
      {children}
    </TabPanels>
  );
}

TabsPanelsContainer.displayName = "Tabs.Panels";

export type TabPanelProps = {
  children: ReactNode;
  className?: string;
};

function TabPanelItem({ children, className }: TabPanelProps) {
  const { variant, size, color } = useTabsContext();
  const { panel } = tabsVariants({ variant, size, color });
  return (
    <HeadlessTabPanel className={clsx(panel(), className)}>
      {children}
    </HeadlessTabPanel>
  );
}

TabPanelItem.displayName = "Tabs.Panel";

Tabs.List = TabsList;
Tabs.Tab = TabItem;
Tabs.Panels = TabsPanelsContainer;
Tabs.Panel = TabPanelItem;
