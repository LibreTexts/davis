<script setup lang="ts">
import clsx from "clsx";
import { table as tableVariants } from "@libretexts/davis-core";

const props = defineProps<{
  caption?: string;
  class?: string;
}>();
</script>

<template>
  <div class="overflow-x-auto rounded-lg border border-gray-200">
    <table :class="clsx(tableVariants(), props.class)">
      <caption v-if="props.caption" class="px-4 py-2 text-sm text-gray-500 text-left">
        {{ props.caption }}
      </caption>
      <slot />
    </table>
  </div>
</template>
