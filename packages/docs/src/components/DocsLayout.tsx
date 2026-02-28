import Link from 'next/link';
import { Navigation } from './Navigation';
import { TableOfContents } from './TableOfContents';
import Image from 'next/image';

interface DocsLayoutProps {
  children: React.ReactNode;
}

export function DocsLayout({ children }: DocsLayoutProps) {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src="https://cdn.libretexts.net/Icons/libretexts.png"
                  alt="LibreTexts Icon"
                  width={800}
                  height={800}
                  className='size-14'
                />
                <span className="text-xl font-bold">Davis Design System</span>
              </Link>
              <nav className="hidden md:flex items-center gap-6">
                <Link
                  href="/docs/getting-started/overview"
                  className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors"
                >
                  Documentation
                </Link>
                <a
                  href="https://github.com/LibreTexts/davis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors"
                >
                  GitHub
                </a>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-8 py-8">
          {/* Sidebar */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24">
              <Navigation />
            </div>
          </aside>

          {/* Content */}
          <main className="flex-1 min-w-0">
            <article className="prose prose-neutral max-w-none">
              {children}
            </article>
          </main>

          {/* Table of Contents */}
          <aside className="hidden xl:block w-64 flex-shrink-0">
            <div className="sticky top-24">
              <h3 className="text-sm font-semibold text-neutral-900 mb-2">
                On this page
              </h3>
              <TableOfContents />
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
