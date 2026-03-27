<script setup lang="ts">
import clsx from "clsx";
import { tableRow as tableRowVariants } from "@libretexts/davis-core";

const props = defineProps<{
  class?: string;
}>();
</script>

<template>
  <tr :class="clsx(tableRowVariants(), props.class)">
    <slot />
  </tr>
</template>
