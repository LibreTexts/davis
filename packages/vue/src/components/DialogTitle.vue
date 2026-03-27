<script setup lang="ts">
import { DialogTitle } from "@headlessui/vue";
import clsx from "clsx";

const props = defineProps<{
  class?: string;
}>();
</script>

<template>
  <DialogTitle
    :class="clsx('text-lg font-semibold text-gray-900', props.class)"
  >
    <slot />
  </DialogTitle>
</template>
