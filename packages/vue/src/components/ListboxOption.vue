<script setup lang="ts" generic="T extends string | number | boolean | object | null">
import { ListboxOption } from "@headlessui/vue";
import clsx from "clsx";
import { inject, ref } from "vue";
import { listbox as listboxVariants } from "@libretexts/davis-core";
import { ListboxMultipleKey } from "./listbox-context";

const props = withDefaults(
  defineProps<{
    value: T;
    disabled?: boolean;
    class?: string;
  }>(),
  {
    disabled: false,
  }
);

const isMultiple = inject(ListboxMultipleKey, ref(false));
const { option } = listboxVariants();
</script>

<template>
  <ListboxOption
    :value="props.value"
    v-bind="props.disabled ? { disabled: true } : {}"
    :class="clsx(option(), props.class)"
    v-slot="{ selected }"
  >
    <span class="flex items-center justify-between gap-x-2">
      <span class="block truncate"><slot /></span>
      <span v-if="isMultiple" class="size-4 shrink-0" aria-hidden="true">
        <svg v-if="selected" fill="none" viewBox="0 0 14 14" class="size-3.5" aria-hidden="true">
          <path
            d="M3 8L6 11L11 3.5"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </span>
    </span>
  </ListboxOption>
</template>
