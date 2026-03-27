<script setup lang="ts">
import clsx from "clsx";
import { skipLink as skipLinkVariants } from "@libretexts/davis-core";

const props = withDefaults(
  defineProps<{
    targetId?: string;
    class?: string;
  }>(),
  {
    targetId: "main-content",
  }
);
</script>

<template>
  <a :href="`#${props.targetId}`" :class="clsx(skipLinkVariants(), props.class)">
    <slot>Skip to main content</slot>
  </a>
</template>
