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
      { title: 'Fonts', href: '/docs/getting-started/fonts' },
      { title: 'License', href: '/docs/getting-started/license' },
    ],
  },
  {
    title: 'Foundation',
    links: [
      { title: 'Architecture', href: '/docs/foundation/architecture' },
      { title: 'Colors', href: '/docs/foundation/colors' },
      { title: 'Typography', href: '/docs/foundation/typography' },
      { title: 'Spacing', href: '/docs/foundation/spacing' },
      { title: 'Layout', href: '/docs/foundation/layout' },
    ],
  },
  {
    title: 'Components',
    links: [
      { title: 'Alert', href: '/docs/components/alert' },
      { title: 'Avatar', href: '/docs/components/avatar' },
      { title: 'Badge', href: '/docs/components/badge' },
      { title: 'Button', href: '/docs/components/button' },
      { title: 'Card', href: '/docs/components/card' },
      { title: 'Checkbox', href: '/docs/components/checkbox' },
      { title: 'Dialog', href: '/docs/components/dialog' },
      { title: 'Empty State', href: '/docs/components/empty-state' },
      { title: 'Icon Button', href: '/docs/components/icon-button' },
      { title: 'Input', href: '/docs/components/input' },
      { title: 'Link', href: '/docs/components/link' },
      { title: 'Menu', href: '/docs/components/menu' },
      { title: 'Notification', href: '/docs/components/notification' },
      { title: 'Radio Group', href: '/docs/components/radio-group' },
      { title: 'Select', href: '/docs/components/select' },
      { title: 'Spinner', href: '/docs/components/spinner' },
      { title: 'Switch', href: '/docs/components/switch' },
      { title: 'Textarea', href: '/docs/components/textarea' },
      { title: 'Tooltip', href: '/docs/components/tooltip' },
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
