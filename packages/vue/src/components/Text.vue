<script lang="ts">
export type TextSize = "xs" | "sm" | "base" | "lg" | "xl" | "2xl";
export type TextWeight = "normal" | "medium" | "semibold" | "bold";
export type TextColor = "default" | "muted" | "primary" | "danger" | "success" | "warning" | "inherit";
export type TextAlign = "left" | "center" | "right";
</script>

<script setup lang="ts">
import clsx from "clsx";
import { text as textVariants } from "@libretexts/davis-core";

const props = withDefaults(
  defineProps<{
    as?: string;
    size?: TextSize;
    weight?: TextWeight;
    color?: TextColor;
    align?: TextAlign;
    truncate?: boolean;
    italic?: boolean;
    class?: string;
  }>(),
  {
    as: "span",
  }
);
</script>

<template>
  <component
    :is="props.as"
    :class="clsx(textVariants({ size: props.size, weight: props.weight, color: props.color, align: props.align, truncate: props.truncate, italic: props.italic }), props.class)"
  >
    <slot />
  </component>
</template>
