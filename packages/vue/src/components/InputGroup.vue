<script lang="ts">
export type InputGroupSize = "sm" | "md" | "lg";
</script>

<script setup lang="ts">
import clsx from "clsx";
import { inputGroup as inputGroupVariants } from "@libretexts/davis-core";

const props = withDefaults(
  defineProps<{
    size?: InputGroupSize;
    class?: string;
  }>(),
  {
    size: "md",
  }
);

const { root, addon, prefix: prefixClass, suffix: suffixClass, inputSlot, inputFirst, inputLast } = inputGroupVariants({ size: props.size });
</script>

<template>
  <div :class="clsx(root(), props.class)">
    <span v-if="$slots.prefix" :class="clsx(addon(), prefixClass())">
      <slot name="prefix" />
    </span>
    <div :class="clsx(inputSlot(), $slots.prefix && inputFirst(), $slots.suffix && inputLast())">
      <slot />
    </div>
    <span v-if="$slots.suffix" :class="clsx(addon(), suffixClass())">
      <slot name="suffix" />
    </span>
  </div>
</template>
