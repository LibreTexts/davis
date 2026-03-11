'use client';

import React from 'react';
import Link from 'next/link';
import { useFramework, useSetFramework, type Framework } from '@/lib/framework-context';

interface FrameworkOption {
  id: Framework;
  label: string;
  description?: string;
  href?: string;
}

const frameworkOptions: FrameworkOption[] = [
  { id: 'react', label: 'React' },
  { id: 'vue', label: 'Vue' },
  { id: 'all', label: 'All' },
];

export function FrameworkSelector({ variant = 'pill' }: { variant?: 'pill' | 'card' }) {
  const framework = useFramework();
  const setFramework = useSetFramework();

  if (variant === 'card') {
    return <FrameworkCards />;
  }

  return (
    <div
      role="tablist"
      aria-label="Select framework"
      className="inline-flex rounded-lg border border-neutral-200 bg-white p-1 gap-1"
    >
      {frameworkOptions.map((option) => (
        <button
          key={option.id}
          role="tab"
          aria-selected={framework === option.id}
          aria-label={`Switch to ${option.label}`}
          onClick={() => setFramework(option.id)}
          className={`
            px-4 py-2 text-sm font-medium rounded-md transition-colors
            focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-1
            ${
              framework === option.id
                ? 'bg-primary-500 text-white'
                : 'text-neutral-700 hover:text-neutral-900 hover:bg-neutral-50'
            }
          `}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

function FrameworkCards() {
  const cards: Array<FrameworkOption & { description: string; href: string; icon: string }> = [
    {
      id: 'react',
      label: 'React',
      description: 'Build with React 18+',
      href: '/docs/getting-started/installation/react',
      icon: '⚛️',
    },
    {
      id: 'vue',
      label: 'Vue',
      description: 'Build with Vue 3+',
      href: '/docs/getting-started/installation/vue',
      icon: '💚',
    },
    {
      id: 'all',
      label: 'Tokens Only',
      description: 'Design tokens without components',
      href: '/docs/getting-started/installation/tokens-only',
      icon: '🎨',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 not-prose">
      {cards.map((card) => (
        <Link
          key={card.id}
          href={card.href}
          className="group relative flex flex-col p-6 rounded-lg border-2 border-neutral-200 bg-white hover:border-primary-500 hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
        >
          <div className="text-4xl mb-4">{card.icon}</div>
          <h3 className="text-xl font-semibold text-neutral-900 mb-2">{card.label}</h3>
          <p className="text-neutral-600 mb-4 flex-grow">{card.description}</p>
          <div className="flex items-center text-primary-500 font-medium group-hover:translate-x-1 transition-transform">
            Get started
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </Link>
      ))}
    </div>
  );
}
