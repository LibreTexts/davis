<script setup lang="ts">
import { PopoverPanel } from "@headlessui/vue";
import clsx from "clsx";
import { popover as popoverVariants } from "@libretexts/davis-core";

type PopoverPlacement = "top" | "bottom" | "left" | "right";

const props = withDefaults(
  defineProps<{
    placement?: PopoverPlacement;
    class?: string;
  }>(),
  {
    placement: "bottom",
  }
);
</script>

<template>
  <PopoverPanel
    :class="clsx(
      'transition duration-150 ease-out',
      'data-[closed]:opacity-0 data-[closed]:scale-95',
      'data-[enter]:opacity-100 data-[enter]:scale-100',
      popoverVariants({ side: props.placement }),
      props.class
    )"
  >
    <slot />
  </PopoverPanel>
</template>
