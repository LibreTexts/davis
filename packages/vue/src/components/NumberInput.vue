<script setup lang="ts">
import { computed } from "vue";
import clsx from "clsx";
import { input, numberInput as numberInputVariants } from "@libretexts/davis-core";

type NumberInputSize = "sm" | "md" | "lg";

const props = withDefaults(
  defineProps<{
    name: string;
    label: string;
    modelValue: number;
    min?: number;
    max?: number;
    step?: number;
    size?: NumberInputSize;
    disabled?: boolean;
    required?: boolean;
    helperText?: string;
    errorMessage?: string;
    error?: boolean;
    class?: string;
    labelClass?: string;
  }>(),
  {
    step: 1,
    size: "md",
    disabled: false,
    required: false,
    error: false,
  }
);

const emit = defineEmits<{
  "update:modelValue": [value: number];
}>();

const showError = computed(() => props.error && props.errorMessage);
const showHelper = computed(() => !showError.value && props.helperText);
const canDecrement = computed(() => props.min === undefined ? true : props.modelValue - props.step >= props.min);
const canIncrement = computed(() => props.max === undefined ? true : props.modelValue + props.step <= props.max);

function decrement() {
  if (!props.disabled && canDecrement.value) emit("update:modelValue", props.modelValue - props.step);
}

function increment() {
  if (!props.disabled && canIncrement.value) emit("update:modelValue", props.modelValue + props.step);
}

function handleKeyDown(e: KeyboardEvent) {
  if (e.key === "ArrowUp") { e.preventDefault(); increment(); }
  if (e.key === "ArrowDown") { e.preventDefault(); decrement(); }
}

function handleChange(e: Event) {
  const parsed = parseFloat((e.target as HTMLInputElement).value);
  if (!isNaN(parsed)) emit("update:modelValue", parsed);
}

const { root, stepper, decrement: decrementClass, increment: incrementClass, input: inputClass } = numberInputVariants({ size: props.size });
</script>

<template>
  <div :class="props.class">
    <label
      :for="props.name"
      :class="clsx('block text-base/6 font-medium text-gray-700', props.labelClass)"
    >
      {{ props.label }}
      <span v-if="props.required" class="text-danger ml-0.5">*</span>
    </label>
    <div class="mt-1.5">
      <div :class="root()">
        <button
          type="button"
          :disabled="props.disabled || !canDecrement"
          :aria-label="`Decrease ${props.label}`"
          :class="clsx(stepper(), decrementClass())"
          @click="decrement"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-4" aria-hidden="true">
            <path fill-rule="evenodd" d="M4 10a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H4.75A.75.75 0 0 1 4 10Z" clip-rule="evenodd" />
          </svg>
        </button>
        <input
          :id="props.name"
          :name="props.name"
          type="text"
          inputmode="numeric"
          role="spinbutton"
          :aria-valuenow="props.modelValue"
          :aria-valuemin="props.min"
          :aria-valuemax="props.max"
          :aria-invalid="props.error ? 'true' : undefined"
          :aria-describedby="showError ? `${props.name}-error` : showHelper ? `${props.name}-helper` : undefined"
          :value="props.modelValue"
          :disabled="props.disabled"
          :class="clsx(input({ variant: props.error ? 'error' : 'default', size: props.size }).field(), inputClass())"
          @keydown="handleKeyDown"
          @change="handleChange"
        />
        <button
          type="button"
          :disabled="props.disabled || !canIncrement"
          :aria-label="`Increase ${props.label}`"
          :class="clsx(stepper(), incrementClass())"
          @click="increment"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-4" aria-hidden="true">
            <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
          </svg>
        </button>
      </div>
    </div>
    <p v-if="showError" :id="`${props.name}-error`" class="mt-1.5 text-sm text-danger">{{ props.errorMessage }}</p>
    <p v-if="showHelper" :id="`${props.name}-helper`" class="mt-1.5 text-sm text-gray-500">{{ props.helperText }}</p>
  </div>
</template>
