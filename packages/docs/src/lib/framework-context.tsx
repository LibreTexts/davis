'use client';

import React, { createContext, useContext, useEffect, useState, Suspense } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export type Framework = 'react' | 'vue' | 'all';

interface FrameworkContextType {
  framework: Framework;
  setFramework: (framework: Framework) => void;
}

const FrameworkContext = createContext<FrameworkContextType | undefined>(undefined);

const STORAGE_KEY = 'davis-docs-framework';
const DEFAULT_FRAMEWORK: Framework = 'react';

function SearchParamsSync({ 
  framework, 
  setFrameworkState 
}: { 
  framework: Framework;
  setFrameworkState: (framework: Framework) => void;
}) {
  const searchParams = useSearchParams();

  // Sync with URL changes (e.g., browser back/forward)
  useEffect(() => {
    const urlFramework = searchParams.get('framework') as Framework | null;
    if (urlFramework && ['react', 'vue', 'all'].includes(urlFramework) && urlFramework !== framework) {
      setFrameworkState(urlFramework);
      localStorage.setItem(STORAGE_KEY, urlFramework);
    }
  }, [searchParams, framework, setFrameworkState]);

  return null;
}

export function FrameworkProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  // Initialize framework from localStorage > default
  const [framework, setFrameworkState] = useState<Framework>(() => {
    if (typeof window === 'undefined') return DEFAULT_FRAMEWORK;

    // Check localStorage
    const stored = localStorage.getItem(STORAGE_KEY) as Framework | null;
    if (stored && ['react', 'vue', 'all'].includes(stored)) {
      return stored;
    }

    return DEFAULT_FRAMEWORK;
  });

  // Update URL and localStorage when framework changes
  const setFramework = (newFramework: Framework) => {
    setFrameworkState(newFramework);

    // Update localStorage
    localStorage.setItem(STORAGE_KEY, newFramework);

    // Update URL query parameter
    const params = new URLSearchParams(window.location.search);
    params.set('framework', newFramework);
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <FrameworkContext.Provider value={{ framework, setFramework }}>
      <Suspense fallback={null}>
        <SearchParamsSync framework={framework} setFrameworkState={setFrameworkState} />
      </Suspense>
      {children}
    </FrameworkContext.Provider>
  );
}

export function useFramework() {
  const context = useContext(FrameworkContext);
  if (context === undefined) {
    throw new Error('useFramework must be used within a FrameworkProvider');
  }
  return context.framework;
}

export function useSetFramework() {
  const context = useContext(FrameworkContext);
  if (context === undefined) {
    throw new Error('useSetFramework must be used within a FrameworkProvider');
  }
  return context.setFramework;
}
