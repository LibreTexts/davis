<script setup lang="ts">
import clsx from "clsx";
import { timeline as timelineVariants } from "@libretexts/davis-core";

const props = defineProps<{
  class?: string;
}>();
</script>

<template>
  <ol role="list" :class="clsx(timelineVariants().root(), props.class)">
    <slot />
  </ol>
</template>
