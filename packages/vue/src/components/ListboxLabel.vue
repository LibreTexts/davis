<script setup lang="ts">
import { ListboxLabel } from "@headlessui/vue";
import clsx from "clsx";
import { listbox as listboxVariants } from "@libretexts/davis-core";

const props = defineProps<{
  class?: string;
}>();

const { label } = listboxVariants();
</script>

<template>
  <ListboxLabel :class="clsx(label(), props.class)">
    <slot />
  </ListboxLabel>
</template>
