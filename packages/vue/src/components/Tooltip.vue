<script lang="ts">
export type TooltipPlacement = "top" | "bottom" | "left" | "right";
</script>

<script setup lang="ts">
import { ref } from "vue";
import clsx from "clsx";
import { tooltip as tooltipVariants } from "@libretexts/davis-core";

const props = withDefaults(
  defineProps<{
    content: string;
    placement?: TooltipPlacement;
    delay?: number;
    disabled?: boolean;
    class?: string;
  }>(),
  {
    placement: "top",
    delay: 0,
    disabled: false,
  }
);

const visible = ref(false);
let showTimeout: ReturnType<typeof setTimeout> | null = null;

const PLACEMENT_CLASSES: Record<TooltipPlacement, string> = {
  top: "bottom-full left-1/2 -translate-x-1/2 mb-1.5",
  bottom: "top-full left-1/2 -translate-x-1/2 mt-1.5",
  left: "right-full top-1/2 -translate-y-1/2 mr-1.5",
  right: "left-full top-1/2 -translate-y-1/2 ml-1.5",
};

function show() {
  if (props.disabled) return;
  if (showTimeout) clearTimeout(showTimeout);
  if (props.delay > 0) {
    showTimeout = setTimeout(() => {
      visible.value = true;
    }, props.delay);
  } else {
    visible.value = true;
  }
}

function hide() {
  if (showTimeout) {
    clearTimeout(showTimeout);
    showTimeout = null;
  }
  visible.value = false;
}

const styles = tooltipVariants();
const id = `tooltip-${Math.random().toString(36).slice(2, 11)}`;
</script>

<template>
  <span
    :class="clsx('relative inline-flex', props.class)"
    @mouseenter="show"
    @mouseleave="hide"
    @focus="show"
    @blur="hide"
  >
    <slot :aria-describedby="id" />
    <div
      :id="id"
      role="tooltip"
      :hidden="!visible"
      :class="clsx(styles.content(), PLACEMENT_CLASSES[props.placement])"
    >
      {{ props.content }}
    </div>
  </span>
</template>
