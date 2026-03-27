<script lang="ts">
export type StackDirection = "vertical" | "horizontal";
export type StackGap = "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
export type StackAlign = "start" | "center" | "end" | "stretch" | "baseline";
export type StackJustify = "start" | "center" | "end" | "between" | "around" | "evenly";
</script>

<script setup lang="ts">
import clsx from "clsx";
import { stack } from "@libretexts/davis-core";

const props = withDefaults(
  defineProps<{
    as?: string;
    direction?: StackDirection;
    gap?: StackGap;
    align?: StackAlign;
    justify?: StackJustify;
    wrap?: boolean;
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
    :class="clsx(stack({ direction: props.direction, gap: props.gap, align: props.align, justify: props.justify, wrap: props.wrap }), props.class)"
  >
    <slot />
  </component>
</template>
