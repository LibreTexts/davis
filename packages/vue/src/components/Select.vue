<script lang="ts">
export type SelectOption = {
  value: string;
  label: string;
};
</script>

<script setup lang="ts">
import { computed } from "vue";
import clsx from "clsx";
import { select } from "@libretexts/davis-core";

type SelectVariant = "default" | "error";
type SelectSize = "sm" | "md" | "lg";

const props = withDefaults(
  defineProps<{
    name: string;
    label: string;
    options: SelectOption[];
    modelValue?: string;
    placeholder: string;
    variant?: SelectVariant;
    size?: SelectSize;
    error?: boolean;
    required?: boolean;
    disabled?: boolean;
    helperText?: string;
    errorMessage?: string;
    class?: string;
    labelClass?: string;
    selectClass?: string;
  }>(),
  {
    variant: "default",
    size: "md",
    error: false,
    required: false,
    disabled: false,
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
    <div class="mt-1.5 relative">
      <select
        :id="props.name"
        :name="props.name"
        :value="props.modelValue"
        :aria-invalid="props.error ? 'true' : undefined"
        :aria-describedby="showError ? `${props.name}-error` : showHelper ? `${props.name}-helper` : undefined"
        :disabled="props.disabled"
        :class="clsx(
          select({ variant: computedVariant, size: props.size }),
          props.selectClass
        )"
        @change="emit('update:modelValue', ($event.target as HTMLSelectElement).value)"
      >
        <option value="" disabled>
          {{ props.placeholder }}
        </option>
        <option
          v-for="option in props.options"
          :key="option.value"
          :value="option.value"
        >
          {{ option.label }}
        </option>
      </select>
      <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
        <svg
          class="h-4 w-4 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clip-rule="evenodd"
          />
        </svg>
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
