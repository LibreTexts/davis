<script setup lang="ts">
import { inject } from "vue";
import clsx from "clsx";
import { CardStylesKey } from "./Card.vue";

const props = defineProps<{
  class?: string;
}>();

const styles = inject(CardStylesKey);
</script>

<template>
  <div v-if="styles" :class="clsx(styles.body(), props.class)">
    <slot />
  </div>
</template>
