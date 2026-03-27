<script lang="ts">
export type SpinnerSize = "xs" | "sm" | "md" | "lg" | "xl";
export type SpinnerColor = "primary" | "secondary" | "white" | "current" | "success" | "warning" | "danger";
</script>

<script setup lang="ts">
import clsx from "clsx";
import { spinner as spinnerVariants } from "@libretexts/davis-core";

const props = withDefaults(
  defineProps<{
    size?: SpinnerSize;
    color?: SpinnerColor;
    text?: string;
    class?: string;
  }>(),
  {
    size: "md",
    color: "primary",
  }
);
</script>

<template>
  <span v-if="props.text" :class="clsx('inline-flex items-center gap-2', props.class)">
    <svg
      :class="spinnerVariants({ size: props.size, color: props.color })"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      role="status"
      aria-hidden="true"
    >
      <circle
        class="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="4"
      />
      <path
        class="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
    <span>{{ props.text }}</span>
  </span>
  <svg
    v-else
    :class="clsx(spinnerVariants({ size: props.size, color: props.color }), props.class)"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    role="status"
    aria-label="Loading"
  >
    <circle
      class="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      stroke-width="4"
    />
    <path
      class="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    />
  </svg>
</template>
