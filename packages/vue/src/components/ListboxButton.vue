<script setup lang="ts">
import { computed } from "vue";
import { ListboxButton } from "@headlessui/vue";
import clsx from "clsx";
import { listbox as listboxVariants, type ListboxSize } from "@libretexts/davis-core";

const props = withDefaults(
  defineProps<{
    displayValue?: (value: unknown) => string;
    placeholder?: string;
    size?: ListboxSize;
    disabled?: boolean;
    ariaLabel?: string;
    class?: string;
  }>(),
  {
    disabled: false,
    placeholder: "Select\u2026",
  }
);

const variants = computed(() => listboxVariants({ size: props.size }));

function isEmpty(value: unknown): boolean {
  return value == null || (Array.isArray(value) && value.length === 0);
}
</script>

<template>
  <div :class="variants.buttonWrap()">
    <ListboxButton
      v-slot="{ value }"
      :disabled="props.disabled"
      v-bind="props.ariaLabel ? { 'aria-label': props.ariaLabel } : {}"
      :class="clsx(variants.button(), props.class)"
    >
      <span class="block truncate">
        <template v-if="!isEmpty(value)">
          <slot :value="value">{{ props.displayValue ? props.displayValue(value) : String(value) }}</slot>
        </template>
        <span v-else class="text-neutral-500">{{ props.placeholder }}</span>
      </span>
      <span :class="variants.chevron()" aria-hidden="true">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
          <path fill-rule="evenodd" d="M10 3a.75.75 0 0 1 .55.24l3.25 3.5a.75.75 0 1 1-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 0 1-1.1-1.02l3.25-3.5A.75.75 0 0 1 10 3Zm-3.76 9.2a.75.75 0 0 1 1.06.04l2.7 2.908 2.7-2.908a.75.75 0 1 1 1.1 1.02l-3.25 3.5a.75.75 0 0 1-1.1 0l-3.25-3.5a.75.75 0 0 1 .04-1.06Z" clip-rule="evenodd" />
        </svg>
      </span>
    </ListboxButton>
  </div>
</template>
