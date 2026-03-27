<script setup lang="ts">
import { Menu } from "@headlessui/vue";
import clsx from "clsx";
import { menu as menuVariants } from "@libretexts/davis-core";

const props = defineProps<{
  class?: string;
}>();

const { root } = menuVariants();
</script>

<template>
  <Menu as="div" :class="clsx(root(), props.class)">
    <slot />
  </Menu>
</template>
