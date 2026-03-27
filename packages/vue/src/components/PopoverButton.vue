<script setup lang="ts">
import { PopoverButton } from "@headlessui/vue";
import clsx from "clsx";

const props = defineProps<{
  class?: string;
}>();
</script>

<template>
  <PopoverButton
    :class="clsx(
      'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md',
      props.class
    )"
  >
    <slot />
  </PopoverButton>
</template>
