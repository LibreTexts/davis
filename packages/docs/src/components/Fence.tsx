'use client'

import { Highlight } from 'prism-react-renderer'

export function Fence({
    children,
    language,
}: {
    children: string
    language: string
}) {
    if (!language) {
        return null
    }

    return (
        <Highlight
            code={children.trimEnd()}
            language={language}
            theme={{ plain: {}, styles: [] }}
        >
            {({ className, style, tokens, getTokenProps }) => (
                <pre className={className} style={style}>
                    <code>
                        {tokens.map((line, lineIndex) => (
                            <>
                                {line
                                    .filter((token) => !token.empty)
                                    .map((token, tokenIndex) => (
                                        <span key={tokenIndex} {...getTokenProps({ token })} />
                                    ))}
                                {'\n'}
                            </>
                        ))}
                    </code>
                </pre>
            )}
        </Highlight>
    )
}
