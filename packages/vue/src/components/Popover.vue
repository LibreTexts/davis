<script setup lang="ts">
import { Popover } from "@headlessui/vue";
import clsx from "clsx";

const props = defineProps<{
  class?: string;
}>();
</script>

<template>
  <Popover :class="clsx('relative inline-block', props.class)">
    <slot />
  </Popover>
</template>
