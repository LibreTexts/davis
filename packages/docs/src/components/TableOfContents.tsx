'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import clsx from 'clsx';

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

export function TableOfContents() {
  const [headings, setHeadings] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    // Extract headings from the document
    const headingElements = Array.from(
      document.querySelectorAll('article h2, article h3')
    );

    const items: TOCItem[] = headingElements.map((heading) => ({
      id: heading.id,
      text: heading.textContent || '',
      level: parseInt(heading.tagName.charAt(1)),
    }));

    setHeadings(items);

    // Set up intersection observer for active heading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-100px 0px -80% 0px' }
    );

    headingElements.forEach((heading) => {
      observer.observe(heading);
    });

    return () => {
      headingElements.forEach((heading) => {
        observer.unobserve(heading);
      });
    };
  }, []);

  if (headings.length === 0) {
    return null;
  }

  return (
    <nav className="space-y-1">
      {headings.map((heading) => (
        <Link
          key={heading.id}
          href={`#${heading.id}`}
          className={clsx(
            'block py-1 text-sm transition-colors',
            heading.level === 3 && 'pl-4',
            activeId === heading.id
              ? 'text-blue-600 font-medium'
              : 'text-neutral-600 hover:text-neutral-900'
          )}
        >
          {heading.text}
        </Link>
      ))}
    </nav>
  );
}
