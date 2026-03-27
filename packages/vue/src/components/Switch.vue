<script setup lang="ts">
import { Switch as HeadlessSwitch } from "@headlessui/vue";
import clsx from "clsx";

type SwitchSize = "sm" | "md" | "lg";
type LabelPosition = "left" | "right";

const props = withDefaults(
  defineProps<{
    name?: string;
    label?: string;
    description?: string;
    modelValue: boolean;
    disabled?: boolean;
    size?: SwitchSize;
    labelPosition?: LabelPosition;
    class?: string;
  }>(),
  {
    disabled: false,
    size: "md",
    labelPosition: "right",
  }
);

const emit = defineEmits<{
  "update:modelValue": [value: boolean];
}>();

const sizeClasses: Record<SwitchSize, { track: string; thumb: string; thumbTranslate: string }> = {
  sm: {
    track: "h-5 w-9",
    thumb: "h-4 w-4",
    thumbTranslate: "translate-x-4",
  },
  md: {
    track: "h-6 w-11",
    thumb: "h-5 w-5",
    thumbTranslate: "translate-x-5",
  },
  lg: {
    track: "h-7 w-14",
    thumb: "h-6 w-6",
    thumbTranslate: "translate-x-7",
  },
};
</script>

<template>
  <div v-if="!props.label" :class="props.class">
    <HeadlessSwitch
      v-bind="props.name !== undefined ? { name: props.name } : {}"
      :model-value="props.modelValue"
      :disabled="props.disabled"
      :class="clsx(
        'relative inline-flex shrink-0 cursor-pointer rounded-full border-2 border-transparent',
        'transition-colors duration-200 ease-in-out',
        'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
        'disabled:cursor-not-allowed disabled:opacity-50',
        sizeClasses[props.size].track,
        props.modelValue ? 'bg-primary' : 'bg-gray-200'
      )"
      @update:model-value="emit('update:modelValue', $event)"
    >
      <span class="sr-only">{{ props.label }}</span>
      <span
        aria-hidden="true"
        :class="clsx(
          'pointer-events-none inline-block rounded-full bg-white shadow-lg ring-0',
          'transform transition duration-200 ease-in-out',
          sizeClasses[props.size].thumb,
          props.modelValue ? sizeClasses[props.size].thumbTranslate : 'translate-x-0'
        )"
      />
    </HeadlessSwitch>
  </div>
  <div v-else :class="clsx('flex items-center', props.class)">
    <div v-if="props.labelPosition === 'left'" class="mr-3">
      <span class="text-sm font-medium text-gray-900">{{ props.label }}</span>
      <p v-if="props.description" class="text-sm text-gray-500">{{ props.description }}</p>
    </div>
    <HeadlessSwitch
      v-bind="props.name !== undefined ? { name: props.name } : {}"
      :model-value="props.modelValue"
      :disabled="props.disabled"
      :class="clsx(
        'relative inline-flex shrink-0 cursor-pointer rounded-full border-2 border-transparent',
        'transition-colors duration-200 ease-in-out',
        'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
        'disabled:cursor-not-allowed disabled:opacity-50',
        sizeClasses[props.size].track,
        props.modelValue ? 'bg-primary' : 'bg-gray-200'
      )"
      @update:model-value="emit('update:modelValue', $event)"
    >
      <span class="sr-only">{{ props.label }}</span>
      <span
        aria-hidden="true"
        :class="clsx(
          'pointer-events-none inline-block rounded-full bg-white shadow-lg ring-0',
          'transform transition duration-200 ease-in-out',
          sizeClasses[props.size].thumb,
          props.modelValue ? sizeClasses[props.size].thumbTranslate : 'translate-x-0'
        )"
      />
    </HeadlessSwitch>
    <div v-if="props.labelPosition === 'right'" class="ml-3">
      <span class="text-sm font-medium text-gray-900">{{ props.label }}</span>
      <p v-if="props.description" class="text-sm text-gray-500">{{ props.description }}</p>
    </div>
  </div>
</template>
