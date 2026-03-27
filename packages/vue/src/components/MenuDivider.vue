<script setup lang="ts">
import clsx from "clsx";
import { menu as menuVariants } from "@libretexts/davis-core";

const props = defineProps<{
  class?: string;
}>();

const { divider } = menuVariants();
</script>

<template>
  <div
    :class="clsx(divider(), props.class)"
    role="separator"
    aria-orientation="horizontal"
  />
</template>
