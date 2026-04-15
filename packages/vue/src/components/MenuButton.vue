<script setup lang="ts">
import { MenuButton } from "@headlessui/vue";
import clsx from "clsx";
import { menu as menuVariants } from "@libretexts/davis-core";
import { inject, onMounted, ref, type Ref } from "vue";

const props = defineProps<{
  disabled?: boolean;
  class?: string;
}>();

const { trigger, triggerIcon } = menuVariants();

const btnRef = ref<{ $el: HTMLElement } | null>(null);
const triggerEl = inject<Ref<HTMLElement | null>>('davis:triggerEl');

onMounted(() => {
  if (triggerEl && btnRef.value) {
    triggerEl.value = btnRef.value.$el;
  }
});
</script>

<template>
  <MenuButton
    ref="btnRef"
    :disabled="props.disabled"
    :class="clsx(trigger(), props.class)"
  >
    <slot />
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      :class="triggerIcon()"
    >
      <path
        fill-rule="evenodd"
        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
        clip-rule="evenodd"
      />
    </svg>
  </MenuButton>
</template>
