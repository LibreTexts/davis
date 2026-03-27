<script setup lang="ts">
import { MenuItems } from "@headlessui/vue";
import clsx from "clsx";
import { menu as menuVariants } from "@libretexts/davis-core";

type MenuAlign = "left" | "right";
type MenuWidth = "auto" | "sm" | "md" | "lg" | "full";

const props = withDefaults(
  defineProps<{
    align?: MenuAlign;
    width?: MenuWidth;
    class?: string;
  }>(),
  {
    align: "left",
    width: "auto",
  }
);

const { items } = menuVariants({ align: props.align, width: props.width });
</script>

<template>
  <transition
    enter-active-class="transition ease-out duration-100"
    enter-from-class="opacity-0 scale-95"
    enter-to-class="opacity-100 scale-100"
    leave-active-class="transition ease-in duration-75"
    leave-from-class="opacity-100 scale-100"
    leave-to-class="opacity-0 scale-95"
  >
    <MenuItems :class="clsx(items(), props.class)">
      <slot />
    </MenuItems>
  </transition>
</template>
