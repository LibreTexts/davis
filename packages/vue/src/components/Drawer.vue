<script lang="ts">
import type { InjectionKey } from "vue";
export type DrawerSide = "left" | "right";
export type DrawerSize = "sm" | "md" | "lg" | "full";
type DrawerContextValue = { onClose: () => void };
export const DrawerContextKey: InjectionKey<DrawerContextValue> = Symbol("DrawerContext");
</script>

<script setup lang="ts">
import { provide } from "vue";
import { Dialog, DialogPanel, DialogBackdrop } from "@headlessui/vue";
import clsx from "clsx";
import { drawer as drawerVariants } from "@libretexts/davis-core";

const props = withDefaults(
  defineProps<{
    open: boolean;
    side?: DrawerSide;
    size?: DrawerSize;
    class?: string;
  }>(),
  {
    side: "right",
    size: "md",
  }
);

const emit = defineEmits<{
  close: [value: boolean];
}>();

function handleClose() {
  emit("close", false);
}

provide(DrawerContextKey, { onClose: handleClose });
</script>

<template>
  <Dialog :open="props.open" @close="handleClose" class="relative z-50">
    <DialogBackdrop
      class="fixed inset-0 bg-black/50 transition duration-300 ease-out data-[closed]:opacity-0 data-[enter]:opacity-100"
      transition
    />
    <div class="fixed inset-0 overflow-hidden">
      <div
        :class="clsx(
          'absolute inset-y-0 flex max-w-full',
          props.side === 'right' ? 'right-0' : 'left-0'
        )"
      >
        <DialogPanel
          transition
          :class="clsx(
            'transition duration-300 ease-out',
            props.side === 'right'
              ? 'data-[closed]:translate-x-full data-[enter]:translate-x-0'
              : 'data-[closed]:-translate-x-full data-[enter]:translate-x-0',
            drawerVariants({ side: props.side, size: props.size }),
            props.class
          )"
        >
          <slot />
        </DialogPanel>
      </div>
    </div>
  </Dialog>
</template>
