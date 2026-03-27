<script setup lang="ts">
import { computed } from "vue";
import { ComboboxInput, ComboboxButton } from "@headlessui/vue";
import clsx from "clsx";
import { combobox as comboboxVariants } from "@libretexts/davis-core";

const props = defineProps<{
  placeholder?: string;
  displayValue?: (value: string | null) => string;
  class?: string;
}>();

const emit = defineEmits<{
  change: [event: Event];
}>();

const { inputWrap, button } = comboboxVariants();

const resolvedDisplayValue = computed(
  () => (props.displayValue ?? ((v: unknown) => (v as string | null) ?? "")) as (item: unknown) => string
);
</script>

<template>
  <div :class="inputWrap()">
    <ComboboxInput
      :class="clsx(
        'block w-full rounded-md border border-gray-400 bg-white text-gray-900',
        'py-2 pl-3 pr-10',
        'placeholder:text-gray-400',
        'focus:outline-2 focus:-outline-offset-2 focus:outline-primary focus:border-primary',
        'disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-100',
        'transition-colors duration-200',
        props.class
      )"
      :placeholder="props.placeholder"
      :display-value="resolvedDisplayValue"
      @change="emit('change', $event)"
    />
    <ComboboxButton :class="button()">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5" aria-hidden="true">
        <path fill-rule="evenodd" d="M10 3a.75.75 0 0 1 .55.24l3.25 3.5a.75.75 0 1 1-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 0 1-1.1-1.02l3.25-3.5A.75.75 0 0 1 10 3Zm-3.76 9.2a.75.75 0 0 1 1.06.04l2.7 2.908 2.7-2.908a.75.75 0 1 1 1.1 1.02l-3.25 3.5a.75.75 0 0 1-1.1 0l-3.25-3.5a.75.75 0 0 1 .04-1.06Z" clip-rule="evenodd" />
      </svg>
    </ComboboxButton>
  </div>
</template>
