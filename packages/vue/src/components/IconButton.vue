<script setup lang="ts">
import { ref } from "vue";
import clsx from "clsx";
import { iconButton } from "@libretexts/davis-core";

type IconButtonVariant = "primary" | "secondary" | "tertiary" | "destructive" | "ghost" | "outline";
type IconButtonSize = "sm" | "md" | "lg";

const props = withDefaults(
  defineProps<{
    ariaLabel: string;
    variant?: IconButtonVariant;
    size?: IconButtonSize;
    loading?: boolean;
    disabled?: boolean;
    tooltip?: string;
    tooltipPosition?: "top" | "bottom" | "left" | "right";
    class?: string;
  }>(),
  {
    variant: "ghost",
    size: "md",
    loading: false,
    disabled: false,
    tooltipPosition: "top",
  }
);

const showTooltip = ref(false);
const isDisabled = props.disabled || props.loading;

const iconSizeClasses: Record<IconButtonSize, string> = {
  sm: "h-4 w-4",
  md: "h-5 w-5",
  lg: "h-6 w-6",
};

const tooltipPositionClasses: Record<string, string> = {
  top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
  bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
  left: "right-full top-1/2 -translate-y-1/2 mr-2",
  right: "left-full top-1/2 -translate-y-1/2 ml-2",
};
</script>

<template>
  <div class="relative inline-flex">
    <button
      type="button"
      :disabled="isDisabled"
      :aria-label="props.ariaLabel"
      :aria-busy="props.loading || undefined"
      :class="clsx(iconButton({ variant: props.variant, size: props.size }), props.loading && 'cursor-wait', props.class)"
      @mouseenter="showTooltip = true"
      @mouseleave="showTooltip = false"
      @focus="showTooltip = true"
      @blur="showTooltip = false"
    >
      <!-- Loading spinner -->
      <svg
        v-if="props.loading"
        :class="clsx('animate-spin', iconSizeClasses[props.size])"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
      </svg>
      <!-- Icon slot -->
      <span v-else :class="clsx('flex shrink-0', iconSizeClasses[props.size])">
        <slot name="icon" />
      </span>
    </button>

    <!-- Tooltip -->
    <div
      v-if="props.tooltip && showTooltip && !isDisabled"
      role="tooltip"
      :class="clsx(
        'absolute z-50 px-2 py-1 text-xs font-medium text-white bg-gray-900 rounded shadow-lg whitespace-nowrap pointer-events-none',
        tooltipPositionClasses[props.tooltipPosition]
      )"
    >
      {{ props.tooltip }}
      <div
        :class="clsx(
          'absolute w-2 h-2 bg-gray-900 transform rotate-45',
          props.tooltipPosition === 'top' && 'top-full left-1/2 -translate-x-1/2 -mt-1',
          props.tooltipPosition === 'bottom' && 'bottom-full left-1/2 -translate-x-1/2 -mb-1',
          props.tooltipPosition === 'left' && 'left-full top-1/2 -translate-y-1/2 -ml-1',
          props.tooltipPosition === 'right' && 'right-full top-1/2 -translate-y-1/2 -mr-1'
        )"
      />
    </div>
  </div>
</template>
