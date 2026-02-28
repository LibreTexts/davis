import { FONT_SIZE } from "@libretexts/davis-core";

export function TypeScale() {
  const entries = Object.entries(FONT_SIZE) as [
    string,
    readonly [string, { readonly lineHeight: string }],
  ][];

  return (
    <div className="space-y-6 not-prose">
      {entries.map(([token, [size, { lineHeight }]]) => {
        const pxApprox = (parseFloat(size) * 16).toFixed(1);
        return (
          <div key={token} className="border-b border-neutral-200 border-neutral-200 pb-4 last:border-0">
            <div className="flex items-baseline gap-4 mb-1">
              <code className="text-sm font-mono bg-neutral-100 bg-neutral-100 px-2 py-0.5 rounded">
                text-{token}
              </code>
              <span className="text-sm text-neutral-500 text-neutral-500">
                {size} ({pxApprox}px) / line-height: {lineHeight}
              </span>
            </div>
            <p
              style={{ fontSize: size, lineHeight }}
              className="text-neutral-900 text-neutral-900"
            >
              The quick brown fox jumps over the lazy dog
            </p>
          </div>
        );
      })}
    </div>
  );
}

export function HeadingHierarchy() {
  const headings = [
    { tag: "h1", size: "4xl (3.052rem)", weight: 700 },
    { tag: "h2", size: "3xl (2.441rem)", weight: 700 },
    { tag: "h3", size: "2xl (1.953rem)", weight: 600 },
    { tag: "h4", size: "xl (1.563rem)", weight: 600 },
    { tag: "h5", size: "lg (1.250rem)", weight: 600 },
    { tag: "h6", size: "lg (1.250rem)", weight: 600 },
  ] as const;

  return (
    <div className="space-y-4 not-prose">
      {headings.map(({ tag, size, weight }) => {
        const Tag = tag;
        return (
          <div key={tag} className="flex items-baseline gap-4">
            <code className="text-sm font-mono bg-neutral-100 bg-neutral-100 px-2 py-0.5 rounded shrink-0 w-10">
              {tag}
            </code>
            <Tag className="!m-0 text-neutral-900 text-neutral-900">Example heading</Tag>
            <span className="text-sm text-neutral-500 text-neutral-500 shrink-0">
              {size} / weight {weight}
            </span>
          </div>
        );
      })}
    </div>
  );
}
