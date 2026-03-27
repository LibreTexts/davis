<script lang="ts">
export type StatCardVariant = "default" | "success" | "warning" | "danger";
export type StatCardTrendDirection = "up" | "down" | "neutral";

export type StatCardTrend = {
  direction: StatCardTrendDirection;
  value: string;
  label?: string;
};
</script>

<script setup lang="ts">
import clsx from "clsx";
import { statCard as statCardVariants } from "@libretexts/davis-core";

const props = withDefaults(
  defineProps<{
    label: string;
    value: string | number;
    trend?: StatCardTrend;
    variant?: StatCardVariant;
    class?: string;
  }>(),
  {
    variant: "default",
  }
);

const styles = statCardVariants({
  variant: props.variant,
  trendDirection: props.trend?.direction,
});
</script>

<template>
  <div :class="clsx(styles.root(), props.class)">
    <div :class="styles.header()">
      <div :class="styles.body()">
        <p :class="styles.label()">{{ props.label }}</p>
        <p :class="styles.value()">{{ props.value }}</p>
        <div v-if="props.trend !== undefined" :class="styles.trend()">
          <!-- Up arrow -->
          <svg v-if="props.trend.direction === 'up'" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" class="size-4 shrink-0">
            <path fill-rule="evenodd" d="M8 14a.75.75 0 0 1-.75-.75V4.56L3.03 7.78a.75.75 0 0 1-1.06-1.06l4.5-4.5a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1-1.06 1.06L8.75 4.56v8.69A.75.75 0 0 1 8 14Z" clip-rule="evenodd" />
          </svg>
          <!-- Down arrow -->
          <svg v-else-if="props.trend.direction === 'down'" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" class="size-4 shrink-0">
            <path fill-rule="evenodd" d="M8 2a.75.75 0 0 1 .75.75v8.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 0 1 1.06-1.06L7.25 11.44V2.75A.75.75 0 0 1 8 2Z" clip-rule="evenodd" />
          </svg>
          <!-- Neutral -->
          <svg v-else viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" class="size-4 shrink-0">
            <path fill-rule="evenodd" d="M2 8a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 8Z" clip-rule="evenodd" />
          </svg>
          <span>{{ props.trend.value }}</span>
          <span v-if="props.trend.label !== undefined" :class="styles.trendLabel()">{{ props.trend.label }}</span>
        </div>
      </div>
      <div v-if="$slots.icon" :class="styles.icon()" aria-hidden="true">
        <slot name="icon" />
      </div>
    </div>
  </div>
</template>
