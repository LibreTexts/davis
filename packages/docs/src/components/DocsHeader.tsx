'use client'

import { usePathname } from "next/navigation"
import { navigation } from "@/lib/navigation"
import Link from "next/link"
import Image from "next/image"

export function DocsHeader({ title }: { title?: string }) {
    let pathname = usePathname()

    // Check if pathname matches or is nested under any navigation link
    let section = navigation.find((section) =>
        section.links.find((link) =>
            link.href === pathname || pathname.startsWith(link.href + '/')
        ),
    )

    if (!title && !section) {
        return null
    }

    return (
        <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white">
            <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center gap-8">
                        <Link href="/" className="flex items-center gap-2">
                            <Image
                                src="https://cdn.libretexts.net/Icons/libretexts.png"
                                alt="LibreTexts Icon"
                                width={800}
                                height={800}
                                className='size-14'
                            />
                            <span className="text-xl font-bold">Davis Design System</span>
                        </Link>
                        <nav className="hidden md:flex items-center gap-6">
                            <Link
                                href="/docs/getting-started/overview"
                                className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors"
                            >
                                Documentation
                            </Link>
                            <Link
                                href="/showcase"
                                className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors"
                            >
                                Showcase
                            </Link>
                            <a
                                href="https://github.com/LibreTexts/davis"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors"
                            >
                                GitHub
                            </a>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}