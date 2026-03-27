<script setup lang="ts">
import { computed } from "vue";
import clsx from "clsx";

type LinkVariant = "default" | "muted" | "danger";
type LinkUnderline = "always" | "hover" | "none";
type LinkSize = "sm" | "md" | "lg";

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

const variantClasses: Record<LinkVariant, string> = {
  default: "text-primary hover:text-primary-600",
  muted: "text-gray-500 hover:text-gray-700",
  danger: "text-danger hover:text-red-700",
};

const underlineClasses: Record<LinkUnderline, string> = {
  always: "underline underline-offset-2",
  hover: "hover:underline underline-offset-2",
  none: "no-underline",
};

const sizeClasses: Record<LinkSize, string> = {
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
};

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
    :class="clsx(
      'inline-flex items-center gap-1',
      sizeClasses[props.size],
      'text-gray-400 cursor-not-allowed',
      props.class
    )"
    aria-disabled="true"
  >
    <span v-if="$slots.icon" class="flex-shrink-0 w-4 h-4">
      <slot name="icon" />
    </span>
    <slot />
  </span>
  <a
    v-else
    :href="props.href"
    :class="clsx(
      'inline-flex items-center gap-1',
      'transition-colors duration-150',
      'focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-sm',
      variantClasses[props.variant],
      underlineClasses[props.underline],
      sizeClasses[props.size],
      props.class
    )"
    :target="isExternal ? '_blank' : undefined"
    :rel="isExternal ? 'noopener noreferrer' : undefined"
  >
    <span v-if="$slots.icon" class="flex-shrink-0 w-4 h-4">
      <slot name="icon" />
    </span>
    <slot />
    <svg
      v-if="isExternal && props.showExternalIcon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      class="flex-shrink-0 w-3.5 h-3.5 ml-0.5"
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
  </a>
</template>
