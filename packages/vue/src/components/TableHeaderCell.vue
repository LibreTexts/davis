<script setup lang="ts">
import clsx from "clsx";
import { tableHeaderCell as tableHeaderCellVariants } from "@libretexts/davis-core";

type TableAlign = "left" | "center" | "right";
const ALIGN_CLASSES: Record<TableAlign, string> = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

const props = withDefaults(
  defineProps<{
    align?: TableAlign;
    scope?: string;
    class?: string;
  }>(),
  {
    align: "left",
    scope: "col",
  }
);
</script>

<template>
  <th :scope="props.scope" :class="clsx(tableHeaderCellVariants(), ALIGN_CLASSES[props.align], props.class)">
    <slot />
  </th>
</template>
