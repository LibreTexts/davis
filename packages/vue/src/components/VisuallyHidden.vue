<script lang="ts">
export type VisuallyHiddenAs = string;
</script>

<script setup lang="ts">
import clsx from "clsx";
import { visuallyHidden as visuallyHiddenVariants } from "@libretexts/davis-core";

const props = withDefaults(
  defineProps<{
    as?: string;
    focusable?: boolean;
    class?: string;
  }>(),
  {
    as: "span",
    focusable: false,
  }
);
</script>

<template>
  <component
    :is="props.as"
    :class="clsx(visuallyHiddenVariants({ focusable: props.focusable }), props.class)"
  >
    <slot />
  </component>
</template>
