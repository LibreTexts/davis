<script setup lang="ts">
import { Combobox } from "@headlessui/vue";
import clsx from "clsx";
import { combobox as comboboxVariants } from "@libretexts/davis-core";

const props = withDefaults(
  defineProps<{
    modelValue: string | null;
    disabled?: boolean;
    class?: string;
  }>(),
  {
    disabled: false,
  }
);

const emit = defineEmits<{
  "update:modelValue": [value: string | null];
}>();

const { root } = comboboxVariants();

function handleChange(value: string | null) {
  emit("update:modelValue", value);
}
</script>

<template>
  <Combobox :model-value="props.modelValue" @update:model-value="handleChange" v-bind="props.disabled ? { disabled: true } : {}">
    <div :class="clsx(root(), props.class)">
      <slot />
    </div>
  </Combobox>
</template>
