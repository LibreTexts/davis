<script setup lang="ts">
import { ComboboxOption } from "@headlessui/vue";
import clsx from "clsx";
import { combobox as comboboxVariants } from "@libretexts/davis-core";

const props = withDefaults(
  defineProps<{
    value: string;
    disabled?: boolean;
    class?: string;
  }>(),
  {
    disabled: false,
  }
);

const { option } = comboboxVariants();
</script>

<template>
  <ComboboxOption :value="props.value" v-bind="props.disabled ? { disabled: true } : {}" :class="clsx(option(), props.class)">
    <slot />
  </ComboboxOption>
</template>
