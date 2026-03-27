<script lang="ts">
export type ContainerSize = "sm" | "md" | "lg" | "xl" | "2xl" | "prose";
</script>

<script setup lang="ts">
import clsx from "clsx";
import { container } from "@libretexts/davis-core";

const props = withDefaults(
  defineProps<{
    as?: string;
    size?: ContainerSize;
    centered?: boolean;
    padded?: boolean;
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
    :class="clsx(container({ size: props.size, centered: props.centered, padded: props.padded }), props.class)"
  >
    <slot />
  </component>
</template>
