<script setup lang="ts">
import { inject } from "vue";
import { DisclosureButton } from "@headlessui/vue";
import clsx from "clsx";
import { accordion as accordionVariants } from "@libretexts/davis-core";
import { AccordionContextKey } from "./Accordion.vue";

const props = defineProps<{
  class?: string;
}>();

const context = inject(AccordionContextKey, { variant: "default" as const, size: "md" as const });
const { trigger, icon } = accordionVariants({ variant: context.variant, size: context.size });
</script>

<template>
  <DisclosureButton :class="clsx(trigger(), props.class)">
    <span><slot /></span>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" :class="icon()" aria-hidden="true">
      <path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
    </svg>
  </DisclosureButton>
</template>
