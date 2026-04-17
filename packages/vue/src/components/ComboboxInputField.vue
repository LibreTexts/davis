<script setup lang="ts">
import { computed } from "vue";
import { ComboboxInput, ComboboxButton } from "@headlessui/vue";
import clsx from "clsx";
import { combobox as comboboxVariants, type ComboboxSize } from "@libretexts/davis-core";

const props = defineProps<{
  placeholder?: string;
  displayValue?: (value: unknown) => string;
  size?: ComboboxSize;
  ariaLabel?: string;
  class?: string;
}>();

const emit = defineEmits<{
  change: [event: Event];
}>();

const variants = computed(() => comboboxVariants({ size: props.size }));
const resolvedDisplayValue = computed(
  () => props.displayValue ?? ((v: unknown) => (v == null ? "" : String(v)))
);
</script>

<template>
  <div :class="variants.inputWrap()">
    <ComboboxInput
      :class="clsx(variants.input(), props.class)"
      :placeholder="props.placeholder"
      :display-value="resolvedDisplayValue"
      v-bind="props.ariaLabel ? { 'aria-label': props.ariaLabel } : {}"
      @change="emit('change', $event)"
    />
    <ComboboxButton :class="variants.button()" aria-label="Toggle options">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5" aria-hidden="true">
        <path fill-rule="evenodd" d="M10 3a.75.75 0 0 1 .55.24l3.25 3.5a.75.75 0 1 1-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 0 1-1.1-1.02l3.25-3.5A.75.75 0 0 1 10 3Zm-3.76 9.2a.75.75 0 0 1 1.06.04l2.7 2.908 2.7-2.908a.75.75 0 1 1 1.1 1.02l-3.25 3.5a.75.75 0 0 1-1.1 0l-3.25-3.5a.75.75 0 0 1 .04-1.06Z" clip-rule="evenodd" />
      </svg>
    </ComboboxButton>
  </div>
</template>
