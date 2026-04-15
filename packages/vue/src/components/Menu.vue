<script setup lang="ts">
import { Menu } from "@headlessui/vue";
import clsx from "clsx";
import { menu as menuVariants } from "@libretexts/davis-core";
import { provide, ref } from "vue";

const props = defineProps<{
  class?: string;
}>();

const { root } = menuVariants();

const triggerEl = ref<HTMLElement | null>(null);
provide('davis:triggerEl', triggerEl);
</script>

<template>
  <Menu as="div" :class="clsx(root(), props.class)">
    <slot />
  </Menu>
</template>
