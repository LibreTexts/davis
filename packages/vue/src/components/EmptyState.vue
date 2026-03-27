<script setup lang="ts">
import clsx from "clsx";

const props = defineProps<{
  title: string;
  description?: string;
  class?: string;
}>();
</script>

<template>
  <div
    :class="clsx(
      'flex flex-col items-center justify-center text-center',
      'px-6 py-12',
      props.class
    )"
  >
    <div class="flex items-center justify-center size-16 rounded-full bg-gray-100 text-gray-400 mb-4">
      <span v-if="$slots.icon" class="size-8">
        <slot name="icon" />
      </span>
      <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    </div>

    <h3 class="text-lg font-semibold text-gray-900 mb-1">{{ props.title }}</h3>

    <p v-if="props.description" class="text-sm text-gray-500 max-w-sm mb-4">
      {{ props.description }}
    </p>

    <div v-if="$slots.action" class="mt-2">
      <slot name="action" />
    </div>
  </div>
</template>
