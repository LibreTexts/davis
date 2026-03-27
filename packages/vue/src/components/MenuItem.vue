<script setup lang="ts">
import { MenuItem } from "@headlessui/vue";
import clsx from "clsx";
import { menu as menuVariants } from "@libretexts/davis-core";

type ItemVariant = "default" | "danger";

const props = withDefaults(
  defineProps<{
    disabled?: boolean;
    variant?: ItemVariant;
    shortcut?: string;
    class?: string;
  }>(),
  {
    disabled: false,
    variant: "default",
  }
);

const emit = defineEmits<{
  click: [];
}>();
</script>

<template>
  <MenuItem :disabled="props.disabled" v-slot="{ active, disabled }">
    <button
      type="button"
      :disabled="disabled"
      :class="clsx(
        menuVariants({ itemVariant: props.variant, itemFocused: active }).item(),
        disabled && 'opacity-50 cursor-not-allowed',
        props.class
      )"
      @click="emit('click')"
    >
      <span v-if="$slots.icon" :class="menuVariants().itemIcon()">
        <slot name="icon" />
      </span>
      <span class="flex-1">
        <slot />
      </span>
      <span v-if="props.shortcut" :class="menuVariants().itemShortcut()">
        {{ props.shortcut }}
      </span>
    </button>
  </MenuItem>
</template>
