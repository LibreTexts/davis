<script setup lang="ts" generic="T extends string | number | boolean | object | null">
import { Listbox } from "@headlessui/vue";
import clsx from "clsx";
import { provide, toRef } from "vue";
import { listbox as listboxVariants } from "@libretexts/davis-core";
import { ListboxMultipleKey } from "./listbox-context";

const props = withDefaults(
  defineProps<{
    modelValue: T | null;
    disabled?: boolean;
    multiple?: boolean;
    name?: string;
    by?: string | ((a: T, b: T) => boolean);
    class?: string;
  }>(),
  {
    disabled: false,
    multiple: false,
  }
);

const emit = defineEmits<{
  "update:modelValue": [value: T | null];
}>();

provide(ListboxMultipleKey, toRef(props, "multiple") as ReturnType<typeof toRef<{ multiple: boolean }, "multiple">>);

const { root } = listboxVariants();
</script>

<template>
  <Listbox
    :model-value="props.modelValue"
    @update:model-value="emit('update:modelValue', $event)"
    v-bind="{
      ...(props.disabled ? { disabled: true } : {}),
      ...(props.multiple ? { multiple: true } : {}),
      ...(props.name ? { name: props.name } : {}),
      ...(props.by ? { by: props.by } : {}),
    }"
  >
    <div :class="clsx(root(), props.class)">
      <slot />
    </div>
  </Listbox>
</template>
