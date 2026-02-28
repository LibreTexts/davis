import { SPACING_GUIDE } from "@libretexts/davis-core";

type SpacingEntry = {
  tailwind: string;
  rem: string;
  px: number;
};

export function SpacingScale() {
  const displaySteps = [
    { label: "0.5", rem: "0.125rem", px: 2 },
    { label: "1", rem: "0.25rem", px: 4 },
    { label: "1.5", rem: "0.375rem", px: 6 },
    { label: "2", rem: "0.5rem", px: 8 },
    { label: "3", rem: "0.75rem", px: 12 },
    { label: "4", rem: "1rem", px: 16 },
    { label: "5", rem: "1.25rem", px: 20 },
    { label: "6", rem: "1.5rem", px: 24 },
    { label: "8", rem: "2rem", px: 32 },
    { label: "10", rem: "2.5rem", px: 40 },
    { label: "12", rem: "3rem", px: 48 },
    { label: "16", rem: "4rem", px: 64 },
    { label: "20", rem: "5rem", px: 80 },
    { label: "24", rem: "6rem", px: 96 },
  ];

  return (
    <div className="space-y-2 not-prose">
      {displaySteps.map(({ label, rem, px }) => (
        <div key={label} className="flex items-center gap-4">
          <code className="text-sm font-mono w-10 text-right shrink-0">
            {label}
          </code>
          <div
            className="bg-blue-400 bg-blue-400 rounded-sm h-4"
            style={{ width: rem }}
          />
          <span className="text-sm text-neutral-500 text-neutral-500">
            {rem} ({px}px)
          </span>
        </div>
      ))}
    </div>
  );
}

export function SpacingGuide() {
  const entries = Object.entries(SPACING_GUIDE) as [string, SpacingEntry][];

  return (
    <div className="overflow-x-auto not-prose">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="border-b-2 border-neutral-200 border-neutral-200">
            <th className="text-left py-2 pr-4 text-neutral-900 text-neutral-900">Use</th>
            <th className="text-left py-2 pr-4 text-neutral-900 text-neutral-900">Tailwind</th>
            <th className="text-left py-2 pr-4 text-neutral-900 text-neutral-900">rem</th>
            <th className="text-left py-2 text-neutral-900 text-neutral-900">px</th>
          </tr>
        </thead>
        <tbody>
          {entries.map(([name, values]) => (
            <tr key={name} className="border-b border-neutral-100 border-neutral-100">
              <td className="py-2 pr-4 font-medium capitalize text-neutral-900 text-neutral-900">
                {name.replace(/-/g, " ")}
              </td>
              <td className="py-2 pr-4">
                <code className="bg-neutral-100 bg-neutral-100 px-1.5 py-0.5 rounded text-xs">
                  {values.tailwind}
                </code>
              </td>
              <td className="py-2 pr-4 font-mono text-xs text-neutral-600 text-neutral-500">{values.rem}</td>
              <td className="py-2 font-mono text-xs text-neutral-600 text-neutral-500">{values.px}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
