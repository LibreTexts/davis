<script setup lang="ts">
import clsx from "clsx";
import { formSection as formSectionVariants } from "@libretexts/davis-core";

const props = defineProps<{
  title: string;
  description?: string;
  class?: string;
}>();

const { root, legend, description: descClass, content } = formSectionVariants();
</script>

<template>
  <fieldset :class="clsx(root(), props.class)">
    <legend :class="clsx(legend(), '!px-0')">{{ props.title }}</legend>
    <p v-if="props.description" :class="descClass()">{{ props.description }}</p>
    <div :class="clsx(content(), 'clear-both')">
      <slot />
    </div>
  </fieldset>
</template>
