<script setup lang="ts">
import { DialogDescription } from "@headlessui/vue";
import clsx from "clsx";

const props = defineProps<{
  class?: string;
}>();
</script>

<template>
  <DialogDescription
    :class="clsx('text-sm text-gray-500', props.class)"
  >
    <slot />
  </DialogDescription>
</template>
