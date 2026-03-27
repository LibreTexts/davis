<script lang="ts">
import type { InjectionKey } from "vue";

export type DialogSize = "sm" | "md" | "lg" | "xl" | "full";

type DialogContextValue = {
  close: () => void;
};

export const DialogContextKey: InjectionKey<DialogContextValue> = Symbol("DialogContext");
</script>

<script setup lang="ts">
import { provide } from "vue";
import {
  Dialog as HeadlessDialog,
  DialogPanel,
  TransitionRoot,
  TransitionChild,
} from "@headlessui/vue";
import clsx from "clsx";
import { dialog as dialogVariants } from "@libretexts/davis-core";

const props = withDefaults(
  defineProps<{
    open: boolean;
    size?: DialogSize;
    class?: string;
  }>(),
  {
    size: "md",
  }
);

const emit = defineEmits<{
  close: [value: boolean];
}>();

function handleClose() {
  emit("close", false);
}

provide(DialogContextKey, { close: handleClose });
</script>

<template>
  <TransitionRoot appear :show="props.open" as="template">
    <HeadlessDialog class="relative z-50" @close="handleClose">
      <TransitionChild
        as="template"
        enter="transition duration-200 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="transition duration-150 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black/50" aria-hidden="true" />
      </TransitionChild>

      <div class="fixed inset-0 flex items-center justify-center overflow-y-auto p-4">
        <TransitionChild
          as="template"
          enter="transition duration-200 ease-out"
          enter-from="opacity-0 scale-95"
          enter-to="opacity-100 scale-100"
          leave="transition duration-150 ease-in"
          leave-from="opacity-100 scale-100"
          leave-to="opacity-0 scale-95"
        >
          <DialogPanel
            :class="clsx(
              dialogVariants({ size: props.size }),
              props.class
            )"
          >
            <slot />
          </DialogPanel>
        </TransitionChild>
      </div>
    </HeadlessDialog>
  </TransitionRoot>
</template>
