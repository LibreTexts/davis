<script setup lang="ts">
import { inject } from "vue";
import { TabList } from "@headlessui/vue";
import clsx from "clsx";
import { tabs as tabsVariants } from "@libretexts/davis-core";
import { TabsContextKey } from "./Tabs.vue";

const props = defineProps<{
  class?: string;
}>();

const context = inject(TabsContextKey, { variant: "line" as const, size: "md" as const, color: "white" as const });
const { list } = tabsVariants({ variant: context.variant, size: context.size, color: context.color });
</script>

<template>
  <TabList :class="clsx(list(), props.class)">
    <slot />
  </TabList>
</template>
