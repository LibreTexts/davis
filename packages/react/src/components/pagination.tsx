import clsx from "clsx";
import { pagination as paginationVariants } from "@libretexts/davis-core";

export type PaginationSize = "sm" | "md" | "lg";

export type PaginationProps = {
  page: number;
  totalPages: number;
  onChange: (page: number) => void;
  siblings?: number;
  size?: PaginationSize;
  className?: string;
};

function getPageNumbers(page: number, totalPages: number, siblings: number): (number | "ellipsis")[] {
  const delta = siblings;
  const range: number[] = [];

  for (let i = Math.max(2, page - delta); i <= Math.min(totalPages - 1, page + delta); i++) {
    range.push(i);
  }

  if (page - delta > 2) range.unshift(-1); // left ellipsis sentinel
  if (page + delta < totalPages - 1) range.push(-2); // right ellipsis sentinel

  const pages: (number | "ellipsis")[] = [1];
  for (const r of range) {
    if (r < 0) pages.push("ellipsis");
    else pages.push(r);
  }
  if (totalPages > 1) pages.push(totalPages);

  return pages;
}

export function Pagination({ page, totalPages, onChange, siblings = 1, size = "md", className }: PaginationProps) {
  const { root, list, button, current, ellipsis } = paginationVariants({ size });

  if (totalPages <= 1) return null;

  const pages = getPageNumbers(page, totalPages, siblings);

  return (
    <nav aria-label="Pagination" className={clsx(root(), className)}>
      <ul className={list()}>
        {/* Previous */}
        <li>
          <button
            type="button"
            onClick={() => onChange(page - 1)}
            disabled={page <= 1}
            aria-label="Go to previous page"
            className={button()}
          >
            <ChevronLeftIcon />
          </button>
        </li>

        {/* Page numbers */}
        {pages.map((p, i) =>
          p === "ellipsis" ? (
            <li key={`ellipsis-${i}`}>
              <span className={ellipsis()} aria-hidden="true">…</span>
            </li>
          ) : (
            <li key={p}>
              <button
                type="button"
                onClick={() => onChange(p as number)}
                aria-label={`Go to page ${p}`}
                aria-current={p === page ? "page" : undefined}
                className={clsx(button(), p === page && current())}
              >
                {p}
              </button>
            </li>
          )
        )}

        {/* Next */}
        <li>
          <button
            type="button"
            onClick={() => onChange(page + 1)}
            disabled={page >= totalPages}
            aria-label="Go to next page"
            className={button()}
          >
            <ChevronRightIcon />
          </button>
        </li>
      </ul>
    </nav>
  );
}

Pagination.displayName = "Pagination";

function ChevronLeftIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-4" aria-hidden="true">
      <path fillRule="evenodd" d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-4" aria-hidden="true">
      <path fillRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
    </svg>
  );
}
