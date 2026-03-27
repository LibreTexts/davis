<script lang="ts">
export type AvatarSize = "xs" | "sm" | "md" | "lg" | "xl";
</script>

<script setup lang="ts">
import { ref, computed } from "vue";
import clsx from "clsx";
import { avatar as avatarVariants } from "@libretexts/davis-core";

const props = withDefaults(
  defineProps<{
    src?: string;
    alt?: string;
    name?: string;
    initials?: string;
    size?: AvatarSize;
    class?: string;
  }>(),
  {
    size: "md",
  }
);

const imageError = ref(false);

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "";
  const first = parts[0] ?? "";
  const last = parts[parts.length - 1] ?? "";
  if (parts.length === 1) {
    return first.slice(0, 2).toUpperCase();
  }
  return ((first[0] ?? "") + (last[0] ?? "")).toUpperCase();
}

const styles = computed(() => avatarVariants({ size: props.size }));
const showImage = computed(() => props.src && !imageError.value);
const displayInitials = computed(() => props.initials ?? (props.name ? getInitials(props.name) : undefined));
</script>

<template>
  <span :class="clsx(styles.root(), props.class)" role="img" :aria-label="props.alt ?? props.name">
    <img
      v-if="showImage"
      :src="props.src"
      :alt="props.alt ?? props.name ?? 'Avatar'"
      :class="styles.image()"
      @error="imageError = true"
    />
    <span v-else :class="styles.fallback()">
      <span v-if="$slots.icon" class="flex items-center justify-center w-1/2 h-1/2">
        <slot name="icon" />
      </span>
      <template v-else-if="displayInitials">{{ displayInitials }}</template>
      <svg
        v-else
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        class="w-1/2 h-1/2"
        aria-hidden="true"
      >
        <path
          fill-rule="evenodd"
          d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
          clip-rule="evenodd"
        />
      </svg>
    </span>
  </span>
</template>
