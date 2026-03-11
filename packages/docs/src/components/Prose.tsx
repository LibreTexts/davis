import clsx from 'clsx'

export function Prose<T extends React.ElementType = 'div'>({
  as,
  className,
  ...props
}: React.ComponentPropsWithoutRef<T> & {
  as?: T
}) {
  let Component = as ?? 'div'

  return (
    <Component
      className={clsx(
        className,
        'prose max-w-none',
        // Base text styles
        'prose-p:text-text prose-p:leading-relaxed',
        // Headings
        'prose-headings:scroll-mt-28 prose-headings:font-sans prose-headings:font-bold prose-headings:text-text lg:prose-headings:scroll-mt-24',
        'prose-h1:text-4xl prose-h1:mb-6 prose-h1:mt-0',
        'prose-h2:text-3xl prose-h2:mb-4 prose-h2:mt-12 prose-h2:border-b prose-h2:border-neutral-200 prose-h2:pb-2',
        'prose-h3:text-2xl prose-h3:mb-3 prose-h3:mt-8',
        'prose-h4:text-xl prose-h4:mb-2 prose-h4:mt-6',
        // Lead paragraph
        'prose-lead:text-lg prose-lead:text-text-neutral prose-lead:leading-relaxed',
        // Links
        'prose-a:font-medium prose-a:text-primary-600 prose-a:no-underline prose-a:transition-colors hover:prose-a:text-primary-700',
        // Strong and emphasis
        'prose-strong:font-bold prose-strong:text-text',
        'prose-em:text-text',
        // Lists
        'prose-ul:my-6 prose-ol:my-6',
        'prose-li:text-text prose-li:my-2',
        // Blockquotes
        'prose-blockquote:border-l-4 prose-blockquote:border-primary-500 prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-text-neutral',
        // Tables
        'prose-table:border-collapse prose-table:w-full',
        'prose-th:border prose-th:border-neutral-200 prose-th:bg-neutral-50 prose-th:px-4 prose-th:py-2 prose-th:text-left prose-th:font-semibold prose-th:text-text',
        'prose-td:border prose-td:border-neutral-200 prose-td:px-4 prose-td:py-2 prose-td:text-text',
        // Code blocks
        'prose-pre:rounded-lg prose-pre:bg-neutral-900 prose-pre:shadow-md prose-pre:overflow-x-auto',
        // Horizontal rules
        'prose-hr:border-neutral-200 prose-hr:my-8',
        // Images
        'prose-img:rounded-lg prose-img:shadow-md',
      )}
      {...props}
    />
  )
}
