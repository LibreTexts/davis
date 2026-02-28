import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL ?? 'https://davis.libretexts.org';

  const routes = [
    '',
    '/docs/getting-started/overview',
    '/docs/getting-started/installation',
    '/docs/getting-started/license',
    '/docs/design-tokens/colors',
    '/docs/design-tokens/typography',
    '/docs/design-tokens/spacing',
    '/docs/design-tokens/layout',
    '/docs/guides/existing-projects',
    '/docs/guides/accessibility',
    '/docs/guides/patterns',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1.0 : 0.8,
  }));
}
