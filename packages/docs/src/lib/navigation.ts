export interface NavLink {
  title: string;
  href: string;
}

export interface NavGroup {
  title: string;
  links: NavLink[];
}

export const navigation: NavGroup[] = [
  {
    title: 'Getting Started',
    links: [
      { title: 'Overview', href: '/docs/getting-started/overview' },
      { title: 'Installation', href: '/docs/getting-started/installation' },
      { title: 'License', href: '/docs/getting-started/license' },
    ],
  },
  {
    title: 'Design Tokens',
    links: [
      { title: 'Colors', href: '/docs/design-tokens/colors' },
      { title: 'Typography', href: '/docs/design-tokens/typography' },
      { title: 'Spacing', href: '/docs/design-tokens/spacing' },
      { title: 'Layout', href: '/docs/design-tokens/layout' },
    ],
  },
  {
    title: 'Guides',
    links: [
      { title: 'Existing Projects', href: '/docs/guides/existing-projects' },
      { title: 'Accessibility', href: '/docs/guides/accessibility' },
      { title: 'Component Patterns', href: '/docs/guides/patterns' },
    ],
  },
];
