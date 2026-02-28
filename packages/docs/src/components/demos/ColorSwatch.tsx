import { COLORS, SURFACE } from "@libretexts/davis-core";

type ColorShades = Record<string, string>;

function getContrastRatio(hexColor: string): string {
  const hex = hexColor.replace("#", "");
  const r = parseInt(hex.substring(0, 2), 16) / 255;
  const g = parseInt(hex.substring(2, 4), 16) / 255;
  const b = parseInt(hex.substring(4, 6), 16) / 255;

  const toLinear = (c: number) =>
    c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);

  const luminance =
    0.2126 * toLinear(r) + 0.7152 * toLinear(g) + 0.0722 * toLinear(b);

  // Contrast against white (luminance = 1)
  const ratio = (1 + 0.05) / (luminance + 0.05);
  return ratio.toFixed(1);
}

function ShadeRow({
  shade,
  hex,
}: {
  shade: string;
  hex: string;
}) {
  const contrast = getContrastRatio(hex);
  const useWhiteText = parseFloat(contrast) >= 4.5;

  return (
    <div
      className="flex items-center justify-between px-4 py-3 text-sm font-mono"
      style={{
        backgroundColor: hex,
        color: useWhiteText ? "#fff" : "#18181B",
      }}
    >
      <span className="font-semibold">{shade}</span>
      <span>{hex}</span>
      <span>{contrast}:1</span>
    </div>
  );
}

export function ColorPalette({ name, shades }: { name: string; shades: ColorShades }) {
  return (
    <div className="mb-8 not-prose">
      <h3 className="text-lg font-semibold mb-2 capitalize text-neutral-900 text-neutral-900">{name}</h3>
      <div className="rounded-lg overflow-hidden border border-neutral-200 border-neutral-200">
        {Object.entries(shades).map(([shade, hex]) => (
          <ShadeRow key={shade} shade={shade} hex={hex} />
        ))}
      </div>
    </div>
  );
}

export function AllColors() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 not-prose">
      {(Object.entries(COLORS) as [string, ColorShades][]).map(([name, shades]) => (
        <ColorPalette key={name} name={name} shades={shades} />
      ))}
    </div>
  );
}

export function SurfaceTokens() {
  return (
    <div className="mb-8 not-prose">
      <h3 className="text-lg font-semibold mb-2 text-neutral-900 text-neutral-900">Surface</h3>
      <div className="rounded-lg overflow-hidden border border-neutral-200 border-neutral-200">
        {(Object.entries(SURFACE) as [string, string][]).map(([name, hex]) => (
          <div
            key={name}
            className="flex items-center justify-between px-4 py-3 text-sm font-mono border-b last:border-0 border-neutral-200 border-neutral-200"
            style={{ backgroundColor: hex, color: "#18181B" }}
          >
            <span className="font-semibold">{name}</span>
            <span>{hex}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
