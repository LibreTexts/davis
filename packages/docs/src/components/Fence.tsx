'use client'

import { Fragment } from 'react'
import { Highlight, themes, type PrismTheme } from 'prism-react-renderer'
import { normalizeLanguage } from '@/lib/prism'
import { Prism } from '@/lib/prism-languages'

export function Fence({
    children,
    language,
}: {
    children: string
    language: string
}) {
    const customTheme: PrismTheme = {
        plain: {
            color: '#d4d4d4',
            backgroundColor: '#1e1e1e',
        },
        styles: [
            {
                types: ['comment', 'prolog', 'doctype', 'cdata'],
                style: {
                    color: '#6a9955',
                    fontStyle: 'italic',
                },
            },
            {
                types: ['namespace'],
                style: {
                    opacity: 0.7,
                },
            },
            {
                types: ['string', 'attr-value'],
                style: {
                    color: '#ce9178',
                },
            },
            {
                types: ['punctuation', 'operator'],
                style: {
                    color: '#d4d4d4',
                },
            },
            {
                types: ['entity', 'url', 'symbol', 'number', 'boolean', 'variable', 'constant', 'property', 'regex', 'inserted'],
                style: {
                    color: '#b5cea8',
                },
            },
            {
                types: ['atrule', 'keyword', 'attr-name', 'selector'],
                style: {
                    color: '#c586c0',
                },
            },
            {
                types: ['function', 'deleted', 'tag'],
                style: {
                    color: '#569cd6',
                },
            },
            {
                types: ['function-variable'],
                style: {
                    color: '#dcdcaa',
                },
            },
            {
                types: ['tag', 'selector', 'keyword'],
                style: {
                    color: '#569cd6',
                },
            },
        ],
    }

    return (
        <div className="not-prose my-6">
            <Highlight
                code={children.trimEnd()}
                language={normalizeLanguage(language)}
                theme={customTheme}
                prism={Prism}
            >
                {({ tokens, getLineProps, getTokenProps }) => (
                    <pre
                        style={{
                            backgroundColor: '#1e1e1e',
                            color: '#d4d4d4',
                            padding: '1rem',
                            borderRadius: '0.5rem',
                            overflowX: 'auto',
                            fontSize: '0.875rem',
                            lineHeight: '1.7',
                        }}
                    >
                        <code>
                            {tokens.map((line, i) => (
                                <div key={i} {...getLineProps({ line })}>
                                    {line.map((token, key) => (
                                        <span key={key} {...getTokenProps({ token })} />
                                    ))}
                                </div>
                            ))}
                        </code>
                    </pre>
                )}
            </Highlight>
        </div>
    )
}
