<script setup lang="ts">
import { inject } from "vue";
import { Tab } from "@headlessui/vue";
import clsx from "clsx";
import { tabs as tabsVariants } from "@libretexts/davis-core";
import { TabsContextKey } from "./Tabs.vue";

const props = defineProps<{
  disabled?: boolean;
  class?: string;
}>();

const context = inject(TabsContextKey, { variant: "line" as const, size: "md" as const, color: "white" as const });
const { tab } = tabsVariants({ variant: context.variant, size: context.size, color: context.color });
</script>

<template>
  <Tab
    :disabled="props.disabled"
    :class="clsx(tab(), props.class)"
    v-slot="{ selected }"
  >
    <slot :selected="selected" />
  </Tab>
</template>
