<script setup lang="ts">
import { inject } from "vue";
import { DisclosurePanel } from "@headlessui/vue";
import clsx from "clsx";
import { accordion as accordionVariants } from "@libretexts/davis-core";
import { AccordionContextKey } from "./Accordion.vue";

const props = defineProps<{
  class?: string;
}>();

const context = inject(AccordionContextKey, { variant: "default" as const, size: "md" as const });
const { panel } = accordionVariants({ variant: context.variant, size: context.size });
</script>

<template>
  <DisclosurePanel :class="clsx(panel(), props.class)">
    <slot />
  </DisclosurePanel>
</template>
