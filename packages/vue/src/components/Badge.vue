<script lang="ts">
export type BadgeVariant = "default" | "primary" | "success" | "warning" | "danger";
export type BadgeSize = "sm" | "md" | "lg";
</script>

<script setup lang="ts">
import clsx from "clsx";
import { badge as badgeVariants } from "@libretexts/davis-core";

const props = withDefaults(
  defineProps<{
    label: string;
    variant?: BadgeVariant;
    size?: BadgeSize;
    dot?: boolean;
    removable?: boolean;
    removeLabel?: string;
    class?: string;
  }>(),
  {
    variant: "default",
    size: "md",
    dot: false,
    removable: false,
  }
);

const emit = defineEmits<{
  remove: [];
}>();

const styles = badgeVariants({ variant: props.variant, size: props.size });
</script>

<template>
  <span :class="clsx(styles.root(), props.class)">
    <span v-if="props.dot" aria-hidden="true" :class="styles.dot()" />
    
    <span v-if="$slots.icon" class="shrink-0 inline-flex" aria-hidden="true">
      <slot name="icon" />
    </span>
    
    {{ props.label }}
    
    <button
      v-if="props.removable"
      type="button"
      :aria-label="props.removeLabel ?? `Remove ${props.label}`"
      :class="styles.remove()"
      @click="emit('remove')"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="size-3"
        aria-hidden="true"
      >
        <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
      </svg>
    </button>
  </span>
</template>
