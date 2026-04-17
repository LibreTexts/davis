<script setup lang="ts">
import { ListboxOptions } from "@headlessui/vue";
import clsx from "clsx";
import { listbox as listboxVariants } from "@libretexts/davis-core";

const props = defineProps<{
  class?: string;
}>();

const { options } = listboxVariants();
</script>

<template>
  <transition
    enter-active-class="transition ease-out duration-100"
    enter-from-class="opacity-0 -translate-y-1"
    enter-to-class="opacity-100 translate-y-0"
    leave-active-class="transition ease-in duration-75"
    leave-from-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 -translate-y-1"
  >
    <ListboxOptions :class="clsx('absolute z-10 mt-1 w-full', options(), props.class)">
      <slot />
    </ListboxOptions>
  </transition>
</template>
