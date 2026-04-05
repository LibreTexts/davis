<script setup lang="ts">
import { computed, useSlots } from "vue";
import clsx from "clsx";
import { input, type InputVariant, type InputSize } from "@libretexts/davis-core";

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

const slots = useSlots();

const showError = computed(() => props.error && props.errorMessage);
const showHelper = computed(() => !showError.value && props.helperText);

const styles = computed(() => input({
  variant: props.error ? "error" : props.variant,
  size: props.size,
  hasLeftIcon: !!slots.leftIcon,
  hasRightIcon: !!slots.rightIcon,
}));
</script>

<template>
  <div :class="clsx(styles.root(), props.class)">
    <label
      :for="props.name"
      :class="clsx(styles.label(), props.labelClass)"
    >
      {{ props.label }}
      <span v-if="props.required" :class="styles.required()">*</span>
    </label>
    <div :class="styles.inputWrapper()">
      <div :class="styles.iconWrapper()">
        <div v-if="$slots.leftIcon" :class="styles.leftIcon()">
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
          :class="clsx(styles.field(), props.inputClass)"
          @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
        />
        <div v-if="$slots.rightIcon" :class="styles.rightIcon()">
          <slot name="rightIcon" />
        </div>
      </div>
    </div>
    <p v-if="showError" :id="`${props.name}-error`" :class="styles.errorMessage()">
      {{ props.errorMessage }}
    </p>
    <p v-if="showHelper" :id="`${props.name}-helper`" :class="styles.helperText()">
      {{ props.helperText }}
    </p>
  </div>
</template>
