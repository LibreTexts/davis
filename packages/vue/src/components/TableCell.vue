<script setup lang="ts">
import clsx from "clsx";
import { tableCell as tableCellVariants } from "@libretexts/davis-core";

type TableAlign = "left" | "center" | "right";
const ALIGN_CLASSES: Record<TableAlign, string> = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

const props = withDefaults(
  defineProps<{
    align?: TableAlign;
    colSpan?: number;
    class?: string;
  }>(),
  {
    align: "left",
  }
);
</script>

<template>
  <td :col-span="props.colSpan" :class="clsx(tableCellVariants(), ALIGN_CLASSES[props.align], props.class)">
    <slot />
  </td>
</template>
