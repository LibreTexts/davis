<script setup lang="ts">
import { computed } from "vue";
import clsx from "clsx";
import { textarea } from "@libretexts/davis-core";

type TextareaVariant = "default" | "error";
type TextareaSize = "sm" | "md" | "lg";

const props = withDefaults(
  defineProps<{
    name: string;
    label: string;
    modelValue?: string;
    variant?: TextareaVariant;
    size?: TextareaSize;
    rows?: number;
    error?: boolean;
    required?: boolean;
    disabled?: boolean;
    helperText?: string;
    errorMessage?: string;
    placeholder?: string;
    class?: string;
    labelClass?: string;
    textareaClass?: string;
  }>(),
  {
    variant: "default",
    size: "md",
    rows: 4,
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
    <div class="mt-1.5">
      <textarea
        :id="props.name"
        :name="props.name"
        :value="props.modelValue"
        :rows="props.rows"
        :aria-invalid="props.error ? 'true' : undefined"
        :aria-describedby="showError ? `${props.name}-error` : showHelper ? `${props.name}-helper` : undefined"
        :placeholder="props.placeholder || props.label"
        :disabled="props.disabled"
        :class="clsx(
          textarea({ variant: computedVariant, size: props.size }),
          props.textareaClass
        )"
        @input="emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)"
      />
    </div>
    <p v-if="showError" :id="`${props.name}-error`" class="mt-1.5 text-sm text-danger">
      {{ props.errorMessage }}
    </p>
    <p v-if="showHelper" :id="`${props.name}-helper`" class="mt-1.5 text-sm text-gray-500">
      {{ props.helperText }}
    </p>
  </div>
</template>
