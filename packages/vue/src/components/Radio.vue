<script setup lang="ts">
import { computed, inject } from "vue";
import clsx from "clsx";
import { RadioGroupContextKey } from "./RadioGroup.vue";

type RadioSize = "sm" | "md" | "lg";

const props = withDefaults(
  defineProps<{
    value: string;
    label?: string;
    description?: string;
    disabled?: boolean;
    error?: boolean;
    size?: RadioSize;
    class?: string;
    labelClass?: string;
  }>(),
  {
    disabled: false,
    error: false,
    size: "md",
  }
);

const context = inject(RadioGroupContextKey, null);

const sizeClasses: Record<RadioSize, string> = {
  sm: "size-3.5",
  md: "size-4",
  lg: "size-5",
};

const dotSize: Record<RadioSize, string> = {
  sm: "size-1.5",
  md: "size-2",
  lg: "size-2.5",
};

const isChecked = computed(() => context?.modelValue.value === props.value);
const isDisabled = computed(() => props.disabled || (context?.disabled.value ?? false));

function handleChange() {
  if (!isDisabled.value) {
    context?.onChange(props.value);
  }
}
</script>

<template>
  <div
    :class="clsx(
      'flex gap-x-3 cursor-pointer',
      isDisabled && 'opacity-50 cursor-not-allowed',
      props.class
    )"
    role="radio"
    :aria-checked="isChecked"
    :aria-disabled="isDisabled"
    tabindex="0"
    @click="handleChange"
    @keydown.space.prevent="handleChange"
    @keydown.enter.prevent="handleChange"
  >
    <div class="flex shrink-0 items-center h-6">
      <div :class="clsx('grid grid-cols-1 place-items-center', sizeClasses[props.size])">
        <span
          :class="clsx(
            'col-start-1 row-start-1 rounded-full border',
            sizeClasses[props.size],
            isDisabled
              ? 'border-gray-300 bg-gray-100'
              : isChecked
                ? 'border-primary bg-primary'
                : props.error
                  ? 'border-red-500 bg-red-100'
                  : 'border-gray-300 bg-white'
          )"
        />
        <span
          :class="clsx(
            'col-start-1 row-start-1 rounded-full bg-white',
            !isChecked && 'opacity-0',
            isDisabled && 'bg-gray-400',
            dotSize[props.size]
          )"
        />
      </div>
    </div>
    <div v-if="props.label || props.description" class="text-sm/6">
      <span
        v-if="props.label"
        :class="clsx(
          'font-medium text-gray-700',
          props.error && 'text-red-600',
          isDisabled && 'opacity-50',
          props.labelClass
        )"
      >
        {{ props.label }}
      </span>
      <p v-if="props.description" :class="clsx('text-gray-500', isDisabled && 'opacity-50')">
        {{ props.description }}
      </p>
    </div>
  </div>
</template>
