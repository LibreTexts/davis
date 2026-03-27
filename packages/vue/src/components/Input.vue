<script setup lang="ts">
import { computed } from "vue";
import clsx from "clsx";
import { input } from "@libretexts/davis-core";

type InputVariant = "default" | "error";
type InputSize = "sm" | "md" | "lg";

const props = withDefaults(
  defineProps<{
    name: string;
    label: string;
    modelValue?: string;
    variant?: InputVariant;
    size?: InputSize;
    error?: boolean;
    required?: boolean;
    helperText?: string;
    errorMessage?: string;
    placeholder?: string;
    type?: string;
    disabled?: boolean;
    class?: string;
    labelClass?: string;
    inputClass?: string;
  }>(),
  {
    variant: "default",
    size: "md",
    error: false,
    required: false,
    disabled: false,
    type: "text",
  }
);

const emit = defineEmits<{
  "update:modelValue": [value: string];
}>();

const showError = computed(() => props.error && props.errorMessage);
const showHelper = computed(() => !showError.value && props.helperText);
const computedVariant = computed(() => props.error ? "error" : props.variant);
</script>

<template>
  <div :class="props.class">
    <label
      :for="props.name"
      :class="clsx(
        'block text-base/6 font-medium text-gray-700',
        props.labelClass
      )"
    >
      {{ props.label }}
      <span v-if="props.required" class="text-danger ml-0.5">*</span>
    </label>
    <div class="mt-1.5">
      <div class="relative">
        <div
          v-if="$slots.leftIcon"
          class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
        >
          <slot name="leftIcon" />
        </div>
        <input
          :id="props.name"
          :name="props.name"
          :type="props.type"
          :value="props.modelValue"
          :aria-invalid="props.error ? 'true' : undefined"
          :aria-describedby="showError ? `${props.name}-error` : showHelper ? `${props.name}-helper` : undefined"
          :placeholder="props.placeholder || props.label"
          :disabled="props.disabled"
          :class="clsx(
            input({ variant: computedVariant, size: props.size }),
            props.inputClass,
            $slots.leftIcon ? 'pl-10' : 'pl-3',
            $slots.rightIcon ? 'pr-10' : 'pr-3'
          )"
          @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
        />
        <div
          v-if="$slots.rightIcon"
          class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
        >
          <slot name="rightIcon" />
        </div>
      </div>
    </div>
    <p v-if="showError" :id="`${props.name}-error`" class="mt-1.5 text-sm text-danger">
      {{ props.errorMessage }}
    </p>
    <p v-if="showHelper" :id="`${props.name}-helper`" class="mt-1.5 text-sm text-gray-500">
      {{ props.helperText }}
    </p>
  </div>
</template>
