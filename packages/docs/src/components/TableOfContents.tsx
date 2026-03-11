'use client'

import { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import clsx from 'clsx'

import { type Section, type Subsection } from '@/lib/sections'

export function TableOfContents({
  tableOfContents,
}: {
  tableOfContents: Array<Section>
}) {
  let [currentSection, setCurrentSection] = useState(tableOfContents[0]?.id)

  let getHeadings = useCallback((tableOfContents: Array<Section>) => {
    return tableOfContents
      .flatMap((node) => [node.id, ...node.children.map((child) => child.id)])
      .map((id) => {
        let el = document.getElementById(id)
        if (!el) return null

        let style = window.getComputedStyle(el)
        let scrollMt = parseFloat(style.scrollMarginTop)

        let top = window.scrollY + el.getBoundingClientRect().top - scrollMt
        return { id, top }
      })
      .filter((x): x is { id: string; top: number } => x !== null)
  }, [])

  useEffect(() => {
    if (tableOfContents.length === 0) return
    let headings = getHeadings(tableOfContents)
    function onScroll() {
      let top = window.scrollY
      let current = headings[0].id
      for (let heading of headings) {
        if (top >= heading.top - 10) {
          current = heading.id
        } else {
          break
        }
      }
      setCurrentSection(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [getHeadings, tableOfContents])

  function isActive(section: Section | Subsection) {
    if (section.id === currentSection) {
      return true
    }
    if (!section.children) {
      return false
    }
    return section.children.findIndex(isActive) > -1
  }

  return (
    <nav aria-labelledby="on-this-page-title" className="space-y-4">
      {tableOfContents.length > 0 && (
        <>
          <h2
            id="on-this-page-title"
            className="text-sm font-semibold text-text"
          >
            On this page
          </h2>
          <ol role="list" className="space-y-2 text-sm border-l-2 border-neutral-200 pl-4">
            {tableOfContents.map((section) => (
              <li key={section.id}>
                <Link
                  href={`#${section.id}`}
                  className={clsx(
                    'block transition-colors',
                    isActive(section)
                      ? 'text-primary-600 font-medium'
                      : 'text-text-neutral hover:text-text',
                  )}
                >
                  {section.title}
                </Link>
                {section.children.length > 0 && (
                  <ol
                    role="list"
                    className="mt-2 space-y-2 pl-3"
                  >
                    {section.children.map((subSection) => (
                      <li key={subSection.id}>
                        <Link
                          href={`#${subSection.id}`}
                          className={clsx(
                            'block text-sm transition-colors',
                            isActive(subSection)
                              ? 'text-primary-600 font-medium'
                              : 'text-text-neutral hover:text-text',
                          )}
                        >
                          {subSection.title}
                        </Link>
                      </li>
                    ))}
                  </ol>
                )}
              </li>
            ))}
          </ol>
        </>
      )}
    </nav>
  )
}
