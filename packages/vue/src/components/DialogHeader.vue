<script setup lang="ts">
import clsx from "clsx";

const props = defineProps<{
  class?: string;
}>();
</script>

<template>
  <div
    :class="clsx(
      'flex items-center justify-between px-6 py-4 border-b border-gray-200',
      props.class
    )"
  >
    <slot />
  </div>
</template>
