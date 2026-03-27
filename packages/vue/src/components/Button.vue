<script setup lang="ts">
import { computed } from "vue";
import clsx from "clsx";
import { button } from "@libretexts/davis-core";

type ButtonVariant = "primary" | "secondary" | "tertiary" | "destructive" | "warning" | "ghost" | "outline";
type ButtonSize = "sm" | "md" | "lg";
type IconPosition = "left" | "right";

const props = withDefaults(
  defineProps<{
    variant?: ButtonVariant;
    size?: ButtonSize;
    loading?: boolean;
    disabled?: boolean;
    fullWidth?: boolean;
    iconPosition?: IconPosition;
    class?: string;
    as?: string;
    type?: "button" | "submit" | "reset";
  }>(),
  {
    variant: "primary",
    size: "md",
    loading: false,
    disabled: false,
    fullWidth: false,
    iconPosition: "left",
    type: "button",
  }
);

const isDisabled = computed(() => props.disabled || props.loading);

const iconSizeClasses: Record<ButtonSize, string> = {
  sm: "h-4 w-4",
  md: "h-5 w-5",
  lg: "h-6 w-6",
};
</script>

<template>
  <component
    :is="props.as ?? 'button'"
    :disabled="isDisabled"
    :type="props.as ? undefined : props.type"
    :aria-busy="props.loading || undefined"
    :class="clsx(
      button({ variant: props.variant, size: props.size, fullWidth: props.fullWidth }),
      props.loading && 'cursor-wait',
      props.class
    )"
  >
    <!-- Loading spinner -->
    <span v-if="props.loading" :class="clsx('flex shrink-0', iconSizeClasses[props.size], $slots.default && 'mr-2')">
      <svg
        :class="clsx('animate-spin', iconSizeClasses[props.size])"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
      </svg>
    </span>

    <!-- Left icon -->
    <span
      v-if="$slots.icon && !props.loading && props.iconPosition === 'left'"
      :class="clsx('flex shrink-0', iconSizeClasses[props.size], $slots.default && 'mr-2')"
    >
      <slot name="icon" />
    </span>

    <slot />

    <!-- Right icon -->
    <span
      v-if="$slots.icon && !props.loading && props.iconPosition === 'right'"
      :class="clsx('flex shrink-0', iconSizeClasses[props.size], $slots.default && 'ml-2')"
    >
      <slot name="icon" />
    </span>
  </component>
</template>
