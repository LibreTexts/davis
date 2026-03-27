<script lang="ts">
export type SkeletonVariant = "text" | "circular" | "rectangular" | "rounded";
</script>

<script setup lang="ts">
import { computed } from "vue";
import clsx from "clsx";
import { skeleton } from "@libretexts/davis-core";

const props = withDefaults(
  defineProps<{
    variant?: SkeletonVariant;
    width?: string | number;
    height?: string | number;
    lines?: number;
    ariaLabel?: string;
    class?: string;
  }>(),
  {
    variant: "rounded",
    ariaLabel: "Loading...",
  }
);

const style = computed(() => ({
  width: typeof props.width === "number" ? `${props.width}px` : props.width,
  height: typeof props.height === "number" ? `${props.height}px` : props.height,
}));

const showMultipleLines = computed(() => props.variant === "text" && props.lines && props.lines > 1);
</script>

<template>
  <div
    v-if="showMultipleLines"
    role="status"
    :aria-label="props.ariaLabel"
    :class="clsx('flex flex-col gap-2', props.class)"
  >
    <div
      v-for="i in props.lines"
      :key="i"
      :class="clsx(
        skeleton({ variant: 'text' }),
        i === props.lines && 'w-3/4'
      )"
    />
  </div>
  <div
    v-else
    role="status"
    :aria-label="props.ariaLabel"
    :style="style"
    :class="clsx(skeleton({ variant: props.variant }), props.class)"
  />
</template>
