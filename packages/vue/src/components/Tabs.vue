<script lang="ts">
import type { InjectionKey } from "vue";

export type TabsVariant = "line" | "pills";
export type TabsSize = "sm" | "md" | "lg";
export type TabsColor = "white" | "primary";

type TabsContextValue = {
  variant: TabsVariant;
  size: TabsSize;
  color: TabsColor;
};

export const TabsContextKey: InjectionKey<TabsContextValue> = Symbol("TabsContext");
</script>

<script setup lang="ts">
import { provide } from "vue";
import { TabGroup } from "@headlessui/vue";
import clsx from "clsx";

const props = withDefaults(
  defineProps<{
    variant?: TabsVariant;
    size?: TabsSize;
    color?: TabsColor;
    defaultIndex?: number;
    selectedIndex?: number;
    class?: string;
  }>(),
  {
    variant: "line",
    size: "md",
    color: "white",
  }
);

const emit = defineEmits<{
  change: [index: number];
}>();

provide(TabsContextKey, {
  variant: props.variant,
  size: props.size,
  color: props.color,
});
</script>

<template>
  <TabGroup
    as="div"
    v-bind="{
      ...(props.defaultIndex !== undefined ? { defaultIndex: props.defaultIndex } : {}),
      ...(props.selectedIndex !== undefined ? { selectedIndex: props.selectedIndex } : {}),
    }"
    :class="clsx('w-full', props.class)"
    @change="emit('change', $event)"
  >
    <slot />
  </TabGroup>
</template>
