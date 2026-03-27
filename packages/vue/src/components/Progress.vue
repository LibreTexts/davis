<script lang="ts">
export type ProgressVariant = "default" | "success" | "warning" | "danger";
export type ProgressSize = "sm" | "md" | "lg";
</script>

<script setup lang="ts">
import { computed } from "vue";
import clsx from "clsx";
import { progress } from "@libretexts/davis-core";

const props = withDefaults(
  defineProps<{
    value?: number;
    variant?: ProgressVariant;
    size?: ProgressSize;
    label?: string;
    showValue?: boolean;
    class?: string;
  }>(),
  {
    showValue: false,
  }
);

const isIndeterminate = computed(() => props.value === undefined);
const clampedValue = computed(() =>
  isIndeterminate.value ? 0 : Math.min(100, Math.max(0, props.value!))
);
const styles = computed(() =>
  progress({ variant: props.variant, size: props.size, indeterminate: isIndeterminate.value })
);
</script>

<template>
  <div :class="clsx('w-full', props.class)">
    <div v-if="props.label || props.showValue" class="flex justify-between items-center mb-1">
      <span v-if="props.label" class="text-sm text-gray-700">{{ props.label }}</span>
      <span v-if="props.showValue && !isIndeterminate" class="text-sm text-gray-500">{{ clampedValue }}%</span>
    </div>
    <div
      role="progressbar"
      :aria-valuenow="isIndeterminate ? undefined : clampedValue"
      :aria-valuemin="0"
      :aria-valuemax="100"
      :aria-label="props.label"
      :class="styles.root()"
    >
      <div
        :class="styles.bar()"
        :style="isIndeterminate ? undefined : { width: `${clampedValue}%` }"
      />
    </div>
  </div>
</template>
