import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@libretexts/davis-react';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="max-w-2xl text-center space-y-6">
        <Image
          src="https://cdn.libretexts.net/Logos/libretexts_full.png"
          alt="LibreTexts Logo"
          width={292}
          height={80}
          className="mx-auto"
        />
        <h1 className="text-4xl font-bold tracking-tight">
          Davis Design System
        </h1>
        <p className="text-xl text-neutral-600">
          An accessible, opinionated design system for LibreTexts applications.
        </p>
        <div className="flex gap-4 justify-center pt-4">
          <Link
            href="/docs/getting-started/overview"
            className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors font-medium"
          >
            <Button variant='primary'>
              Get Started
            </Button>
          </Link>
          <Link
            href="/docs/design-tokens/colors"
            className="px-6 py-3 border border-neutral-300 rounded-lg hover:bg-neutral-100 transition-colors font-medium"
          >
            Design Tokens
          </Link>
        </div>
      </div>
    </div>
  );
}
