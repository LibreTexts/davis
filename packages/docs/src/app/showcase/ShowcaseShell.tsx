'use client'

import { SkipLink, DavisProvider } from '@libretexts/davis-react'
import { DocsHeader } from '@/components/DocsHeader'

/**
 * Client Component shell for the showcase layout.
 *
 * All imports from @libretexts/davis-react must live here (or in other Client
 * Components), not in layout.tsx. The davis-react package entrypoint has no
 * top-level "use client" directive, and some component files (e.g. breadcrumb)
 * use createContext without it — which Next.js App Router rejects when the
 * importing module is a Server Component.
 */
export function ShowcaseShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/*
        SkipLink MUST be the very first focusable element — before the site
        header — so keyboard users reach it on the first Tab press.
        Its default targetId is "main-content", matching the <main> below.
      */}
      <SkipLink />
      <DocsHeader title="Showcase" />
      <DavisProvider>
        <main
          id="main-content"
          className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
        >
          {children}
        </main>
      </DavisProvider>
    </>
  )
}
