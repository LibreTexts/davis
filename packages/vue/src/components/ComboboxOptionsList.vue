<script setup lang="ts">
import { ComboboxOptions } from "@headlessui/vue";
import clsx from "clsx";
import { combobox as comboboxVariants } from "@libretexts/davis-core";

const props = defineProps<{
  class?: string;
}>();

const { options } = comboboxVariants();
</script>

<template>
  <ComboboxOptions :class="clsx(options(), props.class)">
    <slot />
  </ComboboxOptions>
</template>
