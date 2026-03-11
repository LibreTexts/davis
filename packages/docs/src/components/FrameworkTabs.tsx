'use client';

import React from 'react';
import { useFramework, type Framework } from '@/lib/framework-context';

interface TabProps {
  framework: Framework;
  children: React.ReactNode;
}

export function Tab({ framework, children }: TabProps) {
  const currentFramework = useFramework();

  // Show tab if it matches current framework or if "all" is selected
  const isVisible = currentFramework === 'all' || currentFramework === framework;

  if (!isVisible) {
    return null;
  }

  return (
    <div
      role="tabpanel"
      aria-labelledby={`${framework}-tab`}
      className="framework-tab"
      data-framework={framework}
    >
      {children}
    </div>
  );
}

interface FrameworkTabsProps {
  children: React.ReactNode;
}

export function FrameworkTabs({ children }: FrameworkTabsProps) {
  const framework = useFramework();

  return (
    <div className="framework-tabs my-6" data-current-framework={framework}>
      {children}
    </div>
  );
}
