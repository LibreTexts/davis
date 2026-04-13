<script lang="ts">
import type { ComputedRef, InjectionKey } from "vue";
import { card as cardVariants } from "@libretexts/davis-core";
export type CardVariant = "default" | "elevated" | "outline";
export type CardPadding = "none" | "sm" | "md" | "lg";
export type CardStyles = ReturnType<typeof cardVariants>;
export const CardStylesKey: InjectionKey<ComputedRef<CardStyles>> = Symbol("CardStyles");
</script>

<script setup lang="ts">
import { computed, provide, useAttrs } from "vue";
import clsx from "clsx";

const props = withDefaults(
  defineProps<{
    variant?: CardVariant;
    padding?: CardPadding;
    href?: string;
    target?: string;
    class?: string;
  }>(),
  {
    variant: "default",
    padding: "md",
  }
);

const attrs = useAttrs();

const clickable = computed(() => props.href !== undefined || !!attrs.onClick);
const styles = computed(() => cardVariants({ variant: props.variant, padding: props.padding, clickable: clickable.value }));

provide(CardStylesKey, styles);

function handleKeyDown(e: KeyboardEvent) {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    (attrs.onClick as ((e: KeyboardEvent) => void) | undefined)?.(e);
  }
}
</script>

<template>
  <a
    v-if="props.href"
    :href="props.href"
    :target="props.target"
    :class="clsx(styles.root(), props.class)"
  >
    <slot />
  </a>
  <div
    v-else-if="attrs.onClick"
    role="button"
    tabindex="0"
    :class="clsx(styles.root(), props.class)"
    @keydown="handleKeyDown"
  >
    <slot />
  </div>
  <div v-else :class="clsx(styles.root(), props.class)">
    <slot />
  </div>
</template>
