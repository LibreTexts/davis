'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navigation } from '@/lib/navigation';
import clsx from 'clsx';

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="space-y-6">
      {navigation.map((group) => (
        <div key={group.title}>
          <h3 className="text-sm font-semibold text-neutral-900 mb-2">
            {group.title}
          </h3>
          <ul className="space-y-1">
            {group.links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={clsx(
                      'block px-3 py-2 rounded-lg text-sm transition-colors',
                      isActive
                        ? 'bg-blue-50 text-blue-700 font-medium'
                        : 'text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900'
                    )}
                  >
                    {link.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );
}
