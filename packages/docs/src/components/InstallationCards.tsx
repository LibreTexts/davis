'use client';

import React from 'react';
import Link from 'next/link';

interface InstallationCard {
  id: string;
  label: string;
  description: string;
  href: string;
  icon: string;
}

const installationCards: InstallationCard[] = [
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
    id: 'tokens-only',
    label: 'Tokens Only',
    description: 'Design tokens without components',
    href: '/docs/getting-started/installation/tokens-only',
    icon: '🎨',
  },
];

export function InstallationCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 not-prose my-8">
      {installationCards.map((card) => (
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
