import type { Metadata } from 'next';
import '@/styles/global.css';

const SITE_NAME = 'Davis Design System';
const SITE_DESCRIPTION =
  'An accessible, opinionated design system for LibreTexts applications.';
const OG_IMAGE = 'https://cdn.libretexts.net/Logos/libretexts_full.png';

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? 'https://davis.libretexts.org',
  ),
  title: {
    default: `${SITE_NAME} | LibreTexts`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: 'LibreTexts', url: 'https://libretexts.org' }],
  keywords: [
    'design system',
    'component library',
    'React',
    'accessibility',
    'LibreTexts',
    'Davis',
    'UI components',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: SITE_NAME,
    title: `${SITE_NAME} | LibreTexts`,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: OG_IMAGE,
        alt: 'LibreTexts Logo',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: `${SITE_NAME} | LibreTexts`,
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE],
  },
  icons: {
    icon: 'https://cdn.libretexts.net/Icons/libretexts.png',
    apple: 'https://cdn.libretexts.net/Icons/libretexts.png',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
