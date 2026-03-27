<script setup lang="ts">
import clsx from "clsx";
import { divider } from "@libretexts/davis-core";

type DividerOrientation = "horizontal" | "vertical";

const props = withDefaults(
  defineProps<{
    orientation?: DividerOrientation;
    label?: string;
    class?: string;
  }>(),
  {
    orientation: "horizontal",
  }
);

const styles = divider({ orientation: props.orientation });
</script>

<template>
  <!-- With label -->
  <div
    v-if="props.label"
    role="separator"
    :aria-orientation="props.orientation"
    :class="clsx(styles.root(), props.class)"
  >
    <span aria-hidden="true" :class="styles.line()" />
    <span :class="styles.label()">{{ props.label }}</span>
    <span aria-hidden="true" :class="styles.line()" />
  </div>
  
  <!-- Vertical without label -->
  <div
    v-else-if="props.orientation === 'vertical'"
    role="separator"
    aria-orientation="vertical"
    :class="clsx(styles.root(), props.class)"
  >
    <span :class="styles.line()" />
  </div>
  
  <!-- Horizontal without label -->
  <hr
    v-else
    role="separator"
    :class="clsx('border-gray-200 w-full', props.class)"
  />
</template>
