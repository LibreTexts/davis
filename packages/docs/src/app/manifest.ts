import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Davis Design System',
    short_name: 'Davis',
    description:
      'An accessible, opinionated design system for LibreTexts applications.',
    start_url: '/',
    display: 'browser',
    background_color: '#ffffff',
    theme_color: '#ffffff',
    icons: [
      {
        src: 'https://cdn.libretexts.net/Icons/libretexts.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
