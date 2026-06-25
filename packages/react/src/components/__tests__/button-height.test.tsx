/**
 * Height-consistency tests for Button.
 *
 * Regression guard for the bug where button height drifted with variant
 * (outline's border added 2px) and with icon presence (the icon box is taller
 * than the text line box). The fix pins each size to a `min-h-*` class and
 * removes vertical padding, so — with box-sizing: border-box — every variant
 * and icon state renders at one height per size.
 *
 * jsdom has no layout engine, so offsetHeight/getBoundingClientRect always
 * return 0. We therefore assert the className *contract* that guarantees equal
 * height rather than measuring pixels: every variant/icon combination for a
 * size must carry the same min-h-* class and no vertical padding utility.
 */
import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { button } from "@libretexts/davis-core";

import { Button } from "../button";

const SIZES = ["sm", "md", "lg"] as const;
const VARIANTS = [
  "primary",
  "secondary",
  "tertiary",
  "destructive",
  "warning",
  "ghost",
  "outline",
] as const;

// Source of truth for the expected pinned height per size. Kept in sync with
// BUTTON_SIZE_VARIANTS in packages/core/src/variants.ts.
const EXPECTED_MIN_H: Record<(typeof SIZES)[number], string> = {
  sm: "min-h-8",
  md: "min-h-10",
  lg: "min-h-12",
};

describe("Button height consistency", () => {
  describe("variant class contract (framework-agnostic)", () => {
    it.each(SIZES)("size %s carries its min-h class for every variant", (size) => {
      for (const variant of VARIANTS) {
        const classes = button({ variant, size }).split(/\s+/);
        expect(classes).toContain(EXPECTED_MIN_H[size]);
      }
    });

    it.each(SIZES)("size %s pins exactly one height and adds no vertical padding", (size) => {
      for (const variant of VARIANTS) {
        const classes = button({ variant, size }).split(/\s+/);
        const heightClasses = classes.filter((c) => /^min-h-|^h-\d/.test(c));
        expect(heightClasses).toEqual([EXPECTED_MIN_H[size]]);
        // Vertical padding would reintroduce content-dependent height.
        expect(classes.filter((c) => /^py-/.test(c))).toEqual([]);
      }
    });

    it("every variant resolves to the same height class within a size", () => {
      for (const size of SIZES) {
        const heightPerVariant = VARIANTS.map((variant) =>
          button({ variant, size })
            .split(/\s+/)
            .find((c) => c.startsWith("min-h-"))
        );
        expect(new Set(heightPerVariant).size).toBe(1);
      }
    });
  });

  describe("rendered DOM", () => {
    it.each(SIZES)(
      "size %s renders the same min-h class across all variants and icon states",
      (size) => {
        const heightClasses = new Set<string | undefined>();

        for (const variant of VARIANTS) {
          for (const withIcon of [true, false]) {
            const { container, unmount } = render(
              <Button
                variant={variant}
                size={size}
                icon={withIcon ? <svg data-testid="icon" /> : undefined}
              >
                {variant}
              </Button>
            );
            const el = container.querySelector("button")!;
            heightClasses.add(
              Array.from(el.classList).find((c) => c.startsWith("min-h-"))
            );
            unmount();
          }
        }

        expect(heightClasses).toEqual(new Set([EXPECTED_MIN_H[size]]));
      }
    );
  });
});
