<script setup lang="ts">
import { ComboboxLabel } from "@headlessui/vue";
import clsx from "clsx";
import { combobox as comboboxVariants } from "@libretexts/davis-core";

const props = defineProps<{
  class?: string;
}>();

const { label } = comboboxVariants();
</script>

<template>
  <ComboboxLabel :class="clsx(label(), props.class)">
    <slot />
  </ComboboxLabel>
</template>
