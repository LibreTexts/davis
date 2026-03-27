<script lang="ts">
import type { InjectionKey } from "vue";
export type AccordionVariant = "default" | "flush" | "bordered";
export type AccordionSize = "sm" | "md" | "lg";
type AccordionContextValue = {
  variant: AccordionVariant;
  size: AccordionSize;
};
export const AccordionContextKey: InjectionKey<AccordionContextValue> = Symbol("AccordionContext");
</script>

<script setup lang="ts">
import { provide } from "vue";
import clsx from "clsx";
import { accordion as accordionVariants } from "@libretexts/davis-core";

const props = withDefaults(
  defineProps<{
    variant?: AccordionVariant;
    size?: AccordionSize;
    class?: string;
  }>(),
  {
    variant: "default",
    size: "md",
  }
);

provide(AccordionContextKey, { variant: props.variant, size: props.size });

const { root } = accordionVariants({ variant: props.variant, size: props.size });
</script>

<template>
  <div :class="clsx(root(), props.class)">
    <slot />
  </div>
</template>
