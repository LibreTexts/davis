'use client'

export function InlineCode({ children }: { children: React.ReactNode }) {
    return (
        <code
            className="not-prose"
            style={{
                backgroundColor: '#1e1e1e',
                color: '#d4d4d4',
                padding: '0.2rem 0.4rem',
                borderRadius: '0.25rem',
                fontSize: '0.875em',
                fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
            }}
        >
            {children}
        </code>
    )
}
