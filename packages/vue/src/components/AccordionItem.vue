<script setup lang="ts">
import { inject } from "vue";
import { Disclosure } from "@headlessui/vue";
import clsx from "clsx";
import { accordion as accordionVariants } from "@libretexts/davis-core";
import { AccordionContextKey } from "./Accordion.vue";

const props = withDefaults(
  defineProps<{
    defaultOpen?: boolean;
    class?: string;
  }>(),
  {
    defaultOpen: false,
  }
);

const context = inject(AccordionContextKey, { variant: "default" as const, size: "md" as const });
const { item } = accordionVariants({ variant: context.variant, size: context.size });
</script>

<template>
  <Disclosure as="div" :default-open="props.defaultOpen" :class="clsx(item(), props.class)">
    <slot />
  </Disclosure>
</template>
