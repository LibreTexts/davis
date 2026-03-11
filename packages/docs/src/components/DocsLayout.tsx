import { type Node } from '@markdoc/markdoc';

import { Navigation } from './Navigation';
import { TableOfContents } from './TableOfContents';
import { Prose } from './Prose';
import { collectSections } from '@/lib/sections';

interface DocsLayoutProps {
  children: React.ReactNode;
  nodes: Array<Node>;
}

export function DocsLayout({ children, nodes }: DocsLayoutProps) {
  const tableOfContents = collectSections(nodes || []);

  return (
    <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
      <div className="flex gap-8 py-8">
        {/* Left sidebar - Navigation */}
        <aside className="hidden lg:block w-64 shrink-0">
          <div className="sticky top-24">
            <Navigation />
          </div>
        </aside>

        {/* Main content area */}
        <main className="min-w-0 flex-1 max-w-3xl">
          <article>
            <Prose>{children}</Prose>
          </article>
        </main>

        {/* Right sidebar - Table of Contents */}
        <aside className="hidden xl:block w-64 shrink-0">
          <div className="sticky top-24">
            <TableOfContents tableOfContents={tableOfContents} />
          </div>
        </aside>
      </div>
    </div>
  );
}
