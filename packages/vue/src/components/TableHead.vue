<script setup lang="ts">
import clsx from "clsx";
import { tableHead as tableHeadVariants } from "@libretexts/davis-core";

const props = defineProps<{
  class?: string;
}>();
</script>

<template>
  <thead :class="clsx(tableHeadVariants(), props.class)">
    <slot />
  </thead>
</template>
