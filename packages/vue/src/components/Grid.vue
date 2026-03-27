<script lang="ts">
export type GridCols = 1 | 2 | 3 | 4 | 6 | 12;
export type GridGap = "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
</script>

<script setup lang="ts">
import clsx from "clsx";
import { grid } from "@libretexts/davis-core";

const props = withDefaults(
  defineProps<{
    as?: string;
    cols?: GridCols;
    gap?: GridGap;
    class?: string;
  }>(),
  {
    as: "div",
  }
);
</script>

<template>
  <component
    :is="props.as"
    :class="clsx(grid({ cols: props.cols, gap: props.gap }), props.class)"
  >
    <slot />
  </component>
</template>
