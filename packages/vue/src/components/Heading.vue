<script lang="ts">
export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;
export type HeadingColor = "default" | "muted" | "primary" | "inherit";
export type HeadingAlign = "left" | "center" | "right";
</script>

<script setup lang="ts">
import { computed } from "vue";
import clsx from "clsx";
import { heading as headingVariants } from "@libretexts/davis-core";

const props = withDefaults(
  defineProps<{
    as?: string;
    level?: HeadingLevel;
    color?: HeadingColor;
    align?: HeadingAlign;
    truncate?: boolean;
    class?: string;
  }>(),
  {
    level: 1,
  }
);

const levelToElement: Record<HeadingLevel, string> = {
  1: "h1",
  2: "h2",
  3: "h3",
  4: "h4",
  5: "h5",
  6: "h6",
};

const tag = computed(() => props.as ?? levelToElement[props.level]);
</script>

<template>
  <component
    :is="tag"
    :class="clsx(headingVariants({ level: props.level, color: props.color, align: props.align, truncate: props.truncate }), props.class)"
  >
    <slot />
  </component>
</template>
