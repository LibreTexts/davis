<script lang="ts">
import type { InjectionKey, Ref } from "vue";
type RadioGroupContextValue = {
  modelValue: Ref<string | undefined>;
  onChange: (value: string) => void;
  disabled: Ref<boolean>;
};
export const RadioGroupContextKey: InjectionKey<RadioGroupContextValue> = Symbol("RadioGroupContext");
</script>

<script setup lang="ts">
import { computed, provide, toRef } from "vue";
import clsx from "clsx";

const props = withDefaults(
  defineProps<{
    name: string;
    label?: string;
    modelValue?: string;
    defaultValue?: string;
    disabled?: boolean;
    required?: boolean;
    error?: boolean;
    orientation?: "vertical" | "horizontal";
    helperText?: string;
    errorMessage?: string;
    class?: string;
    labelClass?: string;
  }>(),
  {
    disabled: false,
    required: false,
    error: false,
    orientation: "vertical",
  }
);

const emit = defineEmits<{
  "update:modelValue": [value: string];
}>();

const showError = computed(() => props.error && props.errorMessage);
const showHelper = computed(() => !showError.value && props.helperText);

provide(RadioGroupContextKey, {
  modelValue: toRef(props, "modelValue") as Ref<string | undefined>,
  onChange: (value: string) => emit("update:modelValue", value),
  disabled: toRef(props, "disabled") as Ref<boolean>,
});
</script>

<template>
  <div :class="props.class">
    <label
      v-if="props.label"
      :class="clsx(
        'block text-base/6 font-medium text-gray-700 mb-2',
        props.error && 'text-danger',
        props.disabled && 'opacity-50',
        props.labelClass
      )"
    >
      {{ props.label }}
      <span v-if="props.required" class="text-danger ml-0.5">*</span>
    </label>
    <div
      role="radiogroup"
      :aria-invalid="props.error ? 'true' : undefined"
      :aria-describedby="showError ? `${props.name}-error` : showHelper ? `${props.name}-helper` : undefined"
      :class="clsx(
        'flex',
        props.orientation === 'vertical' ? 'flex-col gap-y-3' : 'flex-row gap-x-6 flex-wrap',
        props.disabled && 'opacity-50 cursor-not-allowed'
      )"
    >
      <slot />
    </div>
    <p v-if="showError" :id="`${props.name}-error`" class="mt-2 text-sm text-danger">
      {{ props.errorMessage }}
    </p>
    <p v-if="showHelper" :id="`${props.name}-helper`" class="mt-2 text-sm text-gray-500">
      {{ props.helperText }}
    </p>
  </div>
</template>
