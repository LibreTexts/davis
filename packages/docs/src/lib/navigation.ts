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
    title: 'Layout',
    links: [
      { title: 'Stack', href: '/docs/components/stack' },
      { title: 'Grid', href: '/docs/components/grid' },
      { title: 'Container', href: '/docs/components/container' },
      { title: 'Divider', href: '/docs/components/divider' },
    ],
  },
  {
    title: 'Typography',
    links: [
      { title: 'Heading', href: '/docs/components/heading' },
      { title: 'Text', href: '/docs/components/text' },
    ],
  },
  {
    title: 'Forms',
    links: [
      { title: 'Checkbox', href: '/docs/components/checkbox' },
      { title: 'Combobox', href: '/docs/components/combobox' },
      { title: 'Form Section', href: '/docs/components/form-section' },
      { title: 'Input', href: '/docs/components/input' },
      { title: 'Input Group', href: '/docs/components/input-group' },
      { title: 'Number Input', href: '/docs/components/number-input' },
      { title: 'Radio Group', href: '/docs/components/radio-group' },
      { title: 'Select', href: '/docs/components/select' },
      { title: 'Switch', href: '/docs/components/switch' },
      { title: 'Textarea', href: '/docs/components/textarea' },
    ],
  },
  {
    title: 'Navigation',
    links: [
      { title: 'Breadcrumb', href: '/docs/components/breadcrumb' },
      { title: 'Menu', href: '/docs/components/menu' },
      { title: 'Pagination', href: '/docs/components/pagination' },
      { title: 'Stepper', href: '/docs/components/stepper' },
      { title: 'Tabs', href: '/docs/components/tabs' },
    ],
  },
  {
    title: 'Feedback',
    links: [
      { title: 'Alert', href: '/docs/components/alert' },
      { title: 'Empty State', href: '/docs/components/empty-state' },
      { title: 'Notification', href: '/docs/components/notification' },
      { title: 'Progress', href: '/docs/components/progress' },
      { title: 'Skeleton', href: '/docs/components/skeleton' },
      { title: 'Spinner', href: '/docs/components/spinner' },
    ],
  },
  {
    title: 'Overlays',
    links: [
      { title: 'Dialog', href: '/docs/components/dialog' },
      { title: 'Drawer', href: '/docs/components/drawer' },
      { title: 'Popover', href: '/docs/components/popover' },
    ],
  },
  {
    title: 'Display',
    links: [
      { title: 'Accordion', href: '/docs/components/accordion' },
      { title: 'Avatar', href: '/docs/components/avatar' },
      { title: 'Badge', href: '/docs/components/badge' },
      { title: 'Button', href: '/docs/components/button' },
      { title: 'Card', href: '/docs/components/card' },
      { title: 'Icon Button', href: '/docs/components/icon-button' },
      { title: 'Link', href: '/docs/components/link' },
      { title: 'Table', href: '/docs/components/table' },
      { title: 'Tooltip', href: '/docs/components/tooltip' },
    ],
  },
  {
    title: 'Accessibility',
    links: [
      { title: 'Live Announcer', href: '/docs/components/live-announcer' },
      { title: 'Skip Link', href: '/docs/components/skip-link' },
      { title: 'Visually Hidden', href: '/docs/components/visually-hidden' },
    ],
  },
  {
    title: 'Guides',
    links: [
      { title: 'Existing Projects', href: '/docs/guides/existing-projects' },
      { title: 'Accessibility', href: '/docs/guides/accessibility' },
      { title: 'Component Patterns', href: '/docs/guides/patterns' },
      { title: 'React Hook Form', href: '/docs/guides/react-hook-form' },
    ],
  },
  {
    title: 'Templates',
    links: [
      { title: 'Dashboard', href: '/docs/templates/dashboard' },
      { title: 'List Page', href: '/docs/templates/list' },
      { title: 'Form Page', href: '/docs/templates/form' },
      { title: 'Detail Page', href: '/docs/templates/detail' },
    ],
  },
];
