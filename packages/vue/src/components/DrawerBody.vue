<script setup lang="ts">
import clsx from "clsx";

const props = defineProps<{
  class?: string;
}>();
</script>

<template>
  <div :class="clsx('flex-1 overflow-y-auto px-6 py-4', props.class)">
    <slot />
  </div>
</template>
