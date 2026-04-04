<script setup lang="ts">
import { link, type LinkVariant, type LinkUnderline, type LinkSize } from "@libretexts/davis-core";
import { computed } from "vue";
import clsx from "clsx";

const props = withDefaults(
  defineProps<{
    href: string;
    variant?: LinkVariant;
    underline?: LinkUnderline;
    size?: LinkSize;
    external?: boolean;
    showExternalIcon?: boolean;
    disabled?: boolean;
    class?: string;
  }>(),
  {
    variant: "default",
    underline: "hover",
    size: "md",
    external: false,
    showExternalIcon: true,
    disabled: false,
  }
);

const isExternal = computed(() =>
  props.external ||
  props.href.startsWith("http://") ||
  props.href.startsWith("https://") ||
  props.href.startsWith("//")
);
</script>

<template>
  <span
    v-if="props.disabled"
    :class="clsx(link({ size: props.size, disabled: true }), props.class)"
    aria-disabled="true"
  >
    <span v-if="$slots.icon" class="shrink-0 w-4 h-4">
      <slot name="icon" />
    </span>
    <slot />
  </span>
  <a
    v-else
    :href="props.href"
    :class="clsx(link({ variant: props.variant, underline: props.underline, size: props.size }), props.class)"
    :target="isExternal ? '_blank' : undefined"
    :rel="isExternal ? 'noopener noreferrer' : undefined"
  >
    <span v-if="$slots.icon" class="shrink-0 w-4 h-4">
      <slot name="icon" />
    </span>
    <slot />
    <svg
      v-if="isExternal && props.showExternalIcon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      class="shrink-0 w-3.5 h-3.5 ml-0.5"
      aria-hidden="true"
    >
      <path
        fill-rule="evenodd"
        d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z"
        clip-rule="evenodd"
      />
      <path
        fill-rule="evenodd"
        d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z"
        clip-rule="evenodd"
      />
    </svg>
    <span v-if="isExternal" class="sr-only">(opens in new tab)</span>
  </a>
</template>
