<script setup lang="ts">
import clsx from "clsx";
import { menu as menuVariants } from "@libretexts/davis-core";

const props = defineProps<{
  class?: string;
}>();

const { label } = menuVariants();
</script>

<template>
  <div :class="clsx(label(), props.class)">
    <slot />
  </div>
</template>
