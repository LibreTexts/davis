<script setup lang="ts">
import { inject } from "vue";
import clsx from "clsx";
import { DialogContextKey } from "./Dialog.vue";

const props = withDefaults(
  defineProps<{
    ariaLabel?: string;
    class?: string;
  }>(),
  {
    ariaLabel: "Close dialog",
  }
);

const context = inject(DialogContextKey);
</script>

<template>
  <button
    type="button"
    :aria-label="props.ariaLabel"
    :class="clsx(
      'rounded-md p-1 text-gray-400 hover:text-gray-500 hover:bg-gray-100',
      'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
      'transition-colors duration-150',
      props.class
    )"
    @click="context?.close()"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      class="size-5"
      aria-hidden="true"
    >
      <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
    </svg>
  </button>
</template>
