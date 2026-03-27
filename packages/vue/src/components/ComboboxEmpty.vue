<script setup lang="ts">
import clsx from "clsx";
import { combobox as comboboxVariants } from "@libretexts/davis-core";

const props = defineProps<{
  class?: string;
}>();

const { noResults } = comboboxVariants();
</script>

<template>
  <p :class="clsx(noResults(), props.class)">
    <slot>No results found.</slot>
  </p>
</template>
